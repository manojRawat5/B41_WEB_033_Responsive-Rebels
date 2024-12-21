import React from 'react';

export default function Community() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Build Life Together With A Safe Community</h2>
          <p className="text-gray-600 mb-8">
            Join our growing community of users who are committed to creating 
            a safer and more efficient environment for everyone.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            Join Community
          </button>
        </div>
      </div>
    </section>
  );
}