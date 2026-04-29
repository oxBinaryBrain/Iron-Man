"use client";

import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";

const TIMELINE_EVENTS = [
  { year: "2008", title: "Cave, Afghanistan", desc: "The Mark I is forged. A legacy begins in the dark." },
  { year: "2012", title: "Battle of New York", desc: "Mark VII deploys mid-fall. The Avengers assemble." },
  { year: "2015", title: "Age of Ultron", desc: "Mark XLIV Hulkbuster intercepts. A suit of armor around the world." },
  { year: "2018", title: "Infinity War", desc: "Mark L nanotech suit deploys on Titan. A drop of blood." },
  { year: "2023", title: "Endgame", desc: "Mark LXXXV. I am Iron Man." },
];

export function StarkLegacy() {
  return (
    <section id="legacy" className="relative border-t border-white/5 bg-background px-6 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1000px] flex flex-col gap-20">
        <AnimatedSection className="flex flex-col items-center text-center gap-4">
          <AnimatedItem>
            <EyebrowBadge>ARCHIVE // THE STARK LEGACY</EyebrowBadge>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="font-sans text-3xl font-semibold tracking-tighter text-foreground md:text-5xl">
              From the Cave <br className="md:hidden"/> to the <span className="text-accent">Cosmos.</span>
            </h2>
          </AnimatedItem>
        </AnimatedSection>

        <div className="relative mx-auto w-full max-w-3xl">
          {/* Vertical Line */}
          <div className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent md:left-1/2 md:-ml-[0.5px]" />

          <div className="flex flex-col gap-16 md:gap-24">
            {TIMELINE_EVENTS.map((event, index) => {
              const isEven = index % 2 === 0;
              return (
                <AnimatedSection key={event.year} className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-[27px] h-3 w-3 -translate-x-[5.5px] rounded-full bg-accent shadow-[0_0_12px_rgba(212,162,47,0.8)] md:left-1/2 md:-translate-x-[6.5px]">
                    <div className="absolute inset-0 animate-ping rounded-full bg-accent opacity-40" />
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                    <AnimatedItem className="ml-16 md:ml-0">
                      <div className="flex flex-col gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                          {event.year}
                        </span>
                        <h3 className="font-sans text-xl font-medium text-foreground md:text-2xl">
                          {event.title}
                        </h3>
                        <p className="font-sans text-sm text-zinc-400">
                          {event.desc}
                        </p>
                      </div>
                    </AnimatedItem>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
