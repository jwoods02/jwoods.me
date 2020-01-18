import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fileAbsolutePath: { glob: "**/*/posts/**/*.mdx" } }
      ) {
        nodes {
          frontmatter {
            title
            date(formatString: "DD MM YYYY")
            slug
          }
          excerpt
        }
      }
    }
  `);

  return data.allMdx.nodes.map(project => ({
    title: project.frontmatter.title,
    date: project.frontmatter.date,
    slug: project.frontmatter.slug,
    excerpt: project.excerpt,
  }));
};

export default usePosts;
