import React from 'react';
import Socials from './Socials';
import './../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-socials" aria-label="Social links">
        <Socials />
      </div>
      <p>
        Inspired by the work of <a href="https://v4.brittanychiang.com" target="_blank" rel="noopener noreferrer">Brittany Chiang</a>.
        Adapted and extended by me.
      </p>
    </footer>
  );
};

export default Footer;