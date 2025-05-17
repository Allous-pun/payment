import React from 'react';
import Navbar from './components/Navbar.js';
import StripeLikePage from './StripeLikePage.js';
import Footer from './components/Footer.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <StripeLikePage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
