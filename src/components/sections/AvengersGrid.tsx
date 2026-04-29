"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import Image from "next/image";

const avengers = [
  { id: "PP-01", name: "Potts, Virginia", codename: "Rescue", status: "NOMINAL", role: "CEO, Stark Industries", clearance: "OMEGA", image: "/allies/PP-01.jpg" },
  { id: "JR-02", name: "Rhodes, James", codename: "War Machine", status: "ACTIVE", role: "US Air Force Liaison", clearance: "ALPHA", image: "/allies/JR-02.png" },
  { id: "HH-03", name: "Hogan, Harold", codename: "Forehead of Security", status: "ONLINE", role: "Head of Security", clearance: "BETA", image: "/allies/HH-03.png" },
  { id: "PP-04", name: "Parker, Peter", codename: "Spider-Man", status: "NOMINAL", role: "Stark Intern", clearance: "DELTA", image: "/allies/PP-04.jpg" },
  { id: "SR-05", name: "Rogers, Steven", codename: "Captain America", status: "OFFLINE", role: "Avenger", clearance: "ROGUE", image: "/allies/SR-05.jpg" }
];

export function AvengersGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  return (
    <section 
      id="avengers-grid" 
      ref={containerRef} 
      className="relative h-[300vh] bg-background border-t border-white/5"
    >
      <div className="sticky top-0 flex h-screen w-full flex-col justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10 mb-8 shrink-0 relative z-10">
           <EyebrowBadge>COMMS // ENCRYPTED NETWORK</EyebrowBadge>
           <h2 className="mt-6 font-sans text-4xl font-semibold tracking-tighter text-foreground md:text-6xl max-w-[16ch]">
             Allies &amp; <span className="text-accent">Assets.</span>
           </h2>
        </div>

        <motion.div 
          style={{ x }}
          className="flex gap-6 md:gap-10 px-6 md:px-10 w-max pb-10"
        >
          {avengers.map((avenger) => {
            const isOffline = avenger.status === "OFFLINE";
            return (
              <div 
                key={avenger.id}
                className="group relative h-[450px] w-[320px] shrink-0 overflow-hidden rounded-xl border border-white/10 bg-black transition-all duration-300 hover:border-accent/40 md:h-[500px] md:w-[380px]"
              >
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
                  <Image 
                    src={avenger.image} 
                    alt={avenger.codename} 
                    fill 
                    className={`object-cover object-center ${isOffline ? 'opacity-20 grayscale' : 'opacity-40 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-60'} transition-all duration-500`} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Background Grid & Radar */}
                <div className="absolute inset-0 z-10 opacity-[0.05] transition-opacity duration-500 group-hover:opacity-[0.1]">
                  <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="hexagons" width="24" height="40" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
                        <path d="M12 0L24 7v13l-12 7L0 20V7z" fill="none" stroke="currentColor" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hexagons)" />
                  </svg>
                </div>

                {/* Scanning line animation */}
                <div className="absolute inset-x-0 top-0 z-20 h-px w-full bg-accent/80 opacity-0 shadow-[0_0_20px_rgba(212,162,47,1)] transition-opacity duration-300 group-hover:animate-[scan_2.5s_ease-in-out_infinite] group-hover:opacity-100" />

                <div className="relative z-20 flex h-full flex-col justify-between p-6 md:p-8">
                  {/* Top Header */}
                  <div className="flex items-start justify-between border-b border-white/20 pb-4 backdrop-blur-[2px]">
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent drop-shadow-md">
                        ID: {avenger.id}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-300 drop-shadow-md">
                        CLR: {avenger.clearance}
                      </span>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className={`flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest font-bold ${isOffline ? 'text-red-500' : 'text-emerald-400'}`}>
                        {avenger.status}
                        <span className={`h-2 w-2 rounded-full ${isOffline ? 'bg-red-500' : 'bg-emerald-400 animate-pulse shadow-[0_0_8px_currentColor]'}`} />
                      </div>
                    </div>
                  </div>

                  {/* Middle Graphic - Soundwave / Vital Sign */}
                  <div className="flex flex-1 flex-col items-center justify-center gap-6 py-8">
                    <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-white/10 group-hover:border-accent/40 transition-colors duration-500 bg-black/20 backdrop-blur-sm">
                       <div className={`absolute inset-2 rounded-full border border-dashed ${isOffline ? 'border-red-500/20' : 'border-accent/40 group-hover:animate-[spin_4s_linear_infinite]'}`}></div>
                       <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={`${isOffline ? 'text-zinc-600' : 'text-zinc-300 group-hover:text-accent'} transition-colors duration-300`}>
                         <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                         <circle cx="12" cy="7" r="4"></circle>
                       </svg>
                    </div>

                    <div className="flex items-center gap-[3px] opacity-60 transition-opacity duration-300 group-hover:opacity-100 mix-blend-screen">
                      {[...Array(16)].map((_, i) => {
                        const heights = isOffline 
                          ? [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
                          : [8, 12, 24, 16, 32, 12, 40, 20, 16, 28, 14, 22, 10, 16, 8, 12];
                        return (
                          <div 
                            key={i} 
                            className={`w-1 rounded-full ${isOffline ? 'bg-red-500/60' : 'bg-accent'}`}
                            style={{ 
                              height: `${heights[i]}px`,
                              transition: 'height 0.3s ease'
                            }}
                          />
                        );
                      })}
                    </div>
                  </div>

                  {/* Bottom Info */}
                  <div className="flex flex-col gap-2 pt-5 border-t border-white/20 backdrop-blur-[2px]">
                    <div className="flex justify-between items-end">
                      <div className="flex flex-col gap-1">
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-300 drop-shadow-md">
                          Codename
                        </span>
                        <h3 className="font-sans text-2xl font-bold text-white tracking-tight group-hover:text-accent transition-colors duration-300 drop-shadow-lg">
                          {avenger.codename}
                        </h3>
                      </div>
                      
                      {/* Barcode Graphic */}
                      <div className="flex gap-1 h-6 opacity-50 group-hover:opacity-90 transition-opacity">
                         {[2, 4, 1, 3, 2, 1, 4, 2].map((w, j) => (
                           <div key={j} className="bg-white h-full shadow-[0_0_5px_rgba(255,255,255,0.5)]" style={{ width: `${w}px` }} />
                         ))}
                      </div>
                    </div>
                    <p className="font-sans text-sm text-zinc-300 mt-1 font-medium drop-shadow-md">
                      {avenger.name} &mdash; {avenger.role}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { transform: translateY(-10px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(480px); opacity: 0; }
        }
      `}} />
    </section>
  );
}
