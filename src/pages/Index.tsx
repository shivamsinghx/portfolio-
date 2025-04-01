
import React from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import MarqueeText from "@/components/ui/MarqueeText";

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <MarqueeText text="DESIGN • DEVELOPMENT • INNOVATION • CREATIVITY" className="bg-zinc-950 text-purple-200" />
      <About />
      <Projects />
      <Skills />
    </Layout>
  );
};

export default Index;
