/**
 * API Configuration
 * 
 * File này quản lý tất cả API URLs cho các services/modules
 * Không gitignore - commit vào git để team có thể sync
 * 
 * Usage:
 * - Set MODE = 'dev' | 'live' | 'localhost'
 * - Import và sử dụng các constants được export
 */

// ============================================
// Environment Mode
// ============================================
// Change this to switch between environments
// 'dev' | 'live' | 'localhost'
type ApiMode = 'dev' | 'live' | 'localhost';
const MODE: ApiMode = 'live'; // Development mode - using local backend

// ============================================
// Environment Configuration Functions
// ============================================
interface ApiConfig {
  baseApiUrl: string;
  walletApiUrl: string;
  authApiUrl: string;
}

const getDevConfig = (): ApiConfig => {
  const baseApiUrl = 'https://portfolio-be-production-0fa6.up.railway.app';
  return {
    baseApiUrl,
    walletApiUrl: `${baseApiUrl}/api/v1/wallet`,
    authApiUrl: `${baseApiUrl}/api/v1/auth`,
  };
};

const getLiveConfig = (): ApiConfig => {
  const baseApiUrl = 'https://portfolio-be-production-0fa6.up.railway.app';
  return {
    baseApiUrl,
    walletApiUrl: `${baseApiUrl}/api/v1/wallet`,
    authApiUrl: `${baseApiUrl}/api/v1/auth`,
  };
};

const getLocalhostConfig = (): ApiConfig => {
  const baseApiUrl = 'http://localhost:8080';
  return {
    baseApiUrl,
    walletApiUrl: `${baseApiUrl}/api/v1/wallet`,
    authApiUrl: `${baseApiUrl}/api/v1/auth`,
  };
};

// ============================================
// Initialize Configuration
// ============================================
const getConfig = (mode: ApiMode): ApiConfig => {
  switch (mode) {
    case 'dev':
      return getDevConfig();
    case 'live':
      return getLiveConfig();
    case 'localhost':
      return getLocalhostConfig();
    default:
      console.warn(`[API Config] Unknown MODE: ${mode}, using live environment`);
      return getLiveConfig();
  }
};

const config = getConfig(MODE);
const { baseApiUrl, walletApiUrl, authApiUrl } = config;

// ============================================
// Base API Configuration
// ============================================
export const API_CONFIG = {
  MODE,
  BASE_URL: baseApiUrl,
  API_PREFIX: '/api/v1',
  TIMEOUT: 30000, // 30 seconds
} as const;

// ============================================
// Auth Service URLs
// ============================================
export const AUTH_API = {
  BASE_URL: authApiUrl,
  LOGIN: `${authApiUrl}/login`,
  REGISTER: `${authApiUrl}/register`,
  REFRESH_TOKEN: `${authApiUrl}/refresh`,
  LOGOUT: `${authApiUrl}/logout`,
  VERIFY_EMAIL: `${authApiUrl}/verify-email`,
  FORGOT_PASSWORD: `${authApiUrl}/forgot-password`,
  RESET_PASSWORD: `${authApiUrl}/reset-password`,
} as const;

// ============================================
// Wallet Service URLs
// ============================================
export const WALLET_API = {
  BASE_URL: walletApiUrl,
  
  // Accounts
  ACCOUNTS: `${walletApiUrl}/accounts`,
  ACCOUNT_BY_ID: (id: string) => `${walletApiUrl}/accounts/${id}`,
  
  // Categories
  CATEGORIES: `${walletApiUrl}/categories`,
  CATEGORY_BY_ID: (id: string) => `${walletApiUrl}/categories/${id}`,
  
  // Transactions
  TRANSACTIONS: `${walletApiUrl}/transactions`,
  TRANSACTION_BY_ID: (id: string) => `${walletApiUrl}/transactions/${id}`,
  
  // Budgets
  BUDGETS: `${walletApiUrl}/budgets`,
  BUDGET_BY_MONTH: (month: string) => `${walletApiUrl}/budgets/${month}`,
  
  // Reports
  REPORTS_DASHBOARD: `${walletApiUrl}/reports/dashboard`,
} as const;

// ============================================
// Portfolio Service URLs (for future use)
// ============================================
export const PORTFOLIO_API = {
  BASE_URL: `${baseApiUrl}/api/v1/portfolio`,
  CONTACT: `${baseApiUrl}/api/v1/portfolio/contact`,
  PROJECTS: `${baseApiUrl}/api/v1/portfolio/projects`,
} as const;

// ============================================
// File Upload Service URLs
// ============================================
export const FILE_API = {
  BASE_URL: `${baseApiUrl}/api/v1/files`,
  UPLOAD: `${baseApiUrl}/api/v1/files/upload`,
  DELETE: (fileId: string) => `${baseApiUrl}/api/v1/files/${fileId}`,
} as const;

// ============================================
// Health Check
// ============================================
export const HEALTH_CHECK = {
  URL: `${baseApiUrl}/health`,
} as const;

// ============================================
// Debug Helper
// ============================================
if (typeof window !== 'undefined') {
  console.log('[API Config] Environment:', MODE);
  console.log('[API Config] Base URL:', baseApiUrl);
  console.log('[API Config] Auth API:', authApiUrl);
  console.log('[API Config] Wallet API:', walletApiUrl);
}

// Export mode for runtime checks
export const getApiMode = (): ApiMode => MODE;
export const isDevMode = (): boolean => getApiMode() === 'dev';
export const isLiveMode = (): boolean => getApiMode() === 'live';
export const isLocalhostMode = (): boolean => getApiMode() === 'localhost';
