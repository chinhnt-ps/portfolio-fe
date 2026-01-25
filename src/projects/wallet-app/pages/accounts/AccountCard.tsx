import styled from 'styled-components';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Icon } from '../../components/icons';
import type { Account, AccountType } from '../../api/types';
import { formatCurrency } from '../../utils/formatters';
import { cardBase, cardHover } from '../../styles/mixins';

interface AccountCardProps {
  account: Account;
  onClick?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

const getTypeLabel = (type: AccountType): string => {
  const labels: Record<AccountType, string> = {
    CASH: 'Tiền mặt',
    BANK: 'Ngân hàng',
    E_WALLET: 'Ví điện tử',
    SAVINGS: 'Tiết kiệm',
    INVESTMENT: 'Đầu tư',
    POSTPAID: 'Trả sau',
    OTHER: 'Khác',
  };
  return labels[type] || type;
};

const isPostpaid = (account: Account): boolean => {
  return account.type === 'POSTPAID';
};

/**
 * AccountCard Component
 * 
 * Card hiển thị thông tin một tài khoản
 */
export const AccountCard = ({ account, onClick, onEdit, onDelete }: AccountCardProps) => {
  return (
    <AccountCardWrapper
      className={`account-card ${isPostpaid(account) ? 'account-card--postpaid' : ''}`}
      onClick={onClick}
    >
      <div className="account-header">
        <h3 className="account-name">{account.name}</h3>
        <span className={`account-type ${isPostpaid(account) ? 'account-type--postpaid' : ''}`}>
          {getTypeLabel(account.type)}
        </span>
      </div>
      
      {isPostpaid(account) ? (
        <>
          <div className="account-balance account-balance--debt">
            <span className="balance-label">Dư nợ:</span>
            {formatCurrency(account.currentDebt ?? 0, account.currency)}
          </div>
          {account.creditLimit != null && (
            <div className="account-limit">
              <span>Hạn mức còn lại: </span>
              {formatCurrency(account.availableLimit ?? 0, account.currency)}
              <span className="limit-total"> / {formatCurrency(account.creditLimit, account.currency)}</span>
            </div>
          )}
        </>
      ) : (
        <div className="account-balance">
          {formatCurrency(account.currentBalance ?? account.openingBalance ?? 0, account.currency)}
        </div>
      )}
      
      <div className="account-details">
        <div>Tiền tệ: {account.currency}</div>
        {account.note && <div>{account.note}</div>}
      </div>
      
      <div className="account-actions" onClick={(e) => e.stopPropagation()}>
        <Button
          variant="ghost"
          size="icon"
          className="icon-button"
          onClick={onEdit}
          title="Sửa"
        >
          <Icon icon="Edit" size={16} color="currentColor" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="icon-button"
          onClick={onDelete}
          title="Xóa"
        >
          <Icon icon="Delete" size={16} color="currentColor" />
        </Button>
      </div>
    </AccountCardWrapper>
  );
};

const AccountCardWrapper = styled(Card)`
  ${cardBase}
  ${cardHover}

  &--postpaid {
    &::before {
      background: linear-gradient(
        90deg,
        ${({ theme }) => theme.colors.error || '#ef4444'},
        ${({ theme }) => theme.colors.error || '#ef4444'}80
      );
    }

    &:hover::before {
      opacity: 1;
    }
  }

  .account-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${({ theme }) => theme.spacing[4]};

    .account-name {
      font-size: ${({ theme }) => theme.typography.fontSize.lg};
      font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
      color: ${({ theme }) => theme.colors.text.primary};
      margin: 0;
    }

    .account-type {
      padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
      background: ${({ theme }) =>
        theme.colors.background === '#0a0a0a'
          ? 'rgba(14, 165, 233, 0.2)'
          : 'rgba(14, 165, 233, 0.1)'};
      color: ${({ theme }) => theme.colors.primary};
      border-radius: ${({ theme }) => theme.borderRadius.md};
      font-size: ${({ theme }) => theme.typography.fontSize.xs};
      font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
      text-transform: uppercase;
      letter-spacing: 0.5px;

      &--postpaid {
        background: ${({ theme }) =>
          theme.colors.background === '#0a0a0a'
            ? 'rgba(239, 68, 68, 0.2)'
            : 'rgba(239, 68, 68, 0.1)'};
        color: ${({ theme }) => theme.colors.error || '#ef4444'};
      }
    }
  }

  .account-balance {
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: ${({ theme }) => theme.spacing[2]};

    &--debt {
      color: ${({ theme }) => theme.colors.error || '#ef4444'};

      .balance-label {
        font-size: ${({ theme }) => theme.typography.fontSize.sm};
        font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
        color: ${({ theme }) => theme.colors.text.secondary};
        margin-right: ${({ theme }) => theme.spacing[2]};
      }
    }
  }

  .account-limit {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-bottom: ${({ theme }) => theme.spacing[2]};

    .limit-total {
      color: ${({ theme }) => theme.colors.text.muted || theme.colors.text.secondary};
      opacity: 0.7;
    }
  }

  .account-details {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }

  .account-actions {
    display: flex;
    gap: ${({ theme }) => theme.spacing[2]};

    .icon-button {
      width: 36px;
      height: 36px;
      border-radius: ${({ theme }) => theme.borderRadius.lg};
      color: ${({ theme }) => theme.colors.text.secondary};

      &:hover {
        background: ${({ theme }) =>
          theme.colors.background === '#0a0a0a'
            ? 'rgba(255, 255, 255, 0.1)'
            : 'rgba(0, 0, 0, 0.05)'};
        color: ${({ theme }) => theme.colors.text.primary};
      }
    }
  }
`;

export default AccountCard;
