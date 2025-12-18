import { Theme } from '@/types';

export interface ThemeColors {
  bg: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  text: {
    primary: string;
    secondary: string;
    muted: string;
  };
  accent: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  glow: {
    primary: string;
    secondary: string;
  };
  border: string;
  overlay: string;
}

export interface ThemeConfig {
  name: Theme;
  colors: ThemeColors;
  shadows: {
    sm: string;
    md: string;
    glow: string;
  };
}

export const themes: Record<Theme, ThemeConfig> = {
  dark: {
    name: 'dark',
    colors: {
      bg: {
        primary: '#0a0a0f',
        secondary: '#12121a',
        tertiary: '#1a1a24',
      },
      text: {
        primary: '#e8e8e8',
        secondary: '#a0a0a0',
        muted: '#666666',
      },
      accent: {
        primary: '#00ff88',
        secondary: '#ff6b35',
        tertiary: '#00d4ff',
      },
      glow: {
        primary: 'rgba(0, 255, 136, 0.4)',
        secondary: 'rgba(255, 107, 53, 0.3)',
      },
      border: 'rgba(255, 255, 255, 0.1)',
      overlay: 'rgba(0, 0, 0, 0.85)',
    },
    shadows: {
      sm: '0 2px 8px rgba(0, 0, 0, 0.3)',
      md: '0 4px 20px rgba(0, 0, 0, 0.4)',
      glow: '0 0 20px rgba(0, 255, 136, 0.3)',
    },
  },
  light: {
    name: 'light',
    colors: {
      bg: {
        primary: '#f8f9fa',
        secondary: '#ffffff',
        tertiary: '#e9ecef',
      },
      text: {
        primary: '#1a1a2e',
        secondary: '#4a4a5a',
        muted: '#888888',
      },
      accent: {
        primary: '#00aa55',
        secondary: '#e55a2b',
        tertiary: '#0099cc',
      },
      glow: {
        primary: 'rgba(0, 170, 85, 0.25)',
        secondary: 'rgba(229, 90, 43, 0.2)',
      },
      border: 'rgba(0, 0, 0, 0.1)',
      overlay: 'rgba(255, 255, 255, 0.92)',
    },
    shadows: {
      sm: '0 2px 8px rgba(0, 0, 0, 0.08)',
      md: '0 4px 20px rgba(0, 0, 0, 0.12)',
      glow: '0 0 20px rgba(0, 170, 85, 0.2)',
    },
  },
};

