import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Archive from './components/Archive'; // Import the new Archive component
import SideElements from './components/SideElements';
import Footer from './components/Footer'; // Import Footer component
import './styles/main.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HashRouter>
      <div className="App">
        {/* Pass the state and a function to update it to the Navbar */}
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        
        {/* Conditionally render the overlay */}
        <div className="overlay" style={{display: isMenuOpen ? 'block' : 'none'}} onClick={() => setIsMenuOpen(false)}></div>
        
        {/* Render the left and right navigation elements */}
        <SideElements />
        
        <Routes>
          <Route path="/" element={
            <main>
              <div className="content-wrapper">
                <Home />
              </div>
              <div className="section-separator"></div>
              <div className="content-wrapper">
                <About />
              </div>
              <div className="section-separator"></div>
              <div className="content-wrapper">
                <Experiences />
              </div>
              <div className="section-separator"></div>
              <div className="content-wrapper">
                <Projects />
                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                  <Link to="/archive" className="view-all-projects-button">View All Projects</Link>
                </div>
              </div>
              <div className="section-separator"></div>
              <div className="content-wrapper">
                <Contact />
              </div>
            </main>
          } />
          <Route path="/archive" element={<Archive />} />
        </Routes>
        <Footer /> {/* Add Footer component here */}
      </div>
    </HashRouter>
  );
};

export default App;