import React from 'react';
import FooterSection from './FooterSection';
import Newsletter from './Newsletter';

export default function Footer() {
  return (
    <footer className="bg-teal-900 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FooterSection title="Crime Portal">
            <p className="text-gray-300">
              Our online reporting portal provides safe, easy, and secure crime reporting services.
            </p>
          </FooterSection>

          <FooterSection title="Pages">
            <ul className="space-y-2">
              <li>Home</li>
              <li>About Us</li>
              <li>Crime Reports</li>
              <li>Contact Us</li>
            </ul>
          </FooterSection>

          <FooterSection title="Newsletter">
            <Newsletter />
          </FooterSection>
        </div>
        
        <div className="mt-8 pt-8 border-t border-teal-800 text-center text-gray-300">
          <p>&copy; Copyright Crime Portal 2024</p>
        </div>
      </div>
    </footer>
  );
}