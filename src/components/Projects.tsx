'use client'
import React from 'react';
import { Github } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'Golang Restaurant Backend',
    image: 'assets/projects/restaurant-backend.png',  // Replace with actual image paths
    githubLink: 'https://github.com/SamyogGhimire/Restaurant-Backend.git',
  },
  {
    title: 'AWS VPC',
    image: '/assets/projects/VPC.png',
    githubLink: 'https://github.com/SamyogGhimire/AWS-VPC-Project',
  },
  {
    title: 'Logistic Management',
    image: '/assets/projects/Logistics_management.png',
    githubLink: 'https://github.com/yourusername/logistic-management',
  },
  {
    title: 'Chess',
    image: '/assets/projects/chess.png',
    githubLink: 'https://github.com/yourusername/chess-project',
  },
  {
    title: 'Whiteboard',
    image: '/assets/projects/whiteboard.png',
    githubLink: 'https://github.com/yourusername/whiteboard-project',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-black text-white py-12 relative opacity-80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8 ">Projects</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image
                src={project.image}
                alt={project.title}
                width={48}
                height={48}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-between px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-lg font-medium">{project.title}</span>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
