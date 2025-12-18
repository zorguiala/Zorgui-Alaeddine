import styled from 'styled-components';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks';

const Button = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.bg.secondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 100;
  box-shadow: ${({ theme }) => theme.shadows.md};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent.primary};
    box-shadow: ${({ theme }) => theme.shadows.glow};
    transform: scale(1.05);
  }

  svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.colors.accent.primary};
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: rotate(15deg);
  }
`;

export const ThemeToggle = () => {
  const { toggleTheme, isDark } = useTheme();

  return (
    <Button onClick={toggleTheme} aria-label="Toggle theme">
      {isDark ? <Sun /> : <Moon />}
    </Button>
  );
};

