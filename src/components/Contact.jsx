import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-surface p-8 md:p-12 rounded-3xl shadow-2xl border border-white/5"
        >
          <form
            action="https://formspree.io/f/xqkrzyyd"
            method="POST"
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                required 
                className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                placeholder="How can I help you?"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-primary hover:bg-emerald-600 text-white font-bold py-4 rounded-lg transition-colors shadow-lg hover:shadow-primary/30"
            >
              Send Message
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-white/10 flex justify-center gap-8">
            <a href="mailto:njorovista@gmail.com" className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110">
              <FaEnvelope size={28} />
            </a>
            <a href="tel:+254724015861" className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110">
              <FaPhone size={28} />
            </a>
            <a href="https://www.linkedin.com/in/francis-njoroge-31698181/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0A66C2] transition-colors transform hover:scale-110">
              <FaLinkedin size={28} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
