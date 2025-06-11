// AccessibilityOptions.jsx
import React from "react";

const AccessibilityOptions = () => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-lg font-bold">Accessibility Options</h2>
      <p>Available routes:</p>
      <ul>
        <li>Elevator routes available</li>
        <li>Quiet zones marked</li>
      </ul>
    </div>
  );
};

export default AccessibilityOptions;
