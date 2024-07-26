import React, { useState, useRef, useEffect } from 'react';
import Navbar from './Nav';

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
    <div className="slider-container" style={{ position: 'relative', height: '100vh' }}>
      {/* Navigation bar */}
      <Navbar />

      {/* Video player */}
      <div style={{ position: 'relative', width: '100%', height: '100%',opacity: 0.3 }}>
        <video ref={videoRef} autoPlay muted className="slider-video" controls={false} style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, objectFit: 'cover' }}>
          <source src={`/videos/${videos[currentVideoIndex]}`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Text in left middle */}
      </div>
      <div style={{ position: 'absolute', top: '50%', left: '2.5rem', transform: 'translateY(-50%)', color: '#fff', fontSize: '35px' }}>
        <h1 className="">We are the <br />
        <span style={{ color: '#e8293b', fontWeight: '800' }}>Next Generation</span> of the<br />
        <b><span style={{ color: '#e8293b', fontWeight: '800' }}>Advertising World</span></b></h1>
      </div>
    </div>
  );
};

export default Slider;
