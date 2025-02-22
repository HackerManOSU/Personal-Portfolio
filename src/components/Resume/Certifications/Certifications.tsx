import React from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GoogleCyberBadge from './GoogleCyberSecBadge.webp'
import AWSSAA from './AWSSAA.png'

const Certifications: React.FC = () => {

    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.3 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (

        <div className='text-white flex flex-col items-center text-center'>

            <div className=''>

                <h1 className='text-center text-5xl pt-12 pb-8 font-bold md:text-6xl'>Certifications</h1>

            </div>

            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={controls}
                className='text-white max-w-[1200px]'
            >

            <motion.div variants={itemVariants} className='flex flex-col text-center text-2xl max-w-[80%] mx-auto'>

                <h2>
                    Google Cybersecurity Professional
                </h2>

                <h2 className='pb-8'>

                    Amazon Web Services Solution Architect Associate - AWS SAA (In Progress)

                </h2>

            </motion.div>

            <motion.div variants={itemVariants} className='flex flex-row justify-evenly items-center w-[80%] max-w-[1000px] mt-8 mx-auto'>

                <div className='w-[20%] min-w-[80px]'>

                    <img src={GoogleCyberBadge} alt="" />

                </div>

                <div className='w-[20%] min-w-[80px]'>

                    <img src={AWSSAA} alt="" />

                </div>

            </motion.div>

            </motion.div>



            

        </div>

    );

};

export default Certifications;