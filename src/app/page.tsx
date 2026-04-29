import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { CinematicReveal } from "@/components/sections/CinematicReveal";
import { ArcReactor } from "@/components/sections/ArcReactor";
import { JarvisTerminal } from "@/components/sections/JarvisTerminal";
import { SystemsNominal } from "@/components/sections/SystemsNominal";
import { StarkQuotes } from "@/components/sections/StarkQuotes";
import { StarkLegacy } from "@/components/sections/StarkLegacy";
import { AvengersGrid } from "@/components/sections/AvengersGrid";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ArcReactor />
        <JarvisTerminal />
        <SystemsNominal />
        <StarkQuotes />
        <StarkLegacy />
        <AvengersGrid />
        <CinematicReveal />
      </main>
      <Footer />
    </>
  );
}
