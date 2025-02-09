// src/components/Footer.jsx
import React from 'react';
import './Footer.css'; // You'll create this CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faTwitter,
  faDiscord,
  faPinterest,
  faYoutube,
  faGithub,
  faRedditAlien,
} from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">VOIID</div>
        <nav className="footer-nav-links">
          <a href="#home">Home</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About</a>
          <a href="#resume">Resume</a>
        </nav>
        <div className="social-icons">
          <a href="#" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="#" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#" aria-label="Discord"><FontAwesomeIcon icon={faDiscord} /></a>
          <a href="#" aria-label="Pinterest"><FontAwesomeIcon icon={faPinterest} /></a>
          <a href="#" aria-label="YouTube"><FontAwesomeIcon icon={faYoutube} /></a>
          <a href="#" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="#" aria-label="Reddit"><FontAwesomeIcon icon={faRedditAlien} /></a>
          <a href="#" aria-label="Globe"><FontAwesomeIcon icon={faGlobe} /></a>
        </div>
        <div className="copyright">© 2025 ALL RIGHTS RESERVED</div>
      </div>
    </footer>
  );
}

export default Footer;