
import React from "react";
import { motion } from "framer-motion";

const Skills: React.FC = () => {
  const skills = [
    {
      category: "Development",
      items: ["JavaScript", "TypeScript", "React.js", "Next.js", "Node.js", "Express"]
    },
    {
      category: "Design",
      items: ["UI/UX Design", "Figma", "Adobe XD", "CSS/Sass", "Tailwind CSS", "Responsive Design"]
    },
    {
      category: "Other",
      items: ["Git/GitHub", "Testing", "Performance Optimization", "SEO", "Accessibility", "Technical Writing"]
    }
  ];

  return (
    <section id="skills" className="py-24 md:py-32 bg-zinc-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-purple-400">Skills</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            My expertise spans across various technologies and disciplines. Here's what I bring to the table.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="bg-zinc-950 border border-purple-900/30 rounded-lg p-8 hover:border-purple-700/50 transition-all"
            >
              <h3 className="text-2xl font-display font-semibold mb-6 text-purple-300">{skillGroup.category}</h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill, i) => (
                  <li key={i} className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-purple-400 mr-3"></span>
                    <span className="text-zinc-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
