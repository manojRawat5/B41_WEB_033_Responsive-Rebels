import React from 'react';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import Map from './components/Map';

function App() {
  return React.createElement(
    'div',
    { className: 'min-h-screen bg-gray-50' },

    // Header
    React.createElement(
      'div',
      { className: 'bg-teal-900 text-white py-12' },
      React.createElement(
        'div',
        { className: 'container mx-auto px-4' },
        React.createElement(
          'h1',
          { className: 'text-4xl font-bold text-center' },
          'Contact Us'
        )
      )
    ),

    // Main Content
    React.createElement(
      'div',
      { className: 'container mx-auto px-4 py-12' },
      React.createElement(
        'div',
        { className: 'grid grid-cols-1 lg:grid-cols-2 gap-12' },

        // Left Column
        React.createElement(
          'div',
          { className: 'space-y-8' },
          React.createElement(ContactInfo)
        ),

        // Right Column
        React.createElement(
          'div',
          null,
          React.createElement(ContactForm)
        )
      ),

      // Map Section
      React.createElement(
        'div',
        { className: 'mt-12' },
        React.createElement(Map)
      )
    ),

    // Footer
    React.createElement(
      'footer',
      { className: 'bg-teal-900 text-white py-8 mt-12' },
      React.createElement(
        'div',
        { className: 'container mx-auto px-4' },
        React.createElement(
          'div',
          { className: 'grid grid-cols-1 md:grid-cols-3 gap-8' },

          // Crime Portal Section
          React.createElement(
            'div',
            null,
            React.createElement(
              'h3',
              { className: 'text-xl font-bold mb-4' },
              'Crime Portal'
            ),
            React.createElement(
              'p',
              { className: 'text-gray-300' },
              'Our online reporting portal provides safe, easy, and secure crime reporting services.'
            )
          ),

          // Pages Section
          React.createElement(
            'div',
            null,
            React.createElement(
              'h3',
              { className: 'text-xl font-bold mb-4' },
              'Pages'
            ),
            React.createElement(
              'ul',
              { className: 'space-y-2' },
              React.createElement('li', null, 'Home'),
              React.createElement('li', null, 'About Us'),
              React.createElement('li', null, 'Crime Reports'),
              React.createElement('li', null, 'Contact Us')
            )
          ),

          // Newsletter Section
          React.createElement(
            'div',
            null,
            React.createElement(
              'h3',
              { className: 'text-xl font-bold mb-4' },
              'Newsletter'
            ),
            React.createElement(
              'div',
              { className: 'flex' },
              React.createElement('input', {
                type: 'email',
                placeholder: 'Your email',
                className: 'p-2 rounded-l w-full text-gray-800'
              }),
              React.createElement(
                'button',
                { className: 'bg-teal-600 px-4 rounded-r hover:bg-teal-700 transition-colors' },
                'Subscribe'
              )
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'mt-8 pt-8 border-t border-teal-800 text-center text-gray-300' },
          React.createElement('p', null, '© Copyright Crime Portal 2024')
        )
      )
    )
  );
}

export default App;
