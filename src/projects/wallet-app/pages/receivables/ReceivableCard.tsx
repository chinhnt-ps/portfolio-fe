import styled from 'styled-components';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Icon } from '../../components/icons';
import type { Receivable } from '../../api/types';
import { formatCurrency, formatDate } from '../../utils/formatters';

interface ReceivableCardProps {
  receivable: Receivable;
  onClick: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const getStatusLabel = (status: string): string => {
  const labels: Record<string, string> = {
    OPEN: 'Mở',
    PARTIALLY_PAID: 'Đã thu một phần',
    PAID: 'Đã thu đủ',
    OVERDUE: 'Quá hạn',
  };
  return labels[status] || status;
};

/**
 * ReceivableCard Component
 * 
 * Card hiển thị thông tin một khoản cho vay
 */
export const ReceivableCard = ({ receivable, onClick, onEdit, onDelete }: ReceivableCardProps) => {
  return (
    <ReceivableCardWrapper
      className={`receivable-card ${receivable.isOverdue ? 'receivable-card--overdue' : ''}`}
      onClick={onClick}
    >
      <div className="receivable-header">
        <h3 className="receivable-name">{receivable.counterpartyName}</h3>
        <Badge
          variant={receivable.status === 'PAID' ? 'default' : receivable.isOverdue ? 'destructive' : 'secondary'}
          className={`status-badge status-badge--${receivable.status.toLowerCase()}`}
        >
          {getStatusLabel(receivable.status)}
        </Badge>
      </div>
      <div className="receivable-details">
        <div>Số tiền: {formatCurrency(receivable.amount, receivable.currency)}</div>
        <div>Đã thu: {formatCurrency(receivable.paidAmount ?? 0, receivable.currency)}</div>
        <div>Còn lại: {formatCurrency(receivable.remainingAmount ?? 0, receivable.currency)}</div>
        {receivable.dueAt && (
          <div>Hạn thu: {formatDate(receivable.dueAt)}</div>
        )}
        {receivable.note && <div>Ghi chú: {receivable.note}</div>}
      </div>
      <div className="receivable-amount">
        {formatCurrency(receivable.remainingAmount ?? 0, receivable.currency)}
      </div>
      <div className="receivable-actions" onClick={(e) => e.stopPropagation()}>
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
    </ReceivableCardWrapper>
  );
};

const ReceivableCardWrapper = styled(Card)`
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
      ${({ theme }) => theme.colors.success?.[500] || '#10b981'},
      ${({ theme }) => theme.colors.success?.[500] || '#10b981'}80
    );
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover {
    border-color: ${({ theme }) =>
      theme.colors.background === '#0a0a0a'
        ? 'rgba(16, 185, 129, 0.3)'
        : 'rgba(16, 185, 129, 0.2)'};
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
    border-color: ${({ theme }) => theme.colors.warning?.[500] || '#f59e0b'}40;

    &::before {
      background: linear-gradient(
        90deg,
        ${({ theme }) => theme.colors.warning?.[500] || '#f59e0b'},
        ${({ theme }) => theme.colors.warning?.[500] || '#f59e0b'}80
      );
    }

    &:hover::before {
      opacity: 1;
    }
  }

  .receivable-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${({ theme }) => theme.spacing[3]};

    .receivable-name {
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
        background: ${({ theme }) => theme.colors.primary}20;
        color: ${({ theme }) => theme.colors.primary};
      }

      &--overdue {
        background: ${({ theme }) => theme.colors.warning?.[500] ? `${theme.colors.warning[500]}20` : '#f59e0b20'};
        color: ${({ theme }) => theme.colors.warning?.[500] || '#f59e0b'};
      }
    }
  }

  .receivable-details {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-bottom: ${({ theme }) => theme.spacing[3]};
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing[1]};
  }

  .receivable-amount {
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    color: ${({ theme }) => theme.colors.success?.[500] || '#10b981'};
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }

  .receivable-actions {
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

export default ReceivableCard;
