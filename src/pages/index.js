import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo/seo';
import MastHead from '../components/masthead/masthead';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MastHead></MastHead>
  </Layout>
);

export default IndexPage;
