/* Reset and Base */
@import url('https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Cabin Sketch', cursive !important;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
  background-color: #1A1A1D;
  
}



:root {
  --bg-dark: #1A1A1D;
  --bg-card: #27272A;
  --bg-card-hover: #3F3F46;
  --color-white: #fff;
  --color-grey: #9CA3AF;
  --color-light-grey: #D1D5DB;
  --color-yellow: #EAB308;
  --color-github: #F9A825;
  --color-blue: #0ea5e9;
}

body {
  background-color: var(--bg-dark);
  color: var(--color-white);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.5;
  padding: 0;
}

/* Layout */
.portfolio {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-dark);
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

/* Header */
.header {
  padding: 2rem 0; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.logo {
  font-size: 2.5rem; 
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-white);
  text-decoration: none;
  font-family: Arial, sans-serif !important;
}

.nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  font-size: 1rem; 
  font-weight: 500;
  color: var(--color-white);
  text-decoration: none;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-yellow);
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: var(--color-yellow);
}

.nav-link:hover::after {
  width: 100%;
}

/* Keyframes for the glowing effect */
@keyframes rainbow-glow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.get-in-touch {
  font-family: Arial, sans-serif !important;
  position: relative;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 50px; 
  color: black; 
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease-in-out;
  border: none; 
  background-color: white; 
  z-index: 1; 
}

/* Rainbow border container */
.get-in-touch::before {
  content: "";
  position: absolute;
  top: -3px;  /* Increased padding for better blur */
  left: -3px;
  right: -3px;
  bottom: -3px;
  border-radius: inherit;
  background: linear-gradient(
    90deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #ff00c8,
    #ff0000
  );
  background-size: 400%;
  z-index: -1;
  animation: rainbow-glow 3s linear infinite;
  filter: blur(8px); /* Increased blur for a softer rainbow */
  opacity: 0.8; /* Reduce intensity to make text clearer */
}

/* White button background */
.get-in-touch::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  border-radius: inherit;
  z-index: -1;
}

/* Hover Effect: Show rainbow and change text color */
.get-in-touch:hover {
  color: white;
  transform: scale(1.05);
}

.get-in-touch:hover::after {
  opacity: 0; 
}


/* Footer */
.footer {
  padding: 4rem 0; 
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 3rem;
}


.quote {
  font-family: 'Dancing Script', cursive !important;
  font-size: 2.75rem;
  font-weight: 1000;
  margin-bottom: 2.5rem;
  text-transform: uppercase;
  color: var(--color-white);
  letter-spacing: 0.1em;
}


.footer-nav {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-link {
  font-size: 0.875rem;
  color: var(--color-white);
  text-decoration: none;
  position: relative;
}

.footer-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-yellow);
  transition: width 0.3s ease;
}

.footer-link:hover::after {
  width: 100%;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

/* Social Links */
.social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s ease-in-out forwards;
}

/* Social Icon Defaults */
.social-icon {
  font-size: 1.75rem;
  color: var(--color-white);
  transition: transform 0.3s ease, text-shadow 0.3s ease, color 0.3s ease;
  position: relative;
}

/* Hover Effects */
.social-icon:hover {
  transform: scale(1.2) rotate(5deg); /* Scale & slight rotation */
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
}

/* Custom Hover Effects for Each Icon */
.instagram:hover {
  color: #e1306c;
  text-shadow: 0 0 15px #e1306c, 0 0 25px #e1306c;
}

.linkedin:hover {
  color: #0077b5;
  text-shadow: 0 0 15px #0077b5, 0 0 25px #0077b5;
}

.pinterest:hover {
  color: #bd081c;
  text-shadow: 0 0 15px #bd081c, 0 0 25px #bd081c;
}

.github:hover {
  color: yellow;
  text-shadow: 0 0 15px yellow, 0 0 25px yellow;
}

.reddit:hover {
  color: #ff4500;
  text-shadow: 0 0 15px #ff4500, 0 0 25px #ff4500;
}

