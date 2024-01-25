


// App.js or your main component
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/login';
import RestaurantDetails from './components/RestaurantDetails';
import ReviewBooking from './components/ReviewBooking';
import BookingConfirmation from './components/BookingConfirmation';

const App = ({dummyRestaurantData}) => {
  

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/restaurant/:id" element={<RestaurantDetails dummyRestaurantData={dummyRestaurantData} />} />
        <Route path="/review-booking" element={<ReviewBooking />} />
        <Route path="/BookingConfirmation" element={<BookingConfirmation />} />
        
      </Routes>
    </Router>
  );
};

export default App;



