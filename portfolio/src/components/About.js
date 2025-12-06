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
              I develop multimodal machine learning frameworks that integrate bioimaging and omics data for personalized medicine. As a PhD student  under Prof. Magi, I'm building models that are both high-performing and practical, focusing on scalability, efficient training on large datasets, and deployment systems that clinicians can use without deep ML expertise.
            </p>
            <p>
              Before my PhD, I spent two years as a research fellow at the University of Florence's bioimaging lab, where I built mixed reality applications using Unity and HoloLens for surgical planning. I worked directly with surgical teams to develop prototypes that are now in clinical testing workflows.
            </p>
            <p>
              I taught myself programming from scratch starting in February 2020. Within four years, I went from writing my first line of code to building ML systems and earning a research fellowship.
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