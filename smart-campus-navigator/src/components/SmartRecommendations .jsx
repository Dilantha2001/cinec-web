// SmartRecommendations.jsx
import React, { useEffect, useState } from "react";
import { FaLightbulb } from "react-icons/fa";
import "../SmartRecommendations.css"; // Import the CSS file for animations

const tips = [
  "Avoid main roads during heavy rain for a safer and quicker journey!",
  "Check traffic updates before you leave.",
  "Consider using public transport during peak hours.",
  "Keep an emergency kit in your vehicle.",
  "Stay hydrated and take breaks during long drives.",
];

const SmartRecommendations = () => {
  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTipIndex((prevIndex) => (prevIndex + 1) % tips.length);
    }, 5000); // Change tip every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="p-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-2 flex items-center">
        <FaLightbulb className="mr-2" />
        Smart Recommendations
      </h2>
      <p className="text-white text-lg">
        Recommended Route:{" "}
        <span className="">
          Take the shortcut through the park due to rain.
        </span>
      </p>
      <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
        <p className="text-gray-700 writing-animation">
          Tip: {tips[currentTipIndex]}
        </p>
      </div>
    </div>
  );
};

export default SmartRecommendations;
