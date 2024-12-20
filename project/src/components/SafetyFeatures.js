import React from 'react';
import { ChevronRight } from 'lucide-react';

const features = [
  "24/7 Neighborhood Watch",
  "Real-time Alerts",
  "Community Forums",
  "Emergency Response"
];

function SafetyFeatures() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Enhancing Community Safety Together</h2>
            <p className="text-gray-600 mb-8">
              Our comprehensive security solutions bring neighbors together while keeping
              communities safe and connected.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <ChevronRight className="text-emerald-600" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80"
              alt="Security camera"
              className="rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80"
              alt="Security monitoring"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SafetyFeatures;