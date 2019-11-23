import React from 'react';
import PropTypes from 'prop-types';

export default function HeaderLink({ href, children }) {
  return (
    <a
      href={href}
      className="inline-block mt-0 text-teal-200 hover:text-white mr-6"
    >
      {children}
    </a>
  );
}

HeaderLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
};

HeaderLink.defaultProps = {
  href: '#',
};
