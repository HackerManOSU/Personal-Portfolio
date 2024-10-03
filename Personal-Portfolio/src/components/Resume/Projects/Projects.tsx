import React, { useEffect, useState } from 'react';
import './Projects.css'
import HoverIcon from './loading-icon.svg';



interface Project {
    title: string;
    image: string;
    name: string;
    description: string;
    link: string;
}

const ProjectItem: React.FC<{ project: Project }> = ({ project }) => {

    const handleClick = () => {
        setTimeout(() => {
            window.location.href = project.link;
        }, 1000); // simulate delay
    };

    return (
        <div className="project-card rounded shadow-lg max-w-[4000px]" onClick={handleClick}>

          <h2 className="text-3xl pb-2 font-bold text-center text-white">{project.title}</h2>
      
          <div className="image-container relative group">

            <div className="border-4 border-white rounded-xl overflow-hidden">
            
              <div className="relative">
            
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-image w-full h-64 object-cover group-hover:filter group-hover:blur-sm"
                />
            
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50"></div>
      
            
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 z-20">
            
                  <img src={HoverIcon} alt="Loading" className="w-32 h-32" />
            
                </div>
            
              </div>
            
            </div>
          
          </div>
      
          <p className="text-xs text-center pt-2 text-white">{project.link}</p>
        </div>
      );
    
};

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    const projectsUrl = import.meta.env.VITE_S3_PROJECTS;

    useEffect(() => {
        fetch(projectsUrl)
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error('Error fetching projects:', error));
    }, []);

    return (
        <div id="projects" className="h-auto bg-black font-bold border-t-4 border-[white] flex flex-col items-center">

          <div className='max-w-[1400px] w-[100%] mx-4 flex flex-col items-center justify-center'>

            <div>
              <h1 className="text-white text-center text-6xl pt-12 pb-8">My Projects!</h1>
            </div>
            <div className="project-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 place-items-center">
                {projects.map((project, index) => (
                    <ProjectItem key={index} project={project} />
                ))}
            </div>



          </div>

        </div>
    );
};

export default Projects;