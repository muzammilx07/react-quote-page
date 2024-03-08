// App.js
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar.js';
import LandingPage from './LandingPage.js';
import Hero from './Hero.js';
import Members from './Members.js'
import './css/App.css';
import Quote from './Quote';
const App = () => {
  return (
    <div>
      <Navbar />
      <Quote/>
      <Footer />
    </div>
  );
};

export default App;
