import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const experiences = [
  {
    title: 'Full Stack Software Developer | Business Systems & Digital Solutions',
    company: '', // Handled dynamically if empty
    period: 'July 2024 – Present',
    location: 'Nairobi',
    description: [
      'Designed and developed secure web applications that automate business processes and improve operational efficiency.',
      'Built over 20 REST APIs supporting reporting workflows, user management, and data exchange between systems.',
      'Developed role-based authentication, secure backend services, and business logic for enterprise applications.',
      'Designed relational databases for efficient storage, reporting, and retrieval of operational data.',
      'Performed functional testing, debugging, and feature validation to ensure software quality before deployment.',
      'Produced technical documentation, API documentation, and deployment guides to support maintenance and user adoption.',
      'Collaborated with stakeholders to translate business requirements into practical software features and user workflows.',
      'Improved application performance, usability, and maintainability through continuous testing and optimization.',
      'Managed deployment using Docker, GitHub Actions, Linux, and cloud hosting environments.'
    ],
  },
  {
    title: 'Sales & IT Support Officer',
    company: 'Datacomm Systems & Solutions',
    period: 'Nov 2016 – Apr 2024',
    location: 'Nakuru',
    description: [
      'Installed, configured, and maintained business software and network infrastructure.',
      'Assisted in the implementation and support of business applications, ensuring reliable system performance and user satisfaction.',
      'Supported deployment and troubleshooting of enterprise systems for multiple clients.',
      'Worked directly with users to identify operational needs and recommend technology solutions.',
      'Maintained system documentation and provided user training.',
      'Assisted with software implementation, upgrades, and technical support.'
    ],
  }
];

function Experience() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col md:flex-row items-start justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-surface text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:bg-primary group-hover:text-white transition-colors duration-300 z-10 md:mt-6">
                <FaBriefcase size={16} />
              </div>
              
              <div className="w-[calc(100%-3rem)] ml-auto md:ml-0 md:w-[calc(50%-2.5rem)] bg-surface p-6 rounded-2xl border border-white/5 shadow-xl group-hover:border-primary/30 transition-colors duration-300">
                <h3 className="text-xl font-bold text-white mb-1 leading-snug">{exp.title}</h3>
                {exp.company && <div className="text-primary font-medium mb-3">{exp.company}</div>}
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-5 mt-2">
                  <div className="flex items-center gap-1.5">
                    <FaCalendarAlt className="text-primary" />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FaMapMarkerAlt className="text-primary" />
                    {exp.location}
                  </div>
                </div>
                
                <ul className="text-gray-300 leading-relaxed text-sm list-disc pl-4 space-y-2 marker:text-primary">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
