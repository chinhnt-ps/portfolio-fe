import useSWR from 'swr';
import { budgetsApi } from '../walletApi';
import type { Budget, CreateBudgetRequest } from '../types';
import { SWR_KEYS } from './swrConfig';

/**
 * useBudgets Hook
 * 
 * SWR hook cho quản lý budgets
 */
export function useBudgets() {
  const { 
    data, 
    error, 
    isLoading, 
    isValidating,
    mutate 
  } = useSWR<Budget[]>(
    SWR_KEYS.BUDGETS,
    () => budgetsApi.getAll(),
    {
      revalidateOnFocus: true,
      dedupingInterval: 10000,
    }
  );

  const budgets = data ?? [];

  return {
    budgets,
    isLoading,
    isValidating,
    error,
    
    /**
     * Refresh budgets data
     */
    refresh: () => mutate(),

    /**
     * Create or update budget
     */
    async upsertBudget(request: CreateBudgetRequest): Promise<Budget> {
      const budget = await budgetsApi.upsert(request);
      await mutate();
      return budget;
    },

    /**
     * Delete budget
     */
    async deleteBudget(month: string): Promise<void> {
      await budgetsApi.delete(month);
      await mutate();
    },

    /**
     * Get budget by month from cached data
     */
    getBudgetByMonth(month: string): Budget | undefined {
      return budgets.find(b => {
        const budgetMonth = typeof b.month === 'string' 
          ? b.month 
          : `${b.month.year}-${String(b.month.month).padStart(2, '0')}`;
        return budgetMonth === month;
      });
    },
  };
}

/**
 * useBudget Hook
 * 
 * Get single budget by month
 */
export function useBudget(month: string | null) {
  const { 
    data, 
    error, 
    isLoading,
    mutate 
  } = useSWR<Budget | null>(
    month ? `${SWR_KEYS.BUDGETS}/${month}` : null,
    month ? () => budgetsApi.getByMonth(month) : null,
    {
      revalidateOnFocus: false,
    }
  );

  return {
    budget: data,
    isLoading,
    error,
    refresh: () => mutate(),
  };
}