.civitai:hover {
  color: #facc15;
  text-shadow: 0 0 15px #facc15, 0 0 25px #facc15;
}

.youtube:hover {
  color: #ff0000;
  text-shadow: 0 0 15px #ff0000, 0 0 25px #ff0000;
}

/* Fade-in Animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.copyright {
  font-size: 0.875rem;
  color: var(--color-grey);
  margin-top: 1.5rem;
}

/* Arrow Pointer */
.arrow-pointer {
  margin-top: auto;
  display: inline-block;
  font-size: 1.5rem;
  color: var(--color-yellow);
}

/* Accessibility */
a:focus, button:focus {
  outline-offset: 2px;
}

/* Media Queries */
@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .profile-card {
    grid-column: span 2;
  }
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    padding: 1.5rem 0;
  }
  .nav {
    width: 100%;
    justify-content: space-between;
  }
}

@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .profile-card {
    grid-column: span 1;
  }
  .nav {
    flex-wrap: wrap;
    gap: 1.5rem;
  }
  .get-in-touch {
    margin-top: 0.75rem;
  }
}


/* New Layout and Content */
.portfolio .grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: auto auto auto;
  gap: 1.8rem; /* Increased gap for larger card feel */
  margin-top: 35px; /* Increased top margin */
  max-width: 1400px; /* Increased overall container size more */
  margin: 0 auto;
  padding: 0 25px; /* Increased padding */
}

.card {
  background-color: var(--bg-card);
  border-radius: 15px; /* Larger border radius */
  padding: 30px; /* More increased padding */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18); /* Enhanced shadow more */
  transition: background-color 0.3s ease;
  display: flex;
  flex-direction: column;
}

.card:hover {
  background-color: var(--bg-card-hover);
}

.card-title {
  font-size: 1.6rem; /* Further increased font size */
  font-weight: 700;
  color: var(--color-white);
  margin-bottom: 1.2rem;
}

.card-description {
  font-size: 1.2rem; /* Further increased font size */
  color: var(--color-light-grey);
  margin-bottom: 1.5rem;
}

.card-icon {
  font-size: 3.5rem; /* Larger icons */
  margin-bottom: 1.5rem;
}

/* Row 1 */
.profile-card {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

.resume-card {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
}

.achievement-card {
  grid-column: 3 / 4;
  grid-row: 1 / 2;
}

/* Row 2 - Adjusted order */
.github-card {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
}

.about-card {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}



.research-card {
  grid-column: 3 / 4;
  grid-row: 2 / 3;
  padding: 25px;
  font-size: 1.5rem;
}

/* Row 3 */
.contact-card {
  grid-column: 1 / 2;
  grid-row: 3 / 4;
}

.skills-card {
  grid-column: 2 / 4;
  grid-row: 3 / 4;
  display: flex;
  flex-direction: column;
}

.contact-card .card-title {
  color: var(--color-white);
}

.contact-card .card-description {
  color: var(--color-yellow);
  font-size: 1.7rem; /* Larger yellow text */
  font-weight: 600;
}

/* GitHub icon specific styling */
.github-card .github-icon {
  font-size: 7rem; /* Larger GitHub icon */
  color: var(--color-github);
}


/* Responsive adjustments */
@media (max-width: 1100px) { /* Adjusted breakpoint */
  .portfolio .grid {
    grid-template-columns: 1fr 1fr;
  }
  
  .profile-card {
    grid-column: 1 / 3;
  }
  
  .skills-card {
    grid-column: 1 / 3;
  }
  
  .research-card {
    grid-column: 1 / 2;
  }
  
  .about-card {
    grid-column: 2 / 3;
  }
}

@media (max-width: 750px) { /* Adjusted breakpoint */
  .portfolio .grid {
    grid-template-columns: 1fr;
  }
  
  .profile-card,
  .resume-card,
  .achievement-card,
  .research-card,
  .github-card,
  .about-card,
  .contact-card,
  .skills-card {
    grid-column: 1 / 2;
  }
  
  .skills-container {
    flex-direction: column;
    gap: 1.8rem;
  }
}
