import styled from 'styled-components';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Icon } from '../../components/icons';
import type { Liability } from '../../api/types';
import { formatCurrency, formatDate } from '../../utils/formatters';

interface LiabilityCardProps {
  liability: Liability;
  onClick: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const getStatusLabel = (status: string): string => {
  const labels: Record<string, string> = {
    OPEN: 'Mở',
    PARTIALLY_PAID: 'Đã trả một phần',
    PAID: 'Đã trả đủ',
    OVERDUE: 'Quá hạn',
  };
  return labels[status] || status;
};

/**
 * LiabilityCard Component
 * 
 * Card hiển thị thông tin một khoản nợ
 */
export const LiabilityCard = ({ liability, onClick, onEdit, onDelete }: LiabilityCardProps) => {
  return (
    <LiabilityCardWrapper
      className={`liability-card ${liability.isOverdue ? 'liability-card--overdue' : ''}`}
      onClick={onClick}
    >
      <div className="liability-header">
        <h3 className="liability-name">{liability.counterpartyName}</h3>
        <Badge
          variant={liability.status === 'PAID' ? 'default' : liability.isOverdue ? 'destructive' : 'secondary'}
          className={`status-badge status-badge--${liability.status.toLowerCase()}`}
        >
          {getStatusLabel(liability.status)}
        </Badge>
      </div>
      <div className="liability-details">
        <div>Số tiền: {formatCurrency(liability.amount, liability.currency)}</div>
        <div>Đã trả: {formatCurrency(liability.paidAmount ?? 0, liability.currency)}</div>
        <div>Còn lại: {formatCurrency(liability.remainingAmount ?? 0, liability.currency)}</div>
        {liability.dueAt && (
          <div>Hạn thanh toán: {formatDate(liability.dueAt)}</div>
        )}
        {liability.note && <div>Ghi chú: {liability.note}</div>}
      </div>
      <div className="liability-amount">
        {formatCurrency(liability.remainingAmount ?? 0, liability.currency)}
      </div>
      <div className="liability-actions" onClick={(e) => e.stopPropagation()}>
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
    </LiabilityCardWrapper>
  );
};

const LiabilityCardWrapper = styled(Card)`
  padding: ${({ theme }) => theme.spacing[5]};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.primary}80
    );
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover {
    border-color: ${({ theme }) =>
      theme.colors.background === '#0a0a0a'
        ? 'rgba(14, 165, 233, 0.3)'
        : 'rgba(14, 165, 233, 0.2)'};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) =>
      theme.colors.background === '#0a0a0a'
        ? '0 4px 16px rgba(0, 0, 0, 0.4)'
        : '0 4px 16px rgba(0, 0, 0, 0.1)'};

    &::before {
      opacity: 1;
    }
  }

  &--overdue {
    border-color: ${({ theme }) => theme.colors.error || '#ef4444'}40;

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

  .liability-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${({ theme }) => theme.spacing[3]};

    .liability-name {
      font-size: ${({ theme }) => theme.typography.fontSize.lg};
      font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
      color: ${({ theme }) => theme.colors.text.primary};
      margin: 0;
    }

    .status-badge {
      padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
      border-radius: ${({ theme }) => theme.borderRadius.md};
      font-size: ${({ theme }) => theme.typography.fontSize.xs};
      font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
      text-transform: uppercase;
      letter-spacing: 0.5px;

      &--paid {
        background: ${({ theme }) => theme.colors.success?.[500] ? `${theme.colors.success[500]}20` : '#10b98120'};
        color: ${({ theme }) => theme.colors.success?.[500] || '#10b981'};
      }

      &--partially_paid {
        background: ${({ theme }) => theme.colors.warning?.[500] ? `${theme.colors.warning[500]}20` : '#f59e0b20'};
        color: ${({ theme }) => theme.colors.warning?.[500] || '#f59e0b'};
      }

      &--overdue {
        background: ${({ theme }) => theme.colors.error}20;
        color: ${({ theme }) => theme.colors.error};
      }
    }
  }

  .liability-details {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-bottom: ${({ theme }) => theme.spacing[3]};
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing[1]};
  }

  .liability-amount {
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    color: ${({ theme }) => theme.colors.error || '#ef4444'};
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }

  .liability-actions {
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

export default LiabilityCard;
