import useSWR from 'swr';
import { reportsApi } from '../walletApi';
import type { DashboardReport } from '../types';
import { SWR_KEYS } from './swrConfig';

interface UseReportsOptions {
  period: 'day' | 'week' | 'month';
  startDate?: string;
  endDate?: string;
}

/**
 * useReports Hook
 * 
 * SWR hook cho dashboard reports
 */
export function useReports(options: UseReportsOptions) {
  const { period, startDate, endDate } = options;
  
  // Tạo cache key unique cho mỗi combination
  const cacheKey = `${SWR_KEYS.REPORTS}/${period}?start=${startDate || ''}&end=${endDate || ''}`;
  
  const { 
    data, 
    error, 
    isLoading, 
    isValidating,
    mutate 
  } = useSWR<DashboardReport>(
    cacheKey,
    () => reportsApi.getDashboard(period, startDate, endDate),
    {
      revalidateOnFocus: true,
      dedupingInterval: 10000, // Reports ít thay đổi, cache lâu hơn
    }
  );

  return {
    report: data,
    totalIncome: data?.totalIncome ?? 0,
    totalExpense: data?.totalExpense ?? 0,
    netSavings: data?.netSavings ?? 0,
    accountsOverview: data?.accountsOverview ?? [],
    topCategories: data?.topCategories ?? [],
    isLoading,
    isValidating,
    error,
    refresh: () => mutate(),
  };
}
