import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { themes } from '@/styles';
import { SocialLinks } from './index';

describe('SocialLinks', () => {
  it('renders social links', () => {
    render(
      <ThemeProvider theme={themes.dark}>
        <SocialLinks />
      </ThemeProvider>
    );

    expect(screen.getByLabelText('GitHub')).toBeInTheDocument();
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('has correct href attributes', () => {
    render(
      <ThemeProvider theme={themes.dark}>
        <SocialLinks />
      </ThemeProvider>
    );

    const githubLink = screen.getByLabelText('GitHub');
    const linkedinLink = screen.getByLabelText('LinkedIn');
    const emailLink = screen.getByLabelText('Email');

    expect(githubLink).toHaveAttribute('href', expect.stringContaining('github.com'));
    expect(linkedinLink).toHaveAttribute('href', expect.stringContaining('linkedin.com'));
    expect(emailLink).toHaveAttribute('href', expect.stringContaining('mailto:'));
  });
});

