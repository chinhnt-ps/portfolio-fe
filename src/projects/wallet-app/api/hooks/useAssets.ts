import useSWR, { useSWRConfig } from 'swr';
import { assetsApi } from '../walletApi';
import type { Asset, CreateAssetRequest, UpdateAssetRequest, PaginatedResponse } from '../types';
import { SWR_KEYS } from './swrConfig';

interface UseAssetsOptions {
  page?: number;
  size?: number;
}

/**
 * useAssets Hook
 * 
 * SWR hook cho quản lý assets với pagination
 */
export function useAssets(options: UseAssetsOptions = {}) {
  const { page = 0, size = 20 } = options;
  const { mutate: globalMutate } = useSWRConfig();
  
  const cacheKey = `${SWR_KEYS.ASSETS}?page=${page}&size=${size}`;
  
  const { 
    data, 
    error, 
    isLoading, 
    isValidating,
    mutate 
  } = useSWR<PaginatedResponse<Asset>>(
    cacheKey,
    () => assetsApi.getAll(page, size),
    {
      revalidateOnFocus: true,
      dedupingInterval: 5000,
    }
  );

  const assets = data?.content ?? [];
  const pagination = data ? {
    totalElements: data.totalElements,
    totalPages: data.totalPages,
    page: data.page,
    size: data.size,
    hasNext: data.hasNext,
    hasPrevious: data.hasPrevious,
  } : null;

  return {
    assets,
    pagination,
    isLoading,
    isValidating,
    error,
    
    /**
     * Refresh assets data
     */
    refresh: () => mutate(),

    /**
     * Create new asset
     */
    async createAsset(request: CreateAssetRequest): Promise<Asset> {
      const newAsset = await assetsApi.create(request);
      // Invalidate all asset pages
      await globalMutate((key) => typeof key === 'string' && key.startsWith(SWR_KEYS.ASSETS));
      return newAsset;
    },

    /**
     * Update existing asset
     */
    async updateAsset(id: string, request: UpdateAssetRequest): Promise<Asset> {
      const updatedAsset = await assetsApi.update(id, request);
      await globalMutate((key) => typeof key === 'string' && key.startsWith(SWR_KEYS.ASSETS));
      return updatedAsset;
    },

    /**
     * Delete asset
     */
    async deleteAsset(id: string): Promise<void> {
      await assetsApi.delete(id);
      await globalMutate((key) => typeof key === 'string' && key.startsWith(SWR_KEYS.ASSETS));
    },

    /**
     * Get asset by ID (fetches from API)
     */
    async getAssetById(id: string): Promise<Asset> {
      return assetsApi.getById(id);
    },
  };
}

/**
 * useAssetsTotalValue Hook
 * 
 * Separate hook cho total value để tránh refetch khi không cần thiết
 */
export function useAssetsTotalValue() {
  const { 
    data, 
    error, 
    isLoading,
    mutate 
  } = useSWR<number>(
    `${SWR_KEYS.ASSETS}/total-value`,
    () => assetsApi.getTotalValue(),
    {
      revalidateOnFocus: true,
      dedupingInterval: 10000,
    }
  );

  return {
    totalValue: data ?? 0,
    isLoading,
    error,
    refresh: () => mutate(),
  };
}
