import React from 'react';
import './../styles/Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <p className="intro">Biomedical engineering × machine learning</p>
      <h1 className="name">Vincenzo Yuto Civale</h1>
      <h2 className="title">Machine Learning Researcher</h2>
      <p className="description">
        PhD researcher building efficient and interpretable machine learning systems for biomedical data, with a focus on bioimaging, genomics, single-cell data, and multimodal learning.
      </p>
    </section>
  );
};

export default Home;
