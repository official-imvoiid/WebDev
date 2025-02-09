// src/components/AboutSection.jsx
import React from 'react';
import './AboutSection.css'; // You'll create this CSS file
import AboutVoiidImg from '../assets/images/AboutVoiid.png'; // Import AboutVoiid.png
import RightArrowImg from '../assets/images/RightArrow.png'; // Import RightArrow.png

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-card">
          <p>BRANDING</p>
          <h2>About Voiid</h2>
          <img src={AboutVoiidImg} alt="About Voiid" className="about-image" />
          <img src={RightArrowImg} alt="Right Arrow" className="arrow-icon" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;