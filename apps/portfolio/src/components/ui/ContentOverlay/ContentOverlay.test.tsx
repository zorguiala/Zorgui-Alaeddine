import { render } from '@testing-library/react';
import { ContentOverlay } from './index';

describe('ContentOverlay', () => {
  it('renders content overlay', () => {
    render(<ContentOverlay />);
    // Component renders based on store state
  });
});

