import { MapPin, Waves } from 'lucide-react';

export default function About() {
  return (
    <div className="animate-fade-in">
      <section className="mx-auto max-w-4xl container-px pb-20 pt-36 sm:pb-24 sm:pt-44">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-accent">
          About Rimstone
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Built one dive at a time.
        </h1>
        <div className="mt-10 grid gap-10 lg:grid-cols-[auto_1fr] lg:items-start">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40">
            <img
              src="/images/abouttim.jpeg"
              alt="Tim diving at the waterline in a cave"
              width="1408"
              height="1750"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="block h-80 w-full object-cover"
            />
            <div className="flex items-center gap-3 p-5 text-accent">
              <Waves className="h-6 w-6" />
              <div>
              <p className="font-display text-sm font-semibold text-white">Tim</p>
              <p className="text-xs text-slate-400">TDI Technical Instructor // PADI Technical Instructor Trainer</p>
              </div>
            </div>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-slate-300 sm:text-lg">
            <p>
              Rimstone is led by Tim, a TDI Technical Instructor and PADI Technical Instructor Trainer based in Fort White, Florida—in the heart of Cave Country
            </p>
            <p>
              Tim teaches a comprehensive range of technical and cave diving tracks, spanning open-circuit decompression configurations, sidemount platforms, and closed-circuit rebreather (CCR) systems, with a particular focus on the KISS Sidewinder and AP Inspiration architectures. Instruction covers your entire progression from foundational double-tank stability and advanced nitrox gas planning to full cave diving and deep mixed-gas profiles.
            </p>
            <p>
              In the overhead world, a rimstone is a delicate, naturally occurring stone dam formed over thousands of years by slow, deliberate mineral deposits. It represents the exact baseline of our instructional philosophy: elite stability, structural resilience, and high-level technical capability are never rushed—they are built cleanly, piece by piece, one dive at a time.
            </p>
          </div>
        </div>
        <div className="mt-12 flex items-center gap-2 text-sm text-slate-400">
          <MapPin className="h-4 w-4 text-accent" />
          Fort White, Florida
        </div>
      </section>
    </div>
  );
}
