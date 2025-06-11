import React from "react";

export default function AccessibilityPanel() {
  return (
    <div className="p-2 border rounded">
      <h3 className="font-semibold mb-2">Accessibility Options</h3>
      <label className="block">
        <input type="checkbox" /> Elevator Routes
      </label>
      <label className="block">
        <input type="checkbox" /> Ramps
      </label>
      <label className="block">
        <input type="checkbox" /> Quiet Zones
      </label>
    </div>
  );
}
