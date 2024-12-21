
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

export const CrimeStatistics = () => {
  const [totalVisits, setTotalVisits] = useState(250);
  const [crimes, setCrimes] = useState(100);
  const [activePercentage, setActivePercentage] = useState(70);
  const [chartData, setChartData] = useState({
    labels: ['2019', '2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Reported Crimes',
        data: [30, 50, 40, 60, 80], // Sample data for different years
        borderColor: '#008080',
        fill: true,
        tension: 0.4, // Wave-like effect
      },
    ],
  });

  useEffect(() => {
    const fetchCrimeData = async () => {
      try {
        const response = await fetch('https://project-2d5f7-default-rtdb.firebaseio.com/crimereport.json');
        const data = await response.json();

        // Grouping crimes by year
        const yearlyData = {};

        // Iterate through each report and categorize by year
        Object.values(data).forEach((item) => {
          const year = new Date(item.date).getFullYear();
          if (!yearlyData[year]) {
            yearlyData[year] = 0;
          }
          yearlyData[year]++;
        });

        // Convert yearlyData into chart data format
        const labels = Object.keys(yearlyData); // List of years
        const crimeCounts = labels.map((year) => yearlyData[year]); // Crime counts for each year

        setChartData({
          labels,
          datasets: [
            {
              label: 'Reported Crimes',
              data: crimeCounts,
              borderColor: '#008080',
              fill: true,
              tension: 0.4, // For wave effect
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching crime data:', error);
      }
    };

    fetchCrimeData();

    const interval = setInterval(() => {
      setTotalVisits((prevVisits) => prevVisits + Math.floor(Math.random() * 10));
      setCrimes((prevCrimes) => prevCrimes + Math.floor(Math.random() * 5));
      setActivePercentage(
        (prevPercentage) => prevPercentage + Math.floor(Math.random() * 2) - 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-teal-50 min-h-screen p-4 sm:p-16">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Crime Statistics</h1>
        <p>Our portal delivers dynamic crime statistics, offering insights into registered complaints.</p>
      </div>

      {/* Grid Layout for Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="border p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Total Visits</h2>
          <p className="text-3xl font-bold">{totalVisits}</p>
        </div>

        <div className="border p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Crimes</h2>
          <div className="flex items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <p className="text-3xl font-bold">{crimes}</p>
          </div>
        </div>

        <div className="border p-4 rounded-lg shadow-md mt-4 sm:mt-0">
          <h2 className="text-lg font-semibold mb-2">Active Percentage</h2>
          <div className="flex items-center">
            <p className="text-3xl font-bold">{activePercentage}%</p>
            <div className="w-4 h-4 bg-green-500 rounded-full ml-2"></div>
            <div className="w-4 h-4 bg-red-500 rounded-full ml-2"></div>
          </div>
          <div className="flex mt-2">
            <div className="w-1/2">
              <p className="text-sm">Online</p>
              <p className="text-sm font-semibold">8 users</p>
            </div>
            <div className="w-1/2">
              <p className="text-sm">Offline</p>
              <p className="text-sm font-semibold">4 users</p>
            </div>
          </div>
        </div>
      </div>

      {/* Crime Trends Chart */}
      <div className="mt-4 p-4 sm:p-16 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Crime Trends</h2>
        <div className="relative">
          <Line
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false, // Ensures the chart scales properly
            }}
            height={300} // Ensure the height adjusts on small screens
          />
        </div>
      </div>
    </div>
  );
};
