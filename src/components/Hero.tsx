import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const viewResume = () => {
    window.open(`${process.env.PUBLIC_URL}/assets/Resume/Swapnanil Basak's Resume.pdf`, '_blank');
  };
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent-green/10"></div>
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 md:opacity-20" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Hero_img.png)`}}></div>
      
      <div className="container mx-auto px-6 text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold font-poppins mb-4"
        >
          Swapnanil <span className="text-accent">Basak</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-secondary/80 mb-2"
        >
          Developer
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-secondary/60 mb-8 max-w-2xl mx-auto"
        >
          Crafting digital experiences with modern technologies
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button 
            onClick={viewResume}
            className="px-8 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/80 transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
          >
            View Resume
          </button>
          <button 
            onClick={scrollToContact}
            className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-primary transition-all duration-300"
          >
            Contact Me
          </button>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-accent rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-accent rounded-full mt-2"></div>
        </motion.div>
      </div>


    </section>
  );
};

export default Hero;