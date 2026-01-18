import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useWalletAppRouter } from '../App';
import { walletApi } from '../api/walletApi';
import { handleApiError } from '../api/walletApi';
import type { Transaction, TransactionFilters, PaginatedResponse } from '../api/types';
import { Icon } from '../components/icons';
import { EditTransactionModal } from '../components/EditTransactionModal';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchCategories } from '@/store/slices/categoriesSlice';
import { fetchWalletAccounts } from '@/store/slices/accountsSlice';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';

/**
 * Transactions Page
 * 
 * Hiển thị danh sách giao dịch với filters, search, và pagination
 * Redesigned theo chuẩn SaaS với UX tốt hơn
 */
export const Transactions = () => {
  const { t } = useTranslation();
  const { navigate } = useWalletAppRouter();
  const dispatch = useAppDispatch();
  
  // Redux state
  const accounts = useAppSelector((state) => state.walletAccounts.items);
  const categories = useAppSelector((state) => state.categories.items);
  
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [pagination, setPagination] = useState<PaginatedResponse<Transaction> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [activeQuickFilter, setActiveQuickFilter] = useState<'all' | '30days' | 'month' | null>(null);
  const [editingTransactionId, setEditingTransactionId] = useState<string | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  
  // Preserve scroll position
  const scrollPositionRef = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [filters, setFilters] = useState<TransactionFilters>({
    page: 0,
    size: 20, // Tăng size để ít pagination hơn
    sortBy: 'occurredAt',
    sortOrder: 'desc',
  });

  // Get lastFetched from Redux state
  const accountsLastFetched = useAppSelector((state) => state.walletAccounts.lastFetched);
  const categoriesLastFetched = useAppSelector((state) => state.categories.lastFetched);

  // Load accounts and categories from Redux
  useEffect(() => {
    const fiveMinutesAgo = Date.now() - 5 * 60 * 1000;
    
    // Chỉ fetch nếu chưa có data hoặc data đã cũ (hơn 5 phút)
    if (!accountsLastFetched || accountsLastFetched < fiveMinutesAgo) {
      dispatch(fetchWalletAccounts());
    }
    if (!categoriesLastFetched || categoriesLastFetched < fiveMinutesAgo) {
      dispatch(fetchCategories());
    }
  }, [dispatch, accountsLastFetched, categoriesLastFetched]);

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

  const loadTransactions = useCallback(async () => {
    // Save scroll position before loading
    scrollPositionRef.current = window.scrollY || document.documentElement.scrollTop;
    
    setIsLoading(true);
    setError(null);

    try {
      const result = await walletApi.transactions.getAll({
        ...filters,
        startDate: dateRange.startDate,
        endDate: dateRange.endDate,
        keyword: searchKeyword || undefined,
      });
      setTransactions(result.content);
      setPagination(result);
    } catch (err) {
      setError(handleApiError(err));
      console.error('Transactions load error:', err);
    } finally {
      setIsLoading(false);
      // Restore scroll position after a short delay
      requestAnimationFrame(() => {
        window.scrollTo(0, scrollPositionRef.current);
      });
    }
  }, [filters, dateRange.startDate, dateRange.endDate, searchKeyword]);

  useEffect(() => {
    loadTransactions();
  }, [loadTransactions]);

  // Debounce search keyword
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
  }, [searchKeyword]);

  const handleFilterChange = useCallback((key: keyof TransactionFilters, value: string | number | undefined) => {
    scrollPositionRef.current = window.scrollY || document.documentElement.scrollTop;
    setFilters((prev) => ({
      ...prev,
      [key]: value,
      page: 0, // Reset to first page when filter changes
    }));
  }, []);

  const handleQuickFilter = useCallback((period: '30days' | 'month' | 'all') => {
    scrollPositionRef.current = window.scrollY || document.documentElement.scrollTop;
    
    // Nếu click vào filter đang active, reset về "all"
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
    
    // Set active filter
    setActiveQuickFilter(period);
    
    const now = new Date();
    const formatLocalDateTime = (date: Date, isStart: boolean = true): string => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const time = isStart ? '00:00:00' : '23:59:59';
      return `${year}-${month}-${day}T${time}`;
    };

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

  const handleEditDelete = useCallback(() => {
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
    <TransactionsWrapper ref={containerRef} className="transactions-wrapper">
      <div className="header">
        <h1 className="title">{t('wallet.transactions.title')}</h1>
        <Button onClick={() => navigate('transactions/add')} className="gap-2">
          <Icon icon="Add" size={18} color="currentColor" />
          <span>{t('wallet.transactions.add')}</span>
        </Button>
      </div>

      {error && (
        <Alert variant="destructive">
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
              className="clear-search-button"
              onClick={() => setSearchKeyword('')}
              title={t('wallet.common.clear') || 'Xóa'}
            >
              <Icon icon="Close" size={16} color="currentColor" />
            </Button>
          )}
        </div>
        <Button
          variant="outline"
          className="toggle-filters-button"
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
        >
          <Icon icon={isFiltersOpen ? "ChevronUp" : "ChevronDown"} size={18} color="currentColor" />
          <span>{t('wallet.transactions.filters') || 'Bộ lọc'}</span>
        </Button>
      </div>

      {/* Advanced Filters (Collapsible) */}
      {isFiltersOpen && (
        <Card className="filters-card">
          <CardContent className="p-6">
            <div className="filters-grid">
            <div className="filter-group">
              <label className="label">{t('wallet.transactions.type')}</label>
              <Select
                value={filters.type || '__all__'}
                onValueChange={(value) => handleFilterChange('type', value === '__all__' ? undefined : value)}
              >
                <SelectTrigger className="select">
                  <SelectValue placeholder={t('wallet.transactions.all')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="__all__">{t('wallet.transactions.all')}</SelectItem>
                  <SelectItem value="EXPENSE">{t('wallet.transactions.expense')}</SelectItem>
                  <SelectItem value="INCOME">{t('wallet.transactions.income')}</SelectItem>
                  <SelectItem value="TRANSFER">{t('wallet.transactions.transfer')}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="filter-group">
              <label className="label">{t('wallet.transactions.fromDate')}</label>
              <Input
                className="input"
                type="date"
                value={filters.startDate?.split('T')[0] || ''}
                onChange={(e) => handleFilterChange('startDate', e.target.value || undefined)}
              />
            </div>

            <div className="filter-group">
              <label className="label">{t('wallet.transactions.toDate')}</label>
              <Input
                className="input"
                type="date"
                value={filters.endDate?.split('T')[0] || ''}
                onChange={(e) => handleFilterChange('endDate', e.target.value || undefined)}
              />
            </div>

            <div className="filter-group">
              <label className="label">{t('wallet.accounts.title')}</label>
              <Select
                value={filters.accountId || '__all__'}
                onValueChange={(value) => handleFilterChange('accountId', value === '__all__' ? undefined : value)}
              >
                <SelectTrigger className="select">
                  <SelectValue placeholder={t('wallet.transactions.all')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="__all__">{t('wallet.transactions.all')}</SelectItem>
                  {accounts.map((account) => (
                    <SelectItem key={account.id} value={account.id}>
                      {account.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="filter-group">
              <label className="label">{t('wallet.categories.title')}</label>
              <Select
                value={filters.categoryId || '__all__'}
                onValueChange={(value) => handleFilterChange('categoryId', value === '__all__' ? undefined : value)}
              >
                <SelectTrigger className="select">
                  <SelectValue placeholder={t('wallet.transactions.all')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="__all__">{t('wallet.transactions.all')}</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="filter-group">
              <label className="label">{t('wallet.transactions.minAmount') || 'Tối thiểu'}</label>
              <Input
                className="number-input"
                type="number"
                step="0.01"
                min="0"
                placeholder="0"
                value={filters.minAmount || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFilterChange('minAmount', e.target.value ? parseFloat(e.target.value) : undefined)}
              />
            </div>

            <div className="filter-group">
              <label className="label">{t('wallet.transactions.maxAmount') || 'Tối đa'}</label>
              <Input
                className="number-input"
                type="number"
                step="0.01"
                min="0"
                placeholder="0"
                value={filters.maxAmount || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFilterChange('maxAmount', e.target.value ? parseFloat(e.target.value) : undefined)}
              />
            </div>

            <div className="filter-group">
              <label className="label">{t('wallet.transactions.sortBy') || 'Sắp xếp theo'}</label>
              <Select
                value={filters.sortBy || 'occurredAt'}
                onValueChange={(value) => handleFilterChange('sortBy', value as 'occurredAt' | 'amount' | 'createdAt')}
              >
                <SelectTrigger className="select">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="occurredAt">{t('wallet.transactions.sortByDate') || 'Ngày giao dịch'}</SelectItem>
                  <SelectItem value="amount">{t('wallet.transactions.sortByAmount') || 'Số tiền'}</SelectItem>
                  <SelectItem value="createdAt">{t('wallet.transactions.sortByCreated') || 'Ngày tạo'}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="filter-group">
              <label className="label">{t('wallet.transactions.sortOrder') || 'Thứ tự'}</label>
              <Select
                value={filters.sortOrder || 'desc'}
                onValueChange={(value) => handleFilterChange('sortOrder', value as 'asc' | 'desc')}
              >
                <SelectTrigger className="select">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="desc">{t('wallet.transactions.desc') || 'Giảm dần'}</SelectItem>
                  <SelectItem value="asc">{t('wallet.transactions.asc') || 'Tăng dần'}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Transaction List */}
      {isLoading && transactions.length === 0 ? (
        <div className="loading-state">
          <div className="skeleton-list">
            {[...Array(5)].map((_, i) => (
              <Card key={i} className="skeleton-card">
                <CardContent className="p-6">
                  <Skeleton className="h-4 w-32 mb-2" />
                  <Skeleton className="h-6 w-24 mb-2" />
                  <Skeleton className="h-3 w-48" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ) : transactions.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">
            <Icon icon="FileText" size={48} color="currentColor" />
          </div>
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
              <div key={transaction.id} className="transaction-card" onClick={() => handleEdit(transaction)}>
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
                      <div className="transaction-actions" onClick={(e) => e.stopPropagation()}>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="icon-button"
                          onClick={() => handleEdit(transaction)}
                          title={t('wallet.common.edit')}
                        >
                          <Icon icon="Edit" size={16} color="currentColor" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="icon-button icon-button--danger"
                          onClick={() => handleDelete(transaction)}
                          title={t('wallet.common.delete')}
                        >
                          <Icon icon="Delete" size={16} color="currentColor" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {pagination && pagination.totalPages > 1 && (
            <div className="pagination">
              <Button
                variant="outline"
                className={`pagination-button ${!pagination.hasPrevious ? 'pagination-button--disabled' : ''}`}
                onClick={() => handlePageChange(pagination.page - 1)}
                disabled={!pagination.hasPrevious}
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
                className={`pagination-button ${!pagination.hasNext ? 'pagination-button--disabled' : ''}`}
                onClick={() => handlePageChange(pagination.page + 1)}
                disabled={!pagination.hasNext}
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
        onDelete={handleEditDelete}
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
      font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
      font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
      font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
      line-height: ${({ theme }) => theme.typography.lineHeight.tight};
      color: ${({ theme }) => theme.colors.text.primary};
      margin: 0;
      letter-spacing: -0.02em;

      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
      }
    }

    .action-button {
      display: inline-flex;
      align-items: center;
      gap: ${({ theme }) => theme.spacing[2]};
      height: 40px;
      padding: 0 ${({ theme }) => theme.spacing[6]};
      background: ${({ theme }) => theme.colors.primary};
      color: white;
      border: none;
      border-radius: ${({ theme }) => theme.borderRadius.lg};
      font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
      font-size: ${({ theme }) => theme.typography.fontSize.sm};
      font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
      line-height: 1.5;
      cursor: pointer;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 2px 8px ${({ theme }) => 
        theme.colors.background === '#0a0a0a' 
          ? 'rgba(14, 165, 233, 0.3)' 
          : 'rgba(14, 165, 233, 0.25)'};

      &:hover {
        background: ${({ theme }) => theme.colors.primary[600] || '#0284c7'};
        transform: translateY(-2px);
        box-shadow: 0 4px 16px ${({ theme }) => 
          theme.colors.background === '#0a0a0a' 
            ? 'rgba(14, 165, 233, 0.4)' 
            : 'rgba(14, 165, 233, 0.35)'};
      }

      &:active {
        transform: translateY(0);
      }
    }
  }

  /* Error state styles handled by shadcn/ui Alert component */

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
      order: 1;

      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        order: 0;
      }

      /* Quick filter button styles handled by shadcn/ui Button component */
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
      transition: all 0.2s ease;
      flex: 1;
      min-width: 0;
      order: 2;

      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        order: 1;
      }

      &:focus-within {
        border-color: ${({ theme }) => theme.colors.primary};
        box-shadow: 0 0 0 3px ${({ theme }) => 
          theme.colors.background === '#0a0a0a' 
            ? 'rgba(14, 165, 233, 0.1)' 
            : 'rgba(14, 165, 233, 0.05)'};
      }

      .search-input {
        flex: 1;
        border: none;
        background: transparent;
        min-width: 0;
        height: 100%;

        /* Other styles handled by shadcn/ui Input component */
      }

      /* Clear search button styles handled by shadcn/ui Button component */
    }

    .toggle-filters-button {
      display: flex;
      align-items: center;
      gap: ${({ theme }) => theme.spacing[2]};
      height: 40px;
      padding: 0 ${({ theme }) => theme.spacing[4]};
      background: ${({ theme }) => theme.colors.surface};
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-radius: ${({ theme }) => theme.borderRadius.lg};
      font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
      font-size: ${({ theme }) => theme.typography.fontSize.sm};
      font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
      line-height: 1.5;
      color: ${({ theme }) => theme.colors.text.secondary};
      cursor: pointer;
      transition: all 0.2s ease;
      align-self: flex-start;
      order: 3;

      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        order: 2;
      }

      &:hover {
        border-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.text.primary};
      }
    }
  }

  .filters-card {
    padding: ${({ theme }) => theme.spacing[6]};
    background: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.xl || theme.borderRadius['2xl']};
    margin-bottom: ${({ theme }) => theme.spacing[6]};
    box-shadow: ${({ theme }) => 
      theme.colors.background === '#0a0a0a' 
        ? '0 2px 8px rgba(0, 0, 0, 0.3), 0 8px 24px rgba(0, 0, 0, 0.2)' 
        : '0 2px 8px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.06)'};
    width: 100%;
    overflow-x: auto;
    overflow-y: visible;

      .filters-grid {
      display: grid;
      grid-template-columns: 
        minmax(140px, 160px)    /* Type */
        minmax(150px, 180px)    /* Start Date */
        minmax(150px, 180px)    /* End Date */
        minmax(150px, 200px)    /* Account */
        minmax(150px, 200px)    /* Category */
        minmax(120px, 140px)    /* Min Amount */
        minmax(120px, 140px)    /* Max Amount */
        minmax(150px, 180px)    /* Sort By */
        minmax(130px, 160px)    /* Sort Order */
        minmax(200px, 1fr);     /* Search - takes remaining space */
      gap: ${({ theme }) => theme.spacing[4]};
      width: 100%;
      min-width: 0;
      max-width: 100%;
      
      @media (max-width: 1600px) {
        grid-template-columns: 
          minmax(120px, 140px)
          minmax(130px, 150px)
          minmax(130px, 150px)
          minmax(130px, 170px)
          minmax(130px, 170px)
          minmax(90px, 110px)
          minmax(90px, 110px)
          minmax(130px, 150px)
          minmax(110px, 130px)
          minmax(180px, 1fr);
      }
      
      @media (max-width: 1400px) {
        grid-template-columns: repeat(5, 1fr);
        
        .filter-group:nth-child(10) {
          grid-column: span 5; /* Search takes full width on smaller screens */
        }
      }
      
      @media (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
        
        .filter-group:nth-child(10) {
          grid-column: span 3;
        }
      }
      
      @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        
        .filter-group:nth-child(10) {
          grid-column: span 2;
        }
      }
      
      @media (max-width: 480px) {
        grid-template-columns: 1fr;
        
        .filter-group:nth-child(10) {
          grid-column: span 1;
        }
      }

      .filter-group {
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing[2]};
        min-width: 0; /* Prevent grid overflow */

        .label {
          font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
          font-size: ${({ theme }) => theme.typography.fontSize.sm};
          font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
          line-height: 1.5;
          color: ${({ theme }) => theme.colors.text.primary};
        }

        .select {
          height: 40px;
          padding: 0 ${({ theme }) => theme.spacing[4]};
          background: ${({ theme }) => theme.colors.background};
          border: 1px solid ${({ theme }) => theme.colors.border};
          border-radius: ${({ theme }) => theme.borderRadius.lg};
          font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
          font-size: ${({ theme }) => theme.typography.fontSize.sm};
          font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
          line-height: 1.5;
          color: ${({ theme }) => theme.colors.text.primary};
          cursor: pointer;
          transition: all 0.2s ease;

          &:focus {
            outline: none;
            border-color: ${({ theme }) => theme.colors.primary};
            box-shadow: 0 0 0 3px ${({ theme }) => 
              theme.colors.background === '#0a0a0a' 
                ? 'rgba(14, 165, 233, 0.2)' 
                : 'rgba(14, 165, 233, 0.1)'};
          }

          &:hover {
            border-color: ${({ theme }) => 
              theme.colors.background === '#0a0a0a' 
                ? 'rgba(14, 165, 233, 0.3)' 
                : 'rgba(14, 165, 233, 0.2)'};
          }
        }

        .input {
          height: 40px;
          padding: 0 ${({ theme }) => theme.spacing[4]};
          background: ${({ theme }) => theme.colors.background};
          border: 1px solid ${({ theme }) => theme.colors.border};
          border-radius: ${({ theme }) => theme.borderRadius.lg};
          font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
          font-size: ${({ theme }) => theme.typography.fontSize.sm};
          font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
          line-height: 1.5;
          color: ${({ theme }) => theme.colors.text.primary};
          width: 100%;
          transition: all 0.2s ease;

          &:focus {
            outline: none;
            border-color: ${({ theme }) => theme.colors.primary};
            box-shadow: 0 0 0 3px ${({ theme }) => 
              theme.colors.background === '#0a0a0a' 
                ? 'rgba(14, 165, 233, 0.2)' 
                : 'rgba(14, 165, 233, 0.1)'};
          }

          &:hover {
            border-color: ${({ theme }) => 
              theme.colors.background === '#0a0a0a' 
                ? 'rgba(14, 165, 233, 0.3)' 
                : 'rgba(14, 165, 233, 0.2)'};
          }

          &[type="date"],
          &[type="datetime-local"] {
            position: relative;
            cursor: pointer;

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

        .number-input {
          height: 40px;
          padding: 0 ${({ theme }) => theme.spacing[3]};
          background: ${({ theme }) => theme.colors.background};
          border: 1px solid ${({ theme }) => theme.colors.border};
          border-radius: ${({ theme }) => theme.borderRadius.lg};
          font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
          font-size: ${({ theme }) => theme.typography.fontSize.sm};
          font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
          line-height: 1.5;
          color: ${({ theme }) => theme.colors.text.primary};
          width: 100%;
          transition: all 0.2s ease;
          text-align: right;

          &::-webkit-inner-spin-button,
          &::-webkit-outer-spin-button {
            opacity: 1;
            cursor: pointer;
          }

          &:focus {
            outline: none;
            border-color: ${({ theme }) => theme.colors.primary};
            box-shadow: 0 0 0 3px ${({ theme }) => 
              theme.colors.background === '#0a0a0a' 
                ? 'rgba(14, 165, 233, 0.2)' 
                : 'rgba(14, 165, 233, 0.1)'};
          }

          &:hover {
            border-color: ${({ theme }) => 
              theme.colors.background === '#0a0a0a' 
                ? 'rgba(14, 165, 233, 0.3)' 
                : 'rgba(14, 165, 233, 0.2)'};
          }

          &::placeholder {
            color: ${({ theme }) => theme.colors.text.secondary};
            opacity: 0.5;
          }
        }
      }
    }
  }

  .empty-state {
    padding: ${({ theme }) => theme.spacing[12]};
    text-align: center;
    color: ${({ theme }) => theme.colors.text.secondary};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing[4]};

    .empty-icon {
      color: ${({ theme }) => theme.colors.text.secondary};
      opacity: 0.5;
      margin-bottom: ${({ theme }) => theme.spacing[2]};
    }
    
    p {
      font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
      font-size: ${({ theme }) => theme.typography.fontSize.lg};
      font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
      line-height: ${({ theme }) => theme.typography.lineHeight.normal};
      color: ${({ theme }) => theme.colors.text.secondary};
      margin: 0;
    }
    
    .action-button {
      display: inline-flex;
      align-items: center;
      gap: ${({ theme }) => theme.spacing[2]};
      height: 40px;
      padding: 0 ${({ theme }) => theme.spacing[6]};
      background: ${({ theme }) => theme.colors.primary};
      color: white;
      border: none;
      border-radius: ${({ theme }) => theme.borderRadius.lg};
      font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
      font-size: ${({ theme }) => theme.typography.fontSize.sm};
      font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
      line-height: 1.5;
      cursor: pointer;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 2px 8px ${({ theme }) => 
        theme.colors.background === '#0a0a0a' 
          ? 'rgba(14, 165, 233, 0.3)' 
          : 'rgba(14, 165, 233, 0.25)'};

      &:hover {
        background: ${({ theme }) => theme.colors.primary[600] || '#0284c7'};
        transform: translateY(-2px);
        box-shadow: 0 4px 16px ${({ theme }) => 
          theme.colors.background === '#0a0a0a' 
            ? 'rgba(14, 165, 233, 0.4)' 
            : 'rgba(14, 165, 233, 0.35)'};
      }

      &:active {
        transform: translateY(0);
      }
    }
  }

  .loading-state {
    padding: ${({ theme }) => theme.spacing[8]};
    text-align: center;
    font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    color: ${({ theme }) => theme.colors.text.secondary};

    .skeleton-list {
      display: flex;
      flex-direction: column;
      gap: ${({ theme }) => theme.spacing[3]};

      .skeleton-card {
        padding: ${({ theme }) => theme.spacing[5]};
        background: ${({ theme }) => theme.colors.surface};
        border: 1px solid ${({ theme }) => theme.colors.border};
        border-radius: ${({ theme }) => theme.borderRadius['2xl']};
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing[3]};

        .skeleton-line {
          height: 16px;
          background: linear-gradient(
            90deg,
            ${({ theme }) => theme.colors.border} 0%,
            ${({ theme }) => theme.colors.background} 50%,
            ${({ theme }) => theme.colors.border} 100%
          );
          background-size: 200% 100%;
          animation: skeleton-loading 1.5s ease-in-out infinite;
          border-radius: ${({ theme }) => theme.borderRadius.md};

          &--title {
            width: 60%;
            height: 20px;
          }

          &--amount {
            width: 30%;
            height: 24px;
            align-self: flex-end;
          }

          &--detail {
            width: 80%;
            height: 14px;
          }
        }
      }
    }
  }

  @keyframes skeleton-loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
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
      cursor: pointer;

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

          .transaction-actions {
            display: flex;
            gap: ${({ theme }) => theme.spacing[1]};

            .icon-button {
              padding: ${({ theme }) => theme.spacing[2]};
              background: ${({ theme }) => theme.colors.surface};
              border: 1px solid ${({ theme }) => theme.colors.border};
              border-radius: ${({ theme }) => theme.borderRadius.lg};
              color: ${({ theme }) => theme.colors.text.secondary};
              cursor: pointer;
              transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
              display: flex;
              align-items: center;
              justify-content: center;

              &:hover {
                border-color: ${({ theme }) => theme.colors.primary};
                color: ${({ theme }) => theme.colors.primary};
                background: ${({ theme }) => 
                  theme.colors.background === '#0a0a0a' 
                    ? 'rgba(14, 165, 233, 0.15)' 
                    : 'rgba(14, 165, 233, 0.1)'};
                transform: translateY(-1px);
              }

              &--danger:hover {
                border-color: ${({ theme }) => theme.colors.error};
                color: ${({ theme }) => theme.colors.error};
                background: ${({ theme }) => 
                  theme.colors.background === '#0a0a0a' 
                    ? 'rgba(239, 68, 68, 0.15)' 
                    : 'rgba(239, 68, 68, 0.1)'};
              }

              &:active {
                transform: translateY(0);
              }
            }
          }
        }
      }
    }
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
      font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
      font-size: ${({ theme }) => theme.typography.fontSize.sm};
      font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
      line-height: ${({ theme }) => theme.typography.lineHeight.normal};
      color: ${({ theme }) => theme.colors.text.secondary};

      .pagination-total {
        font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
        font-size: ${({ theme }) => theme.typography.fontSize.xs};
        font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
        line-height: ${({ theme }) => theme.typography.lineHeight.normal};
        color: ${({ theme }) => theme.colors.text.secondary};
        opacity: 0.7;
      }
    }
  }
`;
