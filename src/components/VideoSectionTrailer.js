import React, { useEffect, useState, useRef } from "react";
import "./VideoSectionTrailer.css";

const VideoSectionTrailer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const videoWrapperRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Adjust visibility threshold (30% of element must be visible)
    );

    if (videoWrapperRef.current) {
      observer.observe(videoWrapperRef.current);
    }

    return () => {
      if (videoWrapperRef.current) {
        observer.unobserve(videoWrapperRef.current);
      }
    };
  }, []);

  return (
    <div ref={videoWrapperRef} className={`video-wrapper ${isVisible ? "fade-in" : ""}`}>
      <h1 className="video-title">Watch <span>my</span> projects</h1>
      <div id="video_selection">
        {[
          "/imgs/scorpionss.mp4",
          "/imgs/LLots_of_10001-0446.mp4",
          "/imgs/Ennard.mp4",
          "/imgs/BMW.mp4",
          "/imgs/part_45.mp4",
          "/imgs/wozwald.mp4",
        ].map((videoSrc, index) => (
          <div
            key={index}
            className={`video-box ${isVisible ? "fade-in-video" : ""}`}
            style={{ animationDelay: `${0.5 + index * 0.3}s` }} // Staggered delay
          >
            <video autoPlay muted loop className="video">
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoSectionTrailer;
