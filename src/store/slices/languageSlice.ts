import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Language = 'vi' | 'en';

interface LanguageState {
  current: Language;
}

const initialState: LanguageState = {
  current: (localStorage.getItem('language') as Language) || 'en',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.current = action.payload;
      localStorage.setItem('language', action.payload);
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;



