import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Svara',
      description: 'A modern, feature-rich music player built with React, Python, and Electron that streams music from YouTube with a beautiful, responsive interface.',
      tech: [
        { name: 'Python', percentage: 56.1 },
        { name: 'JavaScript', percentage: 39.9 },
        { name: 'CSS', percentage: 2.2 },
        { name: 'HTML', percentage: 1.8 }
      ],
      github: 'https://github.com/Swapnanilb/Svara',
      demo: 'https://thunderer44.github.io/Svara-website/',
      image: `${process.env.PUBLIC_URL}/assets/Svara_Logo.png`
    },
    {
      title: 'Projex',
      description: 'A modern desktop project manager that helps you organize, tag, and instantly find local folders — designed for developers, creators, and teams.',
      tech: [
        { name: 'JavaScript', percentage: 98.4 },
        { name: 'HTML/CSS', percentage: 1.6 }
      ],
      github: 'https://github.com/Swapnanilb/Projex',
      demo: null,
      image: `${process.env.PUBLIC_URL}/assets/Projex_Logo.png`
    },
    {
      title: 'Guess-Em-All',
      description: '🎮 A Pokémon silhouette guessing game with Pokédex, rarity system, and animated gameplay — built using React, Tailwind & Framer Motion.',
      tech: [
        { name: 'JavaScript', percentage: 96.4 },
        { name: 'CSS', percentage: 2.9 },
        { name: 'HTML', percentage: 0.7 }
      ],
      github: 'https://github.com/Swapnanilb/Guess-Em-All',
      demo: null,
      image: `${process.env.PUBLIC_URL}/assets/Guess-Em-All_Logo.png`
    }
  ];

  return (
    <section id="projects" className="py-20 bg-primary/95">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-poppins mb-4">My <span className="text-accent">Projects</span></h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-secondary/5 to-accent/5 backdrop-blur-sm border border-secondary/10 rounded-2xl p-6 hover:shadow-2xl hover:shadow-accent/20 hover:border-accent/30 transition-all duration-500 overflow-hidden md:aspect-square flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="h-24 mb-4 flex justify-center items-center bg-secondary/5 rounded-xl p-4">
                  <img src={project.image} alt={project.title} className="h-full w-auto object-contain filter group-hover:brightness-110 transition-all duration-300" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-secondary group-hover:text-accent transition-colors duration-300">{project.title}</h3>
                
                <p className="text-secondary/70 mb-4 leading-relaxed text-sm">{project.description}</p>
                
                <div className="mb-4 flex-grow">
                  <h4 className="text-accent text-sm font-semibold mb-2">Tech Stack:</h4>
                  
                  {/* Mobile: GitHub-style tags */}
                  <div className="md:hidden flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech.name}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                  
                  {/* Desktop: Progress bars */}
                  <div className="hidden md:block space-y-2">
                    {project.tech.map((tech) => (
                      <div key={tech.name} className="flex items-center justify-between">
                        <span className="text-secondary/80 text-xs font-medium">{tech.name}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-1.5 bg-secondary/20 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-accent to-accent-green rounded-full transition-all duration-1000"
                              style={{ width: `${tech.percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-accent text-xs font-semibold min-w-[35px] text-right">{tech.percentage}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-2 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 border border-accent text-accent text-center rounded-lg text-sm font-semibold hover:bg-accent hover:text-primary transition-all duration-300"
                  >
                    GitHub
                  </a>
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-3 bg-accent text-primary text-center rounded-lg text-sm font-semibold hover:bg-accent/80 transition-all duration-300"
                    >
                      Demo
                    </a>
                  ) : (
                    <span className="flex-1 py-2 px-3 bg-secondary/10 text-secondary/40 text-center rounded-lg text-sm font-semibold cursor-not-allowed">
                      N/A
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;