import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const experiences = [
  {
    title: 'Freelance Web Developer',
    company: 'Self-employed',
    period: 'Jan 2023 – Present',
    location: 'Remote',
    description: 'Developed custom web applications using React, Node.js, and MongoDB. Worked closely with clients to deliver responsive, user-friendly websites and dashboards.',
  },
  {
    title: 'IT Sales Specialist',
    company: 'TechPlus Solutions',
    period: 'May 2021 – Dec 2022',
    location: 'Nakuru, Kenya',
    description: 'Provided technical support and product guidance to clients. Contributed to a 20% increase in client retention by delivering tailored tech solutions.',
  },
  {
    title: 'Technical Support Intern',
    company: 'JKUAT IT Department',
    period: 'Jan 2020 – Apr 2021',
    location: 'Nairobi, Kenya',
    description: 'Assisted in network maintenance, hardware troubleshooting, and user support. Gained hands-on experience in system admin and ticket resolution.',
  },
];

function Experience() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-surface text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:bg-primary group-hover:text-white transition-colors duration-300 z-10">
                <FaBriefcase size={16} />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-surface p-6 rounded-2xl border border-white/5 shadow-xl group-hover:border-primary/30 transition-colors duration-300">
                <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                <div className="text-primary font-medium mb-3">{exp.company}</div>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1.5">
                    <FaCalendarAlt />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FaMapMarkerAlt />
                    {exp.location}
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed text-sm">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
