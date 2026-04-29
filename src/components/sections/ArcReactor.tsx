"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";

export function ArcReactor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.05, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} id="arc-reactor" className="relative flex min-h-[120vh] items-center justify-center overflow-hidden border-t border-white/5 bg-background py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,162,47,0.08)_0%,transparent_50%)]" />

      <div className="relative flex w-full max-w-6xl flex-col items-center justify-center gap-16 px-6 md:gap-24">
        <motion.div style={{ opacity }} className="flex flex-col items-center gap-4 text-center z-10">
          <EyebrowBadge>HEART OF IRON // DIAGNOSTIC</EyebrowBadge>
          <h2 className="font-sans text-3xl font-semibold tracking-tighter text-foreground md:text-5xl">
            Vibranium Core <span className="text-accent">Active.</span>
          </h2>
        </motion.div>

        <div className="relative flex aspect-square w-full max-w-[300px] items-center justify-center md:max-w-[500px]">
          {/* Blueprint Labels */}
          <motion.div
            style={{ opacity }}
            className="absolute -left-12 top-1/4 hidden flex-col items-end gap-1 text-right md:flex z-10"
          >
            <div className="h-px w-24 bg-accent/40" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mt-1">Palladium Core</span>
            <span className="font-sans text-xs text-zinc-400">Replaced with Vibranium Element</span>
          </motion.div>

          <motion.div
            style={{ opacity }}
            className="absolute -right-12 bottom-1/4 hidden flex-col items-start gap-1 md:flex z-10"
          >
            <div className="h-px w-24 bg-accent/40" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mt-1">Energy Output</span>
            <span className="font-sans text-xs text-zinc-400">3.4 GJ/s sustained generation</span>
          </motion.div>

          <motion.div
            style={{ opacity }}
            className="absolute -top-12 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 md:flex z-10"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Magnetic Field</span>
            <span className="font-sans text-xs text-zinc-400">Containment secure</span>
            <div className="h-12 w-px bg-accent/40 mt-1" />
          </motion.div>

          {/* SVG Arc Reactor */}
          <motion.div style={{ scale }} className="relative h-full w-full">
            {/* Outer Ring */}
            <motion.svg viewBox="0 0 200 200" style={{ rotate: rotate1 }} className="absolute inset-0 h-full w-full text-accent/30">
              <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
              <circle cx="100" cy="100" r="85" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="30 10 5 10" />
              <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            </motion.svg>

            {/* Inner Ring */}
            <motion.svg viewBox="0 0 200 200" style={{ rotate: rotate2 }} className="absolute inset-0 h-full w-full text-accent/60">
              <circle cx="100" cy="100" r="65" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="40 15 10 15" />
              <circle cx="100" cy="100" r="58" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 5" />
              <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
            </motion.svg>

            {/* Core Pulse */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-32 w-32 animate-[pulse_2s_ease-in-out_infinite] rounded-full bg-accent/20 blur-xl" />
              <div className="absolute h-16 w-16 rounded-full bg-accent shadow-[0_0_50px_rgba(212,162,47,0.8)]" />
              <div className="absolute h-8 w-8 rounded-full bg-white blur-[2px]" />
            </div>

            {/* Blueprint Grid Overlay */}
            <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full opacity-[0.03]">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="200" height="200" fill="url(#grid)" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
