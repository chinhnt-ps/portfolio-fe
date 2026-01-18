import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import languageReducer from './slices/languageSlice';
import categoriesReducer from './slices/categoriesSlice';
import walletAccountsReducer from './slices/accountsSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer,
    categories: categoriesReducer,
    walletAccounts: walletAccountsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



