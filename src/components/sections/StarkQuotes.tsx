"use client";

import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";

const quotes = [
  { text: "Sometimes you gotta run before you can walk.", film: "Iron Man" },
  { text: "Part of the journey is the end.", film: "Avengers: Endgame" },
  { text: "I love you 3000.", film: "Avengers: Endgame" }
];

export function StarkQuotes() {
  return (
    <section id="quotes" className="relative border-t border-white/5 bg-background px-6 py-24 md:px-10 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,162,47,0.05)_0%,transparent_70%)]" />
      <div className="mx-auto flex max-w-[1000px] flex-col gap-16 relative z-10">
        <AnimatedSection className="flex flex-col items-center text-center gap-4">
          <AnimatedItem>
            <EyebrowBadge>ARCHIVE // AUDIO LOGS</EyebrowBadge>
          </AnimatedItem>
        </AnimatedSection>
        
        <div className="flex flex-col gap-20 md:gap-32 py-10">
          {quotes.map((quote, idx) => (
             <AnimatedSection key={idx} className="flex flex-col items-center text-center gap-6">
                <AnimatedItem>
                   <blockquote className="font-sans text-3xl font-semibold leading-[1.1] tracking-tighter text-foreground md:text-5xl max-w-[20ch]">
                      &ldquo;{quote.text}&rdquo;
                   </blockquote>
                </AnimatedItem>
                <AnimatedItem>
                   <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                      {quote.film}
                   </span>
                </AnimatedItem>
             </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
