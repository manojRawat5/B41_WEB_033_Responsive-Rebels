
import React, { useEffect, useState } from "react";
import Banner from './Banner';
import { FaArrowDown } from 'react-icons/fa';  // Importing React icon

const CrimeReports = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [complaintsPerPage] = useState(10);

  // Fetch data from API
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://project-2d5f7-default-rtdb.firebaseio.com/crimereport.json"
      );
      const data = await response.json();
      const complaintsArray = Object.keys(data).map((key) => ({
        ...data[key],
        id: key,
      }));

      // Sort complaints by date (newest first)
      complaintsArray.sort((a, b) => {
        const dateA = new Date(a.date); // Assuming 'date' is a field in complaint
        const dateB = new Date(b.date);
        return dateB - dateA; // Descending order, newest first
      });

      setComplaints(complaintsArray);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Get the complaints for the current page
  const indexOfLastComplaint = currentPage * complaintsPerPage;
  const indexOfFirstComplaint = indexOfLastComplaint - complaintsPerPage;
  const currentComplaints = complaints.slice(indexOfFirstComplaint, indexOfLastComplaint);

  // Handle "See More" button click
  const handleSeeMore = () => {
    if (indexOfLastComplaint < complaints.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const totalComplaints = complaints.length;

  return (
    <>
      <Banner />
      <section className="bg-white p-6">
        {/* Crime Statistics Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
          <div className="bg-blue-500 text-white p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
            <h3 className="text-3xl font-bold">{complaints.filter(complaint => complaint.status === 'Pending').length}</h3>
            <p className="text-lg">Pending Complaints</p>
          </div>
          <div className="bg-teal-500 text-white p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
            <h3 className="text-3xl font-bold">{totalComplaints}</h3>
            <p className="text-lg">Total Complaints</p>
          </div>
          <div className="bg-green-500 text-white p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
            <h3 className="text-3xl font-bold">{complaints.filter(complaint => complaint.status === 'Resolved').length}</h3>
            <p className="text-lg">Resolved Complaints</p>
          </div>
        </div>

        {/* Complaint Filter Section */}
        <div className="flex justify-between items-center mb-4 flex-wrap">
          <button className="px-6 py-2 bg-gray-300 rounded-lg transition duration-300 hover:bg-gray-400 mb-4 sm:mb-0">Complaints</button>
          <button className="px-6 py-2 bg-gray-300 rounded-lg transition duration-300 hover:bg-gray-400 mb-4 sm:mb-0">People Responses</button>
        </div>

        {/* Complaints Table Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Complaint</th>
                  <th className="border px-4 py-2">Location</th>
                  <th className="border px-4 py-2">Status</th>
                  <th className="border px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentComplaints.map((complaint, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition duration-300">
                    <td className="border px-4 py-2">{complaint.description}</td>
                    <td className="border px-4 py-2">{complaint.location}</td>
                    <td className="border px-4 py-2">{complaint.status}</td>
                    <td className="border px-4 py-2">
                      <button className="px-4 py-2 bg-teal-600 text-white rounded transition duration-300 hover:bg-teal-700">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Location Map Section (Delhi) */}
          <div className="h-[400px] sm:h-[500px] bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 p-4">Location: Delhi</h3>
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2859.710348024914!2d77.22951061627769!3d28.613939220857524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03f4be61f3fb%3A0x87ecb2d8a8fefb32!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1670515674943!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Delhi Location"
            ></iframe>
          </div>
        </div>

        {/* See More Button */}
        <div className="flex justify-center items-center mt-6">
          {indexOfLastComplaint < complaints.length && (
            <button
              onClick={handleSeeMore}
              className="flex items-center px-6 py-2 bg-blue-500 text-white rounded-lg transition duration-300 hover:bg-blue-600"
            >
              See More <FaArrowDown className="ml-2" />
            </button>
          )}
        </div>
      </section>
    </>
  );
};

export default CrimeReports;