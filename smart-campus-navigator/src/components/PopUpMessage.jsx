// ColorfulPopUpMessage.jsx
import React, { useEffect, useState } from "react";
import "../PopUpMessage.css"; // Import the CSS file for animations

const ColorfulPopUpMessage = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show the pop-up message when the component mounts
    setVisible(true);
    // const timer = setTimeout(() => {
    //   setVisible(false);
    // }, 5000); // Hide after 5 seconds

    // Cleanup on unmount
  }, []);

  return (
    <div className="flex justify-center items-center h-[20px]">
      {visible && (
        <div className="relative p-4 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-lg shadow-lg animate-bounceIn">
          <h1 className="text-xl !text-white font-bold text-center">
            Click on a building on the map to view details
          </h1>
        </div>
      )}
    </div>
  );
};

export default ColorfulPopUpMessage;
