import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faReddit,
  faYoutube,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBolt,
  faCode,
  faBook,
  faCube,
  faLaptopCode,
  faCameraRetro,
  faGamepad,
  faFlask,
  faRobot,
  faMusic,
  faGraduationCap,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import "./WebSite.css";

const Portfolio = () => {
  return (
    <div className="portfolio">
      {/* HEADER */}
      <header className="header container">
        <a href="#" className="logo">
          VOIID
        </a>
        <nav className="nav">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Work</a>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Expertise</a>
          <a href="#" className="get-in-touch">Get in Touch</a>
        </nav>
      </header>

      {/* MAIN GRID */}
      <div className="cards-container">
        {/* PROFILE CARD */}
        <div className="card card-large profile-card">
          <div className="avatar">
            <img src="images/profile.png" alt="Profile" />
          </div>
          <h2 className="card-title">
            Hey, I'm Voiid <span role="img" aria-label="waving hand">👋</span>
          </h2>
          <p className="card-subtitle">"A Developer & Cyber-Security Student"</p>
        </div>

        {/* RESUME CARD */}
        <div className="card resume-card">
          <span className="card-subtitle">Learn more about me</span>
          <h2 className="card-title">See skill-set</h2>
          <a href="#" className="card-link">
            View <span>→</span>
          </a>
        </div>

        {/* ACHIEVEMENTS CARD */}
        <div className="card achievement-card">
          <span className="card-subtitle">Recent</span>
          <h2 className="card-title">Achievements <FontAwesomeIcon icon={faGraduationCap} /></h2>
          <a href="#" className="card-link">
            View <span>→</span>
          </a>
        </div>

        {/* RESEARCH CARD */}
        <div className="card research-card">
          <span className="card-subtitle">My Papers</span>
          <h2 className="card-title">Research <FontAwesomeIcon icon={faFlask} /></h2>
          <a href="#" className="card-link">
            View <span>→</span>
          </a>
        </div>

        {/* GITHUB CARD */}
        <div className="card github-card">
          <FontAwesomeIcon icon={faGithub} className="card-title" />
        </div>

        {/* COLLABORATE CARD */}
        <div className="card card-large card-cta collaborate-card">
          <FontAwesomeIcon icon={faHandshake} className="collaborate-icon" />
          <h2 className="card-title">Collaborate together!</h2>
          <p className="card-subtitle">
            Let's create something amazing and build the future of tech together
          </p>
          <a href="#" className="card-link">
            Get in touch <span>→</span>
          </a>
        </div>

        {/* ABOUT CARD */}
        <div className="card card-large about-card">
          <span className="card-subtitle">Branding</span>
          <h2 className="card-title">About Voiid</h2>
          <p>Passionate developer with a focus on cybersecurity and creative solutions.</p>
          <p>Voiid-More Than a Name, A Belief</p>
          <br />
          <p>Voiid isn't just an identity; it's a philosophy. A person's life truly ends when they stop dreaming. I chose Voiid—a fusion of Void and an extra I for Imagination—because I believe in the power of vision. To imagine, create, and achieve is to truly live.</p>
          <div className="icon-container" />
        </div>

        {/* SKILLS CARD */}
        <div className="card card-large skills-card">
          <span className="card-subtitle">What I do</span>
          <h2 className="card-title">My Expertise</h2>
          <div className="skills-grid">
            <div className="skill-button">
              <FontAwesomeIcon icon={faCode} className="skill-icon" />
              <span className="skill-name">Develop</span>
            </div>
            <div className="skill-button">
              <FontAwesomeIcon icon={faBook} className="skill-icon" />
              <span className="skill-name">Literature</span>
            </div>
            <div className="skill-button">
              <FontAwesomeIcon icon={faCube} className="skill-icon" />
              <span className="skill-name">3D & Editing</span>
            </div>
            <div className="skill-button">
              <FontAwesomeIcon icon={faLaptopCode} className="skill-icon" />
              <span className="skill-name">CyberSecurity</span>
            </div>
            <div className="skill-button">
              <FontAwesomeIcon icon={faCameraRetro} className="skill-icon" />
              <span className="skill-name">AI Artist</span>
            </div>
            <div className="skill-button">
              <FontAwesomeIcon icon={faRobot} className="skill-icon" />
              <span className="skill-name">AI Research</span>
            </div>
          </div>
        </div>

        {/* LATEST PROJECT CARD */}
        <div className="card project-card">
          <span className="card-subtitle">Featured Work</span>
          <h2 className="card-title">Latest Project</h2>
          <p>A cybersecurity tool for network traffic analysis</p>
          <a href="#" className="card-link">
            View project <span>→</span>
          </a>
        </div>

        {/* BLOG CARD */}
        <div className="card blog-card">
          <span className="card-subtitle">From my blog</span>
          <h2 className="card-title">Latest Articles</h2>
          <p>Securing Your Digital Footprint</p>
          <a href="#" className="card-link">
            Read more <span>→</span>
          </a>
        </div>

        {/* GAMING CARD */}
        <div className="card gaming-card">
          <FontAwesomeIcon icon={faGamepad} className="card-title" />
        </div>

        {/* MUSIC CARD */}
        <div className="card music-card">
          <FontAwesomeIcon icon={faMusic} className="card-title" />
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        {/* Footer Navigation */}
        <div className="footer-nav">
          <a href="#" className="footer-link">Home</a>
          <a href="#" className="footer-link">Work</a>
          <a href="#" className="footer-link">About</a>
          <a href="#" className="footer-link">Expertise</a>
        </div>

        {/* Quote */}
        <div className="quote">"Be the beginning of the change"</div>

        {/* Social Links Section */}
        <div className="social-links">
          <a href="#" className="social-icon instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="social-icon linkedin">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#" className="social-icon pinterest">
            <FontAwesomeIcon icon={faPinterest} />
          </a>
          <a href="#" className="social-icon github">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="#" className="social-icon reddit">
            <FontAwesomeIcon icon={faReddit} />
          </a>
          <a href="#" className="social-icon civitai">
            <FontAwesomeIcon icon={faBolt} />
          </a>
          <a href="#" className="social-icon youtube">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>

        {/* Copyright */}
        <div className="copyright">
          &copy; {new Date().getFullYear()} All Rights Reserved
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;