import axios, { AxiosInstance, AxiosError, InternalAxiosRequestConfig } from 'axios';
import type {
  ApiResponse,
  LoginRequest,
  RegisterRequest,
  VerifyEmailRequest,
  AuthResponse,
  RefreshTokenRequest,
  Account,
  CreateAccountRequest,
  UpdateAccountRequest,
  Category,
  CreateCategoryRequest,
  Transaction,
  CreateTransactionRequest,
  UpdateTransactionRequest,
  TransactionFilters,
  PaginatedResponse,
  Budget,
  CreateBudgetRequest,
  DashboardReport,
  Receivable,
  CreateReceivableRequest,
  UpdateReceivableRequest,
  Liability,
  CreateLiabilityRequest,
  UpdateLiabilityRequest,
  Asset,
  CreateAssetRequest,
  UpdateAssetRequest,
  NLPResponse,
  Settlement,
  CreateSettlementRequest,
} from './types';

/**
 * API Client Configuration
 * 
 * Sử dụng api.config.ts để quản lý URLs
 * File config.ts không gitignore, có thể commit vào git
 */
import { API_CONFIG, AUTH_API } from '@/config/api.config';

const API_BASE_URL = API_CONFIG.BASE_URL;
const API_PREFIX = API_CONFIG.API_PREFIX;

// Token storage keys
const ACCESS_TOKEN_KEY = 'wallet_app_access_token';
const REFRESH_TOKEN_KEY = 'wallet_app_refresh_token';

/**
 * Token Management
 */
export const tokenStorage = {
  getAccessToken: (): string | null => {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  },
  setAccessToken: (token: string): void => {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
  },
  getRefreshToken: (): string | null => {
    return localStorage.getItem(REFRESH_TOKEN_KEY);
  },
  setRefreshToken: (token: string): void => {
    localStorage.setItem(REFRESH_TOKEN_KEY, token);
  },
  clearTokens: (): void => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  },
};

/**
 * Create Axios Instance
 */
const createApiClient = (): AxiosInstance => {
  const client = axios.create({
    baseURL: `${API_BASE_URL}${API_PREFIX}`,
    timeout: API_CONFIG.TIMEOUT,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Request Interceptor: Add JWT token to headers
  client.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = tokenStorage.getAccessToken();
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );

  // Response Interceptor: Handle token refresh và errors
  client.interceptors.response.use(
    (response) => response,
    async (error: AxiosError<ApiResponse<null>>) => {
      const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

      // Handle 401 Unauthorized - Token expired
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        const refreshToken = tokenStorage.getRefreshToken();
        if (refreshToken) {
          try {
            // Try to refresh token
            const response = await axios.post<ApiResponse<AuthResponse>>(
              AUTH_API.REFRESH_TOKEN,
              { refreshToken } as RefreshTokenRequest
            );

            if (response.data.success && response.data.data) {
              const { accessToken, refreshToken: newRefreshToken } = response.data.data;
              tokenStorage.setAccessToken(accessToken);
              tokenStorage.setRefreshToken(newRefreshToken);

              // Retry original request với new token
              if (originalRequest.headers) {
                originalRequest.headers.Authorization = `Bearer ${accessToken}`;
              }
              return client(originalRequest);
            }
          } catch (refreshError) {
            // Refresh failed - clear tokens và redirect to login
            tokenStorage.clearTokens();
            // TODO: Trigger logout event hoặc redirect to login
            window.location.hash = '#login';
            return Promise.reject(refreshError);
          }
        } else {
          // No refresh token - clear và redirect to login
          tokenStorage.clearTokens();
          window.location.hash = '#login';
        }
      }

      return Promise.reject(error);
    }
  );

  return client;
};

// Export API client instance
export const apiClient = createApiClient();

/**
 * Error Handler Helper
 */
export const handleApiError = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<ApiResponse<null>>;
    
    // Backend error response
    if (axiosError.response?.data) {
      return axiosError.response.data.message || 'Có lỗi xảy ra';
    }
    
    // Network error
    if (axiosError.request) {
      return 'Không thể kết nối đến server. Vui lòng kiểm tra kết nối mạng.';
    }
    
    // Request setup error
    return axiosError.message || 'Có lỗi xảy ra khi gửi request';
  }
  
  // Unknown error
  return 'Có lỗi không xác định xảy ra';
};

