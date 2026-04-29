"use client";

import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-transparent">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-8 md:py-5">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.32em] text-foreground"
        >
          <span className="relative flex h-4 w-4 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-20"></span>
            <svg width="16" height="16" viewBox="0 0 24 24" className="animate-[spin_4s_linear_infinite] text-accent">
              <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="opacity-80" />
              <circle cx="12" cy="12" r="4" fill="currentColor" className="opacity-90" />
              <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-30" />
            </svg>
            <span className="absolute h-2 w-2 rounded-full bg-accent blur-[4px]"></span>
          </span>
          Stark / Industries
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#systems"
            className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-400 transition-colors hover:text-foreground"
          >
            Systems
          </a>
          <a
            href="#footer"
            className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-400 transition-colors hover:text-foreground"
          >
            Archive
          </a>
        </nav>

        <a
          href="#systems"
          className="group inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-foreground backdrop-blur-md transition-all duration-200 hover:bg-white/[0.1] active:translate-y-[1px]"
        >
          Engage
          <ArrowUpRight
            size={14}
            weight="bold"
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </header>
  );
}
