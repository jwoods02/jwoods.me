import { graphql, useStaticQuery } from 'gatsby';

const useProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fileAbsolutePath: { glob: "**/*/projects/**/*.mdx" } }
      ) {
        nodes {
          frontmatter {
            title
            tags
            description
            date(formatString: "MMM YYYY")
            href
          }
        }
      }
    }
  `);

  return data.allMdx.nodes.map(project => ({
    title: project.frontmatter.title,
    description: project.frontmatter.description,
    tags: project.frontmatter.tags,
    date: project.frontmatter.date ? project.frontmatter.date : 'Present',
    href: project.frontmatter.href ? project.frontmatter.href : '/',
  }));
};

export default useProjects;
