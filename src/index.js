// index.js

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './components/styles.css'; 
// import App from './App';

// const port = 3001;

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React from 'react';
import { createRoot } from 'react-dom/client';
// import './components/css/LoginPage.css'; 
import './components/css/HomePage.css';
import App from './App';

// Use createRoot instead of ReactDOM.render
const root = createRoot(document.getElementById('root'));

// Wrap your app component with the root
root.render(<React.StrictMode><App /></React.StrictMode>);
