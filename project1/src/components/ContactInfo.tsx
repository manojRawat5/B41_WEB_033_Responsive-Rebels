import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">CONNECT WITH US</h2>
        <p className="text-gray-600 mb-2">STAY INFORMED, STAY SAFE</p>
        <p className="text-gray-600">For immediate assistance or to report a crime, please use our online portal</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="flex items-start space-x-3">
          <Phone className="text-teal-600 w-5 h-5" />
          <div>
            <h3 className="font-semibold">Call for Inquiry</h3>
            <p className="text-gray-600">24/7</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Mail className="text-teal-600 w-5 h-5" />
          <div>
            <h3 className="font-semibold">Send us email</h3>
            <p className="text-gray-600">crimeportal.com</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Clock className="text-teal-600 w-5 h-5" />
          <div>
            <h3 className="font-semibold">Service</h3>
            <p className="text-gray-600">24/7</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <MapPin className="text-teal-600 w-5 h-5" />
          <div>
            <h3 className="font-semibold">Location</h3>
            <p className="text-gray-600">New Delhi</p>
          </div>
        </div>
      </div>
    </div>
  );
}