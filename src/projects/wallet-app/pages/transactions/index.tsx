import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useWalletAppRouter } from '../../App';
import { walletApi, handleApiError } from '../../api/walletApi';
import { useAccounts, useCategories } from '../../api/hooks';
import type { Transaction, TransactionFilters as TFilters, PaginatedResponse } from '../../api/types';
import { Icon } from '../../components/icons';
import { EditTransactionModal } from '../../components/EditTransactionModal';
import { TransactionCard } from './TransactionCard';
import { TransactionFilters } from './TransactionFilters';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';

/**
 * Transactions Page
 * 
 * Hiển thị danh sách giao dịch với filters, search, và pagination
 */
export const Transactions = () => {
  const { t } = useTranslation();
  const { navigate } = useWalletAppRouter();
  
  // SWR hooks for data
  const { accounts } = useAccounts();
  const { categories } = useCategories();
  
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [pagination, setPagination] = useState<PaginatedResponse<Transaction> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [activeQuickFilter, setActiveQuickFilter] = useState<'all' | '30days' | 'month' | null>(null);
  const [editingTransactionId, setEditingTransactionId] = useState<string | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  
  const scrollPositionRef = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [filters, setFilters] = useState<TFilters>({
    page: 0,
    size: 20,
    sortBy: 'occurredAt',
    sortOrder: 'desc',
  });

  // Memoize date calculation
  const dateRange = useMemo(() => {
    let startDate: string | undefined;
    let endDate: string | undefined;
    
    if (filters.startDate) {
      startDate = filters.startDate.includes('T') ? filters.startDate : `${filters.startDate}T00:00:00`;
    }
    if (filters.endDate) {
      endDate = filters.endDate.includes('T') ? filters.endDate : `${filters.endDate}T23:59:59`;
    }

    return { startDate, endDate };
  }, [filters.startDate, filters.endDate]);

  const isLoadingRef = useRef(false);
  const lastFiltersRef = useRef<string>('');
  const filtersRef = useRef(filters);
  const dateRangeRef = useRef(dateRange);
  const searchKeywordRef = useRef(searchKeyword);

  useEffect(() => {
    filtersRef.current = filters;
    dateRangeRef.current = dateRange;
    searchKeywordRef.current = searchKeyword;
  }, [filters, dateRange, searchKeyword]);

  const loadTransactions = useCallback(async () => {
    if (isLoadingRef.current) return;

    scrollPositionRef.current = window.scrollY || document.documentElement.scrollTop;
    isLoadingRef.current = true;
    setIsLoading(true);
    setError(null);

    try {
      const currentFilters = filtersRef.current;
      const currentDateRange = dateRangeRef.current;
      const currentKeyword = searchKeywordRef.current;

      const result = await walletApi.transactions.getAll({
        ...currentFilters,
        startDate: currentDateRange.startDate,
        endDate: currentDateRange.endDate,
        keyword: currentKeyword || undefined,
      });
      setTransactions(result.content);
      setPagination(result);
    } catch (err) {
      setError(handleApiError(err));
    } finally {
      isLoadingRef.current = false;
      setIsLoading(false);
      requestAnimationFrame(() => {
        window.scrollTo(0, scrollPositionRef.current);
      });
    }
  }, []);

  useEffect(() => {
    const filtersKey = JSON.stringify({
      page: filters.page,
      size: filters.size,
      sortBy: filters.sortBy,
      sortOrder: filters.sortOrder,
      type: filters.type,
      categoryId: filters.categoryId,
      accountId: filters.accountId,
      minAmount: filters.minAmount,
      maxAmount: filters.maxAmount,
      keyword: filters.keyword,
      startDate: dateRange.startDate,
      endDate: dateRange.endDate,
    });

    if (lastFiltersRef.current === filtersKey) return;

    lastFiltersRef.current = filtersKey;
    loadTransactions();
  }, [
    filters.page,
    filters.size,
    filters.sortBy,
    filters.sortOrder,
    filters.type,
    filters.categoryId,
    filters.accountId,
    filters.minAmount,
    filters.maxAmount,
    filters.keyword,
    dateRange.startDate,
    dateRange.endDate,
    searchKeyword,
    loadTransactions,
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchKeyword !== filters.keyword) {
        setFilters((prev) => ({
          ...prev,
          keyword: searchKeyword || undefined,
          page: 0,
        }));
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchKeyword, filters.keyword]);

  const handleFilterChange = useCallback((key: keyof TFilters, value: string | number | undefined) => {
    scrollPositionRef.current = window.scrollY || document.documentElement.scrollTop;
    setFilters((prev) => ({
      ...prev,
      [key]: value,
      page: 0,
    }));
  }, []);

  const formatLocalDateTime = (date: Date, isStart: boolean = true): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const time = isStart ? '00:00:00' : '23:59:59';
    return `${year}-${month}-${day}T${time}`;
  };

  const handleQuickFilter = useCallback((period: '30days' | 'month' | 'all') => {
    scrollPositionRef.current = window.scrollY || document.documentElement.scrollTop;
    
    if (activeQuickFilter === period) {
      setActiveQuickFilter(null);
      setFilters((prev) => ({
        ...prev,
        startDate: undefined,
        endDate: undefined,
        page: 0,
      }));
      return;
    }
    
    setActiveQuickFilter(period);
    const now = new Date();

    if (period === 'all') {
      setFilters((prev) => ({
        ...prev,
        startDate: undefined,
        endDate: undefined,
        page: 0,
      }));
    } else if (period === '30days') {
      const thirtyDaysAgo = new Date(now);
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      setFilters((prev) => ({
        ...prev,
        startDate: formatLocalDateTime(thirtyDaysAgo, true),
        endDate: formatLocalDateTime(now, false),
        page: 0,
      }));
    } else if (period === 'month') {
      const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
      setFilters((prev) => ({
        ...prev,
        startDate: formatLocalDateTime(firstDay, true),
        endDate: formatLocalDateTime(now, false),
        page: 0,
      }));
    }
  }, [activeQuickFilter]);

  const handlePageChange = useCallback((newPage: number) => {
    scrollPositionRef.current = window.scrollY || document.documentElement.scrollTop;
    setFilters((prev) => ({
      ...prev,
      page: newPage,
    }));
  }, []);

  const handleEdit = useCallback((transaction: Transaction) => {
    setEditingTransactionId(transaction.id);
    setIsEditModalOpen(true);
  }, []);

  const handleEditModalClose = useCallback(() => {
    setIsEditModalOpen(false);
    setEditingTransactionId(null);
  }, []);

  const handleEditSuccess = useCallback(() => {
    loadTransactions();
  }, [loadTransactions]);

  const handleDelete = useCallback(async (transaction: Transaction) => {
    if (!window.confirm(t('wallet.transactions.confirmDelete') || `Bạn có chắc muốn xóa giao dịch này?`)) {
      return;
    }

    try {
      await walletApi.transactions.delete(transaction.id);
      await loadTransactions();
    } catch (err) {
      setError(handleApiError(err));
    }
  }, [loadTransactions, t]);

  return (
    <TransactionsWrapper ref={containerRef}>
      <div className="header">
        <h1 className="title">{t('wallet.transactions.title')}</h1>
        <Button onClick={() => navigate('transactions/add')} className="gap-2">
          <Icon icon="Add" size={18} color="currentColor" />
          <span>{t('wallet.transactions.add')}</span>
        </Button>
      </div>

      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Quick Filters & Search Bar */}
      <div className="quick-filters-section">
        <div className="quick-filters">
          <Button
            variant={activeQuickFilter === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => handleQuickFilter('all')}
          >
            {t('wallet.transactions.all') || 'Tất cả'}
          </Button>
          <Button
            variant={activeQuickFilter === '30days' ? 'default' : 'outline'}
            size="sm"
            onClick={() => handleQuickFilter('30days')}
          >
            {t('wallet.dashboard.last30Days') || '30 ngày gần nhất'}
          </Button>
          <Button
            variant={activeQuickFilter === 'month' ? 'default' : 'outline'}
            size="sm"
            onClick={() => handleQuickFilter('month')}
          >
            {t('wallet.dashboard.thisMonth') || 'Tháng này'}
          </Button>
        </div>
        <div className="search-bar">
          <Icon icon="Search" size={18} color="currentColor" />
          <Input
            type="text"
            className="search-input"
            placeholder={t('wallet.transactions.searchPlaceholder') || 'Tìm kiếm giao dịch...'}
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          {searchKeyword && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchKeyword('')}
            >
              <Icon icon="Close" size={16} color="currentColor" />
            </Button>
          )}
        </div>
        <Button
          variant="outline"
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          className="gap-2"
        >
          <Icon icon={isFiltersOpen ? "ChevronUp" : "ChevronDown"} size={18} color="currentColor" />
          <span>{t('wallet.transactions.filters') || 'Bộ lọc'}</span>
        </Button>
      </div>

      {/* Advanced Filters */}
      {isFiltersOpen && (
        <TransactionFilters
          filters={filters}
          accounts={accounts}
          categories={categories}
          onFilterChange={handleFilterChange}
        />
      )}

      {/* Transaction List */}
      {isLoading && transactions.length === 0 ? (
        <div className="loading-state">
          {[...Array(5)].map((_, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-6 w-24 mb-2" />
                <Skeleton className="h-3 w-48" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : transactions.length === 0 ? (
        <div className="empty-state">
          <Icon icon="FileText" size={48} color="currentColor" />
          <p>{t('wallet.transactions.noTransactions')}</p>
          <Button onClick={() => navigate('transactions/add')} className="gap-2">
            <Icon icon="Add" size={18} color="currentColor" />
            <span>{t('wallet.transactions.addFirst') || 'Thêm giao dịch đầu tiên'}</span>
          </Button>
        </div>
      ) : (
        <>
          <div className="transaction-list">
            {transactions.map((transaction) => (
              <TransactionCard
                key={transaction.id}
                transaction={transaction}
                accounts={accounts}
                categories={categories}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>

          {/* Pagination */}
          {pagination && pagination.totalPages > 1 && (
            <div className="pagination">
              <Button
                variant="outline"
                onClick={() => handlePageChange(pagination.page - 1)}
                disabled={!pagination.hasPrevious}
                className="gap-2"
              >
                <Icon icon="ChevronLeft" size={18} color="currentColor" />
                <span>{t('wallet.transactions.previous') || 'Trước'}</span>
              </Button>
              <div className="pagination-info">
                <span>{t('wallet.transactions.page') || 'Trang'} {pagination.page + 1} / {pagination.totalPages}</span>
                <span className="pagination-total">
                  ({pagination.totalElements} {t('wallet.transactions.items') || 'giao dịch'})
                </span>
              </div>
              <Button
                variant="outline"
                onClick={() => handlePageChange(pagination.page + 1)}
                disabled={!pagination.hasNext}
                className="gap-2"
              >
                <span>{t('wallet.transactions.next') || 'Sau'}</span>
                <Icon icon="ChevronRight" size={18} color="currentColor" />
              </Button>
            </div>
          )}
        </>
      )}

      {/* Edit Transaction Modal */}
      <EditTransactionModal
        transactionId={editingTransactionId || ''}
        isOpen={isEditModalOpen && !!editingTransactionId}
        onClose={handleEditModalClose}
        onSuccess={handleEditSuccess}
        onDelete={handleEditSuccess}
      />
    </TransactionsWrapper>
  );
};

const TransactionsWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${({ theme }) => theme.spacing[8]};
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing[4]};

    .title {
      font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
      font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
      color: ${({ theme }) => theme.colors.text.primary};
      margin: 0;
      letter-spacing: -0.02em;

      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
      }
    }
  }

  .quick-filters-section {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing[4]};
    margin-bottom: ${({ theme }) => theme.spacing[6]};

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    .quick-filters {
      display: flex;
      gap: ${({ theme }) => theme.spacing[2]};
      flex-wrap: wrap;
    }

    .search-bar {
      display: flex;
      align-items: center;
      gap: ${({ theme }) => theme.spacing[2]};
      height: 40px;
      padding: 0 ${({ theme }) => theme.spacing[4]};
      background: ${({ theme }) => theme.colors.surface};
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-radius: ${({ theme }) => theme.borderRadius.lg};
      flex: 1;
      min-width: 0;

      &:focus-within {
        border-color: ${({ theme }) => theme.colors.primary};
      }

      .search-input {
        flex: 1;
        border: none;
        background: transparent;
        min-width: 0;
        height: 100%;
      }
    }
  }

  .loading-state {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing[3]};
  }

  .empty-state {
    padding: ${({ theme }) => theme.spacing[12]};
    text-align: center;
    color: ${({ theme }) => theme.colors.text.secondary};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing[4]};

    p {
      font-size: ${({ theme }) => theme.typography.fontSize.lg};
      margin: 0;
    }
  }

  .transaction-list {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing[3]};
    margin-bottom: ${({ theme }) => theme.spacing[6]};
  }

  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing[4]};
    margin-top: ${({ theme }) => theme.spacing[8]};
    padding: ${({ theme }) => theme.spacing[4]};

    .pagination-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: ${({ theme }) => theme.spacing[1]};
      font-size: ${({ theme }) => theme.typography.fontSize.base};
      color: ${({ theme }) => theme.colors.text.secondary};

      .pagination-total {
        font-size: ${({ theme }) => theme.typography.fontSize.xs};
        opacity: 0.7;
      }
    }
  }
`;

export default Transactions;
