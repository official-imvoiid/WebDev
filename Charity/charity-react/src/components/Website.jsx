import React from 'react';
import './Website.css'; // Import your CSS file
import WebsiteLogic from './WebsiteLogic'; // Import the logic component

const Website = () => {
  // Get all the logic functions and state from WebsiteLogic
  const {
    contactForm,
    blogPopup,
    donationPopup,
    scrollToSection,
    openContactForm,
    closeContactForm,
    handleFormChange,
    handleFormSubmit,
    handleBlogClick,
    closeBlogPopup,
    handleDonationClick,
    closeDonationPopup
  } = WebsiteLogic();

  return (
    <div>
      {/* Top Header */}
      <header className="top-header">
        <div className="container">
          <div className="top-header-links">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
            <a href="#events" onClick={(e) => { e.preventDefault(); alert('Events Coming Soon!'); }}>Events</a>
            <a href="#volunteer" onClick={(e) => { e.preventDefault(); alert('Volunteer Registration Coming Soon!'); }}>Volunteer</a>
          </div>
          <div className="social-icons">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </header>

      {/* Main Navigation */}
      <header className="main-header">
        <div className="container">
          <div className="logo">VOIID</div>
          <nav className="main-nav">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About Us</a>
            <a href="#causes" onClick={(e) => { e.preventDefault(); scrollToSection('causes'); }}>Our Causes</a>
            <a href="#blog" onClick={handleBlogClick}>Blog</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); openContactForm(); }}>Contact</a>
          </nav>
        </div>
      </header>

      {/* Sticky Social Media Icons */}
      <div className="side-social">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
          <div className="icon-container">
            <i className="fab fa-twitter"></i>
            <span className="icon-text">Twitter</span>
          </div>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
          <div className="icon-container">
            <i className="fab fa-facebook-f"></i>
            <span className="icon-text">Facebook</span>
          </div>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
          <div className="icon-container">
          <i class="fa-brands fa-instagram"></i>
            <span className="icon-text">Instagram</span>
          </div>
        </a>
      </div>

{/* Hero Section */}
<section className="hero" id="home">
  <div className="hero-overlay">
    <div className="hero-content">
      <div className="mission-image"/>
      <div className="hero-text-container">
        <h1 className="hero-title">About Us</h1>
        <p className="hero-text">
          We are dedicated to making a difference, bringing hope and support to those in need.
        </p>
        <p className="hero-text">
        Give a little, change a lot. Every act of kindness counts. 🚀❤️
        </p>
      </div>
    </div>
  </div>
</section>


{/* Mission Section */}
<section className="mission-section" id="about">
  <div className="container">
    <div className="mission-content">
      <div className="mission-image">
        <img src="/images/React.jpg" alt="React Logo" />
      </div>
      <div className="mission-text">
        <h2 className="section-title">Our Mission</h2>
        <p>
          Delivering a fully reactive website, developed with ❤️ using React ⚛️
          for a seamless and dynamic experience.🚀.
        </p>
        <a
          href="#contact"
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            openContactForm();
          }}
        >
          Contact Us
        </a>
      </div>
    </div>
  </div>
</section>

