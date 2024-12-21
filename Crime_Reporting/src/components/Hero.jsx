import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-100 p-6 text-center">
      <h2 className="text-4xl font-bold mb-4">Crime Responses</h2>
      <div className="flex justify-around my-6">
        <div className="bg-white shadow-md rounded p-6">
          <h3 className="text-2xl font-bold">3</h3>
          <p>Complaint Box</p>
        </div>
        <div className="bg-white shadow-md rounded p-6">
          <h3 className="text-2xl font-bold">99</h3>
          <p>Complaints</p>
        </div>
        <div className="bg-white shadow-md rounded p-6">
          <h3 className="text-2xl font-bold">56</h3>
          <p>Resolved Complaints</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
