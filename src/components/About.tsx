import React, { useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [showMore, setShowMore] = useState(false);
  const techStack = [
    'React', 'TypeScript', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL',
    'Electron', 'FastAPI', 'JavaScript', 'Git', 'TailwindCSS'
  ];

  return (
    <section id="about" className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-poppins mb-4">About <span className="text-accent">Me</span></h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl border border-gray-700 max-w-md mx-auto">
              <div className="bg-gray-800 px-4 py-3 flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4">about-me.js</span>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-purple-400"
                >const</motion.div>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-yellow-300"
                > developer</motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="text-white"
                > = {'{'}</motion.span>
                <div className="ml-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    viewport={{ once: true }}
                    className="text-blue-300"
                  >name: <span className="text-green-300">"Swapnanil Basak"</span>,</motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    viewport={{ once: true }}
                    className="text-blue-300"
                  >role: <span className="text-green-300">"Developer"</span>,</motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                    viewport={{ once: true }}
                    className="text-blue-300"
                  >location: <span className="text-green-300">"India"</span>,</motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    viewport={{ once: true }}
                    className="text-blue-300"
                  >skills: [</motion.div>
                  <div className="ml-4">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.7 }}
                      viewport={{ once: true }}
                      className="text-green-300"
                    >"React", "TypeScript",</motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.9 }}
                      viewport={{ once: true }}
                      className="text-green-300"
                    >"Node.js", "Python",</motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 2.1 }}
                      viewport={{ once: true }}
                      className="text-green-300"
                    >"MongoDB", "PostgreSQL"</motion.div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 2.3 }}
                    viewport={{ once: true }}
                    className="text-blue-300"
                  >],</motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 2.5 }}
                    viewport={{ once: true }}
                    className="text-blue-300"
                  >passion: <span className="text-green-300">"Building amazing apps"</span>,</motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 2.7 }}
                    viewport={{ once: true }}
                    className="text-blue-300"
                  >currentlyDeveloping: <span className="text-green-300">["SVARA", "Projex", "Guess-EM-All"]</span></motion.div>
                </div>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.9 }}
                  viewport={{ once: true }}
                  className="text-white"
                >{'};'}</motion.span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-secondary/80 mb-6 leading-relaxed">
              Hi, I'm Swapnanil Basak — a passionate developer who loves building creative and impactful projects. 
              MCA Graduate from Vivekananda Institute of Professional Studies, I enjoy blending problem-solving with design to bring ideas to life.
            </p>
            
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: showMore ? 1 : 0, height: showMore ? 'auto' : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="text-secondary/80 mb-6 leading-relaxed space-y-4">
                <div>
                  <h4 className="text-accent font-semibold mb-2">💡 What I do</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>🖥️ Develop web applications with Django, Flask, FastAPI, and Node.js</li>
                    <li>🎨 Create engaging front-end experiences with React, Next.js, and Tailwind CSS</li>
                    <li>📊 Work on data analysis projects with Python, Pandas, and Machine Learning</li>
                    <li>🎮 Learning game dev & interactive portfolios using Three.js and Pixi.js</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-accent font-semibold mb-2">🎯 Beyond code</h4>
                  <p className="text-sm">
                    I'm a gamer at heart 🎮, a curious learner 📚, and someone who's always exploring new tech — from AI workflows to game engines. 
                    When I'm not coding, you'll probably find me playing games, listening to music, or tinkering with new ideas.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <button
              onClick={() => setShowMore(!showMore)}
              className="text-accent hover:text-accent-green transition-colors duration-300 font-medium mb-8"
            >
              {showMore ? 'Read Less ↑' : 'Read More ↓'}
            </button>

            <div className="space-y-6">
              <div className="flex gap-4">
                <a
                  href="https://github.com/Swapnanilb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent border border-accent/30 rounded-lg hover:bg-accent hover:text-primary transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/swapnanil02/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent border border-accent/30 rounded-lg hover:bg-accent hover:text-primary transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent">Tech Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {techStack.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      viewport={{ once: true }}
                      className="px-4 py-2 bg-accent/10 text-accent border border-accent/30 rounded-full text-sm font-medium hover:bg-accent/20 transition-all duration-300 cursor-pointer"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;