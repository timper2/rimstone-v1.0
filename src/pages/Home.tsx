import { useState } from 'react';
import { ArrowRight, Compass, Gauge, LifeBuoy, Waves, Wind } from 'lucide-react';
import { COURSES } from '@/data/courses';
import type { NavigateFn } from '@/lib/useRouter';
import CtaBanner from '@/components/CtaBanner';
import LayoutTabs, { type LayoutId } from '@/components/LayoutTabs';

interface HomeProps {
  navigate: NavigateFn;
}

const APPROACH = [
  {
    icon: Compass,
    title: 'Procedure first',
    text: 'Every skill is drilled until it is calm and automatic, long before it is ever needed.',
  },
  {
    icon: LifeBuoy,
    title: 'Full redundancy',
    text: 'Gas, lights and team protocols are built so a single failure is never a crisis.',
  },
  {
    icon: Gauge,
    title: 'Small teams',
    text: 'Low student ratios mean real water time and detailed, personal feedback.',
  },
];

export default function Home({ navigate }: HomeProps) {
  const [activeLayout, setActiveLayout] = useState<LayoutId>('C');

  return (
    <div className="animate-fade-in">
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <img
          src="/images/heropicture.jpeg"
          alt="Drysuit diver climbing the ladder of a dive boat"
          className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />

        <div className="relative mx-auto w-full max-w-7xl container-px pt-28">
          <div className="flex animate-fade-up flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
              <Wind className="h-3.5 w-3.5" />
              KISS Sidewinder CCR
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-300">
              <Wind className="h-3.5 w-3.5" />
              AP Inspiration CCR
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-300">
              <Wind className="h-3.5 w-3.5" />
              Open Circuit
            </span>
          </div>
          <h1 className="mt-6 max-w-3xl animate-fade-up font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Cave, CCR & Technical Diving Instruction — Fort White, Florida
          </h1>
          <p className="mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-slate-300 sm:text-xl">
            Built one dive at a time.
          </p>
          <div className="mt-9 flex animate-fade-up flex-wrap gap-4">
            <button
              onClick={() => navigate('demo')}
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-accent-soft"
            >
              Book a technical demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => navigate('cave')}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
            >
              Explore courses
            </button>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-900/40">
        <div className="mx-auto max-w-7xl container-px py-12 sm:py-14">
          <div className="max-w-3xl">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-accent">
              About Rimstone
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-300 sm:text-xl">
              Led by Tim, a TDI Technical Instructor and PADI Technical Instructor Trainer, Rimstone delivers comprehensive training across the entire spectrum of open and closed circuit technical diving. Operating out of Fort White, Florida—the epicenter of Cave Country—our programs focus strictly on foundational stability, equipment fluency, and sharp analytical judgment.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-300 sm:text-xl">
              Our training tracks support your entire progression: from your first steps into redundant technical setups and open-circuit decompression diving, through advanced mixed-gas trimix plans, to cave diving and unit-specific CCR transitions on the KISS Sidewinder and AP Inspiration platforms. We train thinking divers to excel in unforgiving environments, because in the end, skill is built one dive at a time.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-900/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 container-px py-10 sm:grid-cols-4">
          {[
            { value: 'OC · KISS · AP', label: 'Three platforms' },
            { value: 'Active', label: 'Still in the water' },
            { value: 'Cave · Trimix', label: 'OC & CCR CERTIFIED' },
            { value: '1:2', label: 'Instructor ratio' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-2xl font-bold text-white">{s.value}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px py-20 sm:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2 md:items-stretch">
          <div className="relative">
            <div className="h-full overflow-hidden rounded-3xl border border-white/10">
              <img
                src="/images/homepagefirstpicture.jpg"
                alt="Diver swimming through a cave passage"
                className="aspect-[4/5] w-full object-cover object-[55%_50%] md:aspect-auto md:h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-white/10 bg-slate-900 p-5 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15 ring-1 ring-accent/40">
                  <Waves className="h-5 w-5 text-accent" />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold text-white">KISS Sidewinder</p>
                  <p className="text-xs text-slate-400">Closed Circuit Configuration</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-accent">
              The diver behind the training
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Active diver. Obsessively prepared instructor.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-300">
              <p>
                Whether you are starting sidemount, pushing into cave, or stepping across to closed-circuit, we build every skill deliberately until it holds up under pressure. Every course is built around deliberate practice and the belief that true skill is built one dive at a time, focusing entirely on true peer-to-peer performance and long-term diving confidence.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
              {APPROACH.map((a) => (
                <div key={a.title} className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
                  <a.icon className="h-5 w-5 text-accent" />
                  <h3 className="mt-3 font-display text-sm font-semibold text-white">{a.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{a.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <LayoutTabs active={activeLayout} onChange={setActiveLayout} />

      <section
        id="classes"
        hidden={activeLayout !== 'A'}
        aria-labelledby="classes-heading"
        className="border-t border-white/10 bg-slate-900/30"
      >
        <div className="mx-auto max-w-7xl container-px py-24 sm:py-32">
          <p className="mb-10 inline-flex border border-white/15 px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
            Layout option A: Visual focus
          </p>
          <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-accent">
                Training paths
              </p>
              <h2
                id="classes-heading"
                className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                Dive classes in Fort White, Florida
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-400">
              Four certification pathways, from your first streamlined sidemount dive to
              closed-circuit cave exploration. Each class has its own detailed page.
            </p>
          </header>

          <ul className="mt-16 grid gap-8 sm:grid-cols-2">
            <li>
              <article
                itemScope
                itemType="https://schema.org/Course"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 transition-colors hover:border-accent/50"
              >
                <img
                  src={COURSES.sidemount.cardImage ?? COURSES.sidemount.heroImage}
                  alt="Sidemount diver in trim with cylinders mounted at the hips"
                  className="h-52 w-full object-cover"
                />
                <div className="flex flex-1 flex-col gap-3 p-8">
                  <h3 itemProp="name" className="font-display text-xl font-bold text-white">
                    Sidemount Diving
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Focus: trim, balance and gas redundancy
                  </p>
                  <p itemProp="description" className="text-sm leading-relaxed text-slate-300">
                    Streamlined, balanced diving with independent side-mounted cylinders, from
                    Sidemount Fundamentals through Cave-Ready Sidemount.
                  </p>
                  <a
                    href="/sidemount"
                    itemProp="url"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('sidemount');
                    }}
                    className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-accent"
                  >
                    Explore sidemount diving classes
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </li>

            <li>
              <article
                itemScope
                itemType="https://schema.org/Course"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 transition-colors hover:border-accent/50"
              >
                <img
                  src={COURSES.cave.heroImage}
                  alt="Cave diver following a guideline through a flooded passage"
                  className="h-52 w-full object-cover"
                />
                <div className="flex flex-1 flex-col gap-3 p-8">
                  <h3 itemProp="name" className="font-display text-xl font-bold text-white">
                    Cave Diving
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Focus: guideline, failure management and conservation
                  </p>
                  <p itemProp="description" className="text-sm leading-relaxed text-slate-300">
                    Disciplined overhead training in North Florida&apos;s springs, progressing from
                    Cavern and Intro to Cave to Full Cave certification.
                  </p>
                  <a
                    href="/cave"
                    itemProp="url"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('cave');
                    }}
                    className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-accent"
                  >
                    Explore cave diving classes
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </li>

            <li>
              <article
                itemScope
                itemType="https://schema.org/Course"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 transition-colors hover:border-accent/50"
              >
                <img
                  src={COURSES.technical.heroImage}
                  alt="Technical diver with decompression stage cylinders"
                  className="h-52 w-full object-cover"
                />
                <div className="flex flex-1 flex-col gap-3 p-8">
                  <h3 itemProp="name" className="font-display text-xl font-bold text-white">
                    Technical Diving
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Focus: decompression, mixed gas and team discipline
                  </p>
                  <p itemProp="description" className="text-sm leading-relaxed text-slate-300">
                    Decompression procedures, gas management and extended-range planning across
                    Nitrox, Trimix and Extended Range certifications.
                  </p>
                  <a
                    href="/technical"
                    itemProp="url"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('technical');
                    }}
                    className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-accent"
                  >
                    Explore technical diving classes
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </li>

            <li>
              <article
                itemScope
                itemType="https://schema.org/Course"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 transition-colors hover:border-accent/50"
              >
                <img
                  src={COURSES.rebreather.heroImage}
                  alt="Closed-circuit rebreather diver underwater"
                  className="h-52 w-full object-cover"
                />
                <div className="flex flex-1 flex-col gap-3 p-8">
                  <h3 itemProp="name" className="font-display text-xl font-bold text-white">
                    Rebreather (CCR) Diving
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Focus: loop control, PO2 monitoring and bailout
                  </p>
                  <p itemProp="description" className="text-sm leading-relaxed text-slate-300">
                    Closed-circuit training on the KISS Sidewinder and AP Inspiration, from CCR Air
                    Diluent through CCR Mixed Gas and CCR Cave.
                  </p>
                  <a
                    href="/rebreather"
                    itemProp="url"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('rebreather');
                    }}
                    className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-accent"
                  >
                    Explore rebreather diving classes
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </li>
          </ul>
        </div>
      </section>

      <section
        id="classes-spec"
        hidden={activeLayout !== 'B'}
        aria-labelledby="classes-spec-heading"
        className="border-t border-white/10 bg-slate-900/30"
      >
        <div className="mx-auto max-w-7xl container-px py-24 sm:py-32">
          <p className="mb-10 inline-flex border border-white/15 px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
            Layout option B: Typographic spec matrix
          </p>
          <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-accent">
                Training paths
              </p>
              <h2
                id="classes-spec-heading"
                className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                Dive classes in Fort White, Florida
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-400">
              Four certification pathways, from your first streamlined sidemount dive to
              closed-circuit cave exploration. Each class has its own detailed page.
            </p>
          </header>

          <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <li>
              <article
                itemScope
                itemType="https://schema.org/Course"
                className="group flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/40 p-5 transition-colors hover:border-accent/50"
              >
                <h3 itemProp="name" className="font-display text-xl font-bold text-white">
                  Sidemount Diving
                </h3>
                <ul itemProp="description" className="flex flex-col gap-2 text-sm leading-relaxed text-slate-300">
                  <li className="flex gap-3 text-left">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                    <p><span className="font-semibold text-white">In-Water Skill:</span> Perfecting stable horizontal trim and precise buoyancy control within a streamlined harness platform.</p>
                  </li>
                  <li className="flex gap-3 text-left">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                    <p><span className="font-semibold text-white">Analytical Focus:</span> Developing clean system fluency and smooth independent tank management before moving into restrictive river and spring environments.</p>
                  </li>
                </ul>
                <a
                  href="/sidemount"
                  itemProp="url"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('sidemount');
                  }}
                  className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-accent"
                >
                  Explore sidemount diving classes
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </article>
            </li>

            <li>
              <article
                itemScope
                itemType="https://schema.org/Course"
                className="group flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/40 p-5 transition-colors hover:border-accent/50"
              >
                <h3 itemProp="name" className="font-display text-xl font-bold text-white">
                  Cave Diving
                </h3>
                <ul itemProp="description" className="flex flex-col gap-2 text-sm leading-relaxed text-slate-300">
                  <li className="flex gap-3 text-left">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                    <p><span className="font-semibold text-white">In-Water Skill:</span> Maintaining immaculate spatial positioning and precise propulsion to protect fragile overhead structures.</p>
                  </li>
                  <li className="flex gap-3 text-left">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                    <p><span className="font-semibold text-white">Analytical Focus:</span> Relying on strict team cross-checks, continuous guideline awareness, and sharp situational judgment inside the unforgiving systems of Florida Cave Country.</p>
                  </li>
                </ul>
                <a
                  href="/cave"
                  itemProp="url"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('cave');
                  }}
                  className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-accent"
                >
                  Explore cave diving classes
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </article>
            </li>

            <li>
              <article
                itemScope
                itemType="https://schema.org/Course"
                className="group flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/40 p-5 transition-colors hover:border-accent/50"
              >
                <h3 itemProp="name" className="font-display text-xl font-bold text-white">
                  Technical Diving
                </h3>
                <ul itemProp="description" className="flex flex-col gap-2 text-sm leading-relaxed text-slate-300">
                  <li className="flex gap-3 text-left">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                    <p><span className="font-semibold text-white">In-Water Skill:</span> Holding an exact depth profile and maintaining total environmental awareness while task-loaded.</p>
                  </li>
                  <li className="flex gap-3 text-left">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                    <p><span className="font-semibold text-white">Analytical Focus:</span> Managing completely redundant equipment platforms and decompression profiles with strict procedural discipline before advancing to deep mixed-gas plans.</p>
                  </li>
                </ul>
                <a
                  href="/technical"
                  itemProp="url"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('technical');
                  }}
                  className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-accent"
                >
                  Explore technical diving classes
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </article>
            </li>

            <li>
              <article
                itemScope
                itemType="https://schema.org/Course"
                className="group flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/40 p-5 transition-colors hover:border-accent/50"
              >
                <h3 itemProp="name" className="font-display text-xl font-bold text-white">
                  Rebreather (CCR) Diving
                </h3>
                <ul itemProp="description" className="flex flex-col gap-2 text-sm leading-relaxed text-slate-300">
                  <li className="flex gap-3 text-left">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                    <p><span className="font-semibold text-white">In-Water Skill:</span> Mastering precise, hands-free depth control without relying on lung volume shifts for buoyancy.</p>
                  </li>
                  <li className="flex gap-3 text-left">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                    <p><span className="font-semibold text-white">Analytical Focus:</span> Developing the methodical habits required to monitor closed-circuit readouts, execute checklists, and make calm diagnostic choices.</p>
                  </li>
                </ul>
                <a
                  href="/rebreather"
                  itemProp="url"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('rebreather');
                  }}
                  className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-accent"
                >
                  Explore rebreather diving classes
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </article>
            </li>
          </ul>
        </div>
      </section>

      <section
        id="classes-core"
        hidden={activeLayout !== 'C'}
        aria-labelledby="classes-core-heading"
        className="border-t border-white/10 bg-slate-900/30"
      >
        <div className="mx-auto max-w-7xl container-px py-24 sm:py-32">
          <p className="mb-10 inline-flex border border-white/15 px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
            Layout option C: Synthesized core authority
          </p>
          <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-accent">
                Training paths
              </p>
              <h2
                id="classes-core-heading"
                className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                Dive classes in Fort White, Florida
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-400">
              Four certification pathways, from your first streamlined sidemount dive to
              closed-circuit cave exploration. Each class has its own detailed page.
            </p>
          </header>

          <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <li>
              <article
                itemScope
                itemType="https://schema.org/Course"
                className="group flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/40 p-5 transition-colors hover:border-accent/50"
              >
                <h3 itemProp="name" className="font-display text-xl font-bold text-white">
                  Sidemount Diving
                </h3>
                <p className="text-left text-sm leading-relaxed text-slate-400">
                  Optimizing the platform for clean profile tracking and system integration from initial setup through multi-tank configurations.
                </p>
                <ul itemProp="description" className="flex flex-col gap-2 text-sm leading-relaxed text-slate-300">
                  <li className="flex gap-3 text-left">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                    <p><span className="font-semibold text-white">In-Water Skill:</span> Perfecting stable horizontal trim and precise buoyancy control while managing side-mounted cylinders.</p>
                  </li>
                  <li className="flex gap-3 text-left">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                    <p><span className="font-semibold text-white">Analytical Focus:</span> Developing clear equipment fluency and smooth independent tank management across deep and complex environments.</p>
                  </li>
                </ul>
                <a
                  href="/sidemount"
                  itemProp="url"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('sidemount');
                  }}
                  className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-accent"
                >
                  Explore sidemount diving classes
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </article>
            </li>

            <li>
              <article
                itemScope
                itemType="https://schema.org/Course"
                className="group flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/40 p-5 transition-colors hover:border-accent/50"
              >
                <h3 itemProp="name" className="font-display text-xl font-bold text-white">
                  Cave Diving
                </h3>
                <p className="text-left text-sm leading-relaxed text-slate-400">
                  Overhead training progressions covering Cavern, Intro to Cave, and Full Cave certification boundaries across premier international cave networks.
                </p>
                <ul itemProp="description" className="flex flex-col gap-2 text-sm leading-relaxed text-slate-300">
                  <li className="flex gap-3 text-left">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                    <p><span className="font-semibold text-white">In-Water Skill:</span> Maintaining immaculate spatial positioning and precise propulsion to protect fragile overhead structures.</p>
                  </li>
                  <li className="flex gap-3 text-left">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                    <p><span className="font-semibold text-white">Analytical Focus:</span> Relying on strict team cross-checks, continuous guideline awareness, and sharp situational judgment with primary training in Florida Cave Country and the Riviera Maya.</p>
                  </li>
                </ul>
                <a
                  href="/cave"
                  itemProp="url"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('cave');
                  }}
                  className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-accent"
                >
                  Explore cave diving classes
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </article>
            </li>

            <li>
              <article
                itemScope
                itemType="https://schema.org/Course"
                className="group flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/40 p-5 transition-colors hover:border-accent/50"
              >
                <h3 itemProp="name" className="font-display text-xl font-bold text-white">
                  Technical Diving
                </h3>
                <p className="text-left text-sm leading-relaxed text-slate-400">
                  Extended-range, technical, and deep helium-based Trimix training tracks designed for managing increased physiological exposure safely.
                </p>
                <ul itemProp="description" className="flex flex-col gap-2 text-sm leading-relaxed text-slate-300">
                  <li className="flex gap-3 text-left">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                    <p><span className="font-semibold text-white">In-Water Skill:</span> Holding an exact depth profile and maintaining total environmental awareness while task-loaded.</p>
                  </li>
                  <li className="flex gap-3 text-left">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                    <p><span className="font-semibold text-white">Analytical Focus:</span> Managing completely redundant equipment platforms and decompression profiles with strict procedural discipline before advancing to deep mixed-gas plans.</p>
                  </li>
                </ul>
                <a
                  href="/technical"
                  itemProp="url"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('technical');
                  }}
                  className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-accent"
                >
                  Explore technical diving classes
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </article>
            </li>

            <li>
              <article
                itemScope
                itemType="https://schema.org/Course"
                className="group flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/40 p-5 transition-colors hover:border-accent/50"
              >
                <h3 itemProp="name" className="font-display text-xl font-bold text-white">
                  Rebreather (CCR) Diving
                </h3>
                <p className="text-left text-sm leading-relaxed text-slate-400">
                  Closed-circuit rebreather course modules focusing on unit-specific transitions, electronics monitoring, and loop management.
                </p>
                <ul itemProp="description" className="flex flex-col gap-2 text-sm leading-relaxed text-slate-300">
                  <li className="flex gap-3 text-left">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                    <p><span className="font-semibold text-white">In-Water Skill:</span> Mastering precise depth control now that your breathing cycle no longer alters your buoyancy.</p>
                  </li>
                  <li className="flex gap-3 text-left">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                    <p><span className="font-semibold text-white">Analytical Focus:</span> Developing the methodical habits required to monitor closed-circuit readouts, execute checklists, and make calm diagnostic choices.</p>
                  </li>
                </ul>
                <a
                  href="/rebreather"
                  itemProp="url"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('rebreather');
                  }}
                  className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-accent"
                >
                  Explore rebreather diving classes
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </article>
            </li>
          </ul>
        </div>
      </section>

      <section id="services" aria-labelledby="services-heading" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl container-px py-24 sm:py-32">
          <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-accent">
                Guiding &amp; services
              </p>
              <h2
                id="services-heading"
                className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                Cave guiding and technical mentoring
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-400">
              Already certified? Dive North Florida&apos;s springs with a guide, or sharpen your
              skills with one-on-one mentorship.
            </p>
          </header>

          <ul className="mt-16 grid gap-8 sm:grid-cols-2">
            <li>
              <article
                itemScope
                itemType="https://schema.org/Service"
                className="group flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/40 p-8 transition-colors hover:border-accent/50"
              >
                <Compass className="h-6 w-6 text-accent" aria-hidden="true" />
                <h3 itemProp="name" className="mt-2 font-display text-xl font-bold text-white">
                  Cave Guiding
                </h3>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Sites: Florida Springs & Riviera Maya Cenotes
                </p>
                <p itemProp="description" className="text-sm leading-relaxed text-slate-300">
                  Guided cave excursions matched to your certification and comfort level, with full
                  logistics coordination, site briefings and gas planning support.
                </p>
                <a
                  href="/services"
                  itemProp="url"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('services');
                  }}
                  className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-accent"
                >
                  View cave guiding services
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </article>
            </li>

            <li>
              <article
                itemScope
                itemType="https://schema.org/Service"
                className="group flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/40 p-8 transition-colors hover:border-accent/50"
              >
                <LifeBuoy className="h-6 w-6 text-accent" aria-hidden="true" />
                <h3 itemProp="name" className="mt-2 font-display text-xl font-bold text-white">
                  Technical Mentoring
                </h3>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Focus: skill mastery and overhead progression
                </p>
                <p itemProp="description" className="text-sm leading-relaxed text-slate-300">
                  One-on-one mentorship with video review, gear configuration tuning and trim
                  workshops for divers progressing in technical configurations.
                </p>
                <a
                  href="/services"
                  itemProp="url"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('services');
                  }}
                  className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-accent"
                >
                  View technical mentoring services
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </article>
            </li>
          </ul>
        </div>
      </section>

      <CtaBanner
        navigate={navigate}
        title="Not sure where to start?"
        text="Book a 1-day technical demo and get hands-on with sidemount, doubles and closed-circuit configurations before you commit to a full course."
      />
    </div>
  );
}
