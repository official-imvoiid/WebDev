// src/components/PapersSection.jsx
import React from 'react';
import './PapersSection.css'; // You'll create this CSS file
import RightArrowImg from '../assets/images/RightArrow.png'; // Import RightArrow.png
import Icons from '../assets/images/Icons.txt'; // if you plan to use Icons.txt

function PapersSection() {
  return (
    <section className="papers-section">
      <div className="papers-container">
        <div className="papers-card">
          <p>My Papers</p>
          <h2>Research</h2> {/* You might want to adjust this title based on design */}
          <img src={RightArrowImg} alt="Right Arrow" className="arrow-icon" />
          {/* You can potentially use Icons.txt content here if needed */}
        </div>
      </div>
    </section>
  );
}

export default PapersSection;