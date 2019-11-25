import React from 'react';
import { render } from '@testing-library/react';

import ProjectCard from './projectCard';

describe(`MastHead`, () => {
  it(`renders correctly`, () => {
    const wrapper = render(<ProjectCard />);

    expect(wrapper).toBeTruthy();
  });
});
