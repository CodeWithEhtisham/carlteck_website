import React, { useState } from 'react';

const Slider = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Array of local video file paths
  const videos = [
    '/videos/day.mp4',
    '/videos/night.mp4'
  ];

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  return (
    <div className="slider-container">
      <video controls autoPlay muted className="slider-video">
        <source src={videos[currentVideoIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="slider-controls">
        <button onClick={prevVideo}>Previous</button>
        <button onClick={nextVideo}>Next</button>
      </div>
    </div>
  );
};

export default Slider;
