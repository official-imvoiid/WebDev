// src/components/Header.jsx
import React from 'react';
import './Header.css'; // You'll create this CSS file

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">VOIID</div>
        <nav className="nav-links">
          <a href="#work">Work</a>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#resume">Resume</a>
        </nav>
        <button className="get-in-touch-button">GET IN TOUCH</button>
      </div>
    </header>
  );
}

export default Header;