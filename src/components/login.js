// import React, { useState } from 'react';
// import './css/login.css';

// const Login = () => {
//   const [action, setAction] = useState('Login');

//   return (
//     <div>
//       <div className='company'>
//         <h1>Eazydiner</h1>
//       </div>
//       <div className='login'>
//         <div className='text'>{action}</div>
//       </div>
//       <div className='inputs'>
//         <div className='input'><input type="text" placeholder='Name'></input></div>
//         <div className='input'><input type="email" placeholder='Email'></input></div>
//         <div className='input'><input type="password" placeholder='Password'></input></div>
//       </div>
//       <div className='forgot-password'> Lost Password? <span>click here</span></div>
//       <div className='submit-c'>
//         <div className={action === 'Login' ? 'submit gray' : 'submit'} onClick={() => { setAction('Sign up') }}>Sign Up</div>
//         <div className={action === 'Sign up' ? 'submit gray' : 'submit'} onClick={() => { setAction('Login') }}>Log in</div>
//       </div>
//     </div>
//   );
// };

// export default Login;
