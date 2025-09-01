import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Socials from './components/Socials'; // Importa il nuovo componente
import Email from './components/Email';     // Importa il nuovo componente
import './styles/main.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Socials /> 
      <Email /> 
      <main>
        <Home />
        <About />
        <Experiences />
        <Projects />
        <Contact />
        <Socials />
      </main>
    </div>
  );
};

export default App;