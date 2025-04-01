import React, { useEffect, useRef, useState } from "react";
import { Popover } from "bootstrap"; // Important to import Bootstrap Popover!
import "./VideoSectionCommissions.css";

const VideoSectionCommissions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (wrapperRef.current) observer.observe(wrapperRef.current);
    return () => wrapperRef.current && observer.unobserve(wrapperRef.current);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const triggers = document.querySelectorAll('[data-bs-toggle="popover"]');
      triggers.forEach((el) => new Popover(el));
    }
  }, [isVisible]);

  // 💡 Your video data, including where the popover shows up
  const youtubeVideos = [
    {
      id: "lRbaolGo8ls",
      title: "Replay Your Nightmare {Animation}",
      description: "Fully animated by Me(Unusual) and Broco",
      placement: "left",
    },
    {
      id: "G9LSv_I8NfI",
      title: "Welcome Back {Animation}",
      description:
        "Half of it is animated by Broco and other half is animated by Me(Unusual)",
      placement: "top",
    },
    {
      id: "Ky3AdjRvosI",
      title: "Turn Back {Animation}",
      description: "Animation fully done by Me(Unusual)",
      placement: "right",
    },
    {
      id: "86BUv9GQwxI",
      title: "Safe and Sound {Animations Music Video}",
      description: "Small part was done by Me(Unusual)",
      placement: "bottom",
    },
  ];

  return (
    <div
      ref={wrapperRef}
      className={`commission-wrapper ${isVisible ? "fade-in" : ""}`}
    >
      <h1 className="commission-title">
        My <span className="green-text">Commission</span> Work
      </h1>

      <div id="video_selection">
        {youtubeVideos.map((video, index) => {
          // Determine animation class: top for first 3, bottom for last
          const animationClass = index < 3 ? "fade-in-top" : "fade-in-bottom";

          return (
            <div
              key={index}
              className={`video-box ${isVisible ? animationClass : ""}`}
              style={{ animationDelay: `${0.5 + index * 0.3}s` }}
            >
              <div
                className="video-container"
                tabIndex="0"
                data-bs-toggle="popover"
                data-bs-trigger="hover focus"
                data-bs-placement={video.placement}
                data-bs-title={video.title}
                data-bs-content={video.description}
                data-bs-custom-class="custom-popover-dark"
              >
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="video"
                ></iframe>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VideoSectionCommissions;
