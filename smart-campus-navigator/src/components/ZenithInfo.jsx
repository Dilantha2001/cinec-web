import React from "react";
import "../styles.css";
import ZenithImage from "../assets/ZenithClass.jpeg";

const ZenithInfo = () => {
  return (
    <div className="container">
      <div className="left-column">
        <img src={ZenithImage} alt="Zenith Building" className="image" />
      </div>
      <div className="right-column">
        <div className="description">
          <h1>About the Zenith Building</h1>
          <p>
            Dalian Building is one of the main buildings on the CINEC campus.
          </p>
          <p>
            <strong>Classes:</strong> 50 Classrooms and Computer Lab
          </p>
          <p>
            <strong>Access:</strong> All Students in CINEC Campus
          </p>
          <p>
            <strong>Vision & Mission:</strong> Excellence in higher education
          </p>
          <p>
            <strong>Opening Hours:</strong> Mon–Fri: 8:30 AM – 4:30 PM.
          </p>
        </div>
        <div className="card">
          <div className="info-box">
            <h2>Opening Hours</h2>
            <p>Mon–Fri: 8:30 AM – 4:30 PM</p>
          </div>
          <div className="info-box">
            <h2>Location</h2>
            <p>Corner of the Campus</p>
          </div>
          <div className="info-box">
            <h2>Services</h2>
            <p>
              Free Wi-Fi & Study Zone
              <br />
              Above 100 Computers
              <br />
              Quiet Study Space
            </p>
          </div>
          <div className="info-box">
            <h2>Contact</h2>
            <p>
              Email:{" "}
              <a href="mailto:Zenith@cinec.edu.lk">Zenith@cinec.edu.lk</a>
              <br />
              Phone: +94 11 203 2004
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZenithInfo;
