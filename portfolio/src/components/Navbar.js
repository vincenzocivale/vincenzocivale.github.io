import React from 'react';
import './../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <a href="#home">Your Name</a>
      </div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#experiences">Experiences</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li className="nav-cv">
          <a href="/assets/cv/your-cv.pdf" download="Your-Name-CV.pdf">Resume</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;