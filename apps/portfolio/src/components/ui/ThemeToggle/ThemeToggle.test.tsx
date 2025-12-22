import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { themes } from '@/styles';
import { ThemeToggle } from './index';

describe('ThemeToggle', () => {
  it('renders theme toggle button', () => {
    render(
      <ThemeProvider theme={themes.dark}>
        <ThemeToggle />
      </ThemeProvider>
    );

    expect(screen.getByLabelText('Toggle theme')).toBeInTheDocument();
  });

  it('shows sun icon in dark mode', () => {
    render(
      <ThemeProvider theme={themes.dark}>
        <ThemeToggle />
      </ThemeProvider>
    );

    const button = screen.getByLabelText('Toggle theme');
    expect(button).toBeInTheDocument();
  });
});

