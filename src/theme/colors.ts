/**
 * Color System - Portfolio Website
 * 
 * File này chứa toàn bộ color system của website.
 * Để thay đổi màu sắc, chỉ cần sửa file này.
 * 
 * Usage:
 * import { colors } from '@/theme/colors';
 * 
 * const StyledComponent = styled.div`
 *   background: ${({ theme }) => theme.colors.background};
 *   color: ${({ theme }) => theme.colors.text.primary};
 * `;
 */

export const colors = {
  // Primary Colors (Blue - có thể đổi sang màu khác)
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9', // Main primary color
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
  },
  
  // Neutral Colors (Grays) - Base cho text và backgrounds
  neutral: {
    50: '#fafafa',   // Lightest gray
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',  // Darkest gray
  },
  
  // Semantic Colors
  success: {
    500: '#10b981', // Green
    600: '#059669',
  },
  
  error: {
    500: '#ef4444', // Red
    600: '#dc2626',
  },
  
  warning: {
    500: '#f59e0b', // Amber
    600: '#d97706',
  },
  
  info: {
    500: '#3b82f6', // Blue
    600: '#2563eb',
  },
} as const;

/**
 * Theme-specific colors
 * Dark theme (default)
 */
export const darkTheme = {
  background: '#0a0a0a',      // Almost black
  surface: '#171717',         // Dark gray surface
  text: {
    primary: '#fafafa',        // Almost white
    secondary: '#a3a3a3',      // Light gray
    muted: '#737373',          // Medium gray
  },
  border: '#262626',           // Dark border
  hover: '#262626',            // Hover state
} as const;

/**
 * Light theme
 */
export const lightTheme = {
  background: '#ffffff',       // White
  surface: '#fafafa',         // Light gray surface
  text: {
    primary: '#171717',        // Almost black
    secondary: '#525252',      // Dark gray
    muted: '#a3a3a3',          // Medium gray
  },
  border: '#e5e5e5',          // Light border
  hover: '#f5f5f5',           // Hover state
} as const;

/**
 * Export combined theme colors
 * Usage trong styled-components theme
 */
export const themeColors = {
  ...colors,
  dark: darkTheme,
  light: lightTheme,
} as const;

/**
 * Type definitions cho TypeScript
 */
export type ColorScale = typeof colors.primary;
export type ThemeColors = typeof themeColors;

/**
 * Helper functions để get colors
 */
export const getPrimaryColor = (shade: keyof ColorScale = 500) => {
  return colors.primary[shade];
};

export const getNeutralColor = (shade: keyof typeof colors.neutral = 500) => {
  return colors.neutral[shade];
};



