import React from "react";

const Complaints = () => {
  return (
    <section className="bg-white p-6">
      <div className="flex justify-between items-center mb-4">
        <button className="px-4 py-2 bg-gray-300 rounded">Complaints</button>
        <button className="px-4 py-2 bg-gray-300 rounded">People Responses</button>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap gap-6">
        {/* Complaints Table */}
        <div className="flex-1">
          <table className="table-auto w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2">Complaint</th>
                <th className="border px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(8)].map((_, i) => (
                <tr key={i}>
                  <td className="border px-4 py-2">Complaint {i + 1}</td>
                  <td className="border px-4 py-2">
                    <button className="px-4 py-2 bg-teal-600 text-white rounded">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Map Section */}
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-4">Location</h3>
          <div className="bg-gray-100 rounded shadow-md h-[400px]">
            {/* Embed a map */}
            <iframe
              className="w-full h-full rounded"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509425!2d144.96305791531695!3d-37.81362797975147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5772c3f0a811ed9!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1670515674943!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Send Response Section */}
      <div className="bg-gray-100 p-6 mt-6">
        <h3 className="text-xl font-bold mb-4">Send Response</h3>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="block w-full p-2 border rounded" />
          <input type="email" placeholder="Email Address" className="block w-full p-2 border rounded" />
          <input type="text" placeholder="Complaint Title" className="block w-full p-2 border rounded" />
          <textarea placeholder="Your Message" className="block w-full p-2 border rounded"></textarea>
          <button type="submit" className="bg-teal-600 text-white px-4 py-2 rounded">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Complaints;
