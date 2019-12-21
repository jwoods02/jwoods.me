import React from 'react';
import { render } from '@testing-library/react';

import ExternalLink from './externalLink';

describe(`ExternalLink`, () => {
  it(`renders text for a link`, () => {
    const text = `Test text`;
    const { getByText } = render(
      <ExternalLink href="/test">{text}</ExternalLink>
    );

    const link = getByText(text);

    expect(link).toBeTruthy();
  });
  it(`renders a link for a given url`, () => {
    const href = `/test`;
    const { getByText } = render(<ExternalLink href={href}>Test</ExternalLink>);

    const link = getByText('Test');

    expect(link.getAttribute('href')).toBe(href);
  });
});
