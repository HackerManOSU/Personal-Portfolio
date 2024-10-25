import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Me.css';

const Me: React.FC = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.01,
  });

  const containerVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.3 },
      },
  };

  const photoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const titleVariants = {
    hidden: { 
      scale: 0,
      transition: { duration: 0.8 },
    },
    visible: { 
      scale: 1,
      transition: { duration: 0.8 },
    },
  }

  React.useEffect(() => {
      if (inView) {
          controls.start('visible');
      }
  }, [controls, inView]);

  return (
    <div id='me' className='border-t-4 border-white text-white pt-12 pb-8 flex flex-col items-center'>
      <h1 className='text-6xl font-bold'>About Me!</h1>

      <div className='py-8 mx-12 grid place-items-center grid-cols-1 lg:grid-cols-2'>

        <div className='h-full flex flex-col items-stretch items-center justify-center'>

          <img src="/Images/Snow.jpeg" alt="" className='img-main w-full h-auto max-w-[400px] max-h-[700px]' />

        </div>

        <div className='h-full flex items-stretch max-w-[600px]'>

          <div className='flex flex-col p-12'>

            <h2 className='text-center text-3xl pb-12 lg:pb-12'><strong>Hi! I'm Zane Garvey. Here's a little about me...</strong></h2>
            <p><strong>College: </strong>Oregon State University <br /> <br /></p>
            <p><strong>Major: </strong>Computer Science focusing in Human-Computer Interaction and Cybersecurity <br /><br /></p>
            <p><strong>Interests in Tech: </strong>Just like outside of tech, I have a a wide range of interests within the tech field. I am interested in everything from Web dev, to systems programming, to cyberscurity, to cloud development/architecture <br /><br /></p>
            <p><strong>Hobbies: </strong>I believe hobbies are invaluable for finding common ground, and by extension, creating strong connections with people (especially coworkers). Luckily, I am a serial hobbyist! I obviously love coding, but outside of the obvious, I love: piano and guitar, training BJJ & MMA,  researching and wearing watches, dirtbiking, fishing, space, and most of all, just learning!</p>
          
          </div>

        </div>

        </div>

      <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={controls}
                className='flex flex-col items-center text-4xl'
            >

          <motion.div variants={titleVariants} className='py-8 text-5xl font-bold'>My Life in Photos</motion.div>

          <div className='flex flex-col items-center justify-center'>

            <motion.div variants={photoVariants} className='w-[100%] grid grid-cols-1 md:grid-cols-3 gap-4 p-4 place-items-center'>


              <img className='img-me' src="/Images/Beach4.jpeg" alt="" />
              <img className='img-me' src="/Images/Dirtbike.jpeg" alt="" />
              <img className='img-me' src="/Images/Lighthouse2.jpeg" alt="" />
              <img className='img-me' src="/Images/Waterfall.jpeg" alt="" />
              <img className='img-me' src="/Images/Jamaica.jpeg" alt="" />
              <img className='img-me' src="/Images/Beach.jpeg" alt="" />
              <img className='img-me' src="/Images/Beach2.jpeg" alt="" />
              <img className='img-me' src="/Images/Graduation.jpeg" alt="" />
              <img className='img-me' src="/Images/Skagway.jpeg" alt="" />
              <img className='img-me' src="/Images/Fish2.jpeg" alt="" />
              <img className='img-me' src="/Images/Horse3.jpeg" alt="" />
              <img className='img-me' src="/Images/Em3.jpeg" alt="" />
              <img className='img-me' src="/Images/Flower1.jpeg" alt="" />
              <img className='img-me' src="/Images/Family2.jpeg" alt="" />
              <img className='img-me' src="/Images/Em2.jpeg" alt="" />
              <img className='img-me' src="/Images/Flower2.jpeg" alt="" />
              <img className='img-me' src="/Images/Mechanic1.jpeg" alt="" />
              <img className='img-me' src="/Images/Family1.jpeg" alt="" />
              <img className='img-me' src="/Images/Beach5.jpeg" alt="" />
              <img className='img-me' src="/Images/COJO2.jpeg" alt="" />
              <img className='img-me' src="/Images/Em.jpeg" alt="" />
              <img className='img-me' src="/Images/Football.jpeg" alt="" />
              <img className='img-me' src="/Images/Beach3.jpeg" alt="" />
              <img className='img-me' src="/Images/Cap.jpeg" alt="" />
              <img className='img-me' src="/Images/Alligator.jpeg" alt="" />
              <img className='img-me' src="/Images/Fish1.jpeg" alt="" />
              <img className='img-me' src="/Images/Horse2.jpeg" alt="" />
              <img className='img-me' src="/Images/Progreso.jpeg" alt="" />
              <img className='img-me' src="/Images/Heisman.jpeg" alt="" />
              <img className='img-me' src="/Images/Fish3.jpeg" alt="" />
              <img className='img-me' src="/Images/Beach6.jpeg" alt="" />
              <img className='img-me' src="/Images/Waterfall1.jpeg" alt="" />
              <img className='img-me' src="/Images/Childers.jpeg" alt="" />
              <img className='img-me' src="/Images/Fish6.jpeg" alt="" />
              <img className='img-me' src="/Images/Horseback.jpeg" alt="" />
              <img className='img-me' src="/Images/Boat.jpeg" alt="" />
              <img className='img-me' src="/Images/Wedding.jpeg" alt="" />
              <img className='img-me' src="/Images/Ice.jpeg" alt="" />
              <img className='img-me' src="/Images/Milo1.jpeg" alt="" />
              <img className='img-me' src="/Images/Fish5.jpeg" alt="" />
              <img className='img-me' src="/Images/Lh.jpeg" alt="" />
              <img className='img-me' src="/Images/Snow2.jpeg" alt="" />
              <img className='img-me' src="/Images/Beach7.jpeg" alt="" />
              <img className='img-me' src="/Images/Bear.jpeg" alt="" />
              <img className='img-me' src="/Images/Stingray.jpeg" alt="" />
              <img className='img-me' src="/Images/UO.jpeg" alt="" />
              <img className='img-me' src="/Images/Horse.jpeg" alt="" />
              <img className='img-me' src="/Images/Snow.jpeg" alt="" />
              <img className='img-me' src="/Images/Milo2.jpeg" alt="" />
              <img className='img-me' src="/Images/Bend1.jpeg" alt="" />
              <img className='img-me' src="/Images/Fair1.jpeg" alt="" />

            </motion.div>
            
          </div>


          <div className='flex flex-col items-center justify-center'>

            <motion.div variants={titleVariants} className='text-5xl font-bold'>My Hobbies</motion.div>

            <motion.div variants={photoVariants} className='w-[100%] grid grid-cols-1 md:grid-cols-3 gap-4 p-4 place-items-center' >

              <img className='img-me' src="/Images/Piano.jpeg" alt="" />
              <img className='img-me' src="/Images/Guitar.jpeg" alt="" />
              <img className='img-me' src="/Images/Dirtbike1.jpeg" alt="" />
              <img className='img-me' src="/Images/Guitar2.jpeg" alt="" />
              <img className='img-me' src="/Images/Gun.jpeg" alt="" />
              <img className='img-me' src="/Images/Ninja.jpeg" alt="" />
              <img className='img-me' src="/Images/Fish4.jpeg" alt="" />
              <img className='img-me' src="/Images/Guitar3.jpeg" alt="" />
              <img className='img-me' src="/Images/Mechanic1.jpeg" alt="" />


            </motion.div>
            
          </div>

          <div>

          </div>

      </motion.div>
      
    </div>
  );
}

export default Me;