import useSWR, { useSWRConfig } from 'swr';
import { categoriesApi } from '../walletApi';
import type { Category, CreateCategoryRequest } from '../types';
import { SWR_KEYS } from './swrConfig';

/**
 * useCategories Hook
 * 
 * SWR hook cho quản lý categories
 * Thay thế Redux categoriesSlice với automatic caching và deduplication
 */
export function useCategories() {
  const { mutate: globalMutate } = useSWRConfig();
  
  const { 
    data, 
    error, 
    isLoading, 
    isValidating,
    mutate 
  } = useSWR<Category[]>(
    SWR_KEYS.CATEGORIES,
    () => categoriesApi.getAll(),
    {
      revalidateOnFocus: true,
      dedupingInterval: 10000, // Categories ít thay đổi, cache lâu hơn
    }
  );

  const categories = data ?? [];

  return {
    categories,
    isLoading,
    isValidating,
    error,
    
    /**
     * Refresh categories data
     */
    refresh: () => mutate(),

    /**
     * Create new category
     */
    async createCategory(request: CreateCategoryRequest): Promise<Category> {
      const newCategory = await categoriesApi.create(request);
      await mutate();
      return newCategory;
    },

    /**
     * Update existing category
     */
    async updateCategory(id: string, request: CreateCategoryRequest): Promise<Category> {
      const updatedCategory = await categoriesApi.update(id, request);
      await mutate();
      // Invalidate transactions vì category name có thể thay đổi
      globalMutate((key) => typeof key === 'string' && key.startsWith(SWR_KEYS.TRANSACTIONS));
      return updatedCategory;
    },

    /**
     * Delete category
     */
    async deleteCategory(id: string): Promise<void> {
      await categoriesApi.delete(id);
      await mutate();
    },

    /**
     * Get category by ID from cached data
     */
    getCategoryById(id: string): Category | undefined {
      return categories.find(cat => cat.id === id);
    },
  };
}
