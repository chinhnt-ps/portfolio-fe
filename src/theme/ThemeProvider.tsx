import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { colors, darkTheme, lightTheme } from './colors';
import { typography } from './typography';
import { spacing } from './spacing';
import { borderRadius } from './borderRadius';
import { shadows } from './shadows';
import { breakpoints } from './breakpoints';
import { ReactNode } from 'react';

const lightThemeConfig = {
  colors: {
    ...lightTheme,
    primary: colors.primary[500],
    success: colors.success[500],
    error: colors.error[500],
    warning: colors.warning[500],
    info: colors.info[500],
  },
  typography,
  spacing,
  borderRadius,
  shadows,
  breakpoints,
};

const darkThemeConfig = {
  colors: {
    ...darkTheme,
    primary: colors.primary[400],
    success: colors.success[500],
    error: colors.error[500],
    warning: colors.warning[500],
    info: colors.info[500],
  },
  typography,
  spacing,
  borderRadius,
  shadows,
  breakpoints,
};

export const themes = {
  light: lightThemeConfig,
  dark: darkThemeConfig,
};

export type ThemeMode = 'light' | 'dark';

interface ThemeProviderProps {
  children: ReactNode;
  theme: ThemeMode;
}

export const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
  return (
    <StyledThemeProvider theme={themes[theme]}>
      {children}
    </StyledThemeProvider>
  );
};




