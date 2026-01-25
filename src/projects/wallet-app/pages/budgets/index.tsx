import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { walletApi, handleApiError } from '../../api/walletApi';
import type { Budget } from '../../api/types';
import { Icon } from '../../components/icons';
import { BudgetCard } from './BudgetCard';
import { Button } from '@/components/ui/button';
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
  const hasLoadedRef = useRef(false);

  useEffect(() => {
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

  const handleAddBudget = () => {
    // TODO: Open add budget modal
    alert('Tính năng thêm ngân sách sẽ được implement');
  };

  if (isLoading) {
    return (
      <BudgetsWrapper>
        <h1 className="title">Ngân sách</h1>
        <div className="loading-state">
          <Skeleton className="h-8 w-48 mb-4" />
          <Skeleton className="h-32 w-full" />
        </div>
      </BudgetsWrapper>
    );
  }

  return (
    <BudgetsWrapper>
      <div className="header">
        <h1 className="title">Ngân sách</h1>
        <Button onClick={handleAddBudget} className="gap-2">
          <Icon icon="Add" size={18} color="currentColor" />
          <span>Thêm ngân sách</span>
        </Button>
      </div>

      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {budgets.length === 0 ? (
        <div className="empty-state">
          <p>Chưa có ngân sách nào</p>
          <Button onClick={handleAddBudget} className="gap-2 mt-4">
            Thêm ngân sách đầu tiên
          </Button>
        </div>
      ) : (
        <div className="budgets-list">
          {budgets.map((budget) => (
            <BudgetCard
              key={budget.id || (typeof budget.month === 'string' ? budget.month : '')}
              budget={budget}
              onClick={() => {
                // TODO: Open edit budget modal
              }}
            />
          ))}
        </div>
      )}
    </BudgetsWrapper>
  );
};

const BudgetsWrapper = styled.div`
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
  }

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

  .loading-state {
    padding: ${({ theme }) => theme.spacing[8]};
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

  .budgets-list {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing[4]};
  }
`;

export default Budgets;
