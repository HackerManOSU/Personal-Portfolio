import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Me.css';

const Me: React.FC = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
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
      <h1 className='text-6xl font-bold'>Me!</h1>

      <div className='py-8'>

        <p>I study <strong>Computer Science</strong> at <strong>Oregon State University</strong> with a focus in Human-Computer-Interaction and Cybersecurtity</p>

      </div>

      <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={controls}
                className='flex flex-col items-center text-4xl'
            >

          <div className='py-8 text-6xl font-bold'>I like...</div>

          <div className='flex flex-col items-center justify-center'>

            <motion.div variants={titleVariants} className='font-bold'>Exploring</motion.div>

            <motion.div variants={photoVariants} className='w-[100%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 place-items-center'>

              <img className='img-me' src="/Images/Beach.jpeg" alt="" />
              <img className='img-me' src="/Images/Waterfall.jpeg" alt="" />
              <img className='img-me' src="/Images/Beach2.jpeg" alt="" />
              <img className='img-me' src="/Images/Horse.jpeg" alt="" />
              <img className='img-me' src="/Images/Waterfall1.jpeg" alt="" />
              <img className='img-me' src="/Images/Jamaica.jpeg" alt="" />
              <img className='img-me' src="/Images/Lh.jpeg" alt="" />
              <img className='img-me' src="/Images/Horse2.jpeg" alt="" />
              <img className='img-me' src="/Images/Horse3.jpeg" alt="" />
              <img className='img-me' src="/Images/Progreso.jpeg" alt="" />
              <img className='img-me' src="/Images/Snow2.jpeg" alt="" />
              <img className='img-me' src="/Images/Stingray.jpeg" alt="" />
              <img className='img-me' src="/Images/.jpeg" alt="" />

            </motion.div>
            
          </div>


          <div className='flex flex-col items-center justify-center'>

            <motion.div variants={titleVariants}>Friends and Family</motion.div>

            <motion.div variants={photoVariants} className='w-[100%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 place-items-center'>

              <img className='img-me' src="/Images/Em3.jpeg" alt="" />
              <img className='img-me' src="/Images/UO.jpeg" alt="" />
              <img className='img-me' src="/Images/Wedding.jpeg" alt="" />
              <img className='img-me' src="/Images/Skagway.jpeg" alt="" />

            </motion.div>
            
          </div>

          <div className='flex flex-col items-center justify-center'>

            <motion.div variants={titleVariants}>My Hobbies</motion.div>

            <motion.div variants={photoVariants} className='w-[100%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 place-items-center'>

              <img className='img-me-top' src="/Images/Guitar.jpeg" alt="" />
              <img className='img-me' src="/Images/Piano.jpeg" alt="" />
              <img className='img-me' src="/Images/Fish1.jpeg" alt="" />
              <img className='img-me' src="/Images/Fish2.jpeg" alt="" />
              <img className='img-me' src="/Images/Fish3.jpeg" alt="" />
              <img className='img-me' src="/Images/Fish4.jpeg" alt="" />
              <img className='img-me' src="/Images/Fish5.jpeg" alt="" />

            </motion.div>

          </div>

          <div>

          </div>



      </motion.div>
      
    </div>
  );
}

export default Me;