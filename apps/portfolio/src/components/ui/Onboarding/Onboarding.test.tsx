import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { themes } from '@/styles';
import { Onboarding } from './index';

describe('Onboarding', () => {
  it('renders onboarding modal when visible', () => {
    render(
      <ThemeProvider theme={themes.dark}>
        <Onboarding />
      </ThemeProvider>
    );

    expect(screen.getByText('Welcome to My Portfolio')).toBeInTheDocument();
  });
});

