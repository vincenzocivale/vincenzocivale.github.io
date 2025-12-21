import React from 'react';
import './../styles/Socials.css';

const Socials = () => {
  return (
    <ul className="socials-list">
      <li>
        <a href="https://github.com/vincenzocivale" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
            <title>GitHub</title>
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/vincenzo-civale" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin">
            <title>LinkedIn</title>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
      </li>
      <li>
        <a href="https://scholar.google.com/citations?user=a6eFtBoAAAAJ&hl=it" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" className="feather feather-scholar" fill="currentColor">
            <title>Google Scholar</title>
            <path d="M256 411.12L0 202.667 256 0z"/><path d="M256 411.12l256-208.453L256 0z"/><circle cx="256" cy="362.667" r="149.333"/><path d="M121.037 298.667c23.968-50.453 75.392-85.334 134.963-85.334s110.995 34.881 134.963 85.334H121.037z"/>
          </svg>
        </a>
      </li>
    </ul>
  );
};

export default Socials;