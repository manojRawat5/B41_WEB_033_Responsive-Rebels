import React, { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:border-teal-500"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:border-teal-500"
            required
          />
        </div>
      </div>
      <div className="mb-4">
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:border-teal-500"
          required
        />
      </div>
      <div className="mb-4">
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:border-teal-500 h-32"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}