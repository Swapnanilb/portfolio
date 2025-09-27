import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'JavaScript/TypeScript', level: 90, icon: '⚡' },
    { name: 'React/Next.js', level: 85, icon: '⚛️' },
    { name: 'Node.js/Express', level: 80, icon: '🟢' },
    { name: 'Python/Django', level: 75, icon: '🐍' },
    { name: 'UI/UX Design', level: 30, icon: '🎨' }
  ];

  const softSkills = [
    'Problem Solving', 'Team Collaboration', 'Communication',
    'Project Management', 'Mentoring', 'Agile/Scrum'
  ];

  return (
    <section id="skills" className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-poppins mb-4">My <span className="text-accent">Skills</span></h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-accent">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="flex items-center gap-2 text-secondary font-medium">
                      <span className="text-xl">{skill.icon}</span>
                      {skill.name}
                    </span>
                    <span className="text-accent font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary/10 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-accent to-accent-green h-3 rounded-full relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-accent">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                  className="bg-secondary/5 border border-secondary/10 rounded-lg p-4 text-center hover:bg-accent/10 hover:border-accent/30 transition-all duration-300 cursor-pointer"
                >
                  <span className="text-secondary font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-gradient-to-r from-accent/10 to-accent-green/10 rounded-lg border border-accent/20"
            >
              <h4 className="text-lg font-semibold mb-3 text-accent">Always Learning</h4>
              <p className="text-secondary/80">
                I'm constantly exploring new technologies and methodologies to stay current 
                with industry trends and deliver cutting-edge solutions.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;