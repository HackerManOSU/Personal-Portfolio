import React from 'react';
import LinkedIn from '../Starfield/Icons/LinkedIn';
import GitHub from '../Starfield/Icons/GitHub';
import Instagram from '../Starfield/Icons/Instagram';
import ArrowDown from '../Starfield/Icons/ArrowDown';

const Footer: React.FC = () => {
  return (
    <div className="w-full bg-black text-white flex flex-col items-center text-center border-t-4 border-white">
      <h1 className="text-4xl font-bold text-center py-12">
        Thank you for checking out my portfolio!
      </h1>
      
      <p className="text-2xl mb-6">
        Check me out on these other platforms as well
      </p>

      <div className="flex justify-evenly enter space-x-8 mb-8 w-[80%] max-w-[1000px]">
        <a
          href="https://www.linkedin.com/in/zane-garvey"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn className='w-24 h-24 lg:w-40 lg:h-40 animate-[wobble_3s_ease-in-out_infinite] delay-[1s]'/>
        </a>

        <a
          href="https://github.com/HackerManOSU"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub className='w-24 h-24 lg:w-40 lg:h-40 animate-[wobble_3s_ease-in-out_infinite] delay-[1s]'/>
        </a>

        <a
          href="https://www.instagram.com/zanegarvey"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram className='w-24 h-24 lg:w-40 lg:h-40 animate-[wobble_3s_ease-in-out_infinite] delay-[1s]'/>
        </a>
      </div>

      <a 
        href="#aboutme" 
        className="transform rotate-180 hover:scale-110 transition-transform my-8"
        title="Back to Top"
      >
        <ArrowDown />
      </a>
    </div>
  );
};

export default Footer;