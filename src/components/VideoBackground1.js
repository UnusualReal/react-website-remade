import React from "react";
import "./VideoBackground1.css";

const VideoBackground1 = () => {
  return (
    <div id="background-video">
      <video autoPlay muted loop id="bg-video">
        <source src="/imgs/secondback.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground1;
