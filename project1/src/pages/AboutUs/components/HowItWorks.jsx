import React from 'react';
import { Shield, Bell, UserCheck, BarChart } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Shield,
      title: 'Report an Issue',
      description: 'Easily submit detailed reports about incidents in your area'
    },
    {
      icon: Bell,
      title: 'Get Notified',
      description: 'Receive real-time updates about the status of your reports'
    },
    {
      icon: UserCheck,
      title: 'Verified Process',
      description: 'Reports are verified and processed by authorized personnel'
    },
    {
      icon: BarChart,
      title: 'View Statistics',
      description: 'Access comprehensive crime statistics and analysis'
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 flex justify-center">
                <step.icon className="w-12 h-12 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}