
import React from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Testimonials from "@/components/sections/Testimonials";
import MarqueeText from "@/components/ui/MarqueeText";

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <MarqueeText text="CREATIVE DESIGN • DEVELOPMENT • INNOVATION" className="bg-zinc-950" />
      <About />
      <Work />
      <Testimonials />
    </Layout>
  );
};

export default Index;
