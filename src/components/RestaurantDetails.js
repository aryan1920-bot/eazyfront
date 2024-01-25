// import React, { useState, useEffect } from "react";
// import { Link, useParams, useNavigate } from "react-router-dom";
// import "./css/RestaurantDetails.css";
// import Header from "./Header";
// import Footer from "./Footer";
// import { staticData } from "./items"; // Import the static data directly

// const RestaurantDetails = () => {
//   const [selectedDate, setSelectedDate] = useState("");
//   const [selectedSlot, setSelectedSlot] = useState("");
//   const [numberOfGuests, setNumberOfGuests] = useState(1);
//   const { id } = useParams();
//   const navigate = useNavigate();

//   // Access the restaurant data based on the route parameter 'id'
//   const selectedRestaurant = staticData.find(
//     (restaurant) => restaurant.id === parseInt(id, 10)
//   );

//   useEffect(() => {
//     // You can perform additional logic here if needed
//   }, [id]);

//   const handleBookNowClick = () => {
//     // Add your logic to handle the book now button click
//     // This is where you might want to perform actions like making a reservation
//     // You can use the selectedDate, selectedSlot, and numberOfGuests in your logic
//     console.log("Booking details:", {
//       restaurantId: id,
//       selectedDate,
//       selectedSlot,
//       numberOfGuests,
//     });

//     navigate('/review-booking');
//   };

//   return (
//     <div>
//       <Header />
//       <div className="bgbg">
//         <div className="restaurant-details-container">
//           {selectedRestaurant && (
//             <div className="restaurant-details">
//               <img
//                 src={selectedRestaurant?.image}
//                 alt={selectedRestaurant?.name}
//                 className="restaurant-image"
//               />
//               <h2 className="restaurant-name">{selectedRestaurant?.name}</h2>
//               <p className="restaurant-info">
//                 Cuisine: {selectedRestaurant?.cuisine_type}
//               </p>

//               <p className="restaurant-info">
//                 Location: {selectedRestaurant?.location}
//               </p>

//               <div className="booking-section">
//                 <label htmlFor="date">Select Date:</label>
//                 <input
//                   type="date"
//                   id="date"
//                   value={selectedDate}
//                   onChange={(e) => setSelectedDate(e.target.value)}
//                   className="ip"
//                 />

//                 <label htmlFor="slot">Select Slot:</label>
//                 <select
//                   id="slot"
//                   value={selectedSlot}
//                   onChange={(e) => setSelectedSlot(e.target.value)}
//                 >
//                   <option value="" disabled>
//                     Select Slot
//                   </option>
//                   <option value="breakfast">Breakfast</option>
//                   <option value="lunch">Lunch</option>
//                   <option value="dinner">Dinner</option>
//                 </select>

//                 <label htmlFor="guests">Number of Guests:</label>
//                 <input
//                   type="number"
//                   id="guests"
//                   value={numberOfGuests}
//                   onChange={(e) => setNumberOfGuests(e.target.value)}
//                 />

//                 <button className="book-now-btn" onClick={handleBookNowClick}>
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>

//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default RestaurantDetails;

import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./css/RestaurantDetails.css";
import Header from "./Header";
import Footer from "./Footer";

const RestaurantDetails = () => {
  const [restaurantData, setRestaurantData] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:3009/select`);
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Fetched data:", data);

        const selectedRestaurant = data.find(
          (restaurant) => restaurant.id === parseInt(id, 10)
        );

        if (!selectedRestaurant) {
          console.error("Restaurant not found for ID:", id);
          return;
        }

        setRestaurantData(selectedRestaurant);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleBookNowClick = () => {
    // Validate input before proceeding
    if (!selectedDate || !selectedSlot || numberOfGuests < 1) {
      console.error("Please provide valid booking details");
      return;
    }

    console.log("Booking details:", {
      restaurantId: id,
      selectedDate,
      selectedSlot,
      numberOfGuests,
    });

    navigate("/review-booking");
  };

  if (!restaurantData) {
    return (
      <div>
        <Header />
        <div className="bgbg">
          <div className="restaurant-not-found">
            <p>Loading...</p>
          </div>
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="bgbg">
        <div className="restaurant-details-container">
          <div className="restaurant-details">
            <img
              src={restaurantData.image}
              alt={restaurantData.name}
              className="restaurant-image"
            />
            <h2 className="restaurant-name">{restaurantData.name}</h2>
            <p className="restaurant-info">
              Cuisine: {restaurantData.cuisine_type}
            </p>

            <p className="restaurant-info">Location: {restaurantData.location}</p>

            <div className="booking-section">
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
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default RestaurantDetails;

