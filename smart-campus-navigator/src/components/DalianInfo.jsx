import React from "react";
import "../styles.css";
import DalianImage from "../assets/dalian.jpeg"; 


const DalianInfo = () => {
  return (
    <div className="container">
      <div className="left-column">
        <img src= {DalianImage} alt="Dalian Image"  className="Images"/>
      </div>
      <div className="right-column">
        <div className="Description">
            <h1>About the Dalian Building</h1>
            <p>The Dalian Building is home to the Faculty of IT, equipped with 5 state-of-the-art computer labs.</p>
            <p><strong>Computers:</strong>More than 200 computers</p> 
            <p><strong>Access:</strong> All Students in Faculty of Computing</p> 
            <p><strong>Vision & Mission:</strong> Excellence in higher education </p>
            <p><strong>Opening Hours:</strong> Mon–Fri: 8:30 AM – 4.30 PM.</p>
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
                <p>Free Wi-Fi & study zone<br />Above 200 Computers<br /> Quiet study space</p>
                </div>
                <div className="info-box">
                <h2>Contact</h2>
                <p>Email: dalian@cinec.edu.lk<br />Phone: +94 11 203 2004</p>
                </div>
        </div>
      
      </div>
    </div>
  );
};

export default DalianInfo;