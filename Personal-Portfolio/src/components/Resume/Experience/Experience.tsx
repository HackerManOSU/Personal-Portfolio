import React from 'react';
import BeaverLogo from './BeaversLogo.png'
import IRCOLogo from './IRCOLogo.png'
import WebDevLogo from './WebDevLogo.png'

const Experience: React.FC = () => {
    return (
        <div id="experience" className="mx-4 flex flex-col items-center">
            <div>
                <h1 className="text-white text-center text-6xl pt-12 pb-8 font-bold">Experience</h1>
            </div>

            <div className='text-white mx-16 w-[80%] max-w-[1200px]'>

                <div className='OSUIT'>

                    <div className='text-center lg:flex lg:text-left lg:items-center lg:justify-between text-xl'>

                        <h2><strong>University IT Support and Technician</strong> - Oregon State University UIT</h2>

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

                </div>

                <div className='Freelance mt-12'>

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

                </div>

                <div className='IRCO mt-12'>

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

                </div>
        
            </div>

            <div className='w-[80%] max-w-[1000px] mt-8 flex items-center justify-evenly'>

                <div className='w-[20%] min-w-[100px]'>

                    <img src={BeaverLogo} alt="" />

                </div>

                <div className='w-[20%] min-w-[100px]'>

                    <img src={IRCOLogo} alt="" />

                </div>

                <div className='w-[15%] min-w-[80px]'>

                    <img src={WebDevLogo} alt="" />

                </div>

                

            </div>

        </div>
    );
}

export default Experience;