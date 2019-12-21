import React from 'react';

import Layout from '../components/core/layout/layout';
import SEO from '../components/core/seo/seo';
import MastHead from '../components/core/masthead/masthead';
import ProjectCard from '../components/project/project-card/projectCard';
import useProjects from '../hooks/useProjects';

const ProjectsPage = () => {
  const projects = useProjects();
  return (
    <Layout>
      <SEO title="Home" />
      <MastHead></MastHead>
      <div className="flex flex-wrap">
        {projects.map(project => (
          <ProjectCard
            key={project.title}
            title={project.title}
            tags={project.tags}
            date={project.date}
            href={project.href}
          >
            {project.description}
          </ProjectCard>
        ))}
      </div>
    </Layout>
  );
};

export default ProjectsPage;