/**
 * Transform backend pagination response to frontend format
 * Backend trả về: { content, pageable: { pageNumber }, number, first, last, totalPages, totalElements, size }
 * Frontend cần: { content, page, hasNext, hasPrevious, totalPages, totalElements, size }
 */
const transformPaginatedResponse = <T>(backendData: any): PaginatedResponse<T> => {
  const pageNumber = backendData.pageable?.pageNumber ?? backendData.number ?? 0;
  const isFirst = backendData.first ?? false;
  const isLast = backendData.last ?? false;
  
  return {
    content: backendData.content || [],
    totalElements: backendData.totalElements || 0,
    totalPages: backendData.totalPages || 0,
    page: pageNumber,
    size: backendData.size || backendData.pageable?.pageSize || 20,
    hasNext: !isLast,
    hasPrevious: !isFirst,
  };
};

/**
 * Auth API
 */
export const authApi = {
  /**
   * Login với email và password
   */
  login: async (credentials: LoginRequest): Promise<AuthResponse> => {
    const response = await apiClient.post<ApiResponse<AuthResponse>>(
      '/auth/login',
      credentials
    );
    
    if (response.data.success && response.data.data) {
      const authData = response.data.data;
      if (authData.accessToken) {
        tokenStorage.setAccessToken(authData.accessToken);
      }
      if (authData.refreshToken) {
        tokenStorage.setRefreshToken(authData.refreshToken);
      }
      return authData;
    }
    
    throw new Error(response.data.message || 'Đăng nhập thất bại');
  },

  /**
   * Register new user
   */
  register: async (data: RegisterRequest): Promise<AuthResponse> => {
    const response = await apiClient.post<ApiResponse<AuthResponse>>(
      '/auth/register',
      data
    );
    
    if (response.data.success && response.data.data) {
      return response.data.data;
    }
    
    throw new Error(response.data.message || 'Đăng ký thất bại');
  },

  /**
   * Verify email với mã xác nhận
   */
  verifyEmail: async (data: VerifyEmailRequest): Promise<AuthResponse> => {
    const response = await apiClient.post<ApiResponse<AuthResponse>>(
      '/auth/verify-email',
      data
    );
    
    if (response.data.success && response.data.data) {
      const authData = response.data.data;
      // Nếu có token trong response, lưu vào storage
      if (authData.accessToken) {
        tokenStorage.setAccessToken(authData.accessToken);
      }
      if (authData.refreshToken) {
        tokenStorage.setRefreshToken(authData.refreshToken);
      }
      return authData;
    }
    
    throw new Error(response.data.message || 'Xác nhận email thất bại');
  },

  /**
   * Refresh access token
   */
  refreshToken: async (refreshToken: string): Promise<AuthResponse> => {
    const response = await apiClient.post<ApiResponse<AuthResponse>>(
      AUTH_API.REFRESH_TOKEN.replace(API_BASE_URL + API_PREFIX, ''),
      { refreshToken } as RefreshTokenRequest
    );
    
    if (response.data.success && response.data.data) {
      const authData = response.data.data;
      if (authData.accessToken) {
        tokenStorage.setAccessToken(authData.accessToken);
      }
      if (authData.refreshToken) {
        tokenStorage.setRefreshToken(authData.refreshToken);
      }
      return authData;
    }
    
    throw new Error(response.data.message || 'Refresh token thất bại');
  },

  /**
   * Logout
   */
  logout: async (): Promise<void> => {
    const refreshToken = tokenStorage.getRefreshToken();
    if (refreshToken) {
      try {
        await apiClient.post<ApiResponse<void>>('/auth/logout', {
          refreshToken,
        });
      } catch (error) {
        // Log error nhưng vẫn clear tokens
        console.error('Logout error:', error);
      }
    }
    
    tokenStorage.clearTokens();
  },
};

/**
 * Accounts API
 */
