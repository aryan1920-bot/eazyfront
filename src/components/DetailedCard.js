// DetailedCard.jsx
import React from 'react';
import './css/DetailedCard.css'; // Add your styles for DetailedCard

const DetailedCard = ({ restaurantData, onClose }) => {
  const handleBookNow = () => {
    // Your logic to handle the book now button click
    // This is where you might show the slots or perform other actions
  };

  return (
    <div className="detailed-card-overlay">
      <div className="detailed-card">
        <img src={restaurantData.image} alt={restaurantData.name} className="restaurant-image" />
        <div className="restaurant-details">
          <h3 className="restaurant-name">{restaurantData.name}</h3>
          <p className="restaurant-info">Cuisine: {restaurantData.cuisineType}</p>
          <p className="restaurant-info">Location: {restaurantData.location}</p>
          <button className="book-now-btn" onClick={handleBookNow}>
            Book Now
          </button>
        </div>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default DetailedCard;
