import React from 'react';

export default function ContactInfoItem({ icon: Icon, title, text }) {
  return (
    <div className="flex items-start space-x-3">
      <Icon className="text-teal-600 w-5 h-5" />
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  );
}