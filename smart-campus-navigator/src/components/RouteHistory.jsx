// RouteHistory.jsx
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const RouteHistory = () => {
  const previousRoutes = [
    {
      destination: "Library",
      date: "05/06/2025",
      distance: "1.2 km",
      travelTime: "15 min",
      color: "bg-blue-400",
    },
    {
      destination: "Cafeteria",
      date: "04/06/2025",
      distance: "0.8 km",
      travelTime: "10 min",
      color: "bg-green-400",
    },
    {
      destination: "Counseling Center",
      date: "03/06/2025",
      distance: "1.5 km",
      travelTime: "20 min",
      color: "bg-purple-400",
    },
  ];

  return (
    <div className="p-4 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Route History
      </h2>
      <ul className="space-y-4">
        {previousRoutes.map((route, index) => (
          <li
            key={index}
            className={`flex justify-between items-center p-4 rounded-lg shadow hover:shadow-lg transition ${route.color}`}
          >
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-white mr-2" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">
                  {route.destination}
                </h3>
                <p className="text-white">{route.date}</p>
              </div>
            </div>
            <div className="text-right text-white">
              <p className="text-sm">Distance: {route.distance}</p>
              <p className="text-sm">Travel Time: {route.travelTime}</p>
            </div>
          </li>
        ))}
      </ul>
      {previousRoutes.length === 0 && (
        <p className="text-gray-500 mt-4">
          No routes saved yet. Start exploring!
        </p>
      )}
    </div>
  );
};

export default RouteHistory;
