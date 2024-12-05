import React, { useEffect } from 'react';
import './CardSection.css'

const CardSection = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element, index) => {
      element.style.animationDelay = `${index * 0.2}s`;
    });
  }, []);

  return (
    <div className="container2">
      <div className="row">
        <div className="col-lg-4 fade-in">
          <div className="card bg-dark text-light">
            <img src="/imgs/Idk0021.png" alt="Animation" />
            <div className="card-body">
              <h5 className="card-title">I MAKE ANIMATIONS</h5>
              <p className="card-text">I create 3D animations with a famous program called Blender.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 fade-in">
          <div className="card bg-dark text-light">
            <img src="/imgs/Sb Real0059.png" alt="Welcome" />
            <div className="card-body">
              <h5 className="card-title">WELCOME TO MY WEBSITE</h5>
              <p className="card-text">Truly hoping you find what you need and of course enjoy your stay.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 fade-in">
          <div className="card bg-dark text-light">
            <img src="/imgs/fixed.png" alt="3D Artist" />
            <div className="card-body">
              <h5 className="card-title">3D ARTIST</h5>
              <p className="card-text">Besides animations, I create thumbnails for videos for which I get paid.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
