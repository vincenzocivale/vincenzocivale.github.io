import React from 'react';
import './../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="inner-section">
        <h2 className="about-heading">
          <span className="about-number">01.</span> About Me
        </h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a PhD student specialising in multimodal machine learning, focusing on integrating bioimaging and omics data for personalized medicine applications. My focus is on building high-performing, scalable models and deployable systems designed for clinicians, prioritizing interpretability and reliability.
            </p>
            <p>
              I started learning to code at the beginning of the pandemic, which led to a two-year research fellowship at the Bioimaging Laboratory. During this time, I developed mixed reality applications for surgical planning and training and supervised several thesis students.
            </p>
            <p>
               I have started writing a blog that explains healthcare ML research papers in an accessible way. The aim is to bridge the gap between general introductions and technical publications for those new to the field.
            </p>
            <ul className="skills-list">
              <li>Bio-imaging</li>
              <li>Single cell</li>
              <li>Multi-modal ML</li>
              <li>Computer vision</li>
              <li>Genomics</li>
              <li>Explainable AI</li>
            </ul>
          </div>
         <div className="about-image-container">
            <img src="/assets/images/cv_profile.jpg" alt="Profile Picture" className="profile-image" />
            <svg className="profile-text-svg" viewBox="0 0 50 300"> {/* ViewBox adattato alle dimensioni CSS */}
              <text x="50%" y="50%" text-anchor="middle" className="svg-text-outline">
                プロフィール
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;