// Footer.js
import React from 'react';
import "../css/footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            We are a leading clothing store offering the latest fashion trends for men, women, and kids.
          </p>
        </div>
        <div className="footer-section links">
          <h2>Links</h2>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: support@clothingstore.com</p>
          <p>Phone: 7227990077</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Clothing Store. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;