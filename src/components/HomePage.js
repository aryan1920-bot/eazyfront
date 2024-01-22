// // HomePage.js
import React,{useState} from "react";
import "./css/HomePage.css";
import RestaurantCard from "./card";
import Footer from "./Footer";
import salad from "../images/salad.png";
import DetailedCard from './DetailedCard';


const HomePage = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  const [isBookingsHovered, setIsBookingsHovered] = React.useState(false);
  const [isContactUsHovered, setIsContactUsHovered] = React.useState(false);
  const [isLogoutHovered, setIsLogoutHovered] = React.useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const handleCardClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  const dummyRestaurantData = [
    {
      name: "Gola Sizzlers",
      image: "url to image",
      cuisineType: "Chinese",
      location: "Cyber Hub",
      availableSlots: [
        { slotNumber: 1, isBooked: false },
        { slotNumber: 2, isBooked: true },
        { slotNumber: 3, isBooked: true },
        { slotNumber: 4, isBooked: true },
      ],
    },
    {
      name: "Gola Sizzlers",
      image: "url_to_image_1",
      cuisineType: "Chinese",
      location: "Cyber Hub",
      availableSlots: [
        { slotNumber: 1, isBooked: false },
        { slotNumber: 2, isBooked: true },
        { slotNumber: 3, isBooked: true },
        { slotNumber: 4, isBooked: true },
      ],
    
    }
    // Add more restaurant data as needed
  ];

  return (
    <div className="home-container">
      <header className="header">
        <h1 className="brand">Eazydiner</h1>
        <nav className="nav">
          <ul>
            <li>
              <a
                href="#"
                className="nav-link"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Bookings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="nav-link1"
                onClick={scrollToContact}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="nav-link2"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Log out
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="content">
        <h2>WELCOME FOODIE !!</h2>
        <div className="offer-section">
          <img src={salad} alt="Special Offer" className="salad" />
        </div>
        <div className="meal-tabs">
          <button
            className="meal-btn"
            data-tooltip="Breakfast"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Breakfast
          </button>
          <button
            className="meal-btn"
            data-tooltip="Lunch"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Lunch
          </button>
          <button
            className="meal-btn"
            data-tooltip="Dinner"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Dinner
          </button>
        </div>
        <div className="card-container">
          {dummyRestaurantData.map((restaurant, index) => (
            <RestaurantCard key={index} restaurantData={restaurant} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;



// HomePage.js
// import React, { useState } from "react";
// import "./css/HomePage.css";
// import RestaurantCard from "./card";
// import Footer from "./Footer";
// import salad from "../images/salad.png";
// import DetailedCard from './DetailedCard';

// const HomePage = () => {
//   const [selectedRestaurant, setSelectedRestaurant] = useState(null);

//   const handleCardClick = (restaurant) => {
//     setSelectedRestaurant(restaurant);
//   };

//   const dummyRestaurantData = [
//     {
//       name: "Gola Sizzlers",
//       image: "url_to_image",
//       cuisineType: "Chinese",
//       location: "Cyber Hub",
//       availableSlots: [
//         { slotNumber: 1, isBooked: false },
//         { slotNumber: 2, isBooked: true },
//         { slotNumber: 3, isBooked: true },
//         { slotNumber: 4, isBooked: true },
//       ],
//     },
//     {
//       name: "Another Restaurant",
//       image: "url_to_image_1",
//       cuisineType: "Indian",
//       location: "Some Location",
//       availableSlots: [
//         { slotNumber: 1, isBooked: false },
//         { slotNumber: 2, isBooked: true },
//         { slotNumber: 3, isBooked: true },
//         { slotNumber: 4, isBooked: true },
//       ],
//     },
//     // Add more restaurant data as needed
//   ];

//   return (
//     <div className="home-container">
//       <header className="header">
//         <h1 className="brand">Eazydiner</h1>
//         <nav className="nav">
//           <ul>
//             <li>
//               <a
//                 href="#"
//                 className="nav-link"
//                 onMouseEnter={() => setIsHovered(true)}
//                 onMouseLeave={() => setIsHovered(false)}
//               >
//                 Bookings
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="nav-link1"
//                 onClick={scrollToContact}
//                 onMouseEnter={() => setIsHovered(true)}
//                 onMouseLeave={() => setIsHovered(false)}
//               >
//                 Contact Us
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="nav-link2"
//                 onMouseEnter={() => setIsHovered(true)}
//                 onMouseLeave={() => setIsHovered(false)}
//               >
//                 Log out
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </header>

//       <div className="content">
//         <h2>WELCOME FOODIE !!</h2>
//         <div className="offer-section">
//           <img src={salad} alt="Special Offer" className="salad" />
//         </div>
//         <div className="meal-tabs">
//           <button
//             className="meal-btn"
//             data-tooltip="Breakfast"
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//           >
//             Breakfast
//           </button>
//           <button
//             className="meal-btn"
//             data-tooltip="Lunch"
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//           >
//             Lunch
//           </button>
//           <button
//             className="meal-btn"
//             data-tooltip="Dinner"
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//           >
//             Dinner
//           </button>
//         </div>
//         <div className="card-container">
//           {dummyRestaurantData.map((restaurant, index) => (
//             <RestaurantCard
//               key={index}
//               restaurantData={restaurant}
//               onClick={() => handleCardClick(restaurant)}
//             />
//           ))}
//         </div>
//         {selectedRestaurant && (
//           <DetailedCard
//             restaurantData={selectedRestaurant}
//             onClose={() => setSelectedRestaurant(null)}
//           />
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default HomePage;
