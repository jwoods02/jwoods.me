import React from 'react';

import Layout from '../components/core/layout/layout';
import SEO from '../components/core/seo/seo';
import MastHead from '../components/core/masthead/masthead';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MastHead></MastHead>
  </Layout>
);

export default IndexPage;