export const accountsApi = {
  /**
   * Get all accounts
   * Backend trả về paginated response, extract content array
   */
  getAll: async (): Promise<Account[]> => {
    const response = await apiClient.get<ApiResponse<PaginatedResponse<Account>>>('/wallet/accounts');
    
    if (response.data.success && response.data.data) {
      // Backend trả về Page object, extract content array
      return response.data.data.content || [];
    }
    
    throw new Error(response.data.message || 'Lấy danh sách tài khoản thất bại');
  },

  /**
   * Get account by ID
   */
  getById: async (id: string): Promise<Account> => {
    const response = await apiClient.get<ApiResponse<Account>>(`/wallet/accounts/${id}`);
    
    if (response.data.success && response.data.data) {
      return response.data.data;
    }
    
    throw new Error(response.data.message || 'Lấy thông tin tài khoản thất bại');
  },

  /**
   * Create new account
   */
  create: async (data: CreateAccountRequest): Promise<Account> => {
    const response = await apiClient.post<ApiResponse<Account>>(
      '/wallet/accounts',
      data
    );
    
    if (response.data.success && response.data.data) {
      return response.data.data;
    }
    
    throw new Error(response.data.message || 'Tạo tài khoản thất bại');
  },

  /**
   * Update account
   */
  update: async (id: string, data: UpdateAccountRequest): Promise<Account> => {
    const response = await apiClient.put<ApiResponse<Account>>(
      `/wallet/accounts/${id}`,
      data
    );
    
    if (response.data.success && response.data.data) {
      return response.data.data;
    }
    
    throw new Error(response.data.message || 'Cập nhật tài khoản thất bại');
  },

  /**
   * Delete account (soft delete)
   */
  delete: async (id: string): Promise<void> => {
    const response = await apiClient.delete<ApiResponse<void>>(`/wallet/accounts/${id}`);
    
    if (!response.data.success) {
      throw new Error(response.data.message || 'Xóa tài khoản thất bại');
    }
  },
};

/**
 * Categories API
 */
export const categoriesApi = {
  /**
   * Get all categories
   */
  getAll: async (): Promise<Category[]> => {
    const response = await apiClient.get<ApiResponse<Category[]>>('/wallet/categories');
    
    if (response.data.success && response.data.data) {
      return response.data.data;
    }
    
    throw new Error(response.data.message || 'Lấy danh sách danh mục thất bại');
  },

  /**
   * Create new category
   */
  create: async (data: CreateCategoryRequest): Promise<Category> => {
    const response = await apiClient.post<ApiResponse<Category>>(
      '/wallet/categories',
      data
    );
    
    if (response.data.success && response.data.data) {
      return response.data.data;
    }
    
    throw new Error(response.data.message || 'Tạo danh mục thất bại');
  },

  /**
   * Update category
   */
  update: async (id: string, data: CreateCategoryRequest): Promise<Category> => {
    const response = await apiClient.put<ApiResponse<Category>>(
      `/wallet/categories/${id}`,
      data
    );
    
    if (response.data.success && response.data.data) {
      return response.data.data;
    }
    
    throw new Error(response.data.message || 'Cập nhật danh mục thất bại');
  },

  /**
   * Delete category
   */
  delete: async (id: string): Promise<void> => {
    const response = await apiClient.delete<ApiResponse<void>>(`/wallet/categories/${id}`);
    
    if (!response.data.success) {
      throw new Error(response.data.message || 'Xóa danh mục thất bại');
    }
  },
};

/**
 * Transactions API
 */
