import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl transform translate-x-4 translate-y-4"></div>
              <img 
                src="/Francis.JPG" 
                alt="Francis Njoroge" 
                className="relative rounded-2xl w-72 h-72 md:w-96 md:h-96 object-cover shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full md:w-1/2 space-y-6 text-gray-300 text-lg leading-relaxed"
          >
            <p>
              I’m <strong className="text-white">Francis Njoroge</strong>, a passionate software developer focused on crafting
              intuitive, reliable, and user-friendly digital solutions. I love solving real-world
              challenges using clean, efficient code and creative thinking.
            </p>
            <p>
              With strong experience in both frontend and backend technologies, I’ve worked on
              various impactful projects in tech support, freelancing, and agritech.
            </p>

            <div className="bg-background/50 p-6 rounded-xl border border-white/5 space-y-4">
              <div>
                <h3 className="text-white font-semibold flex items-center gap-2">
                  <span>🔧</span> Tech Stack:
                </h3>
                <p className="text-sm mt-1">JavaScript, React, JSON Server, Tailwind CSS, Node.js, Git</p>
              </div>
              <div>
                <h3 className="text-white font-semibold flex items-center gap-2">
                  <span>🎯</span> Interests:
                </h3>
                <p className="text-sm mt-1">Tech for Agriculture, Clean UI/UX Design, Empowering Farmers Digitally</p>
              </div>
            </div>

            <a 
              href="/CV.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-4 px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors shadow-lg hover:shadow-primary/25"
            >
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
