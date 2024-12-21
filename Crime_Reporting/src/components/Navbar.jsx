import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-teal-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Crime Portal</h1>
      <ul className="flex space-x-6">
        <li>Home</li>
        <li>About Us</li>
        <li>Crime Reports</li>
        <li>Crime Responses</li>
        <li>Contact Us</li>
      </ul>
      <div>
        <button className="mr-4 bg-white text-teal-900 px-4 py-2 rounded">Login</button>
        <button className="bg-green-600 px-4 py-2 rounded">Register</button>
      </div>
    </nav>
  );
};

export default Navbar;