export const transactionsApi = {
  /**
   * Get transactions with filters và pagination
   */
  getAll: async (filters?: TransactionFilters): Promise<PaginatedResponse<Transaction>> => {
    const params = new URLSearchParams();
    
    if (filters) {
      if (filters.startDate) params.append('startDate', filters.startDate);
      if (filters.endDate) params.append('endDate', filters.endDate);
      if (filters.type) params.append('type', filters.type);
      if (filters.categoryId) params.append('categoryId', filters.categoryId);
      if (filters.accountId) params.append('accountId', filters.accountId);
      if (filters.minAmount) params.append('minAmount', filters.minAmount.toString());
      if (filters.maxAmount) params.append('maxAmount', filters.maxAmount.toString());
      if (filters.keyword) params.append('keyword', filters.keyword);
      if (filters.page) params.append('page', filters.page.toString());
      if (filters.size) params.append('size', filters.size.toString());
      if (filters.sortBy) params.append('sortBy', filters.sortBy);
      if (filters.sortOrder) params.append('sortOrder', filters.sortOrder);
    }
    
    const response = await apiClient.get<ApiResponse<any>>(
      `/wallet/transactions?${params.toString()}`
    );
    
    if (response.data.success && response.data.data) {
      return transformPaginatedResponse<Transaction>(response.data.data);
    }
    
    throw new Error(response.data.message || 'Lấy danh sách giao dịch thất bại');
  },

  /**
   * Get transaction by ID
   */
  getById: async (id: string): Promise<Transaction> => {
    const response = await apiClient.get<ApiResponse<Transaction>>(`/wallet/transactions/${id}`);
    
    if (response.data.success && response.data.data) {
      return response.data.data;
    }
    
    throw new Error(response.data.message || 'Lấy thông tin giao dịch thất bại');
  },

  /**
   * Create new transaction
   */
  create: async (data: CreateTransactionRequest): Promise<Transaction> => {
    const response = await apiClient.post<ApiResponse<Transaction>>(
      '/wallet/transactions',
      data
    );
    
    if (response.data.success && response.data.data) {
      return response.data.data;
    }
    
    throw new Error(response.data.message || 'Tạo giao dịch thất bại');
  },

  /**
   * Update transaction
   */
  update: async (id: string, data: UpdateTransactionRequest): Promise<Transaction> => {
    const response = await apiClient.put<ApiResponse<Transaction>>(
      `/wallet/transactions/${id}`,
      data
    );
    
    if (response.data.success && response.data.data) {
      return response.data.data;
    }
    
    throw new Error(response.data.message || 'Cập nhật giao dịch thất bại');
  },

  /**
   * Delete transaction
   */
  delete: async (id: string): Promise<void> => {
    const response = await apiClient.delete<ApiResponse<void>>(`/wallet/transactions/${id}`);
    
    if (!response.data.success) {
      throw new Error(response.data.message || 'Xóa giao dịch thất bại');
    }
  },
};

/**
 * Budgets API
 */
export const budgetsApi = {
  /**
   * Get all budgets
   * Backend trả về paginated response, extract content array
   */
  getAll: async (): Promise<Budget[]> => {
    const response = await apiClient.get<ApiResponse<PaginatedResponse<Budget>>>('/wallet/budgets');
    
    if (response.data.success && response.data.data) {
      // Backend trả về Page object, extract content array
      return response.data.data.content || [];
    }
    
    throw new Error(response.data.message || 'Lấy danh sách ngân sách thất bại');
  },

  /**
   * Get budget by month (YYYY-MM)
   */
  getByMonth: async (month: string): Promise<Budget | null> => {
    const response = await apiClient.get<ApiResponse<Budget>>(`/wallet/budgets/${month}`);
    
    if (response.data.success) {
      return response.data.data || null;
    }
    
    throw new Error(response.data.message || 'Lấy thông tin ngân sách thất bại');
  },

  /**
   * Create or update budget
   */
  upsert: async (data: CreateBudgetRequest): Promise<Budget> => {
    const response = await apiClient.post<ApiResponse<Budget>>(
      '/wallet/budgets',
      data
    );
    
    if (response.data.success && response.data.data) {
      return response.data.data;
    }
    
    throw new Error(response.data.message || 'Tạo/cập nhật ngân sách thất bại');
  },

  /**
   * Delete budget
   */
  delete: async (month: string): Promise<void> => {
    const response = await apiClient.delete<ApiResponse<void>>(`/wallet/budgets/${month}`);
    
    if (!response.data.success) {
      throw new Error(response.data.message || 'Xóa ngân sách thất bại');
    }
  },
};

/**
 * Reports API
 */
export const reportsApi = {
  /**
   * Get dashboard report
   */
  getDashboard: async (
    period: 'day' | 'week' | 'month',
    startDate?: string,
    endDate?: string
  ): Promise<DashboardReport> => {
    const params = new URLSearchParams();
    params.append('period', period);
    if (startDate) params.append('startDate', startDate);
    if (endDate) params.append('endDate', endDate);
    
    const response = await apiClient.get<ApiResponse<DashboardReport>>(
      `/wallet/reports/dashboard?${params.toString()}`
    );
    
    if (response.data.success && response.data.data) {
      return response.data.data;
    }
    
    throw new Error(response.data.message || 'Lấy báo cáo dashboard thất bại');
  },
};

/**
 * Settlements API
 */
