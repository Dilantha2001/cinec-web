// components/MapView.jsx
import React, { useState } from "react";
import campusMap from "../assets/cinec-map.jpg";
import PopUpMessage from "./PopUpMessage";

export default function MapView({ onComponentChange }) {
  const [selectedArea, setSelectedArea] = useState(null);

  const areas = [
    {
      name: "CAFETERIA",
      top: "30%",
      left: "19%",
      width: "10%",
      height: "30%",
      id: 1,
    },
    {
      name: "DALIAN",
      top: "56%",
      left: "50%",
      width: "17%",
      height: "15%",
      id: 2,
    },
    {
      name: "LIBRARY",
      top: "15%",
      left: "43%",
      width: "7%",
      height: "30%",
      id: 3,
    },
    {
      name: "POOL",
      top: "35%",
      left: "8%",
      width: "10%",
      height: "20%",
      id: 4,
    },
    {
      name: "HOSTALS",
      top: "15%",
      left: "30%",
      width: "9%",
      height: "22%",
      id: 5,
    },

    {
      name: "GROUND",
      top: "30%",
      left: "30%",
      width: "9%",
      height: "22%",
      id: 5,
    },
    {
      name: "MAIN",
      top: "45%",
      left: "30%",
      width: "17%",
      height: "20%",
      id: 6,
    },
    {
      name: "GROUND",
      top: "80%",
      left: "30%",
      width: "45%",
      height: "20%",
      id: 7,
    },
    {
      name: "ZENITH",
      top: "3%",
      left: "71%",
      width: "15%",
      height: "30%",
      id: 8,
    },
    {
      name: "GAFF",
      top: "41%",
      left: "71%",
      width: "15%",
      height: "30%",
      id: 9,
    },
  ];

  const handleViewMore = () => {
    if (selectedArea) {
      onComponentChange(selectedArea.name.toLowerCase()); // Call the component change handler
    }
  };

  return (
    <div className="w-full h-[500px] relative">
      <div className="absolute z-10 mt-5 animate-bounce">
        <PopUpMessage />
      </div>
      <div className="w-full h-full relative">
        <img
          src={campusMap}
          alt="CINEC Campus Map"
          className="w-full h-full object-contain"
        />

        {areas.map((area, index) => (
          <div
            key={index}
            className="absolute cursor-pointer"
            style={{
              top: `${parseFloat(area.top)}%`,
              left: `${parseFloat(area.left)}%`,
              width: `${parseFloat(area.width)}%`,
              height: `${parseFloat(area.height)}%`,
            }}
            onClick={() => {
              setSelectedArea(area);
            }}
          >
            {!selectedArea && (
              <div className="absolute inset-0 bg-blue-500 opacity-20 hover:opacity-30"></div>
            )}
            {/* <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 !text-white text-[12px] font-light p-1 bg-[#19191a]">
              {area.name}
            </p> */}
          </div>
        ))}
      </div>

      {selectedArea && (
        <div
          className="absolute bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 text-center text-white animate-bounce"
          style={{
            top: `calc(${selectedArea.top} + 3%)`,
            left: `${parseFloat(selectedArea.left)}%`,
            zIndex: 20,
          }}
        >
          <p className="text-lg font-bold !text-white">{selectedArea.name}</p>
          <button
            className="mt-2 bg-white text-blue-600 px-3 py-1 rounded-md text-sm font-semibold hover:bg-gray-200 transition duration-200"
            onClick={handleViewMore} // Call the scroll function
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
}
