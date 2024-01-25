// // Login.js

// import React, { useState } from "react";
// import "./css/login.css";
// import Footer from "./Footer";

// const Login = () => {
//   const [action, setAction] = useState("Login");

//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const handleFormChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleFormSubmit = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/auth/${action.toLowerCase()}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
//       console.log(data);

//       // Handle the response, e.g., set user in state or redirect to another page
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="company">
//         <h1>Eazydiner</h1>
//       </div>
//       <div className="login-c">
//         <div className="login">
//           <div className="text">{action}</div>
//         </div>
//         <div className="inputs">
//           <div className="input">
//             <input type="text" placeholder="Name" />
//           </div>
//           <div className="input">
//             <input type="email" placeholder="Email" />
//           </div>
//           <div className="input">
//             <input type="password" placeholder="Password" />
//           </div>
//         </div>
//         <div className="forgot-password">
//           Forgot Password? <span>Click here</span>
//         </div>
//         <div className="submit-c">
//           <div
//             className={action === "Login" ? "submit gray" : "submit"}
//             onClick={() => {
//               setAction("Sign up");
//             }}
//           >
//             Sign Up
//           </div>
//           <div
//             className={action === "Sign up" ? "submit gray" : "submit"}
//             onClick={() => {
//               setAction("Login");
//             }}
//           >
//             Log in
//           </div>
//         </div>
//       </div>
//       <Footer/>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/login.css";
import Footer from "./Footer";

const Login = () => {
  const navigate = useNavigate();

  const [action, setAction] = useState("Login");

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async () => {
    try {
      const response = await fetch(`http://localhost:5000/auth/${action.toLowerCase()}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);

      // Assuming your backend sends a token upon successful login
      if (data.token) {
        // Save the token in localStorage or a state management system
        // Redirect to the home page
        navigate('/home');
      }

      // Handle the response, e.g., set user in state or display an error message
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="company">
        <h1>Eazydiner</h1>
      </div>
      <div className="login-c">
        <div className="login">
          <div className="text">{action}</div>
        </div>
        <div className="inputs">
          {action === "Sign up" && (
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
          Forgot Password? <span>Click here</span>
        </div>
        <div className="submit-c">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Sign up");
            }}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign up" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Login");
            }}
          >
            Log in
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;

