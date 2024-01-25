import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/login.css";
import Footer from "./Footer";

const Signup = () => {
  const navigate = useNavigate();

  // const [action, setAction] = useState("Signup");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = () => {
    // Add logic to check if the user is already logged in
    const isUserLoggedIn = true; // Replace this with your actual logic to check if the user is logged in

    if (isUserLoggedIn) {
      // Redirect to the login page if the user is already logged in
      navigate("/login");
    } else {
      // Add logic to handle signup
      console.log("Signup data:", formData);

      // Redirect to another page if needed
      navigate("/some-route");
    }
  };

  const alreadyuser=()=>{
    navigate("/login");
  }

  return (
    <div className="login-container">
      <div className="company">
        <h1>Eazydiner</h1>
      </div>
      <div className="login-c">
        <div className="login">
          <div className="text">Sign up</div>
        </div>
        <div className="inputs">
          {(
            <div className="input">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
              />
            </div>
          )}
          <div className="input">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleFormChange}
            />
          </div>
          <div className="input">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleFormChange}
            />
          </div>
        </div>
        <div className="forgot-password">
          Already have an account? <span onClick={alreadyuser}>Log in</span>
        </div>
        <div className="submit-c">
          <div className="submit" onClick={handleSignup}>
            Sign Up
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
