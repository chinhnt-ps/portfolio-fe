import { css } from 'styled-components';
import { colors } from '@/theme/colors';

/**
 * Custom Scrollbar Styles
 * 
 * Tạo scrollbar đẹp, hiện đại, phù hợp với theme
 * Áp dụng cho tất cả các scrollable elements
 */
export const customScrollbar = css`
  /* Webkit browsers (Chrome, Safari, Edge) */
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => {
      // Dark theme: sử dụng neutral[600]
      if (theme.colors.background === '#0a0a0a' || (typeof theme.colors.background === 'string' && theme.colors.background.includes('0a0a0a'))) {
        return colors.neutral[600];
      }
      // Light theme: sử dụng neutral[400]
      return colors.neutral[400];
    }};
    border-radius: 4px;
    transition: background 0.2s ease;

    &:hover {
      background: ${({ theme }) => {
        // Dark theme: sử dụng neutral[500]
        if (theme.colors.background === '#0a0a0a' || (typeof theme.colors.background === 'string' && theme.colors.background.includes('0a0a0a'))) {
          return colors.neutral[500];
        }
        // Light theme: sử dụng neutral[500]
        return colors.neutral[500];
      }};
    }
  }

  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => {
    const thumbColor = theme.colors.background === '#0a0a0a' || (typeof theme.colors.background === 'string' && theme.colors.background.includes('0a0a0a'))
      ? colors.neutral[600]
      : colors.neutral[400];
    return `${thumbColor} ${theme.colors.background}`;
  }};
`;
