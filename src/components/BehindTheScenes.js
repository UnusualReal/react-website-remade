import React from "react";
import "./BehindTheScenes.css";

const animations = [
  {
    id: 1,
    title: "Порше което дрифти",
    description: "Наистина е просто Порше което дрифти",
    videoUrl: "imgs/blender_files_showcase/porsche drift.mp4",
    blenderFileUrl: "https://drive.google.com/file/d/1sQXmIHVtaK-ZaQ5Z0TiT0FPjSAHTiAPH/view?usp=sharing",
  },
  {
    id: 2,
    title: "Част от колаборация",
    description: "Просто началната част от моята анимация за песента Springrap Finale",
    videoUrl: "imgs/blender_files_showcase/wip 1.mp4",
    blenderFileUrl: "https://drive.google.com/file/d/1RsIdQKn02IOVHOdWadZGGQdXGOVaCiLX/view?usp=sharing",
  },
];

const BehindTheScenes = () => {
  return (
    <div className="bts-container">
      <h1 className="bts-title">АНИМАЦИИ</h1>
      <div className="bts-card-container">
        {animations.map((animation) => (
          <div key={animation.id} className="card">
            <video className="card-video" autoPlay loop muted playsInline>
              <source src={animation.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="card-body">
              <h5 className="card-title">{animation.title}</h5>
              <p className="card-text">{animation.description}</p>
              <a
                href={animation.blenderFileUrl}
                download
                className="btn btn-primary"
              >
                Изтегли
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BehindTheScenes;
