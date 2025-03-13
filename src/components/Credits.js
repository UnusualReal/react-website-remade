import React from 'react';
import './Credits.css'; 

const Credits = () => {
  return (
    <div className='Program-credits'>
        <h3 className='text'>Made with:</h3>
        <div className='imgs'>
           <img className="React-logo" src="imgs/credits_imgs/logo192.png" alt="logo-react" width="50" height="40" />
           <img className="Bootstrap-logo" src="imgs/credits_imgs/bootstrap.png" alt="logo-bootstrap" width="50" height="40" />
           <img className="NodeJs-logo" src="imgs/credits_imgs/nodejs.png" alt="logo-nodejs" width="120" height="60" />
        </div>
    </div>
  );
};

export default Credits;
