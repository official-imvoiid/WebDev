// src/components/WhatIDoSection.jsx
import React from 'react';
import './WhatIDoSection.css'; // You'll create this CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPenNib, faCube } from '@fortawesome/free-solid-svg-icons';

function WhatIDoSection() {
  return (
    <section className="what-i-do-section">
      <div className="what-i-do-container">
        <h2>WHAT I DO</h2>
        <div className="what-i-do-grid">
          <div className="develop-card">
            <FontAwesomeIcon icon={faCode} size="2x" />
            <p>Develop</p>
          </div>
          <div className="literature-card">
            <FontAwesomeIcon icon={faPenNib} size="2x" />
            <p>Literature</p>
          </div>
          <div className="editing-card">
            <FontAwesomeIcon icon={faCube} size="2x" />
            <p>3D & Editing</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatIDoSection;