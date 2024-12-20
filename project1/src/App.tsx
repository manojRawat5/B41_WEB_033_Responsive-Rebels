import React from 'react';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import Map from './components/Map';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-teal-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Contact Us</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <ContactInfo />
          </div>

          {/* Right Column */}
          <div>
            <ContactForm />
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <Map />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-teal-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Crime Portal</h3>
              <p className="text-gray-300">
                Our online reporting portal provides safe, easy, and secure crime reporting services.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Pages</h3>
              <ul className="space-y-2">
                <li>Home</li>
                <li>About Us</li>
                <li>Crime Reports</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="p-2 rounded-l w-full text-gray-800"
                />
                <button className="bg-teal-600 px-4 rounded-r hover:bg-teal-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-teal-800 text-center text-gray-300">
            <p>&copy; Copyright Crime Portal 2024</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;