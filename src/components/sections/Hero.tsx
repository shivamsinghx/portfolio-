
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      containerRef.current.style.setProperty("--mouse-x", `${x}`);
      containerRef.current.style.setProperty("--mouse-y", `${y}`);
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }
    
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-screen-safe flex items-center justify-center overflow-hidden bg-gradient-to-b from-zinc-950 to-zinc-900"
      style={{
        "--gradient-x": "calc(var(--mouse-x, 0.5) * 100%)",
        "--gradient-y": "calc(var(--mouse-y, 0.5) * 100%)",
      } as React.CSSProperties}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--gradient-x)_var(--gradient-y),rgba(120,120,128,0.15),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight tracking-tight mb-6">
            <span className="block">Creative Designer &</span>
            <span className="block">Digital Developer</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
            Creating delightful digital experiences through thoughtful design and
            cutting-edge development. Let's bring your ideas to life.
          </p>
          <div className="mt-10">
            <a
              href="#work"
              className="inline-flex items-center justify-center text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 rounded-lg px-6 py-3"
            >
              View My Work
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown size={24} className="text-zinc-500" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
