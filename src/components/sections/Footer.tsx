import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-white/5 bg-background px-6 py-14 md:px-10 md:py-16"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.32em] text-foreground">
              <span
                aria-hidden
                className="inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(212,162,47,0.9)]"
              />
              Stark / Industries
            </div>
            <p className="max-w-[38ch] font-sans text-sm leading-relaxed text-zinc-400">
              &copy; Stark Industries &mdash; 10880 Malibu Point, 90265.
              Registered trademark of the Office of Howard &amp; Anthony E. Stark.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-3 md:grid-cols-3">
            {[
              ["Mark I", "Cave, Afghanistan"],
              ["Mark III", "Monaco Circuit"],
              ["Mark VII", "Stark Tower"],
              ["Mark XLIV", "Hulkbuster"],
              ["Mark L", "Titan"],
              ["Mark LXXXV", "Endgame"],
            ].map(([name, note]) => (
              <a
                key={name}
                href="#"
                className="group flex items-start gap-3"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-white/[0.03] text-zinc-500 transition-colors group-hover:bg-white/[0.08] group-hover:text-accent border border-white/5 group-hover:border-accent/30">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8 2 4 4.5 4 9c0 3 1.5 5.5 3 7l1 4 4-2 4 2 1-4c1.5-1.5 3-4 3-7 0-4.5-4-7-8-7zm0 2c3 0 6 2 6 5s-1.5 4-3 5l-1-2h-4l-1 2c-1.5-1-3-2-3-5s3-5 6-5zM8 9h2v2H8V9zm6 0h2v2h-2V9z"/>
                  </svg>
                </div>
                <div className="flex flex-col gap-0.5 pt-0.5">
                  <span className="font-sans text-[13px] font-medium text-foreground transition-colors group-hover:text-accent">
                    {name}
                    <ArrowUpRight
                      size={11}
                      weight="bold"
                      className="ml-1 inline-block align-baseline opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500">
                    {note}
                  </span>
                </div>
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/5 pt-6 font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500 md:flex-row md:items-center md:justify-between">
          <span>Build 2026.04.21 &nbsp;&middot;&nbsp; Mark LXXXV &nbsp;&middot;&nbsp; J.A.R.V.I.S. Online</span>
          <span>Proof of concept &mdash; fan art, no commercial use</span>
        </div>
      </div>
    </footer>
  );
}
