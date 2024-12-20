import React from 'react';
import { Shield, Users, Bell } from 'lucide-react';

export default function SafetySection() {
  const features = [
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Advanced monitoring systems'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Collaborative neighborhood watch'
    },
    {
      icon: Bell,
      title: 'Instant Alerts',
      description: 'Real-time notification system'
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Enhancing Community Safety Together</h2>
            <p className="text-gray-600 mb-6">
              Our integrated approach combines technology with community engagement to create a safer environment for everyone.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <feature.icon className="w-6 h-6 text-teal-600" />
                  <div>
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
              alt="Safety feature 1"
              className="rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2"
              alt="Safety feature 2"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}