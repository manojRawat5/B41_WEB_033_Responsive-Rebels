import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactInfoItem from './ContactInfoItem';

export default function ContactInfo() {
  const contactItems = [
    { icon: Phone, title: 'Call for Inquiry', text: '24/7' },
    { icon: Mail, title: 'Send us email', text: 'crimeportal.com' },
    { icon: Clock, title: 'Service', text: '24/7' },
    { icon: MapPin, title: 'Location', text: 'Karachi' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">CONNECT WITH US</h2>
        <p className="text-gray-600 mb-2">STAY INFORMED, STAY SAFE</p>
        <p className="text-gray-600">For immediate assistance or to report a crime, please use our online portal</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {contactItems.map((item, index) => (
          <ContactInfoItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}