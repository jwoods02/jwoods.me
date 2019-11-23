import React from 'react';
import { render } from '@testing-library/react';

import HeaderLink from './headerLink';

describe(`HeaderLink`, () => {
  it(`renders text for a link`, () => {
    const text = `Test text`;
    const { getByText } = render(<HeaderLink href="/test">{text}</HeaderLink>);

    const link = getByText(text);

    expect(link).toBeTruthy();
  });
  it(`renders a link for a given url`, () => {
    const href = `/test`;
    const { getByText } = render(<HeaderLink href={href}>Test</HeaderLink>);

    const link = getByText('Test');

    expect(link.getAttribute('href')).toBe(href);
  });
});
