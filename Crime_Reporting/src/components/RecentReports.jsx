import React, { useEffect, useState } from 'react';

const RecentReports = () => {
  const [reports, setReports] = useState([]);

  // Fetching data from the API
  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await fetch(
          'https://project-2d5f7-default-rtdb.firebaseio.com/crimereport.json'
        );
        const data = await response.json();

        // Convert the data into an array and limit it to the most recent 10 reports
        const reportsArray = Object.keys(data).map((key) => ({
          ...data[key],
          id: key,
        }));

        // Sorting by date (latest first) and taking the top 10
        const sortedReports = reportsArray
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 10);

        setReports(sortedReports);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchReports();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-0 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-semibold text-gray-900 text-center mb-10">
          Recent Reports
        </h2>

        {/* Reports List */}
        <div className="space-y-8">
          {reports.map((report) => (
            <div
              key={report.id}
              className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-indigo-500"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Category: {report.category}
              </h3>
              <p className="text-lg text-gray-700">
                <strong>Location:</strong> {report.location}
              </p>
              <p className="text-lg text-gray-700">
                <strong>Date:</strong> {new Date(report.date).toLocaleDateString()}
              </p>
              <p className="mt-4 text-base text-gray-600">
                <strong>Description:</strong> {report.description}
              </p>
              <p className="mt-4 text-base text-gray-600">
                <strong>Status:</strong> {report.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentReports;
