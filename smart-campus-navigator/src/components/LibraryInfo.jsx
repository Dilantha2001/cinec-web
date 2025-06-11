import React from "react";
import "../styles.css";
import libraryImage from "../assets/library.jpeg"; 


const LibraryInfo = () => {
  return (
    <div className="container">
      <div className="left-column">
        <img src={libraryImage} alt="Library Image" className="Images"/>
      </div>
      <div className="right-column">
        <div className="Description">
            <h1>About the Library</h1>
            <p>The Learning Resource Center at CINEC Campus serves students and staff with a collection of books, periodicals, and digital resources.</p>
            <p><strong>Collection Size:</strong> 14,000 books, periodicals, multimedia.</p>
            <p><strong>Services:</strong> Lending, inter-library loans, photocopying, librarian assistance.</p>
            <p><strong>Access:</strong> IEEE Xplore.</p>
            <p><strong>Borrowing Policy:</strong> Students - 3 books/2 weeks, Lecturers - 6 books/1 month & extensions.</p>
            <p><strong>Vision & Mission:</strong> Excellence in higher education & human resource development.</p>
            <p><strong>Opening Hours:</strong> Mon–Sun: 8:30 AM – 5 PM.</p>
        </div>
       
        <div className="card">
        <div className="info-box">
                <h2>Opening Hours</h2>
                <p>Mon–Sun: 8:30 AM – 5 PM</p>
                </div>
                <div className="info-box">
                <h2>Location</h2>
                <p>Library building, ground floor</p>
                </div>
                <div className="info-box">
                <h2>Services</h2>
                <p>Free Wi-Fi & study zone<br />Book borrowing & renewals<br />Research assistance<br />Quiet study space</p>
                </div>
                <div className="info-box">
                <h2>Contact</h2>
                <p>Email: library@cinec.edu.lk<br />Phone: +94 11 203 2004</p>
                </div>
        </div>
      
      </div>
    </div>
  );
};

export default LibraryInfo;