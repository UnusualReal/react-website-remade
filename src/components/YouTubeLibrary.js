import React from "react";
import "./YouTubeLibrary.css";

const videos = [
  {
    title: "Replay Your Nightmare",
    description: "FIVE NIGHTS MUSIC",
    videoId: "lRbaolGo8ls"
  },
  {
    title: "Welcome Back",
    description: "FIVE NIGHTS MUSIC",
    videoId: "G9LSv_I8NfI"
  },
  {
    title: "Turn Back",
    description: "FIVE NIGHTS MUSIC",
    videoId: "Ky3AdjRvosI"
  },
  {
    title: "Clean E36 B-Roll",
    description: "Kyle Allen Music",
    videoId: "86BUv9GQwxI"
  }
];

const YouTubeLibrary = () => {
  return (
    <div className="library-wrapper text-center">
      <h2 className="text-white mb-5">🎥 Commissions Library</h2>

      <div className="library-inner">
        <div className="row justify-content-center">
          {videos.map((video, index) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-4"
              key={index}
            >
              <div className="card bg-dark text-white custom-card">
                <img
                  src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                  className="card-img-top"
                  alt={video.title}
                />
                <div className="card-body d-flex flex-column text-center">
                  <h5 className="card-title">{video.title}</h5>
                  <p className="card-text">{video.description}</p>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn custom-btn mt-auto"
                  >
                    Watch on YouTube
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YouTubeLibrary;
