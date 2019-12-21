import React from 'react';
import { render } from '@testing-library/react';

import MastHead from './masthead';

describe(`MastHead`, () => {
  it(`renders correctly`, () => {
    const { getByText } = render(<MastHead />);

    const text = getByText('James Woods', { exact: false });

    expect(text).toBeInTheDocument();
  });
});
