import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo/seo';
import MastHead from '../components/masthead/masthead';
import ProjectCard from '../components/project-card/projectCard';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MastHead></MastHead>
    <div className="flex flex-wrap justify-between">
      <ProjectCard></ProjectCard>
      <ProjectCard></ProjectCard>
      <ProjectCard></ProjectCard>
    </div>
  </Layout>
);

export default IndexPage;
