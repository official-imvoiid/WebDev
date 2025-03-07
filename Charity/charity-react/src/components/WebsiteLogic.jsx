import React, { useState, useEffect } from 'react';

// This component contains the business logic for the website
const WebsiteLogic = () => {
  // State for contact form
  const [contactForm, setContactForm] = useState({
    isOpen: false,
    name: '',
    email: '',
    comment: '',
    submitted: false,
    errors: {}
  });

  // State for blog popup
  const [blogPopup, setBlogPopup] = useState(false);

  // State for donation popup
  const [donationPopup, setDonationPopup] = useState(false);

  // Function to handle scroll to sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to open contact form
  const openContactForm = () => {
    setContactForm({ ...contactForm, isOpen: true });
  };

  // Function to close contact form
  const closeContactForm = () => {
    setContactForm({
      isOpen: false,
      name: '',
      email: '',
      comment: '',
      submitted: false,
      errors: {}
    });
  };

  // Function to validate form
  const validateForm = () => {
    const errors = {};
    
    if (!contactForm.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!contactForm.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(contactForm.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!contactForm.comment.trim()) {
      errors.comment = 'Comment is required';
    }
    
    return errors;
  };

  // Function to handle form input changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setContactForm({
      ...contactForm,
      [name]: value
    });
  };

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    
    if (Object.keys(errors).length === 0) {
      // Simulation of sending email to website owner
      console.log('Form submitted:', {
        name: contactForm.name,
        email: contactForm.email,
        comment: contactForm.comment
      });
      
      // In a real application, you would send this data to a server
      // For example using fetch or axios:
      // fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     name: contactForm.name,
      //     email: contactForm.email,
      //     comment: contactForm.comment
      //   })
      // });
      
      setContactForm({
        ...contactForm,
        submitted: true,
        errors: {}
      });
      
      // Close form after 3 seconds of success message
      setTimeout(() => {
        closeContactForm();
      }, 3000);
    } else {
      setContactForm({
        ...contactForm,
        errors
      });
    }
  };

  // Function to handle blog link click
  const handleBlogClick = (e) => {
    e.preventDefault();
    setBlogPopup(true);
  };

  // Function to close blog popup
  const closeBlogPopup = () => {
    setBlogPopup(false);
  };

  // Function to handle donation button click
  const handleDonationClick = (e) => {
    e.preventDefault();
    setDonationPopup(true);
  };

  // Function to close donation popup
  const closeDonationPopup = () => {
    setDonationPopup(false);
  };

  // UseEffect to add event listeners
  useEffect(() => {
    // Close popups on escape key
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape') {
        if (contactForm.isOpen) closeContactForm();
        if (blogPopup) closeBlogPopup();
        if (donationPopup) closeDonationPopup();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [contactForm.isOpen, blogPopup, donationPopup]);

  return {
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
  };
};

export default WebsiteLogic;