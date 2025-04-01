
import React from "react";
import { Github, Mail, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-zinc-950 border-t border-purple-900/30 py-12 md:py-20">
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-display font-bold mb-4">Let's Connect</h2>
            <p className="text-zinc-400 max-w-md">
              Have a project in mind or just want to say hello? Feel free to reach out.
            </p>
            <a 
              href="mailto:contact@example.com" 
              className="inline-block mt-6 text-lg hover:text-purple-300 transition-colors"
            >
              contact@example.com
            </a>
          </div>
          <div className="md:text-right flex md:justify-end items-end">
            <div className="flex space-x-6">
              <a href="#" className="text-zinc-400 hover:text-purple-300 transition-colors">
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-zinc-400 hover:text-purple-300 transition-colors">
                <Mail size={24} />
                <span className="sr-only">Email</span>
              </a>
              <a href="#" className="text-zinc-400 hover:text-purple-300 transition-colors">
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
