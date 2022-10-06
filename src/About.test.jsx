import { render } from '@testing-library/react';

import Router from './Router';

import About from './About';

describe('About', () => {
  it('renders title', () => {
    const { container } = render(
      <Router>
        <About />
      </Router>,
    );

    expect(container).toHaveTextContent('about');
  });

  it('renders button listen to click event', () => {
    const { getByText } = render(
      <Router>
        <About />
      </Router>,
    );

    getByText('go main');
  });
});
