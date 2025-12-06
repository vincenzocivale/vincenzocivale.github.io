import React from 'react';
import './../styles/Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <p className="intro">Hi, my name is</p>
      <h1 className="name">Vincenzo Yuto Civale</h1>
      <h2 className="title">Biomedical Engineer</h2>
      <p className="description">
        PhD candidate developing multimodal ML frameworks for personalized medicine. 
        Combining bioimaging and omics data for scalable clinical applications.
      </p>
    </section>
  );
};

export default Home;