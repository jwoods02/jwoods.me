import React from 'react';
import { render } from '@testing-library/react';

import ProjectCard from './projectCard';

describe(`ProjectCard`, () => {
  it(`renders the correct title, description and tags for each project card`, () => {
    const title = 'Example card';
    const description = 'This is a description';
    const tags = ['React', 'GraphQL'];
    const { getByText } = render(
      <ProjectCard title={title} tags={tags}>
        {description}
      </ProjectCard>
    );

    expect(getByText(title)).toBeTruthy();
    expect(getByText(description)).toBeTruthy();
    expect(getByText(tags[0])).toBeTruthy();
    expect(getByText(tags[1])).toBeTruthy();
  });
});
