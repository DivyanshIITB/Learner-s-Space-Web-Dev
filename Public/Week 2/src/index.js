import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'; // Optional: include this if you have App-wide CSS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
