import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Beauty Parlor App',
    description: 'A full-stack web application for managing beauty parlor services, stylists, and customer appointments featuring JWT auth, role-based access, and M-Pesa payments.',
    image: '/Beauty palour.jpg',
    icon: 'https://www.google.com/s2/favicons?domain=beauty-parlor-app-ztgj.vercel.app&sz=128',
    github: 'https://github.com/Ka-few/Beauty-parlor-app',
    demo: 'https://beauty-parlor-app-ztgj.vercel.app',
    tags: ['React', 'Flask', 'Vite', 'SQLite']
  },
  {
    title: 'Digital Bull Semen Catalog',
    description: 'A comprehensive digital platform connecting dairy farmers with top-tier genetics, certified veterinary professionals, and agricultural semen suppliers featuring geospatial logistics.',
    image: '/bull-catalog.png',
    icon: 'https://www.google.com/s2/favicons?domain=digital-bull-catalog-amber.vercel.app&sz=128',
    github: 'https://github.com/Ka-few/Bull-Semen-Catalog',
    demo: 'https://digital-bull-catalog-amber.vercel.app/',
    tags: ['React', 'Node.js', 'Express', 'Leaflet']
  },
  {
    title: 'Rental Property BI Dashboard',
    description: 'A modern, interactive Business Intelligence dashboard for rental property portfolio managers to analyze revenue trends, occupancy rates, and forecasting.',
    image: '/mama-mboga.png',
    icon: 'https://cdn-icons-png.flaticon.com/128/1822/1822092.png',
    github: 'https://github.com/Ka-few', 
    demo: '#', 
    tags: ['Next.js 16', 'TypeScript', 'Tailwind', 'Recharts']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="group relative bg-surface rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-colors duration-300 shadow-xl flex flex-col"
            >
              <div className="relative h-48 overflow-hidden bg-white/5 shrink-0">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300 z-10 mix-blend-overlay pointer-events-none"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-background border border-white/10 flex items-center justify-center overflow-hidden shrink-0">
                    <img src={project.icon} alt={`${project.title} icon`} className="w-6 h-6 object-contain" />
                  </div>
                  <h3 className="text-xl font-bold text-white leading-tight">{project.title}</h3>
                </div>
                
                <p className="text-gray-400 text-sm mb-6 line-clamp-4 leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    <FaGithub size={18} /> Code
                  </a>
                  {project.demo !== '#' && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary hover:text-emerald-400 transition-colors"
                    >
                      <FaExternalLinkAlt size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
