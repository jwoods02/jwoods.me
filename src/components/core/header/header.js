import React from 'react';
import PropTypes from 'prop-types';
import { loadCSS } from 'fg-loadcss';

import ExternalLink from './externalLink';
import GatsbyLink from './gatsbyLink';

function HeaderTitle({ siteTitle }) {
  return (
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <a href="/" className="font-semibold text-2xl tracking-tight">
        👨‍💻<span className="hidden sm:inline"> {siteTitle}</span>
      </a>
    </div>
  );
}

HeaderTitle.propTypes = {
  siteTitle: PropTypes.node,
};

function Header({ siteTitle }) {
  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#font-awesome-css')
    );
  }, []);

  return (
    <div className="bg-blue-500 p-6">
      <nav className="container mx-auto flex items-center justify-between flex-wrap ">
        <HeaderTitle siteTitle={siteTitle}></HeaderTitle>
        <div className="flex items-center flex-shrink-0 items-center w-auto">
          <div className="text-lg self-end">
            <GatsbyLink href="/projects">Projects</GatsbyLink>
            <ExternalLink href="#">CV</ExternalLink>
            <ExternalLink href="#">Contact</ExternalLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
