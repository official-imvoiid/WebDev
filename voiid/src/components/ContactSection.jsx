// src/components/ContactSection.jsx
import React from 'react';
import './ContactSection.css'; // You'll create this CSS file

function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-card">
          <h2>Collaborate together!</h2>
          <button className="get-in-touch-now-button">Get in touch now</button>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;