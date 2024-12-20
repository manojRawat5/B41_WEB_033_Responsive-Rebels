import React from 'react';

export default function FooterSection({ title, children }) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      {children}
    </div>
  );
}