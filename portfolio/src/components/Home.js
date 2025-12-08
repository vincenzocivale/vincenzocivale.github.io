import React from 'react';
import './../styles/Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <p className="intro">👋 Hi, my name is</p>
      <h1 className="name">Vincenzo Yuto Civale</h1>
      <h2 className="title">Biomedical Engineer</h2>
      <p className="description">
        PhD researcher developing multimodal machine learning methods for healthcare applications, combining bio-imaging and omics data to build interpretable, adoption-ready clinical tools.
      </p>
      <div className="dna-background-svg">
        <img src="/assets/images/dna.svg" alt="DNA Structure" />
      </div>
    </section>
  );
};

export default Home;