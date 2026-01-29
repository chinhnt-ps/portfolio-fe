import { useMemo } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useWalletAppRouter } from '../../App';
import { useTransactions, useAccounts, useCategories } from '../../api/hooks';
import { formatCurrency, formatDateTime, formatLocalDateTime } from '../../utils/formatters';

interface DateFilter {
  startDate?: string;
  endDate?: string;
  period?: '30days' | 'month' | 'custom';
}

interface RecentTransactionsProps {
  dateFilter: DateFilter;
}

/**
 * RecentTransactions Component
 * 
 * Section 4: Giao dịch gần đây
 */
export const RecentTransactions = ({ dateFilter }: RecentTransactionsProps) => {
  const { t } = useTranslation();
  const { navigate } = useWalletAppRouter();
  
  // Calculate date range
  const dateRange = useMemo(() => {
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

  // SWR hooks
  const { transactions, isLoading } = useTransactions({
    page: 0,
    size: 5,
    sortBy: 'occurredAt',
    sortOrder: 'desc',
    startDate: dateRange.startDate,
    endDate: dateRange.endDate,
  });
  
  const { accounts } = useAccounts();
  const { categories } = useCategories();

  const getAccountName = (accountId: string | undefined) => {
    if (!accountId) return 'N/A';
    return accounts.find(a => a.id === accountId)?.name || accountId;
  };

  const getCategoryName = (categoryId: string | undefined, categoryName?: string) => {
    if (categoryName) return categoryName;
    if (!categoryId) return null;
    return categories.find(c => c.id === categoryId)?.name || null;
  };

  if (isLoading) {
    return (
      <RecentTransactionsWrapper className="recent-transactions">
        <div className="section-header">
          <h2 className="section-title">{t('wallet.dashboard.recentTransactions')}</h2>
        </div>
        <Card>
          <CardContent className="p-6">
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
          </CardContent>
        </Card>
      </RecentTransactionsWrapper>
    );
  }

  return (
    <RecentTransactionsWrapper className="recent-transactions">
      <div className="section-header">
        <h2 className="section-title">{t('wallet.dashboard.recentTransactions')}</h2>
      </div>
      <Card>
        <CardContent className="p-6">
          {transactions.length === 0 ? (
            <div className="empty-state">
              <p>{t('wallet.dashboard.noTransactions')}</p>
              <Button onClick={() => navigate('transactions/add')} className="mt-4">
                {t('wallet.dashboard.addFirstTransaction')}
              </Button>
            </div>
          ) : (
            <div className="transaction-list">
              {transactions.map((transaction) => (
                <div key={transaction.id} className="transaction-card">
                  <div className="transaction-main">
                    <div className="transaction-left">
                      <Badge
                        variant={transaction.type === 'EXPENSE' ? 'destructive' : transaction.type === 'INCOME' ? 'default' : 'secondary'}
                        className={`transaction-type-badge transaction-type-badge--${transaction.type.toLowerCase().replace('_', '-')}`}
                      >
                        {transaction.type === 'EXPENSE' ? t('wallet.transactions.expense') :
                         transaction.type === 'INCOME' ? t('wallet.transactions.income') :
                         transaction.type === 'TRANSFER' ? t('wallet.transactions.transfer') :
                         transaction.type === 'RECEIVABLE_SETTLEMENT' ? t('wallet.transactions.receivableSettlement', 'Thu nợ') :
                         transaction.type === 'LIABILITY_SETTLEMENT' ? t('wallet.transactions.liabilitySettlement', 'Trả nợ') :
                         transaction.type === 'BALANCE_ADJUSTMENT' ? 'Điều chỉnh' :
                         transaction.type}
                      </Badge>
                      <div className="transaction-info">
                        <div className="transaction-category">
                          {getCategoryName(transaction.categoryId, transaction.category?.name) || transaction.type === 'BALANCE_ADJUSTMENT' ? 'Điều chỉnh' : transaction.type}
                        </div>
                        <div className="transaction-meta">
                          <span className="transaction-date">{formatDateTime(transaction.occurredAt)}</span>
                          {transaction.type === 'TRANSFER' ? (
                            <span className="transaction-account">
                              {getAccountName(transaction.fromAccountId)} → {getAccountName(transaction.toAccountId)}
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
    </RecentTransactionsWrapper>
  );
};

const RecentTransactionsWrapper = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing[10]};

  .section-header {
    margin-bottom: ${({ theme }) => theme.spacing[6]};
  }

  .section-title {
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    color: ${({ theme }) => theme.colors.text.primary};
    letter-spacing: -0.01em;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
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
            font-size: ${({ theme }) => theme.typography.fontSize.xs};
            font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
            text-transform: uppercase;
            letter-spacing: 0.5px;
            flex-shrink: 0;
            min-width: 130px;
            justify-content: center;
            align-items: center;

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
              font-size: ${({ theme }) => theme.typography.fontSize.base};
              font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
              color: ${({ theme }) => theme.colors.text.primary};
            }

            .transaction-meta {
              display: flex;
              flex-wrap: wrap;
              gap: ${({ theme }) => theme.spacing[2]};
              font-size: ${({ theme }) => theme.typography.fontSize.base};
              color: ${({ theme }) => theme.colors.text.secondary};
            }

            .transaction-note {
              font-size: ${({ theme }) => theme.typography.fontSize.base};
              color: ${({ theme }) => theme.colors.text.secondary};
              margin-top: ${({ theme }) => theme.spacing[1]};
            }
          }
        }

        .transaction-right {
          display: flex;
          align-items: center;
          flex-shrink: 0;

          .transaction-amount {
            font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
            font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
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
`;

export default RecentTransactions;
