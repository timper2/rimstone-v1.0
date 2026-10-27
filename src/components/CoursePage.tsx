import { ArrowRight, Check, ShieldCheck } from 'lucide-react';
import type { CourseContent } from '@/data/courses';
import type { NavigateFn } from '@/lib/useRouter';
import CtaBanner from '@/components/CtaBanner';

interface CoursePageProps {
  content: CourseContent;
  navigate: NavigateFn;
}

export default function CoursePage({ content, navigate }: CoursePageProps) {

  return (
    <div className="animate-fade-in">
      <section
  className={`relative flex min-h-[70vh] items-end overflow-hidden bg-slate-950 ${
  content.heroLockAspect ? 'w-full md:aspect-[2/1] md:max-h-[85vh] md:min-h-0' : ''
  }`}
  >
        <img
          src={content.heroImage}
          alt={content.title}
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            objectPosition: content.heroImagePosition,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
        <div className="relative mx-auto w-full max-w-7xl container-px pb-16 pt-32">
          <p className="animate-fade-up font-display text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            {content.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl animate-fade-up font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {content.title}
          </h1>
          <p className="mt-5 max-w-2xl animate-fade-up text-lg leading-relaxed text-slate-300">
            {content.subtitle}
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px container-px py-0 sm:grid-cols-4">
          {content.stats.map((s) => (
            <div key={s.label} className="px-2 py-8 text-center sm:px-4">
              <p className="font-display text-lg font-bold text-white sm:text-xl">{s.value}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              About this training
            </h2>
            <div className="mt-6 space-y-5">
              {content.intro.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-slate-300">
                  {p}
                </p>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
            <div className="flex items-center gap-2 text-accent">
              <ShieldCheck className="h-5 w-5" />
              <h3 className="font-display text-sm font-semibold uppercase tracking-widest">
                Prerequisites
              </h3>
            </div>
            <ul className="mt-5 space-y-3">
              {content.prerequisites.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-900/30">
        <div className="mx-auto max-w-7xl container-px py-16 sm:py-20">
          <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
            What you will build
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {content.pillars.map((p, i) => (
              <div
                key={p.title}
                className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 transition-colors hover:border-accent/40"
              >
                <span className="font-display text-sm font-bold text-accent">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px py-16 sm:py-20">
        <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {content.levelsHeading ? (
            content.levelsHeading
          ) : content.module?.heading ? (
            content.module.heading
          ) : content.module ? (
            <>Training Track</>
          ) : (
            <>Course progression</>
          )}
        </h2>
        <p className="mt-3 max-w-2xl text-base text-slate-400">
          {content.levelsIntro ? (
            content.levelsIntro
          ) : content.module?.intro ? (
            content.module.intro
          ) : content.module ? (
            <>
              A singular, comprehensive module designed to take you from initial harness
              configuration to complete technical system fluency.
            </>
          ) : (
            <>
              Training is delivered in stages, so you can progress at a pace that keeps every skill
              solid before moving deeper.
            </>
          )}
        </p>
        {content.module && (
          <div className="mt-10 rounded-2xl border border-white/10 bg-slate-900/40 p-6 text-left sm:p-10">
            <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
              {content.module.title}
            </h3>
            {(content.module.timeframe || content.module.subLabel) && (
              <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-accent/80">
                {content.module.timeframe ?? content.module.subLabel}
              </p>
            )}
            {content.module.description && (
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300">
                {content.module.description}
              </p>
            )}
            <div className="mt-8 grid gap-10 border-t border-white/10 pt-8 md:grid-cols-2 md:gap-12">
              {content.module.phases.map((phase) => (
                <div key={phase.name}>
                  <h4 className="font-display text-lg font-semibold text-white">{phase.name}</h4>
                  {phase.description && (
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">{phase.description}</p>
                  )}
                  <ul className="mt-5 flex flex-col gap-3">
                    {phase.points.map((pt) => {
                      const splitAt = pt.indexOf(': ');
                      const label = splitAt > 0 && splitAt < 20 ? pt.slice(0, splitAt + 1) : null;
                      const body = label ? pt.slice(splitAt + 2) : pt;
                      return (
                        <li key={pt} className="flex items-start gap-2 text-sm leading-relaxed text-slate-400">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                          <span>
                            {label && <span className="font-semibold text-white">{label} </span>}
                            {body}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
        {content.levelsCompact ? (
          <div className="mt-8 flex flex-col gap-4">
            {content.levels.map((level) => (
              <div
                key={level.name}
                className="rounded-2xl border border-white/10 bg-slate-900/40 px-6 py-5 text-left transition-colors hover:border-accent/40 sm:px-8"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                  <h3 className="font-display text-lg font-semibold text-white">{level.name}</h3>
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent/80">
                    {level.meta}
                  </p>
                </div>
                {level.description && (
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{level.description}</p>
                )}
                <ul className="mt-3 flex flex-col gap-2">
                  {level.points.map((pt) => {
                    const splitAt = pt.indexOf(': ');
                    const label = splitAt > 0 && splitAt < 30 ? pt.slice(0, splitAt + 1) : null;
                    const body = label ? pt.slice(splitAt + 2) : pt;
                    return (
                      <li key={pt} className="flex items-start gap-2 text-sm leading-relaxed text-slate-400">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                        <span>
                          {label && <span className="font-semibold text-white">{label} </span>}
                          {body}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        ) : (
        <div className="mt-10 space-y-5">
          {content.levels.map((level, i) => (
            <div
              key={level.name}
              className={`group grid rounded-2xl border border-white/10 bg-slate-900/40 transition-colors hover:border-accent/40 sm:grid-cols-[auto_1fr] ${
                level.description ? 'gap-6 p-6 sm:p-8' : 'gap-4 px-6 py-5 sm:gap-6 sm:px-8 sm:py-6'
              }`}
            >
              <div className="flex items-start gap-4 sm:w-64">
                <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-full bg-accent/15 font-display text-base font-bold text-accent ring-1 ring-accent/40">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">{level.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-widest text-accent/80">
                    {level.meta}
                  </p>
                  {level.agency && (
                    <p className="mt-1 text-xs leading-relaxed text-slate-500">{level.agency}</p>
                  )}
                </div>
              </div>
              <div>
                {level.description && (
                  <p className="text-sm leading-relaxed text-slate-300">{level.description}</p>
                )}
                <ul className={`grid gap-2 sm:grid-cols-2 ${level.description ? 'mt-4' : ''}`}>
                  {level.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-slate-400">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        )}
      </section>

      <section className="mx-auto max-w-7xl container-px pb-4">
        <div className="grid gap-6 sm:grid-cols-2">
          {content.gallery.map((g) => (
            <figure
              key={g.src}
              className="group relative overflow-hidden rounded-2xl border border-white/10"
            >
              <img
                src={g.src}
                alt={g.caption}
                className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
              <figcaption className="absolute bottom-4 left-5 flex items-center gap-2 text-sm font-medium text-white">
                <ArrowRight className="h-4 w-4 text-accent" />
                {g.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CtaBanner navigate={navigate} />
    </div>
  );
}
