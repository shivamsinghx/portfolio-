
import React from "react";
import { cn } from "@/lib/utils";

interface MarqueeTextProps {
  text: string;
  className?: string;
}

const MarqueeText: React.FC<MarqueeTextProps> = ({ text, className }) => {
  const fullText = Array(10).fill(text).join(" • ");
  
  return (
    <div className={cn("relative w-full overflow-hidden py-6", className)}>
      <div className="track absolute whitespace-nowrap animate-marquee">
        <span className="text-4xl md:text-5xl font-bold opacity-20">{fullText}</span>
      </div>
      <div className="track absolute whitespace-nowrap animate-marquee" style={{ animationDelay: "-18s" }}>
        <span className="text-4xl md:text-5xl font-bold opacity-20">{fullText}</span>
      </div>
    </div>
  );
};

export default MarqueeText;
