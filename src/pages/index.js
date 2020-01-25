import React from 'react';

import Layout from '../components/core/layout/layout';
import SEO from '../components/core/seo/seo';
import MastHead from '../components/core/masthead/masthead';
import usePosts from '../hooks/usePosts';

const IndexPage = () => {
  // eslint-disable-next-line no-unused-vars
  const posts = usePosts();
  return (
    <Layout>
      <SEO title="Home" />
      <MastHead title="Hi, I'm James Woods.">
        I build applications for the web and mobile.
      </MastHead>
      {/* {posts.map(post => (
        <pre>{JSON.stringify(post, null, 2)}</pre>
      ))} */}
    </Layout>
  );
};

export default IndexPage;
