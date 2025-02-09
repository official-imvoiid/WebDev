// src/components/ResumeSection.jsx
import React from 'react';
import './ResumeSection.css'; // You'll create this CSS file
import ReserchImg from '../assets/images/Reserch.png'; // Import Reserch.png
import RightArrowImg from '../assets/images/RightArrow.png'; // Import RightArrow.png

function ResumeSection() {
  return (
    <section className="resume-section">
      <div className="resume-container">
        <div className="resume-card">
          <p>My Papers</p>
          <h2>Research</h2>
          <img src={ReserchImg} alt="Research Papers" className="research-image" />
          <img src={RightArrowImg} alt="Right Arrow" className="arrow-icon" />
        </div>
      </div>
    </section>
  );
}

export default ResumeSection;