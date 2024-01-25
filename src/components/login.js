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

  const  newuser=()=>{
    navigate("/");
  }

  const handleLogin = async () => {
    try {
      const response = await fetch("http://127.0.0.1:3009/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful:", data);

        // Redirect to another page if needed
        navigate("/home");
      } else {
        console.error("Login failed:", data);

        // Handle error, show error message, etc.
      }
    } catch (error) {
      console.error("Error during login:", error);

      // Handle error, show error message, etc.
    }
  };
  

  return (
    <div className="login-container">
      <div className="company">
        <h1>Eazydiner</h1>
      </div>
      <div className="login-c">
        <div className="login">
          <div className="text">Log in</div>
        </div>
        <div className="inputs">
          
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
        <div className="forgot-password">
          New user? <span onClick={newuser}>Sign up</span>
        </div>
        <div className="submit-c">
          
          <div
            className="submit" onClick={handleLogin}
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

