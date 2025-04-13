import React, { useEffect } from 'react';
import './CardSection.css';

const CardSection = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element, index) => {
      element.style.animationDelay = `${index * 0.2}s`;
    });
  }, []);

  return (
    <div className="custom-container">
      <div className="card-row">
        <div className="fade-in">
          <div className="card text-bg-dark custom-card">
            <img src="/imgs/Idk0021.png" className="card-img-top" alt="Animation" />
            <div className="card-body">
              <h5 className="card-title">Правя анимации</h5>
              <p className="card-text">Създавам 3D анимации с известната програма на име Blender.</p>
            </div>
          </div>
        </div>

        <div className="fade-in">
          <div className="card text-bg-dark custom-card">
            <img src="/imgs/Sb Real0059.png" className="card-img-top" alt="Welcome" />
            <div className="card-body">
              <h5 className="card-title">Добре дошли в моя уебсайт</h5>
              <p className="card-text">Надявам се да намерите това което търсите.</p>
            </div>
          </div>
        </div>

        <div className="fade-in">
          <div className="card text-bg-dark custom-card">
            <img src="/imgs/fixed.png" className="card-img-top" alt="3D Artist" />
            <div className="card-body">
              <h5 className="card-title">3D дизайнер</h5>
              <p className="card-text">Освен анимациите правя и реалистични изображения за които ми плащат.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
