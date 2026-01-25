import useSWR, { useSWRConfig } from 'swr';
import { transactionsApi } from '../walletApi';
import type { 
  Transaction, 
  CreateTransactionRequest, 
  UpdateTransactionRequest,
  TransactionFilters,
  PaginatedResponse 
} from '../types';
import { SWR_KEYS } from './swrConfig';

/**
 * Serialize filters to cache key
 */
function serializeFilters(filters?: TransactionFilters): string {
  if (!filters) return '';
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      params.append(key, String(value));
    }
  });
  return params.toString();
}

/**
 * useTransactions Hook
 * 
 * SWR hook cho quản lý transactions với filters và pagination
 */
export function useTransactions(filters?: TransactionFilters) {
  const { mutate: globalMutate } = useSWRConfig();
  
  const filterString = serializeFilters(filters);
  const cacheKey = filterString 
    ? `${SWR_KEYS.TRANSACTIONS}?${filterString}` 
    : SWR_KEYS.TRANSACTIONS;
  
  const { 
    data, 
    error, 
    isLoading, 
    isValidating,
    mutate 
  } = useSWR<PaginatedResponse<Transaction>>(
    cacheKey,
    () => transactionsApi.getAll(filters),
    {
      revalidateOnFocus: false, // Không revalidate on focus vì data có thể lớn
      dedupingInterval: 3000,
    }
  );

  const transactions = data?.content ?? [];
  const pagination = data ? {
    totalElements: data.totalElements,
    totalPages: data.totalPages,
    page: data.page,
    size: data.size,
    hasNext: data.hasNext,
    hasPrevious: data.hasPrevious,
  } : null;

  return {
    transactions,
    pagination,
    isLoading,
    isValidating,
    error,
    
    /**
     * Refresh transactions data
     */
    refresh: () => mutate(),

    /**
     * Create new transaction
     */
    async createTransaction(request: CreateTransactionRequest): Promise<Transaction> {
      const newTransaction = await transactionsApi.create(request);
      // Invalidate all transaction caches
      await globalMutate((key) => typeof key === 'string' && key.startsWith(SWR_KEYS.TRANSACTIONS));
      // Also invalidate accounts (balance changed) và reports
      await globalMutate(SWR_KEYS.ACCOUNTS);
      await globalMutate((key) => typeof key === 'string' && key.startsWith(SWR_KEYS.REPORTS));
      return newTransaction;
    },

    /**
     * Update existing transaction
     */
    async updateTransaction(id: string, request: UpdateTransactionRequest): Promise<Transaction> {
      const updatedTransaction = await transactionsApi.update(id, request);
      await globalMutate((key) => typeof key === 'string' && key.startsWith(SWR_KEYS.TRANSACTIONS));
      await globalMutate(SWR_KEYS.ACCOUNTS);
      await globalMutate((key) => typeof key === 'string' && key.startsWith(SWR_KEYS.REPORTS));
      return updatedTransaction;
    },

    /**
     * Delete transaction
     */
    async deleteTransaction(id: string): Promise<void> {
      await transactionsApi.delete(id);
      await globalMutate((key) => typeof key === 'string' && key.startsWith(SWR_KEYS.TRANSACTIONS));
      await globalMutate(SWR_KEYS.ACCOUNTS);
      await globalMutate((key) => typeof key === 'string' && key.startsWith(SWR_KEYS.REPORTS));
    },
  };
}

/**
 * useTransaction Hook
 * 
 * Get single transaction by ID
 */
export function useTransaction(id: string | null) {
  const { 
    data, 
    error, 
    isLoading,
    mutate 
  } = useSWR<Transaction>(
    id ? `${SWR_KEYS.TRANSACTIONS}/${id}` : null,
    id ? () => transactionsApi.getById(id) : null,
    {
      revalidateOnFocus: false,
    }
  );

  return {
    transaction: data,
    isLoading,
    error,
    refresh: () => mutate(),
  };
}
