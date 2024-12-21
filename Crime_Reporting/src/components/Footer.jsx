
import React from 'react';
import logo from '../assets/logo.svg';

export const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto py-16 px-4 md:flex md:justify-between">
        {/* Logo and Description */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="flex items-center mb-6">
            <img src={logo} alt="Crime Portal Logo" className="w-16 h-16" />
            <h1 className="text-2xl md:text-3xl font-bold ml-4">Crime Portal</h1>
          </div>
          <p className="text-sm md:text-md">
            Our Crime Monitoring Portal provides real-time crime data and empowers citizens
            to report incidents. Together, we enhance public safety and foster community
            collaboration.
          </p>
        </div>

        {/* Links and Newsletter */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full md:w-1/2">
          {/* Pages */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Pages</h2>
            <ul className="list-none space-y-2">
              <li><a href="#" className="hover:text-blue-500">Home</a></li>
              <li><a href="#" className="hover:text-blue-500">About Us</a></li>
              <li><a href="#" className="hover:text-blue-500">Crime Reports</a></li>
              <li><a href="#" className="hover:text-blue-500">Crime Responses</a></li>
              <li><a href="#" className="hover:text-blue-500">Contact Us</a></li>
            </ul>
          </div>

          {/* Crime Categories */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Crime Categories</h2>
            <ul className="list-none space-y-2">
              <li>Murder</li>
              <li>Target Killing</li>
              <li>Bomb Blast</li>
              <li>Highway & Bank Robbery</li>
              <li>Snatching</li>
              <li>Gang Rape</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Newsletter</h2>
            <p className="text-sm mb-4">Get Updates Of Latest Crimes</p>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border rounded-md text-black"
              />
              <button className="bg-teal-900 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded-md w-full">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 md:px-16 py-4 border-t border-gray-700">
        <p className="text-sm">&copy; Copyright Crime Portal 2024</p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="#" className="hover:text-blue-500 text-sm">Privacy Policy</a>
          <a href="#" className="hover:text-blue-500 text-sm">Terms & Conditions</a>
        </div>
      </div>
    </div>
  );
};
