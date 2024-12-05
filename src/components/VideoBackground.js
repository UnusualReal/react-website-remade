import React from 'react';
import './VideoBackground.css'

const VideoBackground = () => {
  return (
    <div id="video-container">
      <video autoPlay muted loop id="video-bg">
        <source src="/imgs/background video 2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;