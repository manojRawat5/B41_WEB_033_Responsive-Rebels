import React from 'react';

function Footer() {
  return (
    <footer className="bg-emerald-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300">
              1234 Security Ave<br />
              Safetown, ST 12345<br />
              contact@example.com<br />
              (555) 123-4567
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Pages</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Newsletter</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l text-black"
              />
              <button className="bg-emerald-600 px-4 py-2 rounded-r hover:bg-emerald-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 Community Security. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;