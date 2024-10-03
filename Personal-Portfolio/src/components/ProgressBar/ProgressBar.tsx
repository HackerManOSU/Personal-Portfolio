import React, { useState, useEffect, CSSProperties } from 'react';

const ScrollProgressBar: React.FC = () => {
  const [progress, setProgress] = useState(0);

  const updateProgress = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const totalScrollableHeight = scrollHeight - clientHeight;
    const scrollFraction = scrollTop / totalScrollableHeight;
    setProgress(scrollFraction);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateProgress);
    // Clean up the event listener on component unmount
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  const progressBarContainerStyle: CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '15px',
    overflow: 'hidden',
    backgroundColor: '#000',
    zIndex: 9999,
  };

  const progressBarStyle: CSSProperties = {
    position: 'absolute',
    left: '50%',
    transform: `translateX(-50%) scaleX(${progress})`,
    transformOrigin: 'center',
    width: '100%',
    height: '15px',
    backgroundColor: '#fff',
  };

  return (
    <div style={progressBarContainerStyle}>
      <div style={progressBarStyle}></div>
    </div>
  );
};

export default ScrollProgressBar;
