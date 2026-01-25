import useSWR, { useSWRConfig } from 'swr';
import { receivablesApi } from '../walletApi';
import type { Receivable, CreateReceivableRequest, UpdateReceivableRequest, PaginatedResponse } from '../types';
import { SWR_KEYS } from './swrConfig';

interface UseReceivablesOptions {
  page?: number;
  size?: number;
}

/**
 * useReceivables Hook
 * 
 * SWR hook cho quản lý receivables (khoản cho vay) với pagination
 */
export function useReceivables(options: UseReceivablesOptions = {}) {
  const { page = 0, size = 20 } = options;
  const { mutate: globalMutate } = useSWRConfig();
  
  const cacheKey = `${SWR_KEYS.RECEIVABLES}?page=${page}&size=${size}`;
  
  const { 
    data, 
    error, 
    isLoading, 
    isValidating,
    mutate 
  } = useSWR<PaginatedResponse<Receivable>>(
    cacheKey,
    () => receivablesApi.getAll(page, size),
    {
      revalidateOnFocus: true,
      dedupingInterval: 5000,
    }
  );

  const receivables = data?.content ?? [];
  const pagination = data ? {
    totalElements: data.totalElements,
    totalPages: data.totalPages,
    page: data.page,
    size: data.size,
    hasNext: data.hasNext,
    hasPrevious: data.hasPrevious,
  } : null;

  // Derived data
  const totalReceivables = receivables.reduce((sum, r) => sum + r.remainingAmount, 0);

  return {
    receivables,
    pagination,
    totalReceivables,
    isLoading,
    isValidating,
    error,
    
    /**
     * Refresh receivables data
     */
    refresh: () => mutate(),

    /**
     * Create new receivable
     */
    async createReceivable(request: CreateReceivableRequest): Promise<Receivable> {
      const newReceivable = await receivablesApi.create(request);
      await globalMutate((key) => typeof key === 'string' && key.startsWith(SWR_KEYS.RECEIVABLES));
      return newReceivable;
    },

    /**
     * Update existing receivable
     */
    async updateReceivable(id: string, request: UpdateReceivableRequest): Promise<Receivable> {
      const updatedReceivable = await receivablesApi.update(id, request);
      await globalMutate((key) => typeof key === 'string' && key.startsWith(SWR_KEYS.RECEIVABLES));
      return updatedReceivable;
    },

    /**
     * Delete receivable
     */
    async deleteReceivable(id: string): Promise<void> {
      await receivablesApi.delete(id);
      await globalMutate((key) => typeof key === 'string' && key.startsWith(SWR_KEYS.RECEIVABLES));
    },

    /**
     * Get receivable by ID from cached data
     */
    getReceivableById(id: string): Receivable | undefined {
      return receivables.find(r => r.id === id);
    },
  };
}
