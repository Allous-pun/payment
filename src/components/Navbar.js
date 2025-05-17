import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo">PaymentHub</span>
        </div>
        <div className="navbar-links">
          <a href="/" className="navbar-link">Home</a>
          <a href="/products" className="navbar-link">Products</a>
          <a href="/pricing" className="navbar-link">Pricing</a>
          <a href="/support" className="navbar-link">Support</a>
        </div>
      </div>
    </nav>
  );
}
