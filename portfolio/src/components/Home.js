import React from 'react';
import './../styles/Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <p className="intro">Hi, my name is</p>
      <h1 className="name">Vincenzo Yuto Civale</h1>
      <h2 className="title">Biomedical Engineer</h2>
      <p className="description">
        I'm a biomedical engineer specializing in machine learning and bioinformatics. 
        I'm passionate about using data-driven approaches to solve complex problems in medicine and biology. 
        I will soon be starting my Ph.D. to continue my research in this field.
      </p>
    </section>
  );
};

export default Home;