
import React from "react";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-zinc-950 border-t border-zinc-900 py-12 md:py-20">
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-display font-bold mb-4">Let's Connect</h2>
            <p className="text-zinc-400 max-w-md">
              Have a project in mind or just want to say hello? Feel free to reach out.
            </p>
            <a 
              href="mailto:contact@example.com" 
              className="inline-block mt-6 text-lg hover:text-zinc-300 transition-colors"
            >
              contact@example.com
            </a>
          </div>
          <div className="md:text-right">
            <h3 className="text-xl font-medium mb-4">Follow Me</h3>
            <div className="flex space-x-6 md:justify-end">
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-zinc-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-zinc-500 text-sm hover:text-zinc-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-zinc-500 text-sm hover:text-zinc-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
