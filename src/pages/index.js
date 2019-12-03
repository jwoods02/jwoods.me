import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo/seo';
import MastHead from '../components/masthead/masthead';
import ProjectCard from '../components/project-card/projectCard';
import useProjects from '../hooks/useProjects';

const IndexPage = () => {
  const projects = useProjects();
  return (
    <Layout>
      <SEO title="Home" />
      <MastHead></MastHead>
      <div className="flex flex-wrap">
        {projects.map(project => (
          <ProjectCard
            title={project.title}
            tags={project.tags}
            date={project.date}
          >
            {project.description}
          </ProjectCard>
        ))}
      </div>
    </Layout>
  );
};

export default IndexPage;
