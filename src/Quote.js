import React, { useState, useEffect } from 'react';
import './css/quote.css';
import quotesData from './Quote.json';

const Quote = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    setQuotes(quotesData);
  }, []);

  return (
    <div className='main'>
      {quotes.map((quote, index) => (
        <div key={index} className="quote-container">
            <p>{quote.quote}</p>
            <footer>{quote.author}</footer>
        </div>
      ))}
    </div>
  );
};

export default Quote;
