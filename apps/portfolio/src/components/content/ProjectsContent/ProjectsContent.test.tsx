import { render, screen } from '@testing-library/react';
import { ProjectsContent } from './index';

describe('ProjectsContent', () => {
  it('renders projects content', () => {
    render(<ProjectsContent />);
    expect(screen.getByText('Projects')).toBeInTheDocument();
  });
});

