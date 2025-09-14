import React, { useState, useEffect } from 'react';
import './../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">
        <a href="#home"></a>
      </div>
      
      {/* Mobile menu toggle button */}
      <button className="menu-toggle" onClick={handleMenuToggle} aria-label="Toggle menu">
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
      </button>

      {/* Desktop navigation links */}
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#experiences">Experiences</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li className="nav-cv">
          <a href="/assets/cv/your-cv.pdf" download="Your-Name-CV.pdf">Resume</a>
        </li>
      </ul>

      {/* Mobile navigation links */}
      <ul className={`nav-links-mobile ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="#about" onClick={handleMenuToggle}>About</a></li>
        <li><a href="#experiences" onClick={handleMenuToggle}>Experiences</a></li>
        <li><a href="#projects" onClick={handleMenuToggle}>Projects</a></li>
        <li><a href="#contact" onClick={handleMenuToggle}>Contact</a></li>
        <li className="nav-cv-mobile">
          <a href="/assets/cv/your-cv.pdf" download="Your-Name-CV.pdf" onClick={handleMenuToggle}>Resume</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;