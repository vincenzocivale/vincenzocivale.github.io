import React from 'react';
import Socials from './Socials';
import Email from './Email';
import './../styles/SideElements.css';

const SideElements = () => {
  return (
    <div className="side-elements-container">
      <div className="socials-wrapper">
        <Socials />
      </div>
      <div className="email-wrapper">
        <Email />
      </div>
    </div>
  );
};

export default SideElements;
