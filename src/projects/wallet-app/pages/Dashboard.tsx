import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useWalletAppRouter } from '../App';
import { walletApi } from '../api/walletApi';
import { handleApiError } from '../api/walletApi';
import type { DashboardReport, Transaction, NLPResponse, ConfirmDraftData, TransactionDraft, ReceivableDraft, LiabilityDraft, SettlementDraft } from '../api/types';
import { Icon } from '../components/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { NLPInput } from '../components/NLPInput';
import { ConfirmDraftDialog } from '../components/ConfirmDraftDialog';
import { useToast } from '@/hooks/use-toast';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchWalletAccounts } from '@/store/slices/accountsSlice';
import { fetchCategories } from '@/store/slices/categoriesSlice';

/**
 * Financial Overview Metrics
 */
interface FinancialOverview {
  totalAssets: number; // Tổng tài sản = accounts + receivables - liabilities
  currentCash: number; // Tiền hiện có = tổng accounts
  totalReceivables: number; // Khoản cho vay = tổng receivables remainingAmount
  totalLiabilities: number; // Khoản nợ = tổng liabilities remainingAmount
}

/**
 * Dashboard Page
 * 
 * Hiển thị:
 * - Section 1: Tổng quan tài chính (4 metrics)
 * - Section 2: Thu/Chi với filters
 * - Section 3: Thêm giao dịch mới
 * - Section 4: Giao dịch gần đây
 */