export const settlementsApi = {
  /**
   * Create new settlement
   */
  create: async (data: CreateSettlementRequest): Promise<Settlement> => {
    const response = await apiClient.post<ApiResponse<Settlement>>(
      '/wallet/settlements',
      data
    );
    
    if (response.data.success && response.data.data) {
      return response.data.data;
    }
    
    throw new Error(response.data.message || 'Tạo thanh toán thất bại');
  },
  /**
   * Get settlements by receivableId
   */
  getByReceivableId: async (receivableId: string): Promise<Settlement[]> => {
    const response = await apiClient.get<ApiResponse<Settlement[]>>(
      `/wallet/settlements/receivable/${receivableId}`,
    );

    if (response.data.success && response.data.data) {
      return response.data.data;
    }

    throw new Error(response.data.message || 'Lấy lịch sử thanh toán cho khoản cho vay thất bại');
  },
  /**
   * Get settlements by liabilityId
   */
  getByLiabilityId: async (liabilityId: string): Promise<Settlement[]> => {
    const response = await apiClient.get<ApiResponse<Settlement[]>>(
      `/wallet/settlements/liability/${liabilityId}`,
    );

    if (response.data.success && response.data.data) {
      return response.data.data;
    }

    throw new Error(response.data.message || 'Lấy lịch sử trả nợ thất bại');
  },
};

/**
 * NLP API
 */
export const nlpApi = {
  /**
   * Parse transaction text using AI
   */
  parseTransaction: async (
    text: string,
    timezone?: string,
    locale?: string
  ): Promise<NLPResponse> => {
    const response = await apiClient.post<ApiResponse<NLPResponse>>(
      '/nlp/parse-transaction',
      {
        text,
        timezone: timezone || 'Asia/Ho_Chi_Minh',
        locale: locale || 'vi-VN',
      }
    );
    
    if (response.data.success && response.data.data) {
      return response.data.data;
    }
    
    throw new Error(response.data.message || 'Phân tích lệnh thất bại');
  },
};

/**
 * Receivables API
 */
export const receivablesApi = {
  /**
   * Get all receivables (paginated)
   */
  getAll: async (page: number = 0, size: number = 20): Promise<PaginatedResponse<Receivable>> => {
    const response = await apiClient.get<ApiResponse<any>>(
      `/wallet/receivables?page=${page}&size=${size}`
    );
    
    if (response.data.success && response.data.data) {
      return transformPaginatedResponse<Receivable>(response.data.data);
    }
    
    throw new Error(response.data.message || 'Lấy danh sách khoản cho vay thất bại');
  },

  /**
   * Get receivable by ID
   */
  getById: async (id: string): Promise<Receivable> => {
    const response = await apiClient.get<ApiResponse<Receivable>>(`/wallet/receivables/${id}`);
    
    if (response.data.success && response.data.data) {
      return response.data.data;
    }
    
    throw new Error(response.data.message || 'Lấy thông tin khoản cho vay thất bại');
  },

  /**
   * Create new receivable
   */
  create: async (data: CreateReceivableRequest): Promise<Receivable> => {
    const response = await apiClient.post<ApiResponse<Receivable>>(
      '/wallet/receivables',
      data
    );
    
    if (response.data.success && response.data.data) {
      return response.data.data;
    }
    
    throw new Error(response.data.message || 'Tạo khoản cho vay thất bại');
  },

  /**
   * Update receivable
   */
  update: async (id: string, data: UpdateReceivableRequest): Promise<Receivable> => {
    const response = await apiClient.put<ApiResponse<Receivable>>(
      `/wallet/receivables/${id}`,
      data
    );
    
    if (response.data.success && response.data.data) {
      return response.data.data;
    }
    
    throw new Error(response.data.message || 'Cập nhật khoản cho vay thất bại');
  },

  /**
   * Delete receivable
   */
  delete: async (id: string): Promise<void> => {
    const response = await apiClient.delete<ApiResponse<void>>(`/wallet/receivables/${id}`);
    
    if (!response.data.success) {
      throw new Error(response.data.message || 'Xóa khoản cho vay thất bại');
    }
  },
};

/**
 * Liabilities API
 */
