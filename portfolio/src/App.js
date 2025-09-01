import React, { useState, useEffect } from 'react';
import Navbar from '../src/components/Navbar';
import Home from '../src/components/Home';
import About from '../src/components/About';
import Experiences from '../src/components/Experiences';
import Projects from '../src/components/Projects';
import Contact from '../src/components/Contact';
import './styles/main.css';

const App = () => {
  const [theme, setTheme] = useState('dark'); // Stato per gestire il tema

  useEffect(() => {
    // Applica la classe 'light-theme' al body se il tema è 'light'
    document.body.classList.toggle('light-theme', theme === 'light');
  }, [theme]);

  // Funzione per cambiare il tema
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="App">
      {/* Passa la funzione e lo stato del tema al componente Navbar */}
      <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
      <main>
        <Home />
        <About />
        <Experiences />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;