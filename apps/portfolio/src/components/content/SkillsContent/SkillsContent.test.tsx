import { render, screen } from '@testing-library/react';
import { SkillsContent } from './index';

describe('SkillsContent', () => {
  it('renders skills content', () => {
    render(<SkillsContent />);
    expect(screen.getByText('Skills')).toBeInTheDocument();
  });
});

