import React, { useState, useRef, useEffect } from 'react';

const Slider = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  const videos = [
    'day.mp4',
    'night.mp4'
  ];

  // Effect to handle automatic video change
  useEffect(() => {
    const video = videoRef.current;

    const handleVideoEnd = () => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    video.addEventListener('ended', handleVideoEnd);

    // Clean up event listener on component unmount
    return () => {
      video.removeEventListener('ended', handleVideoEnd);
    };
  }, []); // Run effect only once on mount

  // Effect to start playing the next video automatically when index changes
  useEffect(() => {
    const video = videoRef.current;
    
    // Reset to beginning and play when video index changes
    video.load();
    video.play();
  }, [currentVideoIndex]); // Re-run effect when currentVideoIndex changes

  return (
    <div className="slider-container" style={{ opacity: 0.4 }}>
      <video ref={videoRef} autoPlay muted className="slider-video" controls={false}>
        <source src={`/videos/${videos[currentVideoIndex]}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Slider;