{/* Causes Section */}
<section className="causes-section" id="causes">
  <div className="container">
    <div className="causes-intro">
      <h2 className="section-title">Our Causes</h2>
      <p>Join us in making a difference.</p>
    </div>
    <div className="causes-grid">
      
      {/* First Cause Card - Education */}
      <div className="cause-card">
        <div className="cause-image" style={{ backgroundImage: "url('/images/Education.jpg')" }}></div>
        <div className="cause-content">
          <h3 className="cause-title">Education for All</h3>
          <span className="cause-tag tag-green">Education</span>
          <p>Help provide education to underprivileged children.</p>
          <div className="donation-info">
            <div className="donator">
              <div className="donator-image" style={{ backgroundImage: "url('/images/Sung Jin woo.jpg')" }}></div>
              <span>Sung Jin-Woo</span>
            </div>
            <span className="donation-amount">$500 raised</span>
          </div>
        </div>
      </div>

      {/* Second Cause Card - Health */}
      <div className="cause-card">
        <div className="cause-image" style={{ backgroundImage: "url('/images/Health.jpg')" }}></div>
        <div className="cause-content">
          <h3 className="cause-title">Medical Assistance</h3>
          <span className="cause-tag tag-red">Health</span>
          <p>Provide medical help to those in need. Help Ensure Everyone Gets Right Medical Help.</p>
          <div className="donation-info">
            <div className="donator">
              <div className="donator-image" style={{ backgroundImage: "url('/images/Itsuka Shidou.jpg')" }}></div>
              <span>Shido Itsuka</span>
            </div>
            <span className="donation-amount">$800 raised</span>
          </div>
        </div>
      </div>

      {/* Third Cause Card - Food & Nutrition */}
      <div className="cause-card">
        <div className="cause-image" style={{ backgroundImage: "url('/images/Food.jpg')" }}></div>
        <div className="cause-content">
          <h3 className="cause-title">Food & Nutrition</h3>
          <span className="cause-tag tag-orange">Hunger Relief</span>
          <p>Ensure no one goes to bed hungry by providing meals to those in need.</p>
          <div className="donation-info">
            <div className="donator">
              <div className="donator-image" style={{ backgroundImage: "url('/images/Kagenou Cid.jpg')" }}></div>
              <span>John Smith</span>
            </div>
            <span className="donation-amount">$700 raised</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-box">
          <h2 className="cta-title">Join Us in Making a Difference</h2>
          <a href="#donate" className="btn" onClick={handleDonationClick}>Donate Now</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>About Us</h3>
              <p>I am Voiid, and this is my first-ever fully interactive React website—a charity platform built with passion for humanity and donations. This project is open-source under the MIT license—free to use, modify, and build upon. As I continue learning, I promise to create even more impactful open-source projects.

                Connect with me on GitHub, LinkedIn (voiidnova), or Instagram (@i.m.voiid).</p>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
                <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
                <li><a href="#causes" onClick={(e) => { e.preventDefault(); scrollToSection('causes'); }}>Causes</a></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); openContactForm(); }}>Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Newsletter</h3>
              <form className="newsletter-form">
                <input type="email" placeholder="Your Email" />
                <button className="btn">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            Made with <span className="heart-icon">❤️</span> by VOIID
          </div>
        </div>
      </footer>

      {/* Contact Form Modal */}
      {contactForm.isOpen && (
        <div className="modal-overlay" onClick={closeContactForm}>
          <div className="modal-content contact-modal" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeContactForm}>&times;</span>

            {contactForm.submitted ? (
              <div className="success-message">
                <h3>Thank you for your message!</h3>
                <p>We will get back to you soon.</p>
              </div>
            ) : (
              <>
                <h2 className="contact-title">Contact Us</h2>
                <form onSubmit={handleFormSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Name <span className="required">*</span></label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={contactForm.name}
                      onChange={handleFormChange}
                      placeholder="Your name"
                    />
                    {contactForm.errors.name && (
                      <span className="error">{contactForm.errors.name}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email <span className="required">*</span></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleFormChange}
                      placeholder="your.email@example.com"
                    />
                    {contactForm.errors.email && (
                      <span className="error">{contactForm.errors.email}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="comment">Message <span className="required">*</span></label>
                    <textarea
                      id="comment"
                      name="comment"
                      rows="4"
                      value={contactForm.comment}
                      onChange={handleFormChange}
                      placeholder="Your message here..."
                    ></textarea>
                    {contactForm.errors.comment && (
                      <span className="error">{contactForm.errors.comment}</span>
                    )}
                  </div>

                  <button type="submit" className="btn submit-btn">Send Message</button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* Blog Popup */}
      {blogPopup && (
        <div className="modal-overlay" onClick={closeBlogPopup}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeBlogPopup}>&times;</span>
            <h2>Blog</h2>
            <p>Our blog will be Added soon. Please check back later!</p>
          </div>
        </div>
      )}

      {/* Donation Popup */}
      {donationPopup && (
        <div className="modal-overlay" onClick={closeDonationPopup}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeDonationPopup}>&times;</span>
            <h2>Donation</h2>
            <p>No payment schemes have been attached yet by the website owner.
              If you are using this template, Please add your payment methods here.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Website;