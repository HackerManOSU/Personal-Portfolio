import React from 'react';
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

const Skills: React.FC = () => {

    return (

        <div className='text-white flex flex-col items-center text-center'>

            <div className=''>

                <h1 className='text-center text-6xl pt-12 pb-12 font-bold'>Skills + Tech</h1>

            </div>

            <div className='text-2xl font-bold pb-4'>Front-End + Back-End Stack</div>

            <div className='w-[80%] flex flex-row items-center justify-evenly pb-12'>

                <img className='skills-logos' src={ReactLogo} alt="" />
                <img className='skills-logos' src={TypeScript} alt="" />
                <img className='skills-logos' src={JavaScript} alt="" />
                <img className='skills-logos' src={Tailwind} alt="" />
                <img className='skills-logos' src={AWS} alt="" />
                <img className='skills-logos' src={Python} alt="" />
                <img className='skills-logos' src={C} alt="" />
                <img className='skills-logos' src={HTML} alt="" />
                <img className='skills-logos' src={CSS} alt="" />

            </div>

            <div className='text-2xl font-bold pb-4'>Cloud + Cyber Stack</div>

            <div className='w-[80%] flex flex-row items-center justify-evenly'>

                <img className='skills-logos' src={ReactLogo} alt="" />
                <img className='skills-logos' src={TypeScript} alt="" />
                <img className='skills-logos' src={JavaScript} alt="" />
                <img className='skills-logos' src={Tailwind} alt="" />
                <img className='skills-logos' src={AWS} alt="" />
                <img className='skills-logos' src={Python} alt="" />
                <img className='skills-logos' src={C} alt="" />
                <img className='skills-logos' src={HTML} alt="" />
                <img className='skills-logos' src={CSS} alt="" />

            </div>



            

        </div>

        

    );



};

export default Skills;