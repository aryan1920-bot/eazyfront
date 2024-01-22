// // RestaurantCard.js
// import React, { useState } from 'react';
// import './css/card.css'; // Add your styles for RestaurantCard

// const RestaurantCard = ({ restaurant }) => {
//     const [isExpanded, setExpanded] = useState(false);
//     if (!restaurant || !restaurant.image) {
//         // Handle the case where the restaurant data is missing or incomplete
//         return null;
//       }
  
//     const handleCardClick = () => {
//       setExpanded(!isExpanded);
//     };
  
//     return (
//       <div className={`restaurant-card ${isExpanded ? 'expanded' : ''}`} onClick={handleCardClick}>
//         <img src={restaurant.image} alt={restaurant.name} />
//         <div className="restaurant-details">
//           <h3 className="restaurant-name">{restaurant.name}</h3>
//           <p className="restaurant-info">{restaurant.cuisineType} | {restaurant.location}</p>
//           {isExpanded && (
//             <div className="slots-container">
//               {/* Add slots and book now button here */}
//               {/* Example: */}
//               <button className="book-now-btn">Book Now</button>
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   };
  
//   export default RestaurantCard;


// RestaurantCard.js
import React, { useState } from 'react';
import './css/card.css'; // Add your styles for RestaurantCard

const RestaurantCard = ({ restaurantData }) => {
  const [expanded, setExpanded] = useState(false);

  // Function to handle the book now button click
  const handleBookNowClick = () => {
    // Your logic to handle the book now button click
    // This is where you might show the slots or perform other actions
    setExpanded(!expanded);
  };

  return (
    <div className={`restaurant-card ${expanded ? 'expanded' : ''}`}>
      <img src={restaurantData.image} alt={restaurantData.name} className="restaurant-image" />
      <div className="restaurant-details">
        <h3 className="restaurant-name">{restaurantData.name}</h3>
        <p className="restaurant-info">Cuisine: {restaurantData.cuisineType}</p>
        <p className="restaurant-info">Location: {restaurantData.location}</p>
        {/* <button className="book-now-btn" onClick={handleBookNowClick}>
          Book Now
        </button> */}
        {expanded && (
          <div className="slots-container">
            {/* Display slots here based on your logic */}
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantCard;
