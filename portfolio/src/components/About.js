import React from 'react';
import './../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="inner-section">
        <h2 className="about-heading">
          <span className="about-number">03.</span> About
        </h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a PhD researcher working on machine learning for biomedical data. My research focuses on representation learning and multimodal methods across bioimaging and omics, with an emphasis on models that are efficient, interpretable, and reliable.
            </p>
            <p>
              I started coding during the pandemic, which led to a two-year research fellowship at the Bioimaging Laboratory. There I worked on medical image analysis and mixed-reality applications for surgical planning and training, while also supervising thesis students.
            </p>
            <p>
              I enjoy working at the boundary between research and engineering: understanding why a model works, building the infrastructure needed to evaluate it properly, and turning promising ideas into reproducible systems.
            </p>
            <ul className="skills-list">
              <li>Bioimaging</li>
              <li>Single-cell</li>
              <li>Multimodal ML</li>
              <li>Computer vision</li>
              <li>Genomics</li>
              <li>Efficient ML</li>
            </ul>
          </div>
          <div className="about-image-container">
            <img src="/assets/images/cv_profile.jpg" alt="Vincenzo Yuto Civale" className="profile-image" />
            <svg className="profile-text-svg" viewBox="0 0 50 300" aria-hidden="true">
              <text x="50%" y="50%" textAnchor="middle" className="svg-text-outline">
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
