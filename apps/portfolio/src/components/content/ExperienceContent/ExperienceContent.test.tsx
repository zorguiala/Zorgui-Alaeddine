import { render, screen } from '@testing-library/react';
import { ExperienceContent } from './index';

describe('ExperienceContent', () => {
  it('renders experience content', () => {
    render(<ExperienceContent />);
    expect(screen.getByText('Experience')).toBeInTheDocument();
  });
});

