import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SnipVaultProject = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-primary text-secondary">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm border-b border-secondary/10 z-50">
        <div className="container mx-auto px-6 py-4">
          <Link to="/" className="text-accent hover:text-accent/80 transition-colors">
            ← Back to Portfolio
          </Link>
        </div>
      </nav>

      <div className="pt-20 pb-10">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold mb-4">
              Snip<span className="text-accent">Vault</span>
            </h1>
            <p className="text-xl text-secondary/70 max-w-3xl mx-auto">
              A powerful Chrome extension for developers to save, manage, and organize code snippets with syntax highlighting and smart search functionality.
            </p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="bg-secondary/5 rounded-2xl p-6 border border-secondary/10">
              <h3 className="text-2xl font-bold mb-4 text-accent">Technology Stack</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Core Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {['JavaScript ES6+', 'Chrome Extension APIs', 'Prism.js', 'Manifest V3'].map(tech => (
                      <span key={tech} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm border border-accent/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {['HTML5', 'CSS3', 'Responsive Design', 'JSON Storage'].map(tech => (
                      <span key={tech} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm border border-accent/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Screenshots */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <h3 className="text-3xl font-bold mb-8 text-center">Application Screenshots</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary/5 rounded-2xl p-6 border border-secondary/10">
                <img 
                  src={`${process.env.PUBLIC_URL}/assets/Project_Overview/SnipVault/Popup.png`}
                  alt="Main Popup Interface"
                  className="w-full rounded-lg mb-4"
                />
                <h4 className="text-xl font-semibold mb-2 text-accent">Main Popup Interface</h4>
                <p className="text-secondary/70">The main popup showing saved snippets with syntax highlighting and management options</p>
              </div>

              <div className="bg-secondary/5 rounded-2xl p-6 border border-secondary/10">
                <img 
                  src={`${process.env.PUBLIC_URL}/assets/Project_Overview/SnipVault/Manual_Add.png`}
                  alt="Manual Snippet Addition"
                  className="w-full rounded-lg mb-4"
                />
                <h4 className="text-xl font-semibold mb-2 text-accent">Manual Snippet Addition</h4>
                <p className="text-secondary/70">Dialog for manually adding new code snippets with language selection</p>
              </div>

              <div className="bg-secondary/5 rounded-2xl p-6 border border-secondary/10">
                <img 
                  src={`${process.env.PUBLIC_URL}/assets/Project_Overview/SnipVault/Edit_Preview.png`}
                  alt="Edit Functionality"
                  className="w-full rounded-lg mb-4"
                />
                <h4 className="text-xl font-semibold mb-2 text-accent">Edit Functionality</h4>
                <p className="text-secondary/70">Edit interface allowing users to modify existing snippets</p>
              </div>

              <div className="bg-secondary/5 rounded-2xl p-6 border border-secondary/10">
                <img 
                  src={`${process.env.PUBLIC_URL}/assets/Project_Overview/SnipVault/Options.png`}
                  alt="Options Page"
                  className="w-full rounded-lg mb-4"
                />
                <h4 className="text-xl font-semibold mb-2 text-accent">Options Page</h4>
                <p className="text-secondary/70">Advanced options page for tag management and import/export functionality</p>
              </div>
            </div>
          </motion.div>

          {/* Demo Video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <h3 className="text-3xl font-bold mb-8 text-center">Demo Video</h3>
            <div className="bg-secondary/5 rounded-2xl p-6 border border-secondary/10">
              <video 
                controls 
                autoPlay
                loop
                muted
                preload="metadata"
                className="w-full rounded-lg"
                poster={`${process.env.PUBLIC_URL}/assets/Project_Overview/SnipVault/Popup.png`}
              >
                <source src={`${process.env.PUBLIC_URL}/assets/Project_Overview/SnipVault/SnipVault_Projectoverview.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-12"
          >
            <h3 className="text-3xl font-bold mb-8 text-center">Key Features</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-secondary/5 rounded-2xl p-6 border border-secondary/10">
                <h4 className="text-xl font-semibold mb-3 text-accent">Core Functionality</h4>
                <ul className="space-y-2 text-secondary/70">
                  <li>• Right-click context menu integration</li>
                  <li>• Syntax highlighting with Prism.js</li>
                  <li>• Smart search & filter system</li>
                  <li>• One-click copy to clipboard</li>
                </ul>
              </div>

              <div className="bg-secondary/5 rounded-2xl p-6 border border-secondary/10">
                <h4 className="text-xl font-semibold mb-3 text-accent">Management Features</h4>
                <ul className="space-y-2 text-secondary/70">
                  <li>• Full CRUD operations</li>
                  <li>• Tag-based organization</li>
                  <li>• Import/Export functionality</li>
                  <li>• Multi-language support</li>
                </ul>
              </div>

              <div className="bg-secondary/5 rounded-2xl p-6 border border-secondary/10">
                <h4 className="text-xl font-semibold mb-3 text-accent">Technical Excellence</h4>
                <ul className="space-y-2 text-secondary/70">
                  <li>• Manifest V3 compliance</li>
                  <li>• Service Worker architecture</li>
                  <li>• Local storage management</li>
                  <li>• Cross-browser compatibility</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Portfolio Value */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mb-12"
          >
            <h3 className="text-3xl font-bold mb-8 text-center">Portfolio Value</h3>
            <div className="bg-secondary/5 rounded-2xl p-8 border border-secondary/10">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-accent">Skills Demonstrated</h4>
                  <ul className="space-y-2 text-secondary/70">
                    <li>• <strong>Chrome Extension Development</strong> with Manifest V3</li>
                    <li>• <strong>JavaScript ES6+</strong> and DOM manipulation</li>
                    <li>• <strong>Browser APIs</strong> integration and management</li>
                    <li>• <strong>UI/UX Design</strong> with responsive layouts</li>
                    <li>• <strong>Third-party library</strong> integration (Prism.js)</li>
                    <li>• <strong>Data persistence</strong> and local storage</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-accent">Professional Impact</h4>
                  <p className="text-secondary/70 mb-4">
                    This project demonstrates <strong>practical problem-solving</strong> for developer productivity, 
                    showcasing understanding of developer workflows and tool creation.
                  </p>
                  <p className="text-secondary/70">
                    Highlights ability to build <strong>production-ready browser extensions</strong> with 
                    comprehensive features and modern web standards compliance.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center"
          >
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/Swapnanilb/SnipVault"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-primary transition-all duration-300"
              >
                View on GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SnipVaultProject;