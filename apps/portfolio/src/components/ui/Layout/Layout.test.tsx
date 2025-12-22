import { render } from '@testing-library/react';
import { Layout } from './index';

describe('Layout', () => {
  it('renders layout with children', () => {
    const { container } = render(
      <Layout>
        <div>Test content</div>
      </Layout>
    );

    expect(container.firstChild).toBeInTheDocument();
  });
});

