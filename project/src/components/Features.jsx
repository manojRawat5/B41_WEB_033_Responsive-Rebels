import React from 'react';

const features = [
  {
    title: "Register & Login",
    description: "Simple and secure authentication process"
  },
  {
    title: "Input Cases",
    description: "Easy data entry and management system"
  },
  {
    title: "Resource Center",
    description: "Access comprehensive documentation and guides"
  },
  {
    title: "View Case Updates",
    description: "Real-time tracking and monitoring"
  }
];

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}