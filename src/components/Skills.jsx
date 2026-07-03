import React from 'react';
import { motion } from 'framer-motion';

const categorizedSkills = {
  'Frontend': ['React', 'Next.js', 'Vite', 'TypeScript', 'Tailwind CSS', 'Material UI', 'HTML5', 'CSS3'],
  'Backend': ['Node.js', 'Express', 'Flask', 'Python', 'REST APIs'],
  'Database & Cloud': ['SQLite', 'MongoDB', 'PostgreSQL', 'Vercel', 'Render'],
  'Tools & Methods': ['Git & GitHub', 'Postman', 'Figma', 'Agile/Scrum', 'BI Dashboards'],
};

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
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: 'spring', stiffness: 200, damping: 10 }
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(categorizedSkills).map(([category, skills], idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-background rounded-2xl p-8 border border-white/5 shadow-xl hover:border-primary/30 transition-colors duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-primary rounded-full"></span>
                {category}
              </h3>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="px-4 py-2 bg-surface rounded-lg border border-white/10 text-gray-300 font-medium hover:text-primary hover:border-primary/50 transition-colors cursor-default select-none shadow-sm"
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
