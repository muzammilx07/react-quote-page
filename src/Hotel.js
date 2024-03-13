import React, { useState, useEffect } from 'react';
import hotelsData from './data.json';
import './css/quote.css';

const HotelList = ({ hotels }) => {
  return (
    <div className="hotel-container">
      {hotels.map((hotel, index) => (
        <div className="hotel-card" key={index}>
          <h2>{hotel.name}</h2>
          <p>Stars: {hotel.stars}</p>
          <p>Address: {hotel.address}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

const Hotel = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [minRating, setMinRating] = useState(1); // Default minimum rating
  const [filteredHotels, setFilteredHotels] = useState([]);

  useEffect(() => {
    setFilteredHotels(hotelsData);
  }, []);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    const filtered = hotelsData.filter((hotel) =>
      hotel.name.toLowerCase().includes(event.target.value.toLowerCase()) &&
      hotel.stars >= minRating
    );
    setFilteredHotels(filtered);
  };

  const handleRatingChange = (event) => {
    const rating = parseInt(event.target.value);
    setMinRating(rating);
    const filtered = hotelsData.filter((hotel) =>
      hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      hotel.stars >= rating
    );
    setFilteredHotels(filtered);
  };

  return (
<div className='hotel-container'>
  <div className='name'>
    <div className='input-custom'>
      <input
        className="hotel-input"
        type="text"
        placeholder="Search by hotel name..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
    <div className="custom-stars">
      <label htmlFor="minRating">Minimum Rating:</label>
      <select className="hotel-select" id="minRating" value={minRating} onChange={handleRatingChange}>
        <option value={1}>1 star</option>
        <option value={2}>2 stars</option>
        <option value={3}>3 stars</option>
        <option value={4}>4 stars</option>
        <option value={5}>5 stars</option>
      </select>
    </div>
  </div>
  <HotelList hotels={filteredHotels} />
</div>

  );
};

export default Hotel;
