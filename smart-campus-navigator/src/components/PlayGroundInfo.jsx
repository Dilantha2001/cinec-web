import React from "react";
import "../styles.css";
import playgroundImage from "../assets/ground.jpeg"; 


const  PlaygroundInfo = () => {
  return (
    <div className="container">
      <div className="left-column">
        <img src= {playgroundImage} alt="Flight Image" className="Images"/>
      </div>
      <div className="right-column">
        <div className="Description">
            <h1>About the Playground</h1>
            <p>The CINEC Campus offers a variety of sports facilities, including a basketball court, 
                within its campus in Colombo. CINEC Campus also has a gymnasium, a
                 swimming pool, and other sports facilities like cricket,
                  rugby, football, badminton, and table tennis. </p>
        </div>
       
        <div className="card">
        <div className="info-box">
                <h2>Opening Hours</h2>
                <p>Mon–Fri: 8:30 AM – 4.30 PM</p>
                </div>
                <div className="info-box">
                <h2>Location</h2>
                <p>Middle of the Campus</p>
                </div>
                <div className="info-box">
                <h2>Services</h2>
                <p>Every One can Access<br /> </p>
                </div>
                <div className="info-box">
                <h2>Contact</h2>
                <p>Email:   Main@cinec.edu.lk<br />Phone: +94 11 203 2004</p>
                </div>
        </div>
      
      </div>
    </div>
  );
};

export default PlaygroundInfo ;