import React from 'react';
import './LogInBackground.css';

const LogInBackground = ({ children }) => {
  return (
    <div className="login-background-container">
      <img className="BackgroundLogIn" src="imgs/Back_trailer.png" alt="LogInBack" />
      {children}
    </div>
  );
};

export default LogInBackground;
