import { graphql, useStaticQuery } from 'gatsby';

const useProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            tags
            description
          }
        }
      }
    }
  `);

  return data.allMdx.nodes.map(project => ({
    title: project.frontmatter.title,
    description: project.frontmatter.description,
    tags: project.frontmatter.tags,
  }));
};

export default useProjects;
