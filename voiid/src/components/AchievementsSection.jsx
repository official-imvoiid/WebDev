// src/components/AchievementsSection.jsx
import React from 'react';
import './AchievementsSection.css'; // You'll create this CSS file
import AchivementsImg from '../assets/images/Achivements.png'; // Import Achivements.png
import RightArrowImg from '../assets/images/RightArrow.png'; // Import RightArrow.png

function AchievementsSection() {
  return (
    <section className="achievements-section">
      <div className="achievements-container">
        <div className="achievements-card">
          <p>Recent</p>
          <h2>Achievements</h2>
          <img src={AchivementsImg} alt="Achievements" className="achievements-image" />
          <img src={RightArrowImg} alt="Right Arrow" className="arrow-icon" />
        </div>
      </div>
    </section>
  );
}

export default AchievementsSection;