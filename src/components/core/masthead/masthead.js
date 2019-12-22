import React from 'react';
import propTypes from 'prop-types';

function MastHead({ title, children }) {
  return (
    <div className="mx-auto py-8 md:py-16 md:px-4">
      <h1 className="text-3xl md:text-5xl">{title}</h1>
      <h2 className="text-xl md:text-2xl text-gray-700">{children}</h2>
    </div>
  );
}

MastHead.propTypes = {
  title: propTypes.string,
  children: propTypes.string,
};

export default MastHead;
