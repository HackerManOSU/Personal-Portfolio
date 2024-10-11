import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import HoverIcon from './loading-icon.svg';

interface Project {
  id: string;
  title: string;
  image: string;
  name: string;
  description: string;
  link: string;
}

interface ProjectItemProps {
  project: Project;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  const handleClick = () => {
    window.location.href = project.link;
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="project-card rounded cursor-pointer"
      onClick={handleClick}
      variants={itemVariants}
    >
      <h2 className="text-3xl pb-2 font-bold text-center text-white">{project.title}</h2>

      <div className="image-container relative group">
        <div className="border-2 border-white rounded-xl overflow-hidden">
          <div className="relative">
            <img
              src={project.image}
              alt={project.name}
              className="project-image w-full h-auto object-cover group-hover:filter group-hover:blur-sm"
            />

            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 z-20 transition-opacity duration-300">
              <img src={HoverIcon} alt="Loading" className="w-32 h-32" />
            </div>
          </div>
        </div>
      </div>

      <p className="text-xs text-center pt-2 text-white">{project.link}</p>
    </motion.div>
  );
};

export default ProjectItem;
