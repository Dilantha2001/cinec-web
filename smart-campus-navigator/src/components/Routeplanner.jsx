import React from "react";

export default function RoutePlanner() {
  return (
    <div className="p-2 border rounded">
      <h3 className="font-semibold mb-2">Plan Your Route</h3>
      <input
        type="text"
        placeholder="From..."
        className="w-full p-1 mb-2 border rounded"
      />
      <input
        type="text"
        placeholder="To..."
        className="w-full p-1 mb-2 border rounded"
      />
      <button className="bg-blue-600 text-white w-full py-1 rounded">
        Get Route
      </button>
    </div>
  );
}
