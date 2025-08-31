import React from 'react';
import Navbar from '../src/components/Navbar';
import Home from '../src/components/Home'; // Import the new Home component
import './styles/main.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        {/* Other sections will go here */}
      </main>
    </div>
  );
};

export default App;