import React from "react";
import "../styles.css";
import AuditoriumImage from "../assets/Auditorium.jpeg";

const AuditoriumInfo = () => {
  return (
    <div className="container">
      <div className="left-column">
        <img src={AuditoriumImage} alt="Auditorium Image" className="Images" />
      </div>
      <div className="right-column">
        <div className="Description">
          <h1>About the Auditorium</h1>
          <p>
            The CINEC Campus auditorium has a seating capacity of 360 people and
            is fully air-conditioned with the latest multimedia technology. It's
            designed to provide a comfortable and technologically advanced space
            for various events and presentations.{" "}
          </p>
        </div>

        <div className="card">
          <div className="info-box">
            <h2>Opening Hours</h2>
            <p>Mon–Fri: 8:30 AM – 4.30 PM</p>
          </div>
          <div className="info-box">
            <h2>Location</h2>
            <p>Near the Entrance</p>
          </div>
          <div className="info-box">
            <h2>Services</h2>
            <p>
              Free Wi-Fi & study zone
              <br />{" "}
            </p>
          </div>
          <div className="info-box">
            <h2>Contact</h2>
            <p>
              Email: main@cinec.edu.lk
              <br />
              Phone: +94 11 203 2004
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditoriumInfo;
