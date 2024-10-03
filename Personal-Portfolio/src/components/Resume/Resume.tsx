import React from 'react';
import Projects from './Projects/Projects';
import Experience from './Experience/Experience';
import Certifications from './Certifications/Certifications';
import Skills from './Skills/Skills';

const Resume: React.FC = () => {
    return (
        <div>
            <Projects />
            <Experience />
            <Certifications />
            <Skills />

        </div>
    )
}

export default Resume;