import React from 'react';
import Projects from './Projects/Projects';
import Experience from './Experience/Experience';
import Certifications from './Certifications/Certifications';
import Skills from './Skills/Skills';
import ResumeLink from './ResumeLink/ResumeLink';

const Resume: React.FC = () => {
    return (
        <div className='border-b-4 border-white'>
            <Projects />
            <Experience />
            <Certifications />
            <Skills />
            <ResumeLink />

        </div>
    )
}

export default Resume;