import React, { useState, useRef } from 'react';

const Slider = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  const videos = [
    'day.mp4',
    'night.mp4'
  ];

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  return (
    <div className="slider-container" style={{ opacity: 0.4 }}>
      <video ref={videoRef} autoPlay muted className="slider-video" controls={false} onEnded={handleVideoEnd}>
        <source src={`/videos/${videos[currentVideoIndex]}`} type="video/mp4" />
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
