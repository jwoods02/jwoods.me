import React from 'react';
import { render } from '@testing-library/react';

import MastHead from './masthead';

describe(`MastHead`, () => {
  it(`renders title and children`, () => {
    const title = 'James Woods';
    const body = 'Okay';
    const { getByText } = render(<MastHead title={title}>{body}</MastHead>);

    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(body)).toBeInTheDocument();
  });
});
