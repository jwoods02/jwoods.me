import React from 'react';
import PropTypes from 'prop-types';

export default function ExternalLink({ href, children }) {
  return (
    <a
      href={href}
      className="inline-block mt-0 text-teal-200 hover:text-white mr-6"
    >
      {children}
    </a>
  );
}

ExternalLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
};

ExternalLink.defaultProps = {
  href: '#',
};
