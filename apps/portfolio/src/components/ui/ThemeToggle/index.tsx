import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks';
import { Button } from './styles';

export const ThemeToggle = () => {
  const { toggleTheme, isDark } = useTheme();

  return (
    <Button onClick={toggleTheme} aria-label="Toggle theme">
      {isDark ? <Sun /> : <Moon />}
    </Button>
  );
};

