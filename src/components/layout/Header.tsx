
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Github, Mail, Linkedin } from "lucide-react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showName, setShowName] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowName(window.scrollY > window.innerHeight * 0.7);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const navItems = [
    { title: "About", href: "#about" },
    { title: "Projects", href: "#projects" },
    { title: "Skills", href: "#skills" },
    { title: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300 py-4 px-6 md:px-12",
        scrolled ? "bg-zinc-950/90 backdrop-blur-sm border-b border-purple-800/30" : "bg-transparent"
      )}
    >
      <div className="flex items-center justify-between">
        <a
          href="/"
          className="font-display text-xl font-bold tracking-tighter flex items-center gap-2"
        >
          {showName ? (
            <span className="animate-nav-name-slide">Shivam Singh</span>
          ) : (
            "Portfolio"
          )}
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-zinc-300 hover:text-purple-300 transition-colors duration-200"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-zinc-200 hover:text-white"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 bg-zinc-950 z-40 md:hidden">
          <div className="flex flex-col h-full justify-center items-center">
            <ul className="space-y-8 text-center">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-2xl font-display text-zinc-200 hover:text-purple-300 transition-colors duration-200"
                    onClick={() => {
                      toggleMenu();
                    }}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
