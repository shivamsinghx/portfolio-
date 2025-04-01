
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { motion, Variants } from "framer-motion";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  
  const variants: Variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
      height: 32,
      width: 32,
      backgroundColor: "white",
      opacity: 0.4,
    },
    text: {
      x: mousePosition.x,
      y: mousePosition.y,
      height: 64,
      width: 64,
      backgroundColor: "white",
      opacity: 0.2,
      mixBlendMode: "difference" as const,
    },
  };

  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <motion.div
        className="custom-cursor hidden md:block"
        variants={variants}
        animate={cursorVariant}
      />
    </>
  );
};

export default Layout;
