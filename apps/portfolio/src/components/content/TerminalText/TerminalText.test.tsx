import { render, screen, waitFor } from '@testing-library/react';
import { TerminalText } from './index';

describe('TerminalText', () => {
  it('renders terminal text', () => {
    render(<TerminalText lines={['Hello', 'World']} />);
    expect(screen.getByText('>')).toBeInTheDocument();
  });

  it('types out lines', async () => {
    render(<TerminalText lines={['Test']} typingSpeed={10} startDelay={0} />);
    await waitFor(() => {
      expect(screen.getByText(/Test/)).toBeInTheDocument();
    }, { timeout: 1000 });
  });
});

