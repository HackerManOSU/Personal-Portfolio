import React from 'react'
import GoogleCyberBadge from './GoogleCyberSecBadge.webp'
import AWSCCP from './AWSCCP.png'
import AWSSAA from './AWSSAA.png'

const Certifications: React.FC = () => {

    return (

        <div className='text-white flex flex-col items-center text-center'>

            <div className=''>

                <h1 className='text-center text-6xl pt-12 pb-8 font-bold'>Certifications</h1>

            </div>

            <div className='flex flex-col text-center text-2xl max-w-[90%]'>

                <h2>
                    Google Cybersecurity Professional
                </h2>

                <h2 className='pb-8 pt-8'>

                    Amazon Web Services Certified Cloud Practitioner - AWS CCP

                </h2>

                <h2 className='pb-8'>

                    Amazon Web Services Solution Architect Associate - AWS SAA (In Progress)

                </h2>

            </div>

            <div className='flex flex-row justify-between items-center w-[80%] max-w-[1000px] mt-8'>

                <div className='w-[20%] min-w-[100px]'>

                    <img src={GoogleCyberBadge} alt="" />

                </div>

                <div className='w-[20%] min-w-[100px]'>

                    <img src={AWSCCP} alt="" />

                </div>

                <div className='w-[20%] min-w-[100px]'>

                    <img src={AWSSAA} alt="" />

                </div>

            </div>



            

        </div>

    );

};

export default Certifications;