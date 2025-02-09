// src/components/HeroSection.jsx
import React from 'react';
import './HeroSection.css'; // You'll create this CSS file
import ProfilePic from '../assets/images/ProfilePic.png'; // Import ProfilePic.png
import RightArrowImg from '../assets/images/RightArrow.png'; // Import RightArrow.png

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-left">
          <img src={ProfilePic} alt="Voiid Profile" className="profile-pic" />
          <div className="hero-text">
            <h1>Hey, I'm Voiid 👋</h1>
            <p>"A Developer & CyberSecurity Student"</p>
          </div>
        </div>

        <div className="hero-right">
          <div className="learn-more-section">
            <h2>LEARN MORE ABOUT ME</h2>
            <div className="resume-achievement-grid">
              <div className="resume-card">
                <p>See my resume</p>
                <img src={RightArrowImg} alt="Right Arrow" className="arrow-icon" />
              </div>
              <div className="achievements-card">
                <p>Achievements</p>
                <img src={RightArrowImg} alt="Right Arrow" className="arrow-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;