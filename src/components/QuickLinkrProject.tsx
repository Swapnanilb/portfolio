import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const QuickLinkrProject = () => {
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
              Quick<span className="text-accent">Linkr</span>
            </h1>
            <p className="text-xl text-secondary/70 max-w-3xl mx-auto">
              A modern, feature-rich URL shortener built with FastAPI showcasing full-stack development skills, analytics, and enterprise features.
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
                  <h4 className="font-semibold mb-2">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    {['FastAPI', 'SQLAlchemy', 'Pydantic', 'SQLite'].map(tech => (
                      <span key={tech} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm border border-accent/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {['HTML/CSS', 'JavaScript', 'Responsive Design'].map(tech => (
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
                  src={`${process.env.PUBLIC_URL}/assets/Project_Overview/URL_SHORTENER/Single_Url.png`}
                  alt="Single URL Interface"
                  className="w-full rounded-lg mb-4"
                />
                <h4 className="text-xl font-semibold mb-2 text-accent">Single URL Shortening</h4>
                <p className="text-secondary/70">Clean, intuitive interface for shortening individual URLs with custom codes and expiration settings</p>
              </div>

              <div className="bg-secondary/5 rounded-2xl p-6 border border-secondary/10">
                <img 
                  src={`${process.env.PUBLIC_URL}/assets/Project_Overview/URL_SHORTENER/Bulk_Url.png`}
                  alt="Bulk URL Processing"
                  className="w-full rounded-lg mb-4"
                />
                <h4 className="text-xl font-semibold mb-2 text-accent">Bulk URL Processing</h4>
                <p className="text-secondary/70">Efficient bulk processing supporting multiple URLs and CSV file uploads</p>
              </div>

              <div className="bg-secondary/5 rounded-2xl p-6 border border-secondary/10">
                <img 
                  src={`${process.env.PUBLIC_URL}/assets/Project_Overview/URL_SHORTENER/History.png`}
                  alt="URL History"
                  className="w-full rounded-lg mb-4"
                />
                <h4 className="text-xl font-semibold mb-2 text-accent">URL History Management</h4>
                <p className="text-secondary/70">Comprehensive history view with QR codes, statistics, and management options</p>
              </div>

              <div className="bg-secondary/5 rounded-2xl p-6 border border-secondary/10">
                <img 
                  src={`${process.env.PUBLIC_URL}/assets/Project_Overview/URL_SHORTENER/Analytics.png`}
                  alt="Analytics Dashboard"
                  className="w-full rounded-lg mb-4"
                />
                <h4 className="text-xl font-semibold mb-2 text-accent">Analytics Dashboard</h4>
                <p className="text-secondary/70">Advanced analytics with visual charts, performance metrics, and detailed insights</p>
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
                poster={`${process.env.PUBLIC_URL}/assets/Project_Overview/URL_SHORTENER/Single_Url.png`}
              >
                <source src={`${process.env.PUBLIC_URL}/assets/Project_Overview/URL_SHORTENER/Demo_Video.mp4`} type="video/mp4" />
                <source src={`${process.env.PUBLIC_URL}/assets/Project_Overview/URL_SHORTENER/Demo_Video.mkv`} type="video/x-matroska" />
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
                <h4 className="text-xl font-semibold mb-3 text-accent">Technical Excellence</h4>
                <ul className="space-y-2 text-secondary/70">
                  <li>• FastAPI Backend with async support</li>
                  <li>• SQLAlchemy ORM with relationships</li>
                  <li>• Pydantic validation</li>
                  <li>• RESTful API with Swagger UI</li>
                </ul>
              </div>

              <div className="bg-secondary/5 rounded-2xl p-6 border border-secondary/10">
                <h4 className="text-xl font-semibold mb-3 text-accent">Advanced Functionality</h4>
                <ul className="space-y-2 text-secondary/70">
                  <li>• Custom short codes</li>
                  <li>• QR code generation</li>
                  <li>• URL expiration settings</li>
                  <li>• Real-time click analytics</li>
                  <li>• Bulk CSV processing</li>
                </ul>
              </div>

              <div className="bg-secondary/5 rounded-2xl p-6 border border-secondary/10">
                <h4 className="text-xl font-semibold mb-3 text-accent">User Experience</h4>
                <ul className="space-y-2 text-secondary/70">
                  <li>• Responsive design</li>
                  <li>• Interactive charts</li>
                  <li>• Toast notifications</li>
                  <li>• Copy-to-clipboard</li>
                  <li>• Mobile-first approach</li>
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
                    <li>• <strong>Full-stack development</strong> capabilities</li>
                    <li>• <strong>Modern Python</strong> frameworks and best practices</li>
                    <li>• <strong>Database design</strong> and optimization skills</li>
                    <li>• <strong>API development</strong> with comprehensive documentation</li>
                    <li>• <strong>User experience</strong> design and implementation</li>
                    <li>• <strong>Problem-solving</strong> approach to real-world challenges</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-accent">Professional Impact</h4>
                  <p className="text-secondary/70 mb-4">
                    This project demonstrates <strong>production-ready code quality</strong>, modern development practices, 
                    and comprehensive feature implementation suitable for enterprise environments.
                  </p>
                  <p className="text-secondary/70">
                    Showcases ability to build scalable web applications with advanced analytics, 
                    bulk processing capabilities, and intuitive user interfaces.
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
                href="https://github.com/Swapnanilb/QuickLinkr"
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

export default QuickLinkrProject;