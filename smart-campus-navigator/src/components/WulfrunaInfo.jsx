import React from "react";
import "../styles.css";
import WulfrunaImage from "../assets/wulfruna.jpeg";

const WulfrunaInfo = () => {
  return (
    <div className="container">
      <div className="left-column">
        <img src={WulfrunaImage} alt="Wulfruna Image" className="Images" />
      </div>
      <div className="right-column">
        <div className="Description">
          <h1>About the Wulfruna Building</h1>
          <p>
            The Wulfruna building at CINEC Campus houses the Faculty of
            Management and Social Sciences, the Faculty of Engineering and
            Technology, and related labs like the Civil Engineering Lab and
            Mechanical, Thermodynamic and Fluid Lab, according to CINEC Campus.{" "}
          </p>
        </div>

        <div className="card">
          <div className="info-box">
            <h2>Opening Hours</h2>
            <p>Mon–Fri: 8:30 AM – 4.30 PM</p>
          </div>
          <div className="info-box">
            <h2>Location</h2>
            <p>Corner of the Campus</p>
          </div>
          <div className="info-box">
            <h2>Services</h2>
            <p>
              Free Wi-Fi & study zone
              <br />
              Above 5 Labs
              <br /> Quiet study space
            </p>
          </div>
          <div className="info-box">
            <h2>Contact</h2>
            <p>
              Email: Wulfruna@cinec.edu.lk
              <br />
              Phone: +94 11 203 2004
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WulfrunaInfo;
