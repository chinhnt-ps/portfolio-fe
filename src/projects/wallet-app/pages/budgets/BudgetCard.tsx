import styled from 'styled-components';
import { Card } from '@/components/ui/card';
import type { Budget } from '../../api/types';
import { formatCurrency } from '../../utils/formatters';

interface BudgetCardProps {
  budget: Budget;
  onClick?: () => void;
}

const formatMonth = (month: string | { year?: number; month?: number } | null | undefined): string => {
  if (!month) return '';
  
  let monthStr = '';
  if (typeof month === 'string') {
    monthStr = month;
  } else if (typeof month === 'object' && month.year && month.month) {
    monthStr = `${month.year}-${String(month.month).padStart(2, '0')}`;
  } else {
    return '';
  }
  
  const [year, monthNum] = monthStr.split('-');
  const date = new Date(parseInt(year), parseInt(monthNum) - 1);
  return date.toLocaleDateString('vi-VN', { month: 'long', year: 'numeric' });
};

/**
 * BudgetCard Component
 * 
 * Card hiển thị thông tin ngân sách theo tháng
 */
export const BudgetCard = ({ budget, onClick }: BudgetCardProps) => {
  const percentage = (budget.percentageUsed ?? 0) || 0;
  const totalAmount = (budget.amount ?? 0) || 0;
  const usedAmount = (budget.usedAmount ?? 0) || 0;
  const remainingAmount = (budget.remainingAmount ?? 0) || 0;

  const getProgressColor = () => {
    if (percentage >= 100) return '#ef4444';
    if (percentage >= 80) return '#f59e0b';
    return undefined;
  };

  return (
    <BudgetCardWrapper onClick={onClick}>
      <div className="budget-header">
        <h3 className="budget-month">{formatMonth(budget.month)}</h3>
        <div className="budget-amount">
          {formatCurrency(usedAmount)} / {formatCurrency(totalAmount)}
        </div>
      </div>
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ 
            width: `${Math.max(0, Math.min(percentage, 100))}%`,
            background: getProgressColor()
          }}
        />
      </div>
      <div className="budget-stats">
        <span>Đã dùng: {isNaN(percentage) ? '0.0' : percentage.toFixed(1)}%</span>
        <span>Còn lại: {formatCurrency(remainingAmount)}</span>
      </div>
    </BudgetCardWrapper>
  );
};

const BudgetCardWrapper = styled(Card)`
  padding: ${({ theme }) => theme.spacing[6]};
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
    padding: ${({ theme }) => theme.spacing[8]};
  }

  .budget-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${({ theme }) => theme.spacing[4]};

    .budget-month {
      font-size: ${({ theme }) => theme.typography.fontSize.lg};
      font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
      color: ${({ theme }) => theme.colors.text.primary};
      margin: 0;
    }

    .budget-amount {
      font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
      font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
      color: ${({ theme }) => theme.colors.text.primary};
    }
  }

  .progress-bar {
    width: 100%;
    height: 10px;
    background: ${({ theme }) =>
      theme.colors.background === '#0a0a0a'
        ? 'rgba(255, 255, 255, 0.1)'
        : 'rgba(0, 0, 0, 0.1)'};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    overflow: hidden;
    margin: ${({ theme }) => theme.spacing[6]} 0;

    .progress-fill {
      height: 100%;
      background: ${({ theme }) => theme.colors.primary};
      transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      border-radius: ${({ theme }) => theme.borderRadius.full};
      position: relative;
      overflow: hidden;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        animation: shimmer 2s infinite;
      }

      @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
    }
  }

  .budget-stats {
    display: flex;
    justify-content: space-between;
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export default BudgetCard;
