import "./index.css";
import React, { useRef, useState } from "react"; // Import useRef and useState
import Navbar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import MapView from "./components/MapView";
import RoutePlanner from "./components/RoutePlanner"; // Example component for Cafeteria
import CrowdInfo from "./components/CrowdInfo"; // Example component for Dalian
import PersonalizedRoutes from "./components/PersonalizedRoutes ";
import RealTimeCrowdData from "./components/RealTimeCrowdData";
import RouteHistory from "./components/RouteHistory";
import SmartRecommendations from "./components/SmartRecommendations ";
import Wulfrunainfo from "./components/WulfrunaInfo";
import ZenithInfo from "./components/ZenithInfo";
import Library from "./components/Libraryinfo";
import Ground from "./components/PlayGroundInfo";
import Dalian from "./components/DalianInfo";
import AuditoriumInfo from "./components/AuditoriumInfo";

export default function App() {
  const redDivRef = useRef(null); // Create a ref for the red background div
  const [selectedComponent, setSelectedComponent] = useState(null); // State to track which component to show

  const handleComponentChange = (component) => {
    setSelectedComponent(component);
    if (redDivRef.current) {
      redDivRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex h-[500px]">
        <div className="w-full md:w-[40%] h-[300px] md:h-[500px] p-6 ">
          <h1 className="text-3xl ">
            Your Journey Begins at{" "}
            <span className="text-blue-900 text-2xl font-extrabold">CINEC</span>
          </h1>
          <br />
          <p>
            Established in 1990, CINEC Campus located in Malabe a picturesque
            suburb of Colombo, is one of the largest, most diversified and
            fastest growing private higher education institutes of Sri Lanka.
            <br />
            <br />
            To achieve a globally recognized qualification in the fields of
            Maritime & Merchant Marine, Engineering, Technology, Health
            Sciences, Aircraft Maintenance Engineering, IT, Logistics,
            International Transportation, Management, Marketing & Branding,
            Tourism & Hospitality, Law, HR, English Language & Education,
            Banking and Finance, Sports & Physical Education and Vocational
            training, CINEC offers a unique opportunity maintaining
            international standards of quality assurance.
          </p>
          <div className="flex justify-center items-center mt-5 w-full">
            <RealTimeCrowdData />
          </div>
        </div>
        <div className="w-[65%] ">
          <MapView onComponentChange={handleComponentChange} />{" "}
          {/* Pass the handler to MapView */}
        </div>
      </div>
      <div className="mt-6">
        <SmartRecommendations />
      </div>
      <div className="flex">
        <div className="flex-1">
          <PersonalizedRoutes />
        </div>
        <div className="flex-1">
          <RouteHistory />
        </div>
      </div>
      <div ref={redDivRef}>
        {selectedComponent === "wulfrunainfo" && <Wulfrunainfo />}
        {selectedComponent === "cafeteria" && <RoutePlanner />}
        {selectedComponent === "dalian" && <Dalian />}
        {selectedComponent === "zenith" && <ZenithInfo />}
        {selectedComponent === "library" && <Library />}
        {selectedComponent === "ground" && <Ground />}
        {selectedComponent === "main" && <AuditoriumInfo />}
      </div>
      <Library /> {/* Render Library component here */}
      <Wulfrunainfo />
      <ZenithInfo />
      <Dalian />
    </>
  );
}
