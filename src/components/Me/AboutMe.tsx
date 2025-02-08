import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <div id='aboutme' className="text-white border-t-4 border-white pt-12 pb-8 flex flex-col items-center">
      <h1 className='text-6xl font-bold'>About Me!</h1>

      <div className='py-8 mx-12 grid place-items-center grid-cols-1 lg:grid-cols-2'>
        <div className='h-full flex flex-col items-stretch items-center justify-center'>
          <img 
            src="/Images/Snow.jpeg" 
            alt="Snow photograph" 
            className='img-main w-full h-auto max-w-[400px] max-h-[700px]' 
          />
        </div>

        <div className='h-full flex items-stretch max-w-[600px]'>
          <div className='flex flex-col p-12'>
            <h2 className='text-center text-3xl pb-12 lg:pb-12'>
              <strong>Hi! I'm Zane Garvey. Here's a little about me...</strong>
            </h2>
            <p><strong>College: </strong>Oregon State University <br /> <br /></p>
            <p>
              <strong>Major: </strong>Computer Science focusing in Human-Computer Interaction 
              and Cybersecurity <br /><br />
            </p>
            <p>
              <strong>Interests in Tech: </strong>Just like outside of tech, I have a wide 
              range of interests within the tech field. I am interested in everything from 
              Web dev, to systems programming, to cyberscurity, to cloud development/architecture 
              <br /><br />
            </p>
            <p>
              <strong>Hobbies: </strong>I believe hobbies are invaluable for finding common 
              ground, and by extension, creating strong connections with people (especially 
              coworkers). Luckily, I am a serial hobbyist! I obviously love coding, but 
              outside of the obvious, I love: piano and guitar, training BJJ & MMA, 
              researching and wearing watches, dirtbiking, fishing, space, and most of all, 
              just learning!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;