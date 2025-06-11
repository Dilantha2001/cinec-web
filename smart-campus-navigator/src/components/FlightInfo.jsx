import React from "react";
import "../styles.css";
import FlightImage from "../assets/flight.jpeg"; 


const FlightInfo = () => {
  return (
    <div className="container">
      <div className="left-column">
        <img src= {FlightImage} alt="Flight Image" className="Images"/>
      </div>
      <div className="right-column">
        <div className="Description">
            <h1>About the Flight</h1>
            <p>CINEC Campus is a Part 147 maintenance training organization approved by the Civil 
              Aviation Authority of Sri Lanka (CAASL). CINEC is the only training organization to 
              offer practical training on a Pressurised Lear Jet Aircraft to fulfil the licence Category B1.1
               requirement stipulated by CAASL. In addition to that, trainees at CINEC get the opportunity 
               to exclusively experience training on the
               following workshops gas turbine engine, composite repair, aircraft structural repair, NDT 
               and hydraulic Simulator Training.</p>
        </div>
       
        <div className="card">
        <div className="info-box">
                <h2>Opening Hours</h2>
                <p>Mon–Fri: 8:30 AM – 4.30 PM</p>
                </div>
                <div className="info-box">
                <h2>Location</h2>
                <p>Near the Playground</p>
                </div>
                <div className="info-box">
                <h2>Services</h2>
                <p>Free Wi-Fi & study zone<br /> Quiet study space</p>
                </div>
                <div className="info-box">
                <h2>Contact</h2>
                <p>Email:  aviation@cinec.edu.lk<br />Phone: +94 11 203 2004</p>
                </div>
        </div>
      
      </div>
    </div>
  );
};

export default FlightInfo;