"use client";

import { useEffect, useRef, useState } from "react";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";

const terminalLines = [
  "> INITIATING BOOT SEQUENCE...",
  "> VERIFYING PILOT IDENTITY...",
  "> IDENTITY CONFIRMED: STARK, ANTHONY E.",
  "> ARC REACTOR CALIBRATION: NOMINAL",
  "> REPULSOR SYSTEMS: ONLINE",
  "> NANOTECH HOUSING: 100%",
  "> AWAITING COMMAND..."
];

export function JarvisTerminal() {
  const [lines, setLines] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let currentLine = 0;
        const interval = setInterval(() => {
          if (currentLine < terminalLines.length) {
            setLines(prev => {
              if (prev.length < terminalLines.length) {
                return [...prev, terminalLines[currentLine]];
              }
              return prev;
            });
            currentLine++;
          } else {
            clearInterval(interval);
          }
        }, 300);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="jarvis-terminal" className="relative border-t border-white/5 bg-background px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto flex max-w-[1000px] flex-col gap-12" ref={containerRef}>
        <AnimatedSection className="flex flex-col items-start gap-4">
          <AnimatedItem>
            <EyebrowBadge>J.A.R.V.I.S. // TERMINAL LINK</EyebrowBadge>
          </AnimatedItem>
        </AnimatedSection>
        
        <div className="relative w-full rounded-md border border-white/10 bg-black/50 p-6 md:p-10 shadow-[inset_0_0_20px_rgba(212,162,47,0.05)] backdrop-blur-sm overflow-hidden min-h-[300px]">
           <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20"></div>
           
           <div className="relative z-10 flex flex-col gap-4 font-mono text-sm md:text-base text-accent tracking-widest">
             {lines.map((line, idx) => (
                <div key={idx} style={{ opacity: 0, animation: "fadeIn 0.3s ease-out forwards" }}>
                  {line}
                </div>
             ))}
             {lines.length === terminalLines.length && (
                <div className="animate-pulse opacity-70">_</div>
             )}
           </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </section>
  );
}
