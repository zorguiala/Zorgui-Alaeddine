import { render, screen } from '@testing-library/react';
import { AboutContent } from './index';

describe('AboutContent', () => {
  it('renders about content', () => {
    render(<AboutContent />);
    expect(screen.getByText('About')).toBeInTheDocument();
  });
});

