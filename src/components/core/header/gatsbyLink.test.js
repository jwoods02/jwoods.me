import React from 'react';
import { render } from '@testing-library/react';

import GatsbyLink from './externalLink';

describe(`GatsbyLink`, () => {
  it(`renders text for a link`, () => {
    const text = `Test text`;
    const { getByText } = render(<GatsbyLink href="/test">{text}</GatsbyLink>);

    const link = getByText(text);

    expect(link).toBeTruthy();
  });
  it(`renders a link for a given url`, () => {
    const href = `/test`;
    const { getByText } = render(<GatsbyLink href={href}>Test</GatsbyLink>);

    const link = getByText('Test');

    expect(link.getAttribute('href')).toBe(href);
  });
});
