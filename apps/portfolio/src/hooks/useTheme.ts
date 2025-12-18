import { useAppStore } from '@/stores';
import { themes } from '@/styles';

export const useTheme = () => {
  const theme = useAppStore((state) => state.theme);
  const toggleTheme = useAppStore((state) => state.toggleTheme);

  return {
    theme,
    themeConfig: themes[theme],
    toggleTheme,
    isDark: theme === 'dark',
  };
};

