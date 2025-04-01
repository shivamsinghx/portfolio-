
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const categories = ["All", "Web Design", "Development", "Branding"];
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Modern E-commerce Platform",
      category: "Web Design",
      image: "",
      description: "A sleek, modern e-commerce platform design with focus on user experience and conversion optimization."
    },
    {
      id: 2,
      title: "Brand Identity System",
      category: "Branding",
      image: "",
      description: "Complete brand identity system including logo design, color palette, typography, and brand guidelines."
    },
    {
      id: 3,
      title: "Interactive Dashboard",
      category: "Development",
      image: "",
      description: "Fully functional interactive dashboard with real-time data visualization and user-friendly interface."
    },
    {
      id: 4,
      title: "Mobile App Design",
      category: "Web Design",
      image: "",
      description: "Intuitive and engaging mobile app design for fitness tracking and workout planning."
    },
    {
      id: 5,
      title: "Corporate Website Redesign",
      category: "Development",
      image: "",
      description: "Complete redevelopment of corporate website with focus on performance, accessibility, and modern design."
    },
    {
      id: 6,
      title: "Product Branding",
      category: "Branding",
      image: "",
      description: "Comprehensive product branding for a new consumer electronics line."
    },
  ];
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 md:py-32 bg-zinc-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-purple-400">Projects</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Explore my recent projects spanning web design, development, and branding.
            Each project represents my commitment to excellence and innovation.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm transition-colors",
                  activeCategory === category
                    ? "bg-purple-300 text-zinc-900"
                    : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: project.id * 0.1 }}
              className="group"
            >
              <div className="bg-zinc-800 border border-purple-900/30 rounded-lg overflow-hidden">
                <div className="aspect-[4/3] bg-zinc-700 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-zinc-600">
                    <p className="font-medium">Project Image</p>
                  </div>
                  <div className="absolute inset-0 bg-purple-900/80 opacity-0 group-hover:opacity-70 transition-opacity flex items-center justify-center">
                    <span className="text-white font-medium px-4 py-2 border border-white/30 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      View Project
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-display font-medium text-lg mb-1">{project.title}</h3>
                      <p className="text-zinc-500 text-sm">{project.category}</p>
                    </div>
                    <div className="bg-purple-800/50 rounded-full w-8 h-8 flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-300">
                      <span className="text-lg leading-none font-medium text-purple-200">+</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
