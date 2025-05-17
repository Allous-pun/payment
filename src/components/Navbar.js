import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo">PaymentHub</span>
        </div>
        
        <div className="hamburger" onClick={toggleMenu}>
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
        </div>
        
        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <a href="/" className="navbar-link">Home</a>
          <a href="/products" className="navbar-link">Products</a>
          <a href="/pricing" className="navbar-link">Pricing</a>
          <a href="/support" className="navbar-link">Support</a>
        </div>
      </div>
    </nav>
  );
}
