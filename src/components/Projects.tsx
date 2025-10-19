import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
    {
      title: 'SnipVault',
      description: 'A powerful Chrome extension for developers to save, manage, and organize code snippets with syntax highlighting, smart search, and one-click copy functionality.',
      tech: ['JavaScript', 'Chrome APIs', 'Prism.js', 'HTML5', 'CSS3'],
      github: 'https://github.com/Swapnanilb/SnipVault',
      demo: '/projects/snipvault',
      image: `${process.env.PUBLIC_URL}/assets/SnipVault_Logo.png`,
      category: 'frontend'
    },
    {
      title: 'QuickLinkr',
      description: 'A modern URL shortener with analytics, QR codes, bulk processing, and custom short codes. Features real-time click tracking and comprehensive dashboard.',
      tech: ['FastAPI', 'SQLAlchemy', 'JavaScript', 'SQLite'],
      github: 'https://github.com/Swapnanilb/QuickLinkr',
      demo: '/projects/quicklinkr',
      image: `${process.env.PUBLIC_URL}/assets/QuickLinkr.png`,
      category: 'backend'
    },
    {
      title: 'Svara',
      description: 'A modern, feature-rich music player built with React, Python, and Electron that streams music from YouTube with a beautiful, responsive interface.',
      tech: ['React.js', 'Electron', 'Python', 'FastAPI'],
      github: 'https://github.com/Swapnanilb/Svara',
      demo: 'https://thunderer44.github.io/Svara-website/',
      image: `${process.env.PUBLIC_URL}/assets/Svara_Logo.png`,
      category: 'fullstack'
    },
    {
      title: 'Projex',
      description: 'A modern desktop project manager that helps you organize, tag, and instantly find local folders — designed for developers, creators, and teams.',
      tech: ['React.js', 'Electron', 'SQLite'],
      github: 'https://github.com/Swapnanilb/Projex',
      demo: null,
      image: `${process.env.PUBLIC_URL}/assets/Projex_Logo.png`,
      category: 'frontend'
    },
    {
      title: 'Guess-Em-All',
      description: '🎮 A Pokémon silhouette guessing game with Pokédex, rarity system, and animated gameplay — built using React, Tailwind & Framer Motion.',
      tech: ['React.js', 'Node.js', 'MongoDB'],
      github: 'https://github.com/Swapnanilb/Guess-Em-All',
      demo: null,
      image: `${process.env.PUBLIC_URL}/assets/Guess-Em-All_Logo.png`,
      category: 'fullstack'
    }
  ];

  const filteredProjects = activeTab === 'all' ? projects : projects.filter(project => project.category === activeTab);

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full-Stack' }
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

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-secondary/10 rounded-lg p-1 border border-secondary/20">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-accent text-primary shadow-lg'
                    : 'text-secondary/70 hover:text-secondary hover:bg-secondary/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
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
                  
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20"
                      >
                        {tech}
                      </span>
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
                    project.demo.startsWith('/') ? (
                      <Link
                        to={project.demo}
                        className="flex-1 py-2 px-3 bg-accent text-primary text-center rounded-lg text-sm font-semibold hover:bg-accent/80 transition-all duration-300"
                      >
                        Demo
                      </Link>
                    ) : (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-3 bg-accent text-primary text-center rounded-lg text-sm font-semibold hover:bg-accent/80 transition-all duration-300"
                      >
                        Demo
                      </a>
                    )
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

        {/* GitHub Contributions Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold font-poppins mb-2">Open Source <span className="text-accent">Contributions</span></h3>
            <div className="w-12 h-0.5 bg-accent mx-auto"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            <div className="relative bg-gradient-to-br from-secondary/5 to-accent/5 backdrop-blur-sm border border-secondary/10 rounded-2xl p-6 hover:shadow-2xl hover:shadow-accent/20 hover:border-accent/30 transition-all duration-500">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl flex items-center justify-center border border-accent/20 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-secondary group-hover:text-accent transition-colors duration-300">VulcanoCraft-plugin</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20">4 PRs</span>
                        <span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded-full border border-green-500/20">Merged</span>
                      </div>
                    </div>
                    <a
                      href="https://github.com/VulcanoSoftware/VulcanoCraft-plugin-repository"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1.5 bg-accent/10 text-accent border border-accent/30 rounded-lg hover:bg-accent hover:text-primary transition-all duration-300 text-sm font-medium"
                    >
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Repository
                    </a>
                  </div>
                  <p className="text-secondary/70 mb-5 leading-relaxed">Contributing admin features, performance optimizations, and platform integrations to VulcanoSoftware's plugin repository.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="group/pr bg-gradient-to-r from-secondary/5 to-accent/5 rounded-lg p-3 border border-secondary/10 hover:border-accent/30 transition-all duration-300">
                      <a href="https://github.com/VulcanoSoftware/VulcanoCraft-plugin-repository/pull/5" target="_blank" rel="noopener noreferrer" className="block">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-accent group-hover/pr:text-accent-coral transition-colors">#5</span>
                          <svg className="w-3 h-3 text-secondary/40 group-hover/pr:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                        <p className="text-sm text-secondary/80 font-medium">Role-based Admin Panel</p>
                        <p className="text-xs text-secondary/60 mt-1">3-tier permission system</p>
                      </a>
                    </div>
                    
                    <div className="group/pr bg-gradient-to-r from-secondary/5 to-accent/5 rounded-lg p-3 border border-secondary/10 hover:border-accent/30 transition-all duration-300">
                      <a href="https://github.com/VulcanoSoftware/VulcanoCraft-plugin-repository/pull/7" target="_blank" rel="noopener noreferrer" className="block">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-accent group-hover/pr:text-accent-coral transition-colors">#7</span>
                          <svg className="w-3 h-3 text-secondary/40 group-hover/pr:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                        <p className="text-sm text-secondary/80 font-medium">Performance Optimization</p>
                        <p className="text-xs text-secondary/60 mt-1">3x faster scraping & caching</p>
                      </a>
                    </div>
                    
                    <div className="group/pr bg-gradient-to-r from-secondary/5 to-accent/5 rounded-lg p-3 border border-secondary/10 hover:border-accent/30 transition-all duration-300">
                      <a href="https://github.com/VulcanoSoftware/VulcanoCraft-plugin-repository/pull/8" target="_blank" rel="noopener noreferrer" className="block">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-accent group-hover/pr:text-accent-coral transition-colors">#8</span>
                          <svg className="w-3 h-3 text-secondary/40 group-hover/pr:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                        <p className="text-sm text-secondary/80 font-medium">CurseForge & API Migration</p>
                        <p className="text-xs text-secondary/60 mt-1">60%+ performance boost</p>
                      </a>
                    </div>
                    
                    <div className="group/pr bg-gradient-to-r from-secondary/5 to-accent/5 rounded-lg p-3 border border-secondary/10 hover:border-accent/30 transition-all duration-300">
                      <a href="https://github.com/VulcanoSoftware/VulcanoCraft-plugin-repository/pull/9" target="_blank" rel="noopener noreferrer" className="block">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-accent group-hover/pr:text-accent-coral transition-colors">#9</span>
                          <svg className="w-3 h-3 text-secondary/40 group-hover/pr:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                        <p className="text-sm text-secondary/80 font-medium">Version Fetching Fixes</p>
                        <p className="text-xs text-secondary/60 mt-1">Correct Minecraft versions</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;