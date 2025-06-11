import React from "react";
import { FaMapMarkerAlt, FaUserCircle, FaBars } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center space-x-2">
        <FaMapMarkerAlt className="text-2xl" />
        <span className="text-xl font-semibold">Smart Campus Navigator</span>
      </div>
      <div className="flex items-center space-x-4">
        <button className="hover:bg-blue-600 px-3 py-1 rounded">Home</button>
        <button className="hover:bg-blue-600 px-3 py-1 rounded">
          My Routes
        </button>
        <button className="hover:bg-blue-600 px-3 py-1 rounded">Help</button>
        <FaUserCircle className="text-2xl hover:text-gray-300 cursor-pointer" />
        <FaBars className="text-xl md:hidden" />
      </div>
    </nav>
  );
}
