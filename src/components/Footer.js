import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>PaymentHub</h3>
            <p>Secure, simple payment processing for your business.</p>
          </div>
          
          <div className="footer-section">
            <h3>Legal</h3>
            <ul className="footer-links">
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/cookies">Cookie Policy</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Support</h3>
            <ul className="footer-links">
              <li><a href="/help">Help Center</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} PaymentHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
