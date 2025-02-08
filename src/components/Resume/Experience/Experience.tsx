import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BeaverLogo from './BeaversLogo.png'
import IRCOLogo from './IRCOLogo.png'
import WebDevLogo from './WebDevLogo.png'

const Experience: React.FC = () => {

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
        <div id="experience" className="mx-4 flex flex-col items-center">
            <div>
                <h1 className="text-white text-center text-5xl md:text-6xl pt-12 pb-8 font-bold">Experience</h1>
            </div>

            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={controls}
                className='text-white mx-16 w-[80%] max-w-[1200px]'
            >

            <motion.div variants={itemVariants} className='AEng'>

            <div className='text-center lg:flex lg:text-left lg:items-center lg:justify-between text-xl'>

                <h2><strong>Events Audio Engineer</strong> - Oregon State University UIT</h2>

                <h3 className='text-gray-200'>Extension of IT Support job </h3>

                <h2 className='text-[gray] lg:text-right'>10/2024 - Present</h2>

            </div>

            <div className='text-left md:flex md:items-center items-center md:justify-between'>

                <p className='text-center md:pl-8 pt-8 lg:text-left'>

                    <ul>

                        <li>Mixed and produced audio for live events attended by thousands of fans, ensuring high-quality sound for
                        both in-person audiences and recorded broadcasts</li>

                        <li className='pb-4 pt-4'>Collaborated with marketing teams, directors, and event coordinators to synchronize audio production with
                        event objectives and promotional activities</li>

                        <li>Troubleshot technical issues in high-pressure environments, minimizing downtime during live events</li>

                    </ul>

                </p>

            </div>

            </motion.div>

            <motion.div variants={itemVariants} className='OSUIT mt-12'>

                    <div className='text-center lg:flex lg:text-left lg:items-center lg:justify-between text-xl'>

                        <h2><strong>IT Support and Technician</strong> - Oregon State University UIT</h2>

                        <h2 className='text-[gray] lg:text-right'>02/2024 - Present</h2>

                    </div>

                    <div className='text-left md:flex md:items-center items-center md:justify-between'>

                        <p className='text-center md:pl-8 pt-8 lg:text-left'>

                            <ul>

                                <li>Offered over the phone support to instructors/professors having technical difficulties, traveling to
                                    rooms when needed. Helped install new technologies and replace hardware in classrooms</li>

                                <li className='pb-4 pt-4'>Remotely accessed classroom technology, utilizing Crestron Fusion, ConnectWise, OvrC, and Direct IP Access</li>

                                <li>Meticulously created and logged tickets in TeamDynamix and ServiceNow to track issues and keep tabs over time</li>

                            </ul>

                        </p>

                    </div>

            </motion.div>

            <motion.div variants={itemVariants} className='Freelance mt-12'>


                    <div className='text-center lg:flex lg:text-left lg:items-center lg:justify-between text-xl'>

                        <h2><strong>Freelance Full-Stack Web Dev</strong></h2>

                        <h2 className='text-[gray] lg:text-right'>Present</h2>

                    </div>

                    <div className='text-left md:flex md:items-center items-center md:justify-between'>

                        <p className='text-center md:pl-8 pt-8 lg:text-left'>

                            <ul>

                                <li>Built a number of contracted full-stack websites and web-apps</li>

                                <li className='pb-4 pt-4'>Tech stack included but was not limited to:  <strong>React, TypeScript, TailwindCSS, Python, and AWS</strong></li>

                                <li>Projects can be seen in the above projects section!</li>

                            </ul>

                        </p>

                    </div>

            </motion.div>

            <motion.div variants={itemVariants} className='IRCO mt-12'>

                    <div className='text-center lg:flex lg:text-left lg:items-center lg:justify-between text-xl'>

                        <h2><strong>Maintenance Tech, Repairs and Installation</strong> - Immigrant and Refugee Community Organization (IRCO) </h2>

                        <h2 className='text-[gray] lg:text-right'>06/2023 - 02/2024</h2>

                    </div>

                    <div className='text-center md:flex md:items-center items-center md:justify-between'>

                        <p className='text-center md:pl-8 pt-8 lg:text-left'>

                            <ul>

                                <li>General construction for larger in-house projects- plumbing, framing, finishing, demolition </li>

                                <li className='pb-4 pt-4'>General repairwork - doorframes, furniture, plumbing, etc. </li>

                                <li>General build and installation work - TVs, chairs, tables, etc.</li>

                            </ul>

                        </p>

                    </div>

        
            </motion.div>

                <motion.div variants={itemVariants} className='w-[100%] max-w-[1000px] mt-8 flex items-center justify-evenly mx-auto'>

                    <div className='w-[20%] min-w-[100px]'>

                        <img src={BeaverLogo} alt="" />

                    </div>

                    <div className='w-[20%] min-w-[100px]'>

                        <img src={IRCOLogo} alt="" />

                    </div>

                    <div className='w-[15%] min-w-[80px]'>

                        <img src={WebDevLogo} alt="" />

                    </div>

                </motion.div>

            </motion.div>

        </div>
    );
}

export default Experience;