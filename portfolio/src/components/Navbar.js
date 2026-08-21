import React, { useEffect, useState } from 'react';
import Socials from './Socials';
import './../styles/Navbar.css';

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNavClick = (event, sectionId) => {
    event.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Work', target: 'projects' },
    { label: 'Publications', target: 'publications' },
    { label: 'About', target: 'about' },
    { label: 'Experience', target: 'experiences' },
    { label: 'Contact', target: 'contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo" />

      <button
        className="menu-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`} />
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`} />
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`} />
      </button>

      <ul className="nav-links">
        {navItems.map(({ label, target }) => (
          <li key={target}>
            <a href={`#${target}`} onClick={(event) => handleNavClick(event, target)}>
              {label}
            </a>
          </li>
        ))}
        <li className="nav-cv">
          <a href="/assets/vincenzo_civale_resume.pdf" download="vincenzo_civale_resume.pdf">Resume</a>
        </li>
      </ul>

      <ul className={`nav-links-mobile ${isMenuOpen ? 'open' : ''}`}>
        {navItems.map(({ label, target }) => (
          <li key={target}>
            <a href={`#${target}`} onClick={(event) => handleNavClick(event, target)}>
              {label}
            </a>
          </li>
        ))}
        <li className="nav-cv-mobile">
          <a
            href="/assets/vincenzo_civale_resume.pdf"
            download="vincenzo_civale_resume.pdf"
            onClick={() => setIsMenuOpen(false)}
          >
            Resume
          </a>
        </li>
        <li className="nav-socials-mobile">
          <Socials />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
