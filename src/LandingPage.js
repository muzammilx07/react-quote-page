// LandingPage.js
import React from 'react';
import './css/landing.css'

const LandingPage = () => {
  return (
    <div className='landing-page-div'>
        <div className='landing-innercontents'>
            <h1 className='h01'>Let us find your</h1>
            <h1 className='h02'>Forever Food.</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/> Nesciunt illo tenetur fuga ducimus numquam ea!</p>
            <div>
                <button className='btnsearch'>Seach Now</button>
                <button className='btnknow'>Know More</button>
            </div>
        </div>
    </div>
  );
};

export default LandingPage;
