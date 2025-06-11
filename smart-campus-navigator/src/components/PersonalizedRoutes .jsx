// PersonalizedRoutes.jsx
import React, { useState } from "react";

const PersonalizedRoutes = () => {
  const [timetable, setTimetable] = useState("");
  const [routes, setRoutes] = useState([]);

  const handleInputChange = (e) => {
    setTimetable(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (timetable) {
      setRoutes([...routes, timetable]);
      setTimetable(""); // Clear input after submission
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-lg font-bold mb-4">Personalized Routes</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={timetable}
          onChange={handleInputChange}
          placeholder="Enter your timetable (e.g., Class at 10 AM)"
          className="border p-2 rounded w-full"
        />
        <button className="mt-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
          Save Route
        </button>
      </form>

      {routes.length > 0 && (
        <div>
          <h3 className="text-md font-semibold">Saved Routes:</h3>
          <ul className="list-disc pl-5">
            {routes.map((route, index) => (
              <li key={index} className="py-1">
                {route}
              </li>
            ))}
          </ul>
        </div>
      )}

      {routes.length === 0 && (
        <p className="text-gray-500">
          No routes saved yet. Add your timetable above!
        </p>
      )}
    </div>
  );
};

export default PersonalizedRoutes;
