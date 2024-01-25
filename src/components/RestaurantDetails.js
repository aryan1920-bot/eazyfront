// RestaurantDetails.js
import React, { useState, useEffect } from "react";
import { Link, useParams,useNavigate } from "react-router-dom";
import "./css/RestaurantDetails.css";
import Header from "./Header";
import Footer from "./Footer";
import Items from "./items"; // Import the component where your static data is defined

const RestaurantDetails = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const { id } = useParams();
  const navigate = useNavigate();

  // Import the component where your static data is defined
  const { list: staticData } = new Items();

  // Access the restaurant data based on the route parameter 'id'
  const selectedRestaurant = staticData.find(
    (restaurant) => restaurant.id === parseInt(id, 10)
  );

  useEffect(() => {
    // You can perform additional logic here if needed
  }, [id]);

  const handleBookNowClick = () => {
    // Add your logic to handle the book now button click
    // This is where you might want to perform actions like making a reservation
    // You can use the selectedDate, selectedSlot, and numberOfGuests in your logic
    console.log("Booking details:", {
      restaurantId: id,
      selectedDate,
      selectedSlot,
      numberOfGuests,
    });

    navigate('/review-booking');
  };

  return (
    <div>
      <Header />
      <div className="bgbg">
      <div className="restaurant-details-container">
        {selectedRestaurant && (
          <div className="restaurant-details">
            <img
              src={selectedRestaurant?.image}
              alt={selectedRestaurant?.name}
              className="restaurant-image"
            />
            <h2 className="restaurant-name">{selectedRestaurant?.name}</h2>
            <p className="restaurant-info">
              Cuisine: {selectedRestaurant?.cuisine_type}
            </p>

            <p className="restaurant-info">
              Location: {selectedRestaurant?.location}
            </p>

            <div className="booking-section">
              {/* <h3>Make a Reservation</h3> */}
              <label htmlFor="date">Select Date:</label>
              <input
                type="date"
                id="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="ip"
              />

              <label htmlFor="slot">Select Slot:</label>
              <select
                id="slot"
                value={selectedSlot}
                onChange={(e) => setSelectedSlot(e.target.value)}
              >
                <option value="" disabled>
                  Select Slot
                </option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
              </select>

              <label htmlFor="guests">Number of Guests:</label>
              <input
                type="number"
                id="guests"
                value={numberOfGuests}
                onChange={(e) => setNumberOfGuests(e.target.value)}
              />

              <button className="book-now-btn" onClick={handleBookNowClick}>
                Book Now
              </button>
              {/* ... (rest of the code) */}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div></div>
  );
};

export default RestaurantDetails;
