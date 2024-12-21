
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

export const ReportDetails = () => {
  const { id } = useParams(); // Get the year from the URL params
  const [yearlyReports, setYearlyReports] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Fetching all reports from Firebase
    fetch("https://project-2d5f7-default-rtdb.firebaseio.com/crimereport.json")
      .then((response) => response.json())
      .then((data) => {
        const reportsArray = Object.keys(data).map((key) => ({
          ...data[key],
          id: key,
        }));

        // Filter reports by year (id)
        const filteredReports = reportsArray.filter(
          (report) => new Date(report.date).getFullYear() === parseInt(id)
        );

        setYearlyReports(filteredReports);

        // Group reports by category
        const groupedCategories = filteredReports.reduce((acc, report) => {
          const category = report.category || "Uncategorized";
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push(report);
          return acc;
        }, {});

        setCategoryData(Object.entries(groupedCategories));
      })
      .catch((error) => console.error("Error fetching reports:", error))
      .finally(() => setIsLoading(false)); // Set loading to false when done
  }, [id]);

  // Show loading spinner if data is still being fetched
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-teal-500 border-t-transparent rounded-full" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-6">
          Crime Report Details for {id}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Loop through categories and display data */}
          {categoryData.map(([category, reports]) => {
            // Prepare data for Doughnut chart
            const chartData = {
              labels: ["Resolved", "Processing", "Pending"],
              datasets: [
                {
                  label: `${category} Status`,
                  data: [
                    reports.filter((r) => r.status === "Resolved").length,
                    reports.filter((r) => r.status === "Processing").length,
                    reports.filter((r) => r.status === "Pending").length,
                  ],
                  backgroundColor: ["#4CAF50", "#FFC107", "#F44336"],
                  hoverBackgroundColor: ["#388E3C", "#FFA000", "#D32F2F"],
                  borderWidth: 2,
                },
              ],
            };

            return (
              <div
                key={category}
                className="flex flex-col items-center bg-gray-100 p-4 rounded-lg"
              >
                <h2 className="text-2xl font-semibold mb-4">
                  {category} Crimes
                </h2>

                {/* Doughnut Chart for Crime Status */}
                <Doughnut data={chartData} />

                {/* List of crime details */}
                <div className="mt-4 space-y-4 w-full">
                  {reports.map((report) => (
                    <div
                      key={report.id}
                      className="border-b pb-4 mb-4 text-left"
                    >
                      <h3 className="text-lg font-bold">{report.title}</h3>
                      <p className="text-sm text-gray-600">
                        Location: {report.location}
                      </p>
                      <p className="text-sm text-gray-600">
                        Date: {new Date(report.date).toLocaleDateString()}
                      </p>
                      <p className="text-sm text-gray-600">
                        Status: <span className="font-semibold">{report.status}</span>
                      </p>
                      <p className="text-md mt-2">{report.description}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-lg font-medium">
                  Total {category} Crimes: {reports.length}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