export const liabilitiesApi = {
  /**
   * Get all liabilities (paginated)
   */
  getAll: async (page: number = 0, size: number = 20): Promise<PaginatedResponse<Liability>> => {
    const response = await apiClient.get<ApiResponse<any>>(
      `/wallet/liabilities?page=${page}&size=${size}`
    );
    
    if (response.data.success && response.data.data) {
      return transformPaginatedResponse<Liability>(response.data.data);
    }
    
    throw new Error(response.data.message || 'Lấy danh sách khoản nợ thất bại');
  },

  /**
   * Get liability by ID
   */
  getById: async (id: string): Promise<Liability> => {
    const response = await apiClient.get<ApiResponse<Liability>>(`/wallet/liabilities/${id}`);
    
    if (response.data.success && response.data.data) {
      return response.data.data;
    }
    
    throw new Error(response.data.message || 'Lấy thông tin khoản nợ thất bại');
  },

  /**
   * Create new liability
   */
  create: async (data: CreateLiabilityRequest): Promise<Liability> => {
    const response = await apiClient.post<ApiResponse<Liability>>(
      '/wallet/liabilities',
      data
    );
    
    if (response.data.success && response.data.data) {
      return response.data.data;
    }
    
    throw new Error(response.data.message || 'Tạo khoản nợ thất bại');
  },

  /**
   * Update liability
   */
  update: async (id: string, data: UpdateLiabilityRequest): Promise<Liability> => {
    const response = await apiClient.put<ApiResponse<Liability>>(
      `/wallet/liabilities/${id}`,
      data
    );
    
    if (response.data.success && response.data.data) {
      return response.data.data;
    }
    
    throw new Error(response.data.message || 'Cập nhật khoản nợ thất bại');
  },

  /**
   * Delete liability
   */
  delete: async (id: string): Promise<void> => {
    const response = await apiClient.delete<ApiResponse<void>>(`/wallet/liabilities/${id}`);
    
    if (!response.data.success) {
      throw new Error(response.data.message || 'Xóa khoản nợ thất bại');
    }
  },
};

/**
 * Assets API
 */
export const assetsApi = {
  /**
   * Get all assets (paginated)
   */
  getAll: async (page: number = 0, size: number = 20): Promise<PaginatedResponse<Asset>> => {
    const response = await apiClient.get<ApiResponse<any>>(
      `/wallet/assets?page=${page}&size=${size}`
    );
    
    if (response.data.success && response.data.data) {
      return transformPaginatedResponse<Asset>(response.data.data);
    }
    
    throw new Error(response.data.message || 'Lấy danh sách tài sản thất bại');
  },

  /**
   * Get asset by ID
   */
  getById: async (id: string): Promise<Asset> => {
    const response = await apiClient.get<ApiResponse<Asset>>(`/wallet/assets/${id}`);
    
    if (response.data.success && response.data.data) {
      return response.data.data;
    }
    
    throw new Error(response.data.message || 'Lấy thông tin tài sản thất bại');
  },

  /**
   * Get total asset value
   */
  getTotalValue: async (): Promise<number> => {
    const response = await apiClient.get<ApiResponse<number>>(
      '/wallet/assets/total-value'
    );
    
    if (response.data.success && response.data.data !== undefined) {
      if (typeof response.data.data === 'number') {
        return response.data.data;
      }
      const value = String(response.data.data);
      return parseFloat(value) || 0;
    }
    
    throw new Error(response.data.message || 'Lấy tổng giá trị tài sản thất bại');
  },

  /**
   * Create new asset
   */
  create: async (data: CreateAssetRequest): Promise<Asset> => {
    const response = await apiClient.post<ApiResponse<Asset>>(
      '/wallet/assets',
      data
    );
    
    if (response.data.success && response.data.data) {
      return response.data.data;
    }
    
    throw new Error(response.data.message || 'Tạo tài sản thất bại');
  },

  /**
   * Update asset
   */
  update: async (id: string, data: UpdateAssetRequest): Promise<Asset> => {
    const response = await apiClient.put<ApiResponse<Asset>>(
      `/wallet/assets/${id}`,
      data
    );
    
    if (response.data.success && response.data.data) {
      return response.data.data;
    }
    
    throw new Error(response.data.message || 'Cập nhật tài sản thất bại');
  },

  /**
   * Delete asset
   */
  delete: async (id: string): Promise<void> => {
    const response = await apiClient.delete<ApiResponse<void>>(`/wallet/assets/${id}`);
    
    if (!response.data.success) {
      throw new Error(response.data.message || 'Xóa tài sản thất bại');
    }
  },
};

// Export all APIs
export const walletApi = {
  auth: authApi,
  accounts: accountsApi,
  categories: categoriesApi,
  transactions: transactionsApi,
  budgets: budgetsApi,
  reports: reportsApi,
  receivables: receivablesApi,
  liabilities: liabilitiesApi,
  assets: assetsApi,
  settlements: settlementsApi,
  nlp: nlpApi,
};

export default walletApi;
