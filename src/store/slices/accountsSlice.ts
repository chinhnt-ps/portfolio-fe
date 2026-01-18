import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { walletApi } from '@/projects/wallet-app/api/walletApi';
import type { Account } from '@/projects/wallet-app/api/types';

interface WalletAccountsState {
  items: Account[];
  isLoading: boolean;
  error: string | null;
  lastFetched: number | null; // timestamp
}

const initialState: WalletAccountsState = {
  items: [],
  isLoading: false,
  error: null,
  lastFetched: null,
};

// Thunk để fetch wallet accounts
export const fetchWalletAccounts = createAsyncThunk(
  'walletAccounts/fetchWalletAccounts',
  async (_, { rejectWithValue }) => {
    try {
      const accounts = await walletApi.accounts.getAll();
      return accounts;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to fetch wallet accounts');
    }
  }
);

const walletAccountsSlice = createSlice({
  name: 'walletAccounts',
  initialState,
  reducers: {
    addWalletAccount: (state, action: PayloadAction<Account>) => {
      state.items.push(action.payload);
    },
    updateWalletAccount: (state, action: PayloadAction<Account>) => {
      const index = state.items.findIndex((acc) => acc.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    removeWalletAccount: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((acc) => acc.id !== action.payload);
    },
    clearWalletAccounts: (state) => {
      state.items = [];
      state.lastFetched = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWalletAccounts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchWalletAccounts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.lastFetched = Date.now();
        state.error = null;
      })
      .addCase(fetchWalletAccounts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { addWalletAccount, updateWalletAccount, removeWalletAccount, clearWalletAccounts } = walletAccountsSlice.actions;
export default walletAccountsSlice.reducer;
