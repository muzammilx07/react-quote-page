// App.js
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar.js';
import './css/App.css';
import Hotel from './Hotel';
const App = () => {
  return (
    <div>
      <Navbar />
      <Hotel/>
      <Footer />
    </div>
  );
};

export default App;
