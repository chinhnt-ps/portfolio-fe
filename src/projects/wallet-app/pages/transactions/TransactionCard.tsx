import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Icon } from '../../components/icons';
import type { Transaction, Account, Category } from '../../api/types';
import { formatCurrency, formatDateTime } from '../../utils/formatters';

interface TransactionCardProps {
  transaction: Transaction;
  accounts: Account[];
  categories: Category[];
  onEdit: (transaction: Transaction) => void;
  onDelete: (transaction: Transaction) => void;
}

/**
 * TransactionCard Component
 * 
 * Card hiển thị thông tin một giao dịch
 */
export const TransactionCard = ({
  transaction,
  accounts,
  categories,
  onEdit,
  onDelete,
}: TransactionCardProps) => {
  const { t } = useTranslation();

  const getAccountName = (accountId: string | undefined) => {
    if (!accountId) return 'N/A';
    return accounts.find(a => a.id === accountId)?.name || accountId;
  };

  const getCategoryName = () => {
    if (transaction.category?.name) return transaction.category.name;
    if (transaction.categoryId) {
      return categories.find(c => c.id === transaction.categoryId)?.name || null;
    }
    return null;
  };

  const getTypeBadgeVariant = () => {
    switch (transaction.type) {
      case 'EXPENSE':
      case 'LIABILITY_SETTLEMENT':
        return 'destructive';
      case 'INCOME':
      case 'RECEIVABLE_SETTLEMENT':
        return 'default';
      case 'BALANCE_ADJUSTMENT':
        return 'secondary';
      default:
        return 'secondary';
    }
  };

  const getTypeLabel = () => {
    switch (transaction.type) {
      case 'EXPENSE':
        return t('wallet.transactions.expense');
      case 'INCOME':
        return t('wallet.transactions.income');
      case 'TRANSFER':
        return t('wallet.transactions.transfer');
      case 'RECEIVABLE_SETTLEMENT':
        return t('wallet.transactions.receivableSettlement', 'Thu nợ');
      case 'LIABILITY_SETTLEMENT':
        return t('wallet.transactions.liabilitySettlement', 'Trả nợ');
      case 'BALANCE_ADJUSTMENT':
        return 'Điều chỉnh';
      default:
        return transaction.type;
    }
  };

  const getAmountPrefix = () => {
    if (transaction.type === 'EXPENSE' || transaction.type === 'LIABILITY_SETTLEMENT') {
      return '-';
    }
    if (transaction.type === 'INCOME' || transaction.type === 'RECEIVABLE_SETTLEMENT') {
      return '+';
    }
    return '';
  };

  return (
    <TransactionCardWrapper onClick={() => onEdit(transaction)}>
      <div className="transaction-main">
        <div className="transaction-left">
          <Badge
            variant={getTypeBadgeVariant()}
            className={`transaction-type-badge transaction-type-badge--${transaction.type.toLowerCase().replace('_', '-')}`}
          >
            {getTypeLabel()}
          </Badge>
          <div className="transaction-info">
            <div className="transaction-category">
              {getCategoryName() || getTypeLabel()}
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
              {getAmountPrefix()}
              {formatCurrency(transaction.amount, transaction.currency)}
            </div>
            <div className="transaction-actions" onClick={(e) => e.stopPropagation()}>
              <Button
                variant="ghost"
                size="icon"
                className="icon-button"
                onClick={() => onEdit(transaction)}
                title={t('wallet.common.edit')}
              >
                <Icon icon="Edit" size={16} color="currentColor" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="icon-button icon-button--danger"
                onClick={() => onDelete(transaction)}
                title={t('wallet.common.delete')}
              >
                <Icon icon="Delete" size={16} color="currentColor" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </TransactionCardWrapper>
  );
};

const TransactionCardWrapper = styled.div`
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
        font-size: ${({ theme }) => theme.typography.fontSize.xs};
        font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
        text-transform: uppercase;
        letter-spacing: 0.5px;
        flex-shrink: 0;
        min-width: 130px;
        justify-content: center;

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

        &--receivable-settlement {
          background: ${({ theme }) => theme.colors.success?.[500] ? `${theme.colors.success[500]}20` : '#10b98120'};
          color: ${({ theme }) => theme.colors.success?.[500] || '#10b981'};
        }

        &--liability-settlement {
          background: ${({ theme }) => theme.colors.warning?.[500] ? `${theme.colors.warning[500]}20` : '#f59e0b20'};
          color: ${({ theme }) => theme.colors.warning?.[500] || '#f59e0b'};
        }

        &--balance-adjust {
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
      gap: ${({ theme }) => theme.spacing[3]};
      flex-shrink: 0;

      .transaction-amount-wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: ${({ theme }) => theme.spacing[2]};
      }

      .transaction-amount {
        font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
        font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
        color: ${({ theme }) => theme.colors.text.secondary};
        text-align: right;

        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
          font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
        }

        &--income, &--receivable_settlement {
          color: ${({ theme }) => theme.colors.success?.[500] || '#10b981'};
        }

        &--expense {
          color: ${({ theme }) => theme.colors.error || '#ef4444'};
        }

        &--liability_settlement {
          color: ${({ theme }) => theme.colors.warning?.[500] || '#f59e0b'};
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
        }
      }
    }
  }
`;

export default TransactionCard;
