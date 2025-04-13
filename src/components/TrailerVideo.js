import React, { useState, useRef } from 'react';
import './TrailerVideo.css';

const TrailerVideo = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null); 

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="col-lg-6 mb-3">
      <div className="card custom-card bg-dark text-light" style={{ width: '50rem' }}>
        <video
          autoPlay
          muted={isMuted} 
          loop
          src="imgs/Channel Trailer.mp4"
          className="card-video-top"
          ref={videoRef} 
        ></video>
        <div className="card-body">
          <h4 className="card-title">Официален трейлър</h4>
          <p className="card-text">
            В този трейлър има всичко което ще бъде направено или е вече направено и събраво накратко. Ако искате повече продължете надолу.
          </p>
          <button
            className="button-volume"
            onClick={toggleMute}
            id="muteButton"
          >
            {isMuted ? (
              <i className="bi bi-volume-mute"></i>
            ) : (
              <i className="bi bi-volume-up-fill"></i>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrailerVideo;
