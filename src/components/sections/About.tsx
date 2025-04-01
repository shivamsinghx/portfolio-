
import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-zinc-950">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-purple-400">About Me</h2>
            <p className="text-zinc-400 mb-4">
              I'm a passionate designer and developer with over 8 years of experience creating 
              intuitive and visually striking digital experiences for clients across various industries.
            </p>
            <p className="text-zinc-400 mb-6">
              My approach combines creative design thinking with technical precision, 
              resulting in projects that not only look beautiful but also function flawlessly.
              I believe in minimalism, attention to detail, and creating work that stands out.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div>
                <h3 className="text-xl font-medium mb-3 text-purple-300">Design Skills</h3>
                <ul className="space-y-2 text-zinc-400">
                  <li>UI/UX Design</li>
                  <li>Interactive Prototyping</li>
                  <li>Motion Design</li>
                  <li>Brand Identity</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3 text-purple-300">Development</h3>
                <ul className="space-y-2 text-zinc-400">
                  <li>React & TypeScript</li>
                  <li>Modern CSS & Tailwind</li>
                  <li>Interactive Animations</li>
                  <li>Responsive Web Design</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-zinc-900 border border-purple-900/30 rounded-md overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-zinc-800">
                <p className="text-lg font-medium">Profile Image</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border-2 border-purple-800/50 rounded-md -z-10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
