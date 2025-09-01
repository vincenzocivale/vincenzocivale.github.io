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
              Hello! I'm an ambitious biomedical engineer with a strong focus on <strong>machine learning</strong> and <strong>bioinformatics</strong>. My journey started with a deep curiosity about how technology could revolutionize medicine, from understanding complex biological data to developing smarter diagnostic tools.
            </p>
            <p>
              I'm passionate about building data-driven solutions that bridge the gap between engineering and clinical research. My experience spans from developing predictive models for disease prognosis to analyzing genomic data to uncover new biological insights.
            </p>
            <p>
              I am excited to start my Ph.D. to continue exploring these fields and contribute to innovative research. Here are a few technologies I've been working with recently:
            </p>
            <ul className="skills-list">
              <li>Python (Pandas, NumPy, Scikit-learn)</li>
              <li>TensorFlow & PyTorch</li>
              <li>R</li>
              <li>Data Analysis & Visualization</li>
              <li>Genomic Data Analysis</li>
              <li>Database Management (SQL)</li>
            </ul>
          </div>
          <div className="about-image-container">
            <img src="/assets/images/cv_profile.jpg" alt="Profile Picture" className="profile-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;