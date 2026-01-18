/**
 * API Response Types
 * 
 * Backend trả về format: { success: boolean, message: string, data: T }
 */

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

/**
 * Auth Types
 */
export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  fullName: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number; // seconds
  user: UserInfo;
}

export interface UserInfo {
  id: string;
  email: string;
  fullName: string;
  status: 'ACTIVE' | 'INACTIVE' | 'LOCKED';
  role: 'USER' | 'ADMIN';
}

export interface RefreshTokenRequest {
  refreshToken: string;
}

/**
 * Account/Wallet Types
 */
export type AccountType = 'CASH' | 'BANK' | 'E_WALLET' | 'OTHER';

export interface Account {
  id: string;
  name: string;
  type: AccountType;
  currency: string;
  openingBalance: number;
  currentBalance: number;
  note?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateAccountRequest {
  name: string;
  type: AccountType;
  currency: string;
  openingBalance: number;
  note?: string;
}

export interface UpdateAccountRequest {
  name?: string;
  type?: AccountType;
  currency?: string;
  note?: string;
}

/**
 * Category Types
 */
export interface Category {
  id: string;
  name: string;
  icon?: string;
  color?: string;
  isSystem: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateCategoryRequest {
  name: string;
  icon?: string;
  color?: string;
}

/**
 * Transaction Types
 */
export type TransactionType = 'EXPENSE' | 'INCOME' | 'TRANSFER';

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  currency: string;
  occurredAt: string; // ISO date string
  categoryId?: string;
  category?: Category;
  accountId: string;
  account?: Account;
  fromAccountId?: string; // For TRANSFER
  toAccountId?: string; // For TRANSFER
  note?: string;
  attachments?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface CreateTransactionRequest {
  type: TransactionType;
  amount: number;
  currency: string;
  occurredAt?: string; // ISO date string, default = now
  categoryId?: string; // nullable for TRANSFER
  accountId: string;
  fromAccountId?: string; // Required for TRANSFER
  toAccountId?: string; // Required for TRANSFER
  note?: string;
  attachments?: string[];
}

export interface UpdateTransactionRequest {
  type?: TransactionType;
  amount?: number;
  currency?: string;
  occurredAt?: string;
  categoryId?: string;
  accountId?: string;
  fromAccountId?: string;
  toAccountId?: string;
  note?: string;
  attachments?: string[];
}

export interface TransactionFilters {
  startDate?: string; // ISO date string
  endDate?: string; // ISO date string
  type?: TransactionType;
  categoryId?: string;
  accountId?: string;
  minAmount?: number;
  maxAmount?: number;
  keyword?: string; // Search in note
  page?: number;
  size?: number;
  sortBy?: 'occurredAt' | 'amount' | 'createdAt';
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  page: number;
  size: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

/**
 * Budget Types
 * 
 * Backend trả về BudgetResponse với:
 * - amount (totalAmount)
 * - usedAmount
 * - remainingAmount
 * - percentageUsed
 * - month (YearMonth - có thể là string "yyyy-MM" hoặc object {year, month})
 * - categoryId (nullable - null = total budget)
 */
export interface Budget {
  id: string;
  month: string | { year: number; month: number }; // YYYY-MM format hoặc YearMonth object
  categoryId?: string | null; // null = total budget
  amount: number; // Backend trả về "amount", không phải "totalAmount"
  usedAmount: number;
  remainingAmount: number; // Backend đã tính sẵn
  percentageUsed: number; // Backend đã tính sẵn
  createdAt: string;
  updatedAt: string;
}

export interface CategoryBudget {
  categoryId: string;
  category?: Category;
  amount: number;
  usedAmount: number;
}

export interface CreateBudgetRequest {
  month: string; // YYYY-MM format
  totalAmount: number;
  categoryBudgets?: Array<{
    categoryId: string;
    amount: number;
  }>;
}

/**
 * Report Types
 */
export interface DashboardReport {
  totalIncome: number;
  totalExpense: number;
  netSavings: number; // Backend trả về netSavings, không phải balance
  accountsOverview?: Array<{
    accountId: string;
    accountName: string;
    balance: number;
  }>;
  topCategories?: Array<{
    categoryId: string;
    categoryName: string;
    totalAmount: number;
    transactionCount: number;
  }>;
}

/**
 * Receivable Types
 */
export type ReceivableStatus = 'OPEN' | 'PARTIALLY_PAID' | 'PAID' | 'OVERDUE';

export interface Receivable {
  id: string;
  counterpartyName: string;
  amount: number;
  currency: string;
  occurredAt: string; // ISO date string
  dueAt?: string; // ISO date string
  status: ReceivableStatus;
  paidAmount: number;
  remainingAmount: number;
  note?: string;
  isOverdue: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateReceivableRequest {
  counterpartyName: string;
  amount: number;
  currency?: string;
  occurredAt?: string; // ISO date string
  dueAt?: string; // ISO date string
  note?: string;
}

export interface UpdateReceivableRequest {
  counterpartyName?: string;
  amount?: number;
  currency?: string;
  occurredAt?: string;
  dueAt?: string;
  status?: ReceivableStatus;
  paidAmount?: number;
  note?: string;
}

/**
 * Liability Types
 */
export type LiabilityStatus = 'OPEN' | 'PARTIALLY_PAID' | 'PAID' | 'OVERDUE';

export interface Liability {
  id: string;
  counterpartyName: string;
  amount: number;
  currency: string;
  occurredAt: string; // ISO date string
  dueAt?: string; // ISO date string
  status: LiabilityStatus;
  paidAmount: number;
  remainingAmount: number;
  note?: string;
  isOverdue: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateLiabilityRequest {
  counterpartyName: string;
  amount: number;
  currency?: string;
  occurredAt?: string; // ISO date string
  dueAt?: string; // ISO date string
  note?: string;
}

export interface UpdateLiabilityRequest {
  counterpartyName?: string;
  amount?: number;
  currency?: string;
  occurredAt?: string;
  dueAt?: string;
  status?: LiabilityStatus;
  paidAmount?: number;
  note?: string;
}

/**
 * Asset Types
 */
export type AssetType = 'CASH' | 'ITEM' | 'DEVICE' | 'OTHER';

export interface Asset {
  id: string;
  name: string;
  type: AssetType;
  estimatedValue?: number; // Backend trả về estimatedValue
  currency: string;
  acquiredAt?: string; // ISO date string - Backend trả về acquiredAt
  note?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateAssetRequest {
  name: string;
  type: AssetType;
  estimatedValue?: number;
  currency?: string;
  acquiredAt?: string; // ISO date string
  note?: string;
}

export interface UpdateAssetRequest {
  name?: string;
  type?: AssetType;
  estimatedValue?: number;
  currency?: string;
  acquiredAt?: string;
  note?: string;
}

/**
 * NLP Types
 */
export type NLPResponseType = 'CONFIRM_DRAFT' | 'SELECT_OPTION' | 'QUERY_RESULT' | 'NEED_MORE_INFO' | 'ERROR';
export type NLPIntent = 'CREATE_TRANSACTION' | 'CREATE_RECEIVABLE' | 'CREATE_LIABILITY' | 'CREATE_SETTLEMENT' | 'QUERY_DATA' | 'UNKNOWN';

export interface ParseTransactionRequest {
  text: string;
  timezone?: string;
  locale?: string;
}

export interface NLPResponse {
  responseType: NLPResponseType;
  intent: NLPIntent;
  confidence: number;
  message: string;
  data: ConfirmDraftData | SelectOptionData | QueryResultData | NeedMoreInfoData | ErrorData;
}

export interface ConfirmDraftData {
  draftType: 'TRANSACTION' | 'RECEIVABLE' | 'LIABILITY' | 'SETTLEMENT';
  draft: TransactionDraft | ReceivableDraft | LiabilityDraft | SettlementDraft;
  needConfirmFields: string[];
  autoFilledFields: Array<{
    field: string;
    value: any;
    confidence: number;
  }>;
}

export interface TransactionDraft {
  type: 'EXPENSE' | 'INCOME' | 'TRANSFER';
  amount: number;
  currency: string;
  occurredAt: string;
  categoryId?: string;
  categoryName?: string;
  accountId?: string;
  accountName?: string;
  fromAccountId?: string;
  fromAccountName?: string;
  toAccountId?: string;
  toAccountName?: string;
  note?: string;
}

export interface ReceivableDraft {
  counterpartyName: string;
  amount: number;
  currency: string;
  occurredAt: string;
  dueAt?: string;
  note?: string;
}

export interface LiabilityDraft {
  counterpartyName: string;
  amount: number;
  currency: string;
  occurredAt: string;
  dueAt?: string;
  note?: string;
}

export interface SettlementDraft {
  type: 'RECEIVABLE' | 'LIABILITY';
  receivableId?: string;
  liabilityId?: string;
  counterpartyName?: string;
  amount: number;
  currency: string;
  accountId?: string;
  accountName?: string;
  settledAt: string;
  note?: string;
}

export type SettlementType = 'RECEIVABLE' | 'LIABILITY';

export interface Settlement {
  id: string;
  type: SettlementType;
  receivableId?: string;
  liabilityId?: string;
  amount: number;
  currency: string;
  occurredAt: string; // ISO date string
  note?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateSettlementRequest {
  type: SettlementType;
  receivableId?: string;
  liabilityId?: string;
  amount: number;
  currency?: string;
  occurredAt?: string; // ISO date string
  note?: string;
}

export interface SelectOptionData {
  question: string;
  options: Array<{
    id: string;
    label: string;
    subLabel?: string;
    data: any;
  }>;
  allowMultiple?: boolean;
  context?: any;
}

export interface QueryResultData {
  queryType: 'SUMMARY' | 'LIST' | 'SINGLE';
  summary?: string;
  breakdown?: Array<{
    label: string;
    value: any;
  }>;
  items?: any[];
  item?: any;
}

export interface NeedMoreInfoData {
  question: string;
  suggestions?: string[];
  inputType: 'TEXT' | 'SELECT' | 'DATE' | 'AMOUNT';
  context?: any;
}

export interface ErrorData {
  code: string;
  message: string;
  details?: string;
}

/**
 * Error Types
 */
export interface ApiError {
  success: false;
  message: string;
  code?: string; // Error code like 'TOKEN_EXPIRED', 'VALIDATION_ERROR', etc.
  errors?: Record<string, string[]>; // Field validation errors
}
