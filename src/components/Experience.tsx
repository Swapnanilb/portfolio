import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Led development of scalable web applications using React, Node.js, and AWS. Mentored junior developers and improved team productivity by 40%.',
      achievements: ['Built microservices architecture', 'Reduced load times by 60%', 'Led team of 5 developers']
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations Ltd.',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create pixel-perfect user interfaces.',
      achievements: ['Delivered 15+ projects', 'Improved code quality', 'Implemented CI/CD pipelines']
    },
    {
      title: 'Frontend Developer',
      company: 'StartUp Ventures',
      period: '2019 - 2020',
      description: 'Created responsive web applications and mobile-first designs. Worked closely with UX designers to implement interactive user experiences.',
      achievements: ['Built responsive designs', 'Optimized performance', 'Integrated APIs']
    },
    {
      title: 'Junior Developer Intern',
      company: 'Code Academy',
      period: '2018 - 2019',
      description: 'Learned fundamental programming concepts and contributed to open-source projects. Gained experience in version control and agile development.',
      achievements: ['Completed 10+ projects', 'Learned Git workflow', 'Contributed to open source']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-primary/95">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-poppins mb-4">My <span className="text-accent">Experience</span></h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-start mb-12 last:mb-0"
              >
                <div className="absolute left-6 w-4 h-4 bg-accent rounded-full border-4 border-primary z-10"></div>
                
                <div className="ml-20 bg-secondary/5 backdrop-blur-sm border border-secondary/10 rounded-xl p-6 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 w-full">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-secondary mb-1">{exp.title}</h3>
                      <h4 className="text-accent font-medium">{exp.company}</h4>
                    </div>
                    <span className="text-secondary/60 font-medium mt-2 md:mt-0">{exp.period}</span>
                  </div>
                  
                  <p className="text-secondary/80 mb-4 leading-relaxed">{exp.description}</p>
                  
                  <div className="space-y-2">
                    <h5 className="text-accent font-medium">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-secondary/70 flex items-center">
                          <span className="text-accent mr-2">▸</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;