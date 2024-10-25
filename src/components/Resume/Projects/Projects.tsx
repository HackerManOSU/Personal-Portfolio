import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { DynamoDBClient, ScanCommand } from '@aws-sdk/client-dynamodb';
import { unmarshall } from '@aws-sdk/util-dynamodb';
import ProjectItem from './ProjectItem';
import './Projects.css'

interface Project {
  ProjectID: string;
  Title: string;
  Image: string;
  Description: string;
  Url: string;
  Priority: number;
}

const Projects: React.FC = () => {
  const [sortedProjects, setSortedProjects] = useState<Project[]>([]);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const fetchProjectsFromDynamoDB = async () => {
    try {
      const client = new DynamoDBClient({
        region: import.meta.env.VITE_AWS_REGION,
        credentials: {
          accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID!,
          secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY!,
        },
      });
      
      const command = new ScanCommand({
        TableName: 'PortfolioProjects',
      });
  
      const data = await client.send(command);
      if (data.Items) {
        const projects = data.Items.map(item => unmarshall(item)) as Project[];

        const sortedByPriority = projects.sort((a, b) => a.Priority - b.Priority);
        setSortedProjects(sortedByPriority);
      }
    } catch (error) {
      console.error('Error fetching projects from DynamoDB:', error);
    }
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    fetchProjectsFromDynamoDB();
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
      className="h-auto  font-bold border-t-4 border-white flex flex-col items-center"
    >
      <div className="max-w-[1800px] w-full mx-4 flex flex-col items-center justify-center">
        <div>
          <h1 className="text-white text-center text-6xl pt-12 pb-8">My Projects!</h1>
        </div>
        <AnimatePresence>
          <motion.div
            className="project-grid w-[100%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 place-items-center"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            >
            {sortedProjects.map((project) => (
              <ProjectItem key={project.ProjectID} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
    );
};

export default Projects;