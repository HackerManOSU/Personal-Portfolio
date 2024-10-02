import React, { useEffect, useState } from 'react';
import './Projects.css'

interface Project {
    title: string;
    image: string;
    name: string;
    description: string;
    link: string;
}

const ProjectItem: React.FC<{ project: Project }> = ({ project }) => {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
            window.location.href = project.link;
        }, 1000); // simulate delay
    };

    return (
        <div className="project-card rounded shadow-lg max-w-[4000px]" onClick={handleClick}>
            <h2 className="text-xl font-bold text-center text-white">{project.title}</h2>
    
            <div className="image-container relative group">
                <div className="border-4 border-white rounded-xl overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.name}
                        className="project-image w-full h-64 object-cover group-hover:filter group-hover:blur-sm"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50"></div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 z-20">
                        <img src="./loading-icon.svg" alt="Loading" className="w-12 h-12" />
                    </div>

                </div>
            </div>
    
            <p className="text-xs text-center pt-2 text-white">{project.link}</p>
        </div>
    );
    
};

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetch('https://personalportfolioprojects.s3.amazonaws.com/projects.json')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error('Error fetching projects:', error));
    }, []);

    return (
        <div id="projects" className="h-[100vh] bg-black font-bold mx-4 border-t-4 border-[white]">
            <div>
                <h1 className="text-white text-center text-6xl pt-12 pb-8">My Projects!</h1>
            </div>
            <div className="project-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 place-items-center">
                {projects.map((project, index) => (
                    <ProjectItem key={index} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;