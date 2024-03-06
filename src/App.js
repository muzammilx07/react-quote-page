// App.js
import React from 'react';  
import Footer from './Footer';
import Navbar from './Navbar.js';
import LandingPage from './LandingPage.js';
import Hero from './Hero.js';
import Members from './Members.js'
import './css/App.css';
const App = () => {
  return (
    <div>
      <Navbar/>
      <LandingPage/>
      <Hero/>
      <Members/>
      <Footer />
    </div>
  );
};

export default App;
