import React from 'react';

export default function ProjectCard() {
  return (
    <div className="p-4 w-1/3">
      <div className="rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="https://tailwindcss.com/img/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Example project</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pb-4">
          <span className="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            React
          </span>
          <span className="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            Gatsby
          </span>
          <span className="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700">
            GraphQL
          </span>
        </div>
      </div>
    </div>
  );
}
