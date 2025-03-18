import React from "react";
import "./VideoCommissions.css";

const VideoCommissions = () => {
  return (
    <div className="paid-commissions">
      <h1>Paid Commissions</h1>
      <div className="video-container video1-container">
        <iframe 
          className="Video1"
          src="https://www.youtube.com/embed/lRbaolGo8ls?si=UhmUjaa0Qn7VWGuM"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      <div className="video-container video2-container">
        <iframe
          className="Video2"
          src="https://www.youtube.com/embed/G9LSv_I8NfI"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      <div className="video-container video3-container">
        <iframe
          className="Video3"
          src="https://www.youtube.com/embed/Ky3AdjRvosI?si=15dTlHdgtI9nf_CS"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoCommissions;
