import 'styled-components';
import { typography } from './typography';
import { spacing } from './spacing';
import { borderRadius } from './borderRadius';
import { shadows } from './shadows';
import { breakpoints } from './breakpoints';
import { components } from './components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      surface: string;
      text: {
        primary: string;
        secondary: string;
        muted: string;
      };
      border: string;
      hover: string;
      primary: string;
      success: string;
      error: string;
      warning: string;
      info: string;
    };
    typography: typeof typography;
    spacing: typeof spacing;
    borderRadius: typeof borderRadius;
    shadows: typeof shadows;
    breakpoints: typeof breakpoints;
    components: typeof components;
  }
}



