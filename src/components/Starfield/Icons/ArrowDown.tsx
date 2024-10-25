import React, { useEffect } from 'react';
import './Icons.css'

const ArrowDown: React.FC = () => {

  useEffect(() => {
    setTimeout(() => {
        const linksElement = document.querySelector('.arrow-down');
        if (linksElement) {
            linksElement.classList.add('bounce');
        }
    }, 6000);

}, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 384 512"
      className="custom-icon arrow-down"
    >
      {/* Define the glow filter */}
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Arrow Down Path */}
      <path
        fill="white"
        d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 
           0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 
           45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 
           12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 
           0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 
           45.3 0s12.5 32.8 0 45.3z"
      />
    </svg>
  );
};

export default ArrowDown;
