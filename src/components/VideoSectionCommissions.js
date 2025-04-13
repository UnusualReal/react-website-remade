import React, { useEffect, useRef, useState } from "react";
import { Popover } from "bootstrap"; 
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

  
  const youtubeVideos = [
    {
      id: "lRbaolGo8ls",
      title: "Replay Your Nightmare {Анимация}",
      description: "Напълно анимирано от Мен(Unusual) и Broco",
      placement: "left",
    },
    {
      id: "G9LSv_I8NfI",
      title: "Welcome Back {Анимация}",
      description: "Половината е анимирана от Broco и другата половина е от Мен(Unusual)",
      placement: "top",
    },
    {
      id: "Ky3AdjRvosI",
      title: "Turn Back {Анимация}",
      description: "Анимацията е напълно направена от Мен(Unusual)",
      placement: "right",
    },
    {
      id: "86BUv9GQwxI",
      title: "Safe and Sound {Музикално видео / Анимация}",
      description: "Малка част е направена от Мен(Unusual)",
      placement: "bottom",
    },
  ];

  return (
    <div
      ref={wrapperRef}
      className={`commission-wrapper ${isVisible ? "fade-in" : ""}`}
    >
      <h1 className="commission-title">
        Мойте <span className="green-text">платени</span> проекти
      </h1>
  
      <div id="video_selection">
        {youtubeVideos.map((video, index) => {
          const animationClass = index < 3 ? "fade-in-top" : "fade-in-bottom";
          const delay = `${0.5 + index * 0.3}s`;
  
          return (
            <div
              key={index}
              className={`video-box ${isVisible ? animationClass : ""}`}
              style={{ animationDelay: delay }}
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
