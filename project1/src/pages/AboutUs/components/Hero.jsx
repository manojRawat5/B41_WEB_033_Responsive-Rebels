import React from 'react';

export default function Hero() {
  return (
    <div className="bg-teal-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">What We Do?</h2>
            <p className="text-gray-200 mb-4">
              We deliver advanced monitoring solutions for comprehensive crime prevention and community safety. Our platform empowers law enforcement agencies and citizens to collaborate effectively, creating safer neighborhoods through technology and community engagement.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
              alt="Police monitoring systems"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}