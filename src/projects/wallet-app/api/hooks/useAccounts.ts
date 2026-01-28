import useSWR, { useSWRConfig } from 'swr';
import { accountsApi } from '../walletApi';
import type { Account, CreateAccountRequest, UpdateAccountRequest } from '../types';
import { SWR_KEYS } from './swrConfig';

/**
 * useAccounts Hook
 * 
 * SWR hook cho quản lý accounts
 * Thay thế Redux accountsSlice với automatic caching và deduplication
 */
export function useAccounts() {
  const { mutate: globalMutate } = useSWRConfig();
  
  const { 
    data, 
    error, 
    isLoading, 
    isValidating,
    mutate 
  } = useSWR<Account[]>(
    SWR_KEYS.ACCOUNTS,
    () => accountsApi.getAll(),
    {
      // Keep stale data while revalidating
      revalidateOnFocus: true,
      dedupingInterval: 5000,
    }
  );

  const accounts = data ?? [];

  // Derived data
  const totalBalance = accounts.reduce((sum, acc) => {
    if (acc.type === 'POSTPAID') {
      return sum - (acc.currentDebt ?? 0);
    }
    return sum + acc.currentBalance;
  }, 0);

  return {
    accounts,
    isLoading,
    isValidating,
    error,
    totalBalance,
    
    /**
     * Refresh accounts data
     */
    refresh: () => mutate(),

    /**
     * Create new account
     */
    async createAccount(request: CreateAccountRequest): Promise<Account> {
      const newAccount = await accountsApi.create(request);
      // Revalidate to update cache
      await mutate();
      // Also invalidate dashboard reports
      globalMutate((key) => typeof key === 'string' && key.startsWith(SWR_KEYS.REPORTS));
      return newAccount;
    },

    /**
     * Update existing account
     */
    async updateAccount(id: string, request: UpdateAccountRequest): Promise<Account> {
      const updatedAccount = await accountsApi.update(id, request);
      await mutate();
      globalMutate((key) => typeof key === 'string' && key.startsWith(SWR_KEYS.REPORTS));
      return updatedAccount;
    },

    /**
     * Delete account
     */
    async deleteAccount(id: string): Promise<void> {
      await accountsApi.delete(id);
      await mutate();
      globalMutate((key) => typeof key === 'string' && key.startsWith(SWR_KEYS.REPORTS));
    },

    /**
     * Adjust account balance to match actual balance
     */
    async adjustAccountBalance(id: string, actualBalance: number, note?: string): Promise<Account> {
      const updated = await accountsApi.adjustBalance(id, actualBalance, note);
      await mutate();
      // Điều chỉnh số dư ảnh hưởng đến báo cáo và giao dịch
      await globalMutate((key) => typeof key === 'string' && key.startsWith(SWR_KEYS.TRANSACTIONS));
      await globalMutate((key) => typeof key === 'string' && key.startsWith(SWR_KEYS.REPORTS));
      return updated;
    },

    /**
     * Get account by ID from cached data
     */
    getAccountById(id: string): Account | undefined {
      return accounts.find(acc => acc.id === id);
    },
  };
}
