import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'Full-Stack Web Development (React, TypeScript, JavaScript, HTML5, CSS3)',
  'Backend Development (Python, Django, Flask, Node.js, Express)',
  'Database Design (PostgreSQL, MySQL, SQLite)',
  'REST APIs & System Integration',
  'Authentication & Role-Based Access Control',
  'Dashboard & Reporting Development',
  'Workflow Automation & Business Systems',
  'Responsive UI/UX Design',
  'Git, GitHub, Docker, CI/CD, Linux',
  'Cloud Deployment',
  'AI Integration & Automation',
  'Agile Development & Technical Documentation'
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3 }
  }
};

function Skills() {
  return (
    <section id="skills" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Technical Arsenal</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-background rounded-xl p-5 border border-white/5 hover:border-primary/50 transition-colors shadow-sm flex items-start h-full"
            >
              <div className="w-2 h-2 rounded-full bg-primary mt-1.5 mr-3 flex-shrink-0"></div>
              <span className="text-gray-300 font-medium text-sm leading-relaxed">{skill}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
