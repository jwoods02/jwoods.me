import React from 'react';
import propTypes from 'prop-types';

export default function ProjectCard({ title, children, tags }) {
  return (
    <div className="p-4 w-1/3">
      <div className="rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="https://tailwindcss.com/img/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{children}</p>
        </div>
        <div className="px-6 pb-4">
          {tags.map(tag => (
            <span className="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  title: propTypes.string,
  children: propTypes.node,
  tags: propTypes.arrayOf(propTypes.string),
};
