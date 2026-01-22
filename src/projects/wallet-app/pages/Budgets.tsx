import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { walletApi } from '../api/walletApi';
import { handleApiError } from '../api/walletApi';
import type { Budget } from '../api/types';
import { Icon } from '../components/icons';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';

/**
 * Budgets Page
 * 
 * Quản lý ngân sách theo tháng
 */
export const Budgets = () => {
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Track xem đã gọi API chưa để tránh gọi 2 lần do React Strict Mode
  const hasLoadedRef = useRef(false);

  useEffect(() => {
    // Tránh gọi API 2 lần do React Strict Mode
    if (hasLoadedRef.current) return;
    hasLoadedRef.current = true;
    
    loadBudgets();
  }, []);

  const loadBudgets = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const budgetsData = await walletApi.budgets.getAll();
      setBudgets(budgetsData);
    } catch (err) {
      setError(handleApiError(err));
    } finally {
      setIsLoading(false);
    }
  };

  const formatCurrency = (amount: number, currency: string = 'VND') => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: currency,
    }).format(amount);
  };

  const formatMonth = (month: string | { year?: number; month?: number } | null | undefined) => {
    if (!month) return '';
    
    // Handle YearMonth object from backend (if not serialized as string)
    let monthStr = '';
    if (typeof month === 'string') {
      monthStr = month;
    } else if (typeof month === 'object' && month.year && month.month) {
      // Backend trả về YearMonth object: {year: 2025, month: 1}
      monthStr = `${month.year}-${String(month.month).padStart(2, '0')}`;
    } else {
      return '';
    }
    
    const [year, monthNum] = monthStr.split('-');
    const date = new Date(parseInt(year), parseInt(monthNum) - 1);
    return date.toLocaleDateString('vi-VN', { month: 'long', year: 'numeric' });
  };

  if (isLoading) {
    return (
      <BudgetsWrapper className="budgets-wrapper">
        <h1 className="title">Ngân sách</h1>
        <div className="loading-state">
          <Skeleton className="h-8 w-48 mb-4" />
          <Skeleton className="h-32 w-full" />
        </div>
      </BudgetsWrapper>
    );
  }

  return (
    <BudgetsWrapper className="budgets-wrapper">
      <div className="header">
        <h1 className="title">Ngân sách</h1>
        <Button onClick={() => {
          // TODO: Open add budget modal
          alert('Tính năng thêm ngân sách sẽ được implement');
        }} className="gap-2">
          <Icon icon="Add" size={18} color="currentColor" />
          <span>Thêm ngân sách</span>
        </Button>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {budgets.length === 0 ? (
        <div className="empty-state">
          <p>Chưa có ngân sách nào</p>
          <Button onClick={() => {
            alert('Tính năng thêm ngân sách sẽ được implement');
          }} className="gap-2" style={{ marginTop: '16px' }}>
            Thêm ngân sách đầu tiên
          </Button>
        </div>
      ) : (
        <div className="budgets-list">
          {budgets.map((budget) => {
            // Backend đã tính sẵn percentageUsed và remainingAmount
            const percentage = (budget.percentageUsed ?? 0) || 0;
            const totalAmount = (budget.amount ?? 0) || 0;
            const usedAmount = (budget.usedAmount ?? 0) || 0;
            const remainingAmount = (budget.remainingAmount ?? 0) || 0;
            
            // Handle month - có thể là string hoặc YearMonth object
            const monthValue = budget.month;
            
            return (
              <Card key={budget.id || (typeof monthValue === 'string' ? monthValue : '')} className="budget-card">
                <div className="budget-header">
                  <h3 className="budget-month">{formatMonth(monthValue)}</h3>
                  <div className="budget-amount">
                    {formatCurrency(usedAmount)} / {formatCurrency(totalAmount)}
                  </div>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ 
                      width: `${Math.max(0, Math.min(percentage, 100))}%`,
                      background: percentage >= 100 
                        ? '#ef4444' 
                        : percentage >= 80 
                        ? '#f59e0b' 
                        : undefined
                    }}
                  />
                </div>
                <div className="budget-stats">
                  <span>Đã dùng: {isNaN(percentage) ? '0.0' : percentage.toFixed(1)}%</span>
                  <span>Còn lại: {formatCurrency(remainingAmount)}</span>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </BudgetsWrapper>
  );
};

const BudgetsWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  .title {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    color: ${({ theme }) => theme.colors.text.primary};
    margin: 0;
    letter-spacing: -0.02em;
    line-height: 1.2;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
    }
  }

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
      line-height: 1.2;

      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
      }
    }

    .action-button {
      display: inline-flex;
      align-items: center;
      gap: ${({ theme }) => theme.spacing[2]};
      padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[6]};
      background: ${({ theme }) => theme.colors.primary};
      color: white;
      border: none;
      border-radius: ${({ theme }) => theme.borderRadius.lg};
      font-size: ${({ theme }) => theme.typography.fontSize.base};
      font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
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

  .error-message {
    padding: ${({ theme }) => theme.spacing[3]};
    background: ${({ theme }) => theme.colors.error}20;
    border: 1px solid ${({ theme }) => theme.colors.error};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    color: ${({ theme }) => theme.colors.error};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }

  .loading-state {
    padding: ${({ theme }) => theme.spacing[8]};
    text-align: center;
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  .empty-state {
    padding: ${({ theme }) => theme.spacing[8]};
    text-align: center;
    color: ${({ theme }) => theme.colors.text.secondary};

    .action-button {
      display: inline-flex;
      align-items: center;
      gap: ${({ theme }) => theme.spacing[2]};
      padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[6]};
      background: ${({ theme }) => theme.colors.primary};
      color: white;
      border: none;
      border-radius: ${({ theme }) => theme.borderRadius.lg};
      font-size: ${({ theme }) => theme.typography.fontSize.base};
      font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
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

  .budgets-list {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing[4]};

    .budget-card {
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
        position: relative;

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
    }
  }
`;
