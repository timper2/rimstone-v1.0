import { ArrowRight, Compass, LifeBuoy } from 'lucide-react';

type ServicesProps = {
  navigate: (page: 'contact') => void;
};

const services = [
  {
    icon: Compass,
    title: 'Cave Guiding',
    items: [
      'Custom overhead guiding and logistics tailored precisely to your configuration and comfort level across North Florida spring networks and the deep cenote systems of the Riviera Maya.',
      'Full logistics coordination, site briefing, environmental gas planning, and international trip support.',
    ],
  },
  {
    icon: LifeBuoy,
    title: 'Mentoring',
    items: [
      'One-on-one technical diving mentorship focusing on skill mastery, platform configuration tuning, and trim workshops for divers progressing across any technical configuration.',
      'Personalized video review, propulsion technique adjustment, and custom gear optimization tailored to your exact anatomy.',
    ],
  },
];

export default function Services({ navigate }: ServicesProps) {
  return (
    <div className="animate-fade-in">
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <img
          src="https://images.pexels.com/photos/10519070/pexels-photo-10519070.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Professional diving services"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />

        <div className="relative mx-auto w-full max-w-7xl container-px pt-28">
          <div className="flex animate-fade-up flex-col gap-6">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-accent">
              Professional Services
            </p>

            <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Guidance for every depth.
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
              Whether you need a custom environmental guide or precision hardware mentorship, I offer tailored services for technical and cave divers pursuing excellence across North Florida&apos;s spring networks, the deep cenotes of the Riviera Maya, and specialized open-water configurations.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px py-20 sm:py-24">
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group rounded-2xl border border-white/10 bg-slate-900/40 p-8 transition-all duration-300 hover:border-accent/50 hover:bg-slate-900/60"
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/15 ring-1 ring-accent/40 transition-all group-hover:bg-accent/25">
                    <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                  </div>

                  <div className="flex-1">
                    <h2 className="font-display text-2xl font-bold tracking-tight text-white">
                      {service.title}
                    </h2>

                    <ul className="mt-6 space-y-4">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-relaxed text-slate-300"
                        >
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-900/30">
        <div className="mx-auto max-w-7xl container-px py-20 sm:py-24">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-accent">
                Next Steps
              </p>

              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to dive deeper?
              </h2>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-slate-400">
              Contact me to discuss your goals and book your service. Let&apos;s
              design an experience tailored to your needs.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => navigate('contact')}
              className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 p-8 text-left transition-all hover:border-accent/50 hover:bg-slate-900/60"
            >
              <h3 className="font-display text-xl font-bold text-white">
                Get in touch
              </h3>

              <p className="mt-2 text-sm text-slate-300">
                Discuss your goals and customize your service.
              </p>

              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                Send an email
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </button>

            <button
              type="button"
              onClick={() => navigate('contact')}
              className="group relative w-full overflow-hidden rounded-2xl border border-accent/30 bg-accent/10 p-8 text-left transition-all hover:bg-accent/20"
            >
              <h3 className="font-display text-xl font-bold text-white">
                Explore your options
              </h3>

              <p className="mt-2 text-sm text-slate-200">
                Start a conversation about your diving goals.
              </p>

              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                Contact me
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
