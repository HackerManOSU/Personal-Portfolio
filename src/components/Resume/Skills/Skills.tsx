import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css'
import AWS from '../../../assets/skills/aws.svg';
import Python from '../../../assets/skills/python.svg';
import ReactLogo from '../../../assets/skills/react-javascript-js-framework-facebook.svg';
import C from '../../../assets/skills/c-original.svg';
import Tailwind from '../../../assets/skills/tailwind-css.svg';
import TypeScript from '../../../assets/skills/typescript-icon.svg';
import HTML from '../../../assets/skills/file-type-html.svg';
import CSS from '../../../assets/skills/file-type-css.svg';
import JavaScript from '../../../assets/skills/javascript-js.svg';
import Splunk from '../../../assets/skills/splunk.svg';
import Wireshark from '../../../assets/skills/wireshark.svg';
import Bash from '../../../assets/skills/bash.svg';

const Skills: React.FC = () => {

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

                <h1 className='text-center text-5xl pt-12 pb-12 font-bold md:text-6xl'>Skills + Tech</h1>

            </div>

            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={controls}
                className='text-white mx-16 w-[80%] max-w-[1200px]'
            >

            <motion.div variants={itemVariants} className='text-2xl font-bold pb-4'>Front-End + Back-End Stack</motion.div>

            <motion.div variants={itemVariants} className='w-[80%] flex flex-row items-center justify-evenly pb-12 mx-auto'>

                <img className='skills-logos' src={AWS} alt="" />
                <img className='skills-logos' src={ReactLogo} alt="" />
                <img className='skills-logos' src={TypeScript} alt="" />
                <img className='skills-logos' src={JavaScript} alt="" />
                <img className='skills-logos' src={Python} alt="" />
                <img className='skills-logos' src={C} alt="" />
                <img className='skills-logos' src={Tailwind} alt="" />
                <img className='skills-logos' src={HTML} alt="" />
                <img className='skills-logos' src={CSS} alt="" />

            </motion.div>

            <motion.div variants={itemVariants} className='text-2xl font-bold pb-4'>Cloud + Cyber Stack</motion.div>

            <motion.div variants={itemVariants} className='w-[80%] flex flex-row items-center justify-evenly mx-auto'>

                <img className='skills-logos' src={AWS} alt="" />
                <img className='skills-logos' src={Splunk} alt="" />
                <img className='skills-logos' src={Wireshark} alt="" />
                <img className='skills-logos' src={Bash} alt="" />

            </motion.div>

            </motion.div>



            

        </div>

        

    );



};

export default Skills;