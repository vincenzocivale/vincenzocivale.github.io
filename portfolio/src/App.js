import React from 'react';
import Navbar from '../src/components/Navbar';
import Home from '../src/components/Home';
import About from '../src/components/About';
import Experiences from '../src/components/Experiences';
import Projects from '../src/components/Projects';
import Contact from '../src/components/Contact';
import './styles/main.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
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