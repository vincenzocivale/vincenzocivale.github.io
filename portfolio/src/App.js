import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Socials from './components/Socials';
import Email from './components/Email';
import './styles/main.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="App">
      {/* Pass the state and a function to update it to the Navbar */}
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      {/* Conditionally render the overlay */}
      <div className={`overlay ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(false)}></div>
      
      {/* Conditionally render the Socials and Email components */}
      <Socials isMenuOpen={isMenuOpen} />
      <Email isMenuOpen={isMenuOpen} />
      
      <main>
        <Home />
        <About />
        <Experiences />
        <Projects />
        <Contact />
        {/* You only need one Socials component. The desktop and mobile versions are handled by CSS. */}
      </main>
    </div>
  );
};

export default App;