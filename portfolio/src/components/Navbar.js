import React, { useState, useEffect } from 'react';
import Socials from './Socials';
import './../styles/Navbar.css';

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
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
        </div>
      
      {/* Mobile menu toggle button */}
      <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
      </button>

      {/* Desktop navigation links */}
      <ul className="nav-links">
        <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
        <li><a href="#experiences" onClick={(e) => handleNavClick(e, 'experiences')}>Experiences</a></li>
        <li><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a></li>
        <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
        <li className="nav-cv">
          <a href="/assets/vincenzo_civale_resume.pdf" download="vincenzo_civale_resume.pdf">Resume</a>
        </li>
      </ul>

      {/* Mobile navigation links */}
      <ul className={`nav-links-mobile ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
        <li><a href="#experiences" onClick={(e) => handleNavClick(e, 'experiences')}>Experiences</a></li>
        <li><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a></li>
        <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
        <li className="nav-cv-mobile">
          <a href="/assets/vincenzo_civale_resume.pdf" download="vincenzo_civale_resume.pdf" onClick={() => setIsMenuOpen(false)}>Resume</a>
        </li>
        <li className="nav-socials-mobile">
          <Socials />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;