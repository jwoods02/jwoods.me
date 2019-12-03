import React from 'react';
import propTypes from 'prop-types';

export default function ProjectCard({ title, children, tags, date }) {
  return (
    <div className="py-4 w-full md:p-4 md:w-1/2 xl:w-1/3">
      <div className="rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="https://tailwindcss.com/img/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <p className="text-sm text-gray-600 flex items-center">
            <svg
              className="fill-current text-gray-500 w-3 h-3 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z" />{' '}
            </svg>
            {date}
          </p>
          <div className="font-bold text-xl">{title}</div>
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
  date: propTypes.string,
};
