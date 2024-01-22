


// App.js or your main component
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import Login from './components/login';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Set the login page as the initial route */}
        {/* <Route path="/" element={<LoginPage />} /> */}
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/" element={<Login />} /> */}
      </Routes>
    </Router>
  );
};

export default App;



