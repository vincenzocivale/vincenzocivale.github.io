import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Publications from './components/Publications';
import About from './components/About';
import Experiences from './components/Experiences';
import Contact from './components/Contact';
import SideElements from './components/SideElements';
import Footer from './components/Footer';
import './styles/main.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="App">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <div
        className="overlay"
        style={{ display: isMenuOpen ? 'block' : 'none' }}
        onClick={() => setIsMenuOpen(false)}
      />

      <SideElements />

      <main>
        <div className="content-wrapper">
          <Home />
        </div>
        <div className="section-separator" />

        <div className="content-wrapper">
          <Projects />
        </div>
        <div className="section-separator" />

        <div className="content-wrapper">
          <Publications />
        </div>
        <div className="section-separator" />

        <div className="content-wrapper">
          <About />
        </div>
        <div className="section-separator" />

        <div className="content-wrapper">
          <Experiences />
        </div>
        <div className="section-separator" />

        <div className="content-wrapper">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
