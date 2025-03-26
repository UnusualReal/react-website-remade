import React from 'react';
import './LogInBackground.css';

const LogInBackground = ({ children }) => {
  return (
    <div className="login-background">
      {children}
    </div>
  );
};

export default LogInBackground;
