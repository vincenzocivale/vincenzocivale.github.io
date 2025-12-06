import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SideElements from './components/SideElements';
import './styles/main.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="App">
      {/* Pass the state and a function to update it to the Navbar */}
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      {/* Conditionally render the overlay */}
      <div className={`overlay ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(false)}></div>
      
      {/* Render the left and right navigation elements */}
      <SideElements />
      
      <main>
        <Home />
        <div className="section-separator"></div>
        <About />
        <div className="section-separator"></div>
        <Experiences />
        <div className="section-separator"></div>
        <Projects />
        <div className="section-separator"></div>
        <Contact />
      </main>
    </div>
  );
};

export default App;