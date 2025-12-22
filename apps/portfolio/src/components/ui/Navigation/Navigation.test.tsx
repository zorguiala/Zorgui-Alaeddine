import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { themes } from '@/styles';
import { Navigation } from './index';

describe('Navigation', () => {
  it('renders navigation items', () => {
    render(
      <ThemeProvider theme={themes.dark}>
        <Navigation />
      </ThemeProvider>
    );

    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});

