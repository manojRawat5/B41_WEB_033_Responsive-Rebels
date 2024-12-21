import React from "react";

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-white p-6">
      <div className="flex justify-between">
        <div>
          <h4 className="font-bold mb-2">Crime Portal</h4>
          <p>Our Crime Portal helps you connect with the right authorities for safety and justice.</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Pages</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Crime Reports</li>
            <li>Crime Responses</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Crime Categories</h4>
          <ul>
            <li>Murder</li>
            <li>Theft</li>
            <li>Sexual Assault</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Newsletter</h4>
          <input type="email" placeholder="Email Address" className="block w-full p-2 mb-2" />
          <button className="bg-green-600 px-4 py-2 rounded">Subscribe</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
