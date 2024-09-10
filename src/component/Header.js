import React from 'react';
import './Header.css'; // Import the CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo"><span>Ka</span>jal</div>
      <nav className="nav">
        <a href="#portfolio" className="nav-link">Portfolio</a>
        <a href="#services" className="nav-link">Services</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#education" className="nav-link">Education</a>
        <a href="#Technology" className="nav-link">Technology</a>
      </nav>
      <button className="contact-button">Contact Us</button>
    </header>
  );
};

export default Header;
