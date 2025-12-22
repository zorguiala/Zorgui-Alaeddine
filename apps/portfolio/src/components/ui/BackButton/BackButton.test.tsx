import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { themes } from '@/styles';
import { BackButton } from './index';

describe('BackButton', () => {
  it('renders back button', () => {
    render(
      <ThemeProvider theme={themes.dark}>
        <BackButton />
      </ThemeProvider>
    );

    expect(screen.getByText('Back')).toBeInTheDocument();
  });
});

