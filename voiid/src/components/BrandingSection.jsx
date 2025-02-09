// src/components/BrandingSection.jsx
import React from 'react';
import './BrandingSection.css'; // You'll create this CSS file
import RightArrowImg from '../assets/images/RightArrow.png'; // Import RightArrow.png

function BrandingSection() {
  return (
    <section className="branding-section">
      <div className="branding-container">
        <div className="branding-card">
          <p>BRANDING</p>
          <h2>About Voiid</h2> {/* You might want to adjust this title based on design */}
          <img src={RightArrowImg} alt="Right Arrow" className="arrow-icon" />
        </div>
      </div>
    </section>
  );
}

export default BrandingSection;