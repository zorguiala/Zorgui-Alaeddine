import { render, screen } from '@testing-library/react';
import { ContactContent } from './index';

describe('ContactContent', () => {
  it('renders contact content', () => {
    render(<ContactContent />);
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
});

