import { SWRConfiguration } from 'swr';
import { handleApiError } from '../walletApi';

/**
 * SWR Global Configuration
 * 
 * Cấu hình này áp dụng cho tất cả các SWR hooks trong wallet-app
 */
export const swrConfig: SWRConfiguration = {
  // Tự động revalidate khi user focus vào window
  revalidateOnFocus: true,
  
  // Tự động revalidate khi reconnect internet
  revalidateOnReconnect: true,
  
  // Deduplication interval - không gọi API lại trong khoảng thời gian này
  dedupingInterval: 5000, // 5 giây
  
  // Số lần retry khi gặp lỗi
  errorRetryCount: 3,
  
  // Không revalidate khi mount nếu đã có data trong cache
  revalidateIfStale: true,
  
  // Error handler mặc định
  onError: (error) => {
    const message = handleApiError(error);
    console.error('[SWR Error]:', message);
  },
  
  // Focus throttle - tránh revalidate quá nhiều khi focus window liên tục
  focusThrottleInterval: 5000,
};

/**
 * SWR Keys - Các key dùng để cache
 * Sử dụng consistent keys giúp invalidation dễ dàng hơn
 */
export const SWR_KEYS = {
  ACCOUNTS: 'wallet/accounts',
  CATEGORIES: 'wallet/categories',
  TRANSACTIONS: 'wallet/transactions',
  ASSETS: 'wallet/assets',
  RECEIVABLES: 'wallet/receivables',
  LIABILITIES: 'wallet/liabilities',
  BUDGETS: 'wallet/budgets',
  REPORTS: 'wallet/reports',
} as const;
