// Footer.js
// Footer.js

import React from 'react';
import './css/footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo-section">
        <img src="https://flowbite.com/docs/images/logo.svg" alt="Logo" className="logo" />
        <span className="brand-name">GeeksFoods</span>
      </div>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Incidunt consequuntur amet culpa cum itaque neque.</p>
      <div className='navigation'>
        <a href="#" className="nav-item">Home</a>
        <a href="#" className="nav-item">Quote</a>
        <a href="#" className="nav-item">Restaurants</a>
        <a href="#" className="nav-item">Foods</a>
        <a href="#" className="nav-item">Contact</a>
      </div>
      <div className='social-media'>
        <a href="#" className="social-item">Facebook</a>
        <a href="#" className="social-item">Twitter</a>
        <a href="#" className="social-item">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;

