import { ArrowRight, Clock, Layers, Package, Sunrise, Sunset, Waves, Wind, Gauge } from 'lucide-react';
import type { NavigateFn } from '@/lib/useRouter';
import CtaBanner from '@/components/CtaBanner';

interface TryOutProps {
  navigate: NavigateFn;
}

const CONFIGS = [
  {
    icon: Layers,
    title: 'Sidemount',
    text: 'Feel the balance and freedom of independent side-mounted cylinders and dial in your trim.',
  },
  {
    icon: Package,
    title: 'Backmount doubles',
    text: 'Experience a manifolded twinset, valve reach and the stability of the classic tech platform.',
  },
];

const CCR_UNITS = [
  {
    icon: Wind,
    title: 'KISS Sidewinder',
    tag: 'mCCR',
    text: 'A sidemount closed-circuit rebreather — feel bubble-free diving with the flexibility of sidemount.',
  },
  {
    icon: Gauge,
    title: 'AP Inspiration',
    tag: 'eCCR',
    text: 'An electronic closed-circuit rebreather — experience the backmount stability of a full-featured CCR.',
  },
];

const SCHEDULE = [
  {
    icon: Sunrise,
    time: 'Morning',
    title: 'Briefing & land drills',
    text: 'We cover goals, walk through each configuration on land and rig the gear together so nothing feels unfamiliar in the water.',
  },
  {
    icon: Waves,
    time: 'Midday',
    title: 'In-water sessions',
    text: 'Confined and shallow open-water time trying each platform, focusing on trim, buoyancy and how each system handles.',
  },
  {
    icon: Sunset,
    time: 'Afternoon',
    title: 'Debrief & planning',
    text: 'We review video where possible, talk through what suited you and map a realistic path toward your certification goals.',
  },
];

export default function TryOut({ navigate }: TryOutProps) {
  return (
    <div className="animate-fade-in">
      <section className="relative flex min-h-[70vh] items-end overflow-hidden">
        <img
          src="https://images.pexels.com/photos/35541060/pexels-photo-35541060.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Scuba gear prepared for a diving session"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
        <div className="relative mx-auto w-full max-w-7xl container-px pb-16 pt-32">
          <div className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
            <Clock className="h-3.5 w-3.5" />
            One full day
          </div>
          <h1 className="mt-5 max-w-3xl animate-fade-up font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            1-Day Technical Try-Out
          </h1>
          <p className="mt-5 max-w-2xl animate-fade-up text-lg leading-relaxed text-slate-300">
            Hands-on time with sidemount, backmount doubles and closed-circuit rebreathers, all in a
            single guided day. The best way to feel what technical diving is really like before
            committing to a full course.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Try before you commit
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-300">
              <p>
                Choosing a technical path is a big step, and every configuration feels different in
                the water. This day exists so you can experience them side by side, with expert
                guidance, and make an informed decision about where to invest your training.
              </p>
              <p>
                There is no exam and no pressure. You will spend real time in each setup, ask every
                question you have and leave with a clear picture of what suits your body, your goals
                and the diving you want to do.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-accent">
              Good to know
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-slate-300">
              <li>
                <span className="block font-semibold text-white">Who it is for</span>
                Certified divers curious about sidemount, technical or rebreather diving.
              </li>
              <li>
                <span className="block font-semibold text-white">Prerequisite</span>
                Open Water certification and comfort in the water. No prior tech experience needed.
              </li>
              <li>
                <span className="block font-semibold text-white">Gear</span>
                All specialist configurations are provided; bring your own mask and comfort items.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/30">
        <div className="mx-auto max-w-7xl container-px py-16 sm:py-20">
          <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Find the setup that fits
          </h2>
          <p className="mt-3 max-w-2xl text-base text-slate-400">
            The day is shaped around your goals. Try all three platforms or focus on the ones most
            relevant to the diving you want to do.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {CONFIGS.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 transition-colors hover:border-accent/40"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15 ring-1 ring-accent/40">
                  <c.icon className="h-5 w-5 text-accent" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{c.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/60 p-6 transition-colors hover:border-accent/40">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15 ring-1 ring-accent/40">
                <Wind className="h-5 w-5 text-accent" />
              </span>
              <h3 className="font-display text-lg font-semibold text-white">Closed-circuit rebreathers</h3>
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">
              Experience breathing on a closed loop and feel what bubble-free diving is like.
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {CCR_UNITS.map((u) => (
                <div
                  key={u.title}
                  className="rounded-xl border border-white/10 bg-slate-900/50 p-5"
                >
                  <div className="flex items-center gap-2">
                    <u.icon className="h-4 w-4 text-accent" />
                    <h4 className="font-display text-base font-semibold text-white">{u.title}</h4>
                    <span className="ml-auto rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-semibold text-accent ring-1 ring-accent/40">
                      {u.tag}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{u.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px py-16 sm:py-20">
        <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
          How the day flows
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {SCHEDULE.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl border border-white/10 bg-slate-900/40 p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-accent/15 ring-1 ring-accent/40">
                  <s.icon className="h-5 w-5 text-accent" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-accent/80">
                  {s.time}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">
                {i + 1}. {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px pb-4">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 p-8 sm:p-12">
          <img
            src="https://images.pexels.com/photos/13022664/pexels-photo-13022664.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Diving tanks ready on the dock"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/80" />
          <div className="relative max-w-xl">
            <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Bring your curiosity, I will bring the gear.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-200">
              Spaces are kept deliberately small so the day stays personal. Reach out with your
              certification level and preferred dates and I will confirm availability.
            </p>
            <button
              onClick={() => navigate('contact')}
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-accent-soft"
            >
              Reserve your try-out day
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </section>

      <CtaBanner
        navigate={navigate}
        title="Questions before you book?"
        text="Tell me a little about your experience and what you are hoping to get out of the day, and I will help you plan."
      />
    </div>
  );
}
