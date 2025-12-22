import { render, screen } from '@testing-library/react';
import { TerminalCard } from './index';

describe('TerminalCard', () => {
  it('renders terminal card with title and children', () => {
    render(
      <TerminalCard title="test.ts">
        <div>Test content</div>
      </TerminalCard>
    );

    expect(screen.getByText('test.ts')).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
});

