import React from 'react';
import './../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-heading">
        <span className="contact-number">04.</span> Get In Touch
      </h2>
      <p className="contact-text">
        I'm always looking for new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out to me!
      </p>
      <div className="contact-links"> {/* Questo div ora conterrà solo il pulsante */}
        <a href="mailto:civalevincenzoyuto@gmail.com" className="contact-button">Say Hello</a>
      </div>
    </section>
  );
};

export default Contact;