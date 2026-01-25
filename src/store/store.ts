import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import languageReducer from './slices/languageSlice';

/**
 * Redux Store Configuration
 * 
 * Note: Wallet App data (accounts, categories, transactions, etc.)
 * are now managed by SWR hooks instead of Redux for better
 * deduplication, caching, and automatic revalidation.
 * 
 * See: src/projects/wallet-app/api/hooks/ for SWR hooks
 */
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



