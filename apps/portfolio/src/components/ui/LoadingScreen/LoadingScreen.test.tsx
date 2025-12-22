import { render, screen } from '@testing-library/react';
import { LoadingScreen } from './index';

describe('LoadingScreen', () => {
  it('renders loading screen', () => {
    const onComplete = jest.fn();
    render(<LoadingScreen onComplete={onComplete} />);

    expect(screen.getByText('AZ')).toBeInTheDocument();
    expect(screen.getByText('Initializing experience...')).toBeInTheDocument();
  });
});

