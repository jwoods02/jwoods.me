import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

export default function GatsbyLink({ href, children }) {
  return (
    <Link
      to={href}
      className="inline-block mt-0 text-teal-200 hover:text-white mr-6"
    >
      {children}
    </Link>
  );
}

GatsbyLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
};

GatsbyLink.defaultProps = {
  href: '/',
};
