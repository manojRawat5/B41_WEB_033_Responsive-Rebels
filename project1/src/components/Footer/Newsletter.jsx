import React from 'react';

export default function Newsletter() {
  return (
    <div className="flex">
      <input
        type="email"
        placeholder="Your email"
        className="p-2 rounded-l w-full text-gray-800"
      />
      <button className="bg-teal-600 px-4 rounded-r hover:bg-teal-700 transition-colors">
        Subscribe
      </button>
    </div>
  );
}