export const Dashboard = () => {
  const { t } = useTranslation();
  const { navigate } = useWalletAppRouter();
  const { toast } = useToast();
  const dispatch = useAppDispatch();
  
  // Redux state for accounts and categories
  const accounts = useAppSelector((state) => state.walletAccounts.items);
  const categories = useAppSelector((state) => state.categories.items);
  const accountsLastFetched = useAppSelector((state) => state.walletAccounts.lastFetched);
  const categoriesLastFetched = useAppSelector((state) => state.categories.lastFetched);
  const accountsLoading = useAppSelector((state) => state.walletAccounts.isLoading);
  const categoriesLoading = useAppSelector((state) => state.categories.isLoading);
  
  const [report, setReport] = useState<DashboardReport | null>(null);
  const [recentTransactions, setRecentTransactions] = useState<Transaction[]>([]);
  const [financialOverview, setFinancialOverview] = useState<FinancialOverview | null>(null);
  const [isLoadingReport, setIsLoadingReport] = useState(false);
  const [isLoadingTransactions, setIsLoadingTransactions] = useState(false);
  const [isLoadingFinancial, setIsLoadingFinancial] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // NLP state
  const [isParsing, setIsParsing] = useState(false);
  const [nlpResponse, setNlpResponse] = useState<NLPResponse | null>(null);
  const [showDraftDialog, setShowDraftDialog] = useState(false);
  
  // Date filter state
  const [dateFilter, setDateFilter] = useState<{
    startDate?: string;
    endDate?: string;
    period?: '30days' | 'month' | 'custom';
  }>({ period: 'month' });

  // Preserve scroll position
  const scrollPositionRef = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Load accounts and categories from Redux (only if not fetched recently)
  useEffect(() => {
    // Tránh gọi API nếu đang loading
    if (accountsLoading || categoriesLoading) return;
    
    const fiveMinutesAgo = Date.now() - 5 * 60 * 1000;
    
    if (!accountsLastFetched || accountsLastFetched < fiveMinutesAgo) {
      dispatch(fetchWalletAccounts());
    }
    if (!categoriesLastFetched || categoriesLastFetched < fiveMinutesAgo) {
      dispatch(fetchCategories());
    }
  }, [dispatch, accountsLastFetched, categoriesLastFetched, accountsLoading, categoriesLoading]);

  // Load financial overview data (Section 1)
  useEffect(() => {
    const loadFinancialOverview = async () => {
      setIsLoadingFinancial(true);
      try {
        // Sử dụng accounts từ Redux, chỉ load receivables và liabilities
        const [receivablesData, liabilitiesData] = await Promise.all([
          walletApi.receivables.getAll(0, 1000), // Load tất cả để tính tổng
          walletApi.liabilities.getAll(0, 1000), // Load tất cả để tính tổng
        ]);

        // Tính toán metrics - sử dụng accounts từ Redux
        const totalAccounts = accounts.reduce((sum, acc) => sum + (acc.currentBalance || 0), 0);
        const totalReceivables = receivablesData.content.reduce(
          (sum, rec) => sum + (rec.remainingAmount || 0),
          0
        );
        const totalLiabilities = liabilitiesData.content.reduce(
          (sum, liab) => sum + (liab.remainingAmount || 0),
          0
        );
        const totalAssets = totalAccounts + totalReceivables - totalLiabilities;

        setFinancialOverview({
          totalAssets,
          currentCash: totalAccounts,
          totalReceivables,
          totalLiabilities,
        });
      } catch (err) {
        console.error('Financial overview load error:', err);
        // Không set error để không block dashboard
      } finally {
        setIsLoadingFinancial(false);
      }
    };

    // Chỉ load khi có accounts từ Redux
    if (accounts.length > 0) {
      loadFinancialOverview();
    }
  }, [accounts]);

  // Memoize date calculation để tránh tính toán lại không cần thiết
  const dateRange = useMemo(() => {
    const formatLocalDateTime = (date: Date, isStart: boolean = true): string => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const time = isStart ? '00:00:00' : '23:59:59';
      return `${year}-${month}-${day}T${time}`;
    };

    let startDate: string | undefined;
    let endDate: string | undefined;
    const now = new Date();
    
    if (dateFilter.period === '30days') {
      const thirtyDaysAgo = new Date(now);
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      startDate = formatLocalDateTime(thirtyDaysAgo, true);
      endDate = formatLocalDateTime(now, false);
    } else if (dateFilter.period === 'month') {
      const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
      startDate = formatLocalDateTime(firstDay, true);
      endDate = formatLocalDateTime(now, false);
    } else if (dateFilter.period === 'custom') {
      if (dateFilter.startDate) {
        startDate = `${dateFilter.startDate}T00:00:00`;
      }
      if (dateFilter.endDate) {
        endDate = `${dateFilter.endDate}T23:59:59`;
      }
    }

    return { startDate, endDate };
  }, [dateFilter]);

  // Load dashboard report với date filter (tách riêng)
  useEffect(() => {
    const loadReport = async () => {
      // Save scroll position before loading
      scrollPositionRef.current = window.scrollY || document.documentElement.scrollTop;
      
      setIsLoadingReport(true);
      setError(null);

      try {
        const dashboardReport = await walletApi.reports.getDashboard(
          dateFilter.period === 'month' ? 'month' : 'day',
          dateRange.startDate,
          dateRange.endDate
        );
        setReport(dashboardReport);
      } catch (err) {
        setError(handleApiError(err));
        console.error('Dashboard report load error:', err);
      } finally {
        setIsLoadingReport(false);
        // Restore scroll position after a short delay to ensure DOM is updated
        requestAnimationFrame(() => {
          window.scrollTo(0, scrollPositionRef.current);
        });
      }
    };

    loadReport();
  }, [dateFilter.period, dateRange.startDate, dateRange.endDate]);

  // Load recent transactions với date filter (tách riêng)
  useEffect(() => {
    const loadTransactions = async () => {
      setIsLoadingTransactions(true);

      try {
        const transactions = await walletApi.transactions.getAll({
          page: 0,
          size: 5,
          sortBy: 'occurredAt',
          sortOrder: 'desc',
          startDate: dateRange.startDate,
          endDate: dateRange.endDate,
        });
        setRecentTransactions(transactions.content);
      } catch (err) {
        console.error('Transactions load error:', err);
        // Không set error để không block UI
      } finally {
        setIsLoadingTransactions(false);
      }
    };

    loadTransactions();
  }, [dateRange.startDate, dateRange.endDate]);

  // Memoize formatCurrency để tránh tạo function mới mỗi render
  const formatCurrency = useCallback((amount: number, currency: string = 'VND') => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: currency,
    }).format(amount);
  }, []);

  const formatDate = useCallback((dateString: string) => {
    return new Date(dateString).toLocaleDateString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }, []);

  // Quick filter handlers - preserve scroll position
  const handleQuickFilter = useCallback((period: '30days' | 'month') => {
    scrollPositionRef.current = window.scrollY || document.documentElement.scrollTop;
    setDateFilter({ period });
  }, []);

  const handleCustomDateRange = useCallback((startDate: string, endDate: string) => {
    scrollPositionRef.current = window.scrollY || document.documentElement.scrollTop;
    setDateFilter({ period: 'custom', startDate, endDate });
  }, []);

  // NLP handlers
  const handleParseText = useCallback(async (text: string) => {
    setIsParsing(true);
    setNlpResponse(null); // Clear previous response
    try {
      const response = await walletApi.nlp.parseTransaction(text);
      setNlpResponse(response);
      
      if (response.responseType === 'CONFIRM_DRAFT') {
        setShowDraftDialog(true);
      }
      // ERROR response sẽ được hiển thị inline trong NLPInput component
      // TODO: Handle other response types (SELECT_OPTION, QUERY_RESULT, NEED_MORE_INFO) in Phase 2
    } catch (err) {
      const errorMessage = handleApiError(err);
      // Set error response để hiển thị inline
      setNlpResponse({
        responseType: 'ERROR',
        intent: 'UNKNOWN',
        confidence: 0,
        message: errorMessage,
        data: {
          code: 'PARSE_ERROR',
          message: errorMessage,
          details: undefined,
        },
      });
      console.error('Error parsing text:', err);
    } finally {
      setIsParsing(false);
    }
  }, []);

  /**
   * Remove timezone from date string for backend (LocalDateTime doesn't support timezone)
   * Input: "2026-01-10T00:00:00+07:00" or "2026-01-10T00:00:00Z"
   * Output: "2026-01-10T00:00:00"
   */
  const removeTimezoneFromDate = (dateString: string | undefined): string => {
    if (!dateString) {
      // Default to current time in GMT+7, format without timezone
      const now = new Date();
      const vnOffset = 7 * 60; // GMT+7 in minutes
      const vnTime = new Date(now.getTime() + (vnOffset - now.getTimezoneOffset()) * 60000);
      return vnTime.toISOString().slice(0, 19); // Remove 'Z' and milliseconds
    }
    
    // Remove timezone part if present (+07:00, -05:00, Z, etc.)
    return dateString.replace(/[+-]\d{2}:\d{2}$/, '').replace(/Z$/, '').slice(0, 19);
  };

  const handleConfirmDraft = useCallback(async (draft: ConfirmDraftData['draft']) => {
    try {
      if (!draft || typeof draft !== 'object') {
        throw new Error('Invalid draft data');
      }
      
      // Determine draft type from nlpResponse
      if (!nlpResponse || nlpResponse.responseType !== 'CONFIRM_DRAFT') {
        throw new Error('Invalid response type');
      }
      
      const confirmData = nlpResponse.data as ConfirmDraftData;
      
      // Handle different draft types
      if (confirmData.draftType === 'TRANSACTION') {
        const transactionDraft = draft as TransactionDraft;
        
        if (!transactionDraft.amount || !transactionDraft.accountId) {
          throw new Error('Thiếu thông tin bắt buộc: số tiền và tài khoản');
        }
        
        const transactionData: import('../api/types').CreateTransactionRequest = {
          type: transactionDraft.type,
          amount: transactionDraft.amount,
          currency: transactionDraft.currency || 'VND',
          occurredAt: removeTimezoneFromDate(transactionDraft.occurredAt),
          categoryId: transactionDraft.categoryId,
          accountId: transactionDraft.accountId as string,
          fromAccountId: transactionDraft.fromAccountId,
          toAccountId: transactionDraft.toAccountId,
          note: transactionDraft.note,
        };
        
        await walletApi.transactions.create(transactionData);
        toast({
          title: 'Thành công',
          description: 'Đã tạo giao dịch thành công',
        });
      } else if (confirmData.draftType === 'RECEIVABLE') {
        const receivableDraft = draft as ReceivableDraft;
        
        if (!receivableDraft.amount || !receivableDraft.counterpartyName) {
          throw new Error('Thiếu thông tin bắt buộc: số tiền và tên người vay');
        }
        
        const receivableData: import('../api/types').CreateReceivableRequest = {
          counterpartyName: receivableDraft.counterpartyName,
          amount: receivableDraft.amount,
          currency: receivableDraft.currency || 'VND',
          occurredAt: removeTimezoneFromDate(receivableDraft.occurredAt),
          dueAt: receivableDraft.dueAt ? removeTimezoneFromDate(receivableDraft.dueAt) : undefined,
          note: receivableDraft.note,
        };
        
        await walletApi.receivables.create(receivableData);
        toast({
          title: 'Thành công',
          description: 'Đã tạo khoản cho vay thành công',
        });
      } else if (confirmData.draftType === 'LIABILITY') {
        const liabilityDraft = draft as LiabilityDraft;
        
        if (!liabilityDraft.amount || !liabilityDraft.counterpartyName) {
          throw new Error('Thiếu thông tin bắt buộc: số tiền và tên người cho vay');
        }
        
        const liabilityData: import('../api/types').CreateLiabilityRequest = {
          counterpartyName: liabilityDraft.counterpartyName,
          amount: liabilityDraft.amount,
          currency: liabilityDraft.currency || 'VND',
          occurredAt: removeTimezoneFromDate(liabilityDraft.occurredAt),
          dueAt: liabilityDraft.dueAt ? removeTimezoneFromDate(liabilityDraft.dueAt) : undefined,
          note: liabilityDraft.note,
        };
        
        await walletApi.liabilities.create(liabilityData);
        toast({
          title: 'Thành công',
          description: 'Đã tạo khoản nợ thành công',
        });
      } else if (confirmData.draftType === 'SETTLEMENT') {
        const settlementDraft = draft as SettlementDraft;
        
        if (!settlementDraft.amount || !settlementDraft.accountId || 
            (!settlementDraft.receivableId && !settlementDraft.liabilityId)) {
          throw new Error('Thiếu thông tin bắt buộc: số tiền, tài khoản và khoản nợ/khoản cho vay');
        }
        
        const settlementData: import('../api/types').CreateSettlementRequest = {
          type: settlementDraft.type === 'RECEIVABLE' ? 'RECEIVABLE' : 'LIABILITY',
          receivableId: settlementDraft.receivableId,
          liabilityId: settlementDraft.liabilityId,
          amount: settlementDraft.amount,
          currency: settlementDraft.currency || 'VND',
          occurredAt: removeTimezoneFromDate(settlementDraft.settledAt),
          note: settlementDraft.note,
        };
        
        await walletApi.settlements.create(settlementData);
        toast({
          title: 'Thành công',
          description: 'Đã thanh toán thành công',
        });
      } else {
        throw new Error('Unknown draft type');
      }
      
      // Refresh data using current dateRange
      const currentDateRange = dateRange;
      
      if (dateFilter.period) {
        const loadReport = async () => {
          try {
            const dashboardReport = await walletApi.reports.getDashboard(
              dateFilter.period === 'month' ? 'month' : 'day',
              currentDateRange.startDate,
              currentDateRange.endDate
            );
            setReport(dashboardReport);
          } catch (err) {
            console.error('Error refreshing report:', err);
          }
        };
        loadReport();
      }
      
      // Refresh recent transactions
      const loadTransactions = async () => {
        try {
          const transactions = await walletApi.transactions.getAll({
            page: 0,
            size: 5,
            sortBy: 'occurredAt',
            sortOrder: 'desc',
            startDate: currentDateRange.startDate,
            endDate: currentDateRange.endDate,
          });
          setRecentTransactions(transactions.content);
        } catch (err) {
          console.error('Error refreshing transactions:', err);
        }
      };
      loadTransactions();
      
      // Reload accounts/categories nếu có thay đổi (ví dụ: tạo account mới từ transaction)
      // Chỉ reload nếu không đang loading để tránh duplicate calls
      if (!accountsLoading) {
        dispatch(fetchWalletAccounts());
      }
      if (!categoriesLoading) {
        dispatch(fetchCategories());
      }
      
      setShowDraftDialog(false);
      setNlpResponse(null);
    } catch (err) {
      const errorMessage = handleApiError(err);
      setError(errorMessage);
      throw err;
    }
  }, [dateFilter, dateRange, nlpResponse, toast]);

  return (
    <DashboardWrapper ref={containerRef} className="dashboard-wrapper">
      <h1 className="title">{t('wallet.dashboard.title')}</h1>


      {/* Section 1: Tổng quan tài chính */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">{t('wallet.dashboard.financialOverview') || 'Tổng quan tài chính'}</h2>
        </div>
        {isLoadingFinancial ? (
          <div className="financial-overview-grid">
            {[...Array(4)].map((_, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <Skeleton className="h-4 w-24 mb-2" />
                  <Skeleton className="h-8 w-32" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="financial-overview-grid">
            <Card>
              <CardContent className="p-6">
                <div className="stat-label">{t('wallet.dashboard.totalAssets') || 'Tổng tài sản'}</div>
                <div className="stat-value">
                  {financialOverview ? formatCurrency(financialOverview.totalAssets, 'VND') : '0 ₫'}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="stat-label">{t('wallet.dashboard.currentCash') || 'Tiền hiện có'}</div>
                <div className="stat-value stat-value--positive">
                  {financialOverview ? formatCurrency(financialOverview.currentCash, 'VND') : '0 ₫'}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="stat-label">{t('wallet.dashboard.totalReceivables') || 'Khoản cho vay'}</div>
                <div className="stat-value stat-value--positive">
                  {financialOverview ? formatCurrency(financialOverview.totalReceivables, 'VND') : '0 ₫'}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="stat-label">{t('wallet.dashboard.totalLiabilities') || 'Khoản nợ'}</div>
                <div className="stat-value stat-value--negative">
                  {financialOverview ? formatCurrency(financialOverview.totalLiabilities, 'VND') : '0 ₫'}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </section>

      {/* Section 2: Thu/Chi (Summary Statistics) với filters */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">{t('wallet.dashboard.incomeExpense') || 'Thu/Chi'}</h2>
          <div className="filter-controls">
            <Button
              variant={dateFilter.period === '30days' ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleQuickFilter('30days')}
            >
              {t('wallet.dashboard.last30Days') || '30 ngày gần nhất'}
            </Button>
            <Button
              variant={dateFilter.period === 'month' ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleQuickFilter('month')}
            >
              {t('wallet.dashboard.thisMonth') || 'Tháng này'}
            </Button>
            <div className="date-range-picker">
              <Input
                type="date"
                className="date-input"
                value={dateFilter.startDate || ''}
                onChange={(e) => {
                  if (e.target.value && dateFilter.endDate) {
                    handleCustomDateRange(e.target.value, dateFilter.endDate);
                  } else {
                    scrollPositionRef.current = window.scrollY || document.documentElement.scrollTop;
                    setDateFilter(prev => ({ ...prev, startDate: e.target.value, period: 'custom' }));
                  }
                }}
                placeholder={t('wallet.dashboard.fromDate') || 'Từ ngày'}
              />
              <span className="date-separator">-</span>
              <Input
                type="date"
                className="date-input"
                value={dateFilter.endDate || ''}
                onChange={(e) => {
                  if (e.target.value && dateFilter.startDate) {
                    handleCustomDateRange(dateFilter.startDate, e.target.value);
                  } else {
                    scrollPositionRef.current = window.scrollY || document.documentElement.scrollTop;
                    setDateFilter(prev => ({ ...prev, endDate: e.target.value, period: 'custom' }));
                  }
                }}
                placeholder={t('wallet.dashboard.toDate') || 'Đến ngày'}
              />
            </div>
          </div>
        </div>
        {isLoadingReport ? (
          <div className="stats-grid">
            {[...Array(3)].map((_, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <Skeleton className="h-4 w-24 mb-2" />
                  <Skeleton className="h-8 w-32" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="stats-grid">
            <Card>
              <CardContent className="p-6">
                <div className="stat-label">{t('wallet.dashboard.totalIncome')}</div>
                <div className="stat-value stat-value--positive">
                  {report ? formatCurrency(report.totalIncome ?? 0, 'VND') : '0 ₫'}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="stat-label">{t('wallet.dashboard.totalExpense')}</div>
                <div className="stat-value stat-value--negative">
                  {report ? formatCurrency(report.totalExpense ?? 0, 'VND') : '0 ₫'}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="stat-label">{t('wallet.dashboard.netSavings')}</div>
                <div className="stat-value">
                  {report ? formatCurrency(report.netSavings ?? 0, 'VND') : '0 ₫'}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </section>

      {/* Section 3: Thêm giao dịch mới */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">{t('wallet.dashboard.addTransaction') || 'Thêm giao dịch mới'}</h2>
        </div>
        <Card>
          <CardContent className="p-6">
            <div className="add-transaction-section">
              <NLPInput
                onParse={handleParseText}
                isLoading={isParsing}
                placeholder={t('wallet.dashboard.commandPlaceholder') || 'Nhập lệnh... (ví dụ: "ăn bún 50k", "cho Nam vay 2tr")'}
                error={nlpResponse?.responseType === 'ERROR' ? nlpResponse.message : (error || null)}
              />
              <Button onClick={() => navigate('transactions/add')} className="gap-2">
                <Icon icon="Add" size={18} color="currentColor" />
                <span>{t('wallet.dashboard.addManualTransaction') || 'Thêm giao dịch thủ công'}</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Confirm Draft Dialog */}
      {nlpResponse && nlpResponse.responseType === 'CONFIRM_DRAFT' && (
        <ConfirmDraftDialog
          open={showDraftDialog}
          onOpenChange={setShowDraftDialog}
          draftData={nlpResponse.data as ConfirmDraftData}
          accounts={accounts}
          categories={categories}
          onConfirm={handleConfirmDraft}
          onCancel={() => {
            setNlpResponse(null);
            setShowDraftDialog(false);
          }}
        />
      )}

      {/* Section 4: Giao dịch gần đây */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">{t('wallet.dashboard.recentTransactions')}</h2>
        </div>
        <Card>
          <CardContent className="p-6">
            {isLoadingTransactions ? (
              <div className="transaction-list">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="transaction-item">
                    <div className="transaction-info">
                      <Skeleton className="h-4 w-24 mb-2" />
                      <Skeleton className="h-3 w-32" />
                    </div>
                    <Skeleton className="h-6 w-20" />
                  </div>
                ))}
              </div>
            ) : recentTransactions.length === 0 ? (
              <div className="empty-state">
                <p>{t('wallet.dashboard.noTransactions')}</p>
                <Button
                  onClick={() => navigate('transactions/add')}
                  className="mt-4"
                >
                  {t('wallet.dashboard.addFirstTransaction')}
                </Button>
              </div>
            ) : (
              <div className="transaction-list">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="transaction-card">
                    <div className="transaction-main">
                      <div className="transaction-left">
                        <Badge 
                          variant={transaction.type === 'EXPENSE' ? 'destructive' : transaction.type === 'INCOME' ? 'default' : 'secondary'}
                          className={`transaction-type-badge transaction-type-badge--${transaction.type.toLowerCase()}`}
                        >
                          {transaction.type === 'EXPENSE' ? t('wallet.transactions.expense') : 
                           transaction.type === 'INCOME' ? t('wallet.transactions.income') : 
                           t('wallet.transactions.transfer')}
                        </Badge>
                        <div className="transaction-info">
                          <div className="transaction-category">
                            {transaction.category?.name || 
                             (transaction.categoryId ? categories.find(c => c.id === transaction.categoryId)?.name : null) ||
                             transaction.type}
                          </div>
                          <div className="transaction-meta">
                            <span className="transaction-date">{formatDate(transaction.occurredAt)}</span>
                            {transaction.type === 'TRANSFER' ? (
                              <span className="transaction-account">
                                {transaction.fromAccountId ? accounts.find(a => a.id === transaction.fromAccountId)?.name || transaction.fromAccountId : 'N/A'} → 
                                {transaction.toAccountId ? accounts.find(a => a.id === transaction.toAccountId)?.name || transaction.toAccountId : 'N/A'}
                              </span>
                            ) : (
                              transaction.account?.name && (
                                <span className="transaction-account">{transaction.account.name}</span>
                              )
                            )}
                          </div>
                          {transaction.note && (
                            <div className="transaction-note">{transaction.note}</div>
                          )}
                        </div>
                      </div>
                      <div className="transaction-right">
                        <div className="transaction-amount-wrapper">
                          <div className={`transaction-amount transaction-amount--${transaction.type.toLowerCase()}`}>
                            {transaction.type === 'EXPENSE' ? '-' : transaction.type === 'INCOME' ? '+' : ''}
                            {formatCurrency(transaction.amount, transaction.currency)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </section>
    </DashboardWrapper>
  );
};

const DashboardWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  .title {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    color: ${({ theme }) => theme.colors.text.primary};
    margin: 0 0 ${({ theme }) => theme.spacing[10]} 0;
    letter-spacing: -0.02em;
    line-height: 1.2;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
    }
  }

  .error-state {
    padding: ${({ theme }) => theme.spacing[4]};
    background: ${({ theme }) => theme.colors.error}20;
    border: 1px solid ${({ theme }) => theme.colors.error};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    color: ${({ theme }) => theme.colors.error};
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }

  .loading-state {
    padding: ${({ theme }) => theme.spacing[8]};
    text-align: center;
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  .financial-overview-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing[4]};
    margin-bottom: ${({ theme }) => theme.spacing[10]};

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
      grid-template-columns: repeat(4, 1fr);
    }

    .stat-label {
      font-size: ${({ theme }) => theme.typography.fontSize.sm};
      font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
      color: ${({ theme }) => theme.colors.text.secondary};
      margin-bottom: ${({ theme }) => theme.spacing[3]};
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .stat-value {
      font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
      font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
      color: ${({ theme }) => theme.colors.text.primary};
      line-height: 1.2;
      letter-spacing: -0.02em;

      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
      }

      &--positive {
        color: ${({ theme }) => theme.colors.success?.[500] || '#10b981'};
      }

      &--negative {
        color: ${({ theme }) => theme.colors.error || '#ef4444'};
      }
    }
  }

  .stats-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing[4]};
    margin-bottom: ${({ theme }) => theme.spacing[10]};

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      grid-template-columns: repeat(3, 1fr);
    }

    .stat-label {
      font-size: ${({ theme }) => theme.typography.fontSize.sm};
      font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
      color: ${({ theme }) => theme.colors.text.secondary};
      margin-bottom: ${({ theme }) => theme.spacing[3]};
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .stat-value {
      font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
      font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
      color: ${({ theme }) => theme.colors.text.primary};
      line-height: 1.2;
      letter-spacing: -0.02em;

      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
      }

      &--positive {
        color: ${({ theme }) => theme.colors.success?.[500] || '#10b981'};
      }

      &--negative {
        color: ${({ theme }) => theme.colors.error || '#ef4444'};
      }
    }
  }

  .section {
    margin-bottom: ${({ theme }) => theme.spacing[10]};

    .section-header {
      display: flex;
      flex-direction: column;
      gap: ${({ theme }) => theme.spacing[4]};
      margin-bottom: ${({ theme }) => theme.spacing[6]};

      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }
    }

    .section-title {
      font-size: ${({ theme }) => theme.typography.fontSize.xl};
      font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
      color: ${({ theme }) => theme.colors.text.primary};
      /* margin-bottom: ${({ theme }) => theme.spacing[4]}; */
      letter-spacing: -0.01em;

      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
      }
    }

    .filter-controls {
      display: flex;
      flex-wrap: wrap;
      gap: ${({ theme }) => theme.spacing[2]};
      align-items: center;

      /* Style cho shadcn/ui Button trong filter-controls */
      button {
        height: 36px;
        font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
        font-size: ${({ theme }) => theme.typography.fontSize.sm};
        font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
      }

      .date-range-picker {
        display: flex;
        align-items: center;
        gap: ${({ theme }) => theme.spacing[2]};

        .date-input {
          width: auto;
          min-width: 150px;
          height: 36px;

          &[type="date"] {
            &::-webkit-calendar-picker-indicator {
              cursor: pointer;
              opacity: 0.7;
              filter: ${({ theme }) => 
                theme.colors.background === '#0a0a0a' || theme.colors.background === '#1a1a1a'
                  ? 'invert(1) brightness(1.2)' 
                  : 'none'};
            }

            &::-webkit-calendar-picker-indicator:hover {
              opacity: 1;
            }
          }
        }

        .date-separator {
          color: ${({ theme }) => theme.colors.text.secondary};
          font-size: ${({ theme }) => theme.typography.fontSize.sm};
        }
      }
    }

    .empty-state {
      padding: ${({ theme }) => theme.spacing[8]};
      text-align: center;
      color: ${({ theme }) => theme.colors.text.secondary};
    }

    .transaction-list {
      display: flex;
      flex-direction: column;
      gap: ${({ theme }) => theme.spacing[3]};
      margin-bottom: ${({ theme }) => theme.spacing[6]};

      .transaction-card {
        padding: ${({ theme }) => theme.spacing[5]};
        background: ${({ theme }) => theme.colors.surface};
        border: 1px solid ${({ theme }) => theme.colors.border};
        border-radius: ${({ theme }) => theme.borderRadius['2xl']};
        box-shadow: ${({ theme }) => 
          theme.colors.background === '#0a0a0a' 
            ? '0 1px 3px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(0, 0, 0, 0.2)' 
            : '0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.05)'};
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

        &:hover {
          border-color: ${({ theme }) => 
            theme.colors.background === '#0a0a0a' 
              ? 'rgba(14, 165, 233, 0.3)' 
              : 'rgba(14, 165, 233, 0.2)'};
          box-shadow: ${({ theme }) => 
            theme.colors.background === '#0a0a0a' 
              ? '0 4px 16px rgba(0, 0, 0, 0.4), 0 8px 24px rgba(0, 0, 0, 0.3)' 
              : '0 4px 16px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.08)'};
          transform: translateY(-2px);
        }

        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
          padding: ${({ theme }) => theme.spacing[6]};
        }

        .transaction-main {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: ${({ theme }) => theme.spacing[4]};

          .transaction-left {
            display: flex;
            align-items: flex-start;
            gap: ${({ theme }) => theme.spacing[3]};
            flex: 1;
            min-width: 0;

            .transaction-type-badge {
              padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
              border-radius: ${({ theme }) => theme.borderRadius.md};
              font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
              font-size: ${({ theme }) => theme.typography.fontSize.xs};
              font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
              line-height: ${({ theme }) => theme.typography.lineHeight.normal};
              text-transform: uppercase;
              letter-spacing: 0.5px;
              flex-shrink: 0;

              &--expense {
                background: ${({ theme }) => theme.colors.error}20;
                color: ${({ theme }) => theme.colors.error};
              }

              &--income {
                background: ${({ theme }) => theme.colors.success?.[500] ? `${theme.colors.success[500]}20` : '#10b98120'};
                color: ${({ theme }) => theme.colors.success?.[500] || '#10b981'};
              }

              &--transfer {
                background: ${({ theme }) => theme.colors.primary}20;
                color: ${({ theme }) => theme.colors.primary};
              }
            }

            .transaction-info {
              flex: 1;
              min-width: 0;
              display: flex;
              flex-direction: column;
              gap: ${({ theme }) => theme.spacing[1]};

              .transaction-category {
                font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
                font-size: ${({ theme }) => theme.typography.fontSize.base};
                font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
                line-height: ${({ theme }) => theme.typography.lineHeight.normal};
                color: ${({ theme }) => theme.colors.text.primary};
              }

              .transaction-meta {
                display: flex;
                flex-wrap: wrap;
                gap: ${({ theme }) => theme.spacing[2]};
                font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
                font-size: ${({ theme }) => theme.typography.fontSize.sm};
                font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
                line-height: ${({ theme }) => theme.typography.lineHeight.normal};
                color: ${({ theme }) => theme.colors.text.secondary};

                .transaction-date {
                  display: flex;
                  align-items: center;
                }

                .transaction-account {
                  display: flex;
                  align-items: center;
                }
              }

              .transaction-note {
                font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
                font-size: ${({ theme }) => theme.typography.fontSize.sm};
                font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
                line-height: ${({ theme }) => theme.typography.lineHeight.normal};
                color: ${({ theme }) => theme.colors.text.secondary};
                margin-top: ${({ theme }) => theme.spacing[1]};
              }
            }
          }

          .transaction-right {
            display: flex;
            align-items: center;
            gap: ${({ theme }) => theme.spacing[3]};
            flex-shrink: 0;

            .transaction-amount-wrapper {
              display: flex;
              flex-direction: column;
              align-items: flex-end;
              gap: ${({ theme }) => theme.spacing[2]};
            }

            .transaction-amount {
              font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
              font-size: ${({ theme }) => theme.typography.fontSize.xl};
              font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
              line-height: ${({ theme }) => theme.typography.lineHeight.tight};
              color: ${({ theme }) => theme.colors.text.secondary};
              text-align: right;

              @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
                font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
              }

              &--income {
                color: ${({ theme }) => theme.colors.success?.[500] || '#10b981'};
              }

              &--expense {
                color: ${({ theme }) => theme.colors.error || '#ef4444'};
              }
            }
          }
        }
      }
    }
  }

  .add-transaction-section {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing[4]};

    .command-input-wrapper {
      display: flex;
      gap: ${({ theme }) => theme.spacing[2]};

      .command-input {
        flex: 1;
        height: 40px;
      }

      /* Style cho shadcn/ui Button trong command-input-wrapper */
      button {
        height: 40px;
        font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
        font-size: ${({ theme }) => theme.typography.fontSize.sm};
        font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
      }
    }

    /* Style cho shadcn/ui Button trong add-transaction-section */
    button {
      height: 40px;
      font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
      font-size: ${({ theme }) => theme.typography.fontSize.sm};
      font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: ${({ theme }) => theme.spacing[2]};
      border-radius: ${({ theme }) => theme.borderRadius.lg};
      transition: all 0.2s ease;
    }
  }
`;
