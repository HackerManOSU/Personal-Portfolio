import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectItem from './ProjectItem';
import './Projects.css'

interface Project {
  id: string;
    title: string;
    image: string;
    name: string;
    description: string;
    link: string;
}

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    const projectsUrl = import.meta.env.VITE_S3_PROJECTS;

    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);

    useEffect(() => {
        fetch(projectsUrl)
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error('Error fetching projects:', error));
    }, []);

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.3,
        },
      },
    };
  

    return (
      <div
      id="projects"
      className="h-auto font-bold border-t-4 border-white flex flex-col items-center"
    >
      <div className="max-w-[1400px] w-full mx-4 flex flex-col items-center justify-center">
        <div>
          <h1 className="text-white text-center text-6xl pt-12 pb-8">My Projects!</h1>
        </div>
        <AnimatePresence>
          <motion.div
            className="project-grid w-[100%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 place-items-center"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {projects.map((project) => (
              <ProjectItem key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
    );
};

export default Projects;