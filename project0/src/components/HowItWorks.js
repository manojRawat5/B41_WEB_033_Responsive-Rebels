import React from 'react';
import { Users, Shield, BookOpen, Building2 } from 'lucide-react';

const steps = [
  {
    icon: <Shield className="w-8 h-8 text-emerald-600" />,
    title: "Sign Up & Join",
    description: "Create your account and join your local community"
  },
  {
    icon: <Users className="w-8 h-8 text-emerald-600" />,
    title: "Connect",
    description: "Meet your neighbors and build relationships"
  },
  {
    icon: <BookOpen className="w-8 h-8 text-emerald-600" />,
    title: "Stay Informed",
    description: "Get real-time updates about your neighborhood"
  },
  {
    icon: <Building2 className="w-8 h-8 text-emerald-600" />,
    title: "Secure Home",
    description: "Enjoy enhanced security and peace of mind"
  }
];

function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="text-center p-6">
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;