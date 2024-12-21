import React from 'react';

export default function AboutHero() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold mb-4">What We Do?</h2>
          <p className="text-gray-300 leading-relaxed">
            We deliver sophisticated technology solutions for comprehensive and 
            secure data management. Our platform enables organizations to streamline 
            their operations while ensuring top-tier security and compliance standards.
          </p>
        </div>
      </div>
    </section>
  );
}