import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../header/header';
import './layout.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
        rel="stylesheet"
      ></link>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container mx-auto text-gray-900 leading-normal">
        <main>{children}</main>
        <footer>
          © James Woods, 2019. Built using
          <a href="https://www.gatsbyjs.org">Gatsby</a> with ❤️ in London, UK
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
