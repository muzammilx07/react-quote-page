// Navbar.js
import React from 'react';
import './css/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left-section">
        <img src="https://flowbite.com/docs/images/logo.svg" alt="Logo" className="logo" />
        <span className="brand-name">GeeksFoods</span>
      </div>
      <div className="right-section">
        <span className="HomeNav">Home</span>
        <span className="quoteNav">Quote</span>
        <span className="RestNav">Resturants</span>
        <span className="FoodsNav">Foods</span>
        <span className="contactNav">Contact</span>
      </div>
      <div className='button'>
      <button className="get-started">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
