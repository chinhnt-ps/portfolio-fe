import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { walletApi } from '@/projects/wallet-app/api/walletApi';
import type { Category } from '@/projects/wallet-app/api/types';

interface CategoriesState {
  items: Category[];
  isLoading: boolean;
  error: string | null;
  lastFetched: number | null; // timestamp
}

const initialState: CategoriesState = {
  items: [],
  isLoading: false,
  error: null,
  lastFetched: null,
};

// Thunk để fetch categories
export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      const categories = await walletApi.categories.getAll();
      return categories;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to fetch categories');
    }
  }
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<Category>) => {
      state.items.push(action.payload);
    },
    updateCategory: (state, action: PayloadAction<Category>) => {
      const index = state.items.findIndex((cat) => cat.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    removeCategory: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((cat) => cat.id !== action.payload);
    },
    clearCategories: (state) => {
      state.items = [];
      state.lastFetched = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.lastFetched = Date.now();
        state.error = null;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { addCategory, updateCategory, removeCategory, clearCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
