import useSWR, { useSWRConfig } from 'swr';
import { liabilitiesApi } from '../walletApi';
import type { Liability, CreateLiabilityRequest, UpdateLiabilityRequest, PaginatedResponse } from '../types';
import { SWR_KEYS } from './swrConfig';

interface UseLiabilitiesOptions {
  page?: number;
  size?: number;
}

/**
 * useLiabilities Hook
 * 
 * SWR hook cho quản lý liabilities (khoản nợ) với pagination
 */
export function useLiabilities(options: UseLiabilitiesOptions = {}) {
  const { page = 0, size = 20 } = options;
  const { mutate: globalMutate } = useSWRConfig();
  
  const cacheKey = `${SWR_KEYS.LIABILITIES}?page=${page}&size=${size}`;
  
  const { 
    data, 
    error, 
    isLoading, 
    isValidating,
    mutate 
  } = useSWR<PaginatedResponse<Liability>>(
    cacheKey,
    () => liabilitiesApi.getAll(page, size),
    {
      revalidateOnFocus: true,
      dedupingInterval: 5000,
    }
  );

  const liabilities = data?.content ?? [];
  const pagination = data ? {
    totalElements: data.totalElements,
    totalPages: data.totalPages,
    page: data.page,
    size: data.size,
    hasNext: data.hasNext,
    hasPrevious: data.hasPrevious,
  } : null;

  // Derived data
  const totalLiabilities = liabilities.reduce((sum, l) => sum + l.remainingAmount, 0);

  return {
    liabilities,
    pagination,
    totalLiabilities,
    isLoading,
    isValidating,
    error,
    
    /**
     * Refresh liabilities data
     */
    refresh: () => mutate(),

    /**
     * Create new liability
     */
    async createLiability(request: CreateLiabilityRequest): Promise<Liability> {
      const newLiability = await liabilitiesApi.create(request);
      await globalMutate((key) => typeof key === 'string' && key.startsWith(SWR_KEYS.LIABILITIES));
      return newLiability;
    },

    /**
     * Update existing liability
     */
    async updateLiability(id: string, request: UpdateLiabilityRequest): Promise<Liability> {
      const updatedLiability = await liabilitiesApi.update(id, request);
      await globalMutate((key) => typeof key === 'string' && key.startsWith(SWR_KEYS.LIABILITIES));
      return updatedLiability;
    },

    /**
     * Delete liability
     */
    async deleteLiability(id: string): Promise<void> {
      await liabilitiesApi.delete(id);
      await globalMutate((key) => typeof key === 'string' && key.startsWith(SWR_KEYS.LIABILITIES));
    },

    /**
     * Get liability by ID from cached data
     */
    getLiabilityById(id: string): Liability | undefined {
      return liabilities.find(l => l.id === id);
    },
  };
}
