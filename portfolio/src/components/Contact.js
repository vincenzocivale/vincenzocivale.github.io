import React from 'react';
import './../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-heading">
        <span className="contact-number">05.</span> Contact
      </h2>
      <p className="contact-text">
        I am interested in research collaborations and engineering opportunities at the intersection of machine learning and biomedicine. The best way to reach me is by email.
      </p>
      <div className="contact-links">
        <a href="mailto:civalevincenzoyuto@gmail.com" className="contact-button">Get in touch</a>
      </div>
    </section>
  );
};

export default Contact;
