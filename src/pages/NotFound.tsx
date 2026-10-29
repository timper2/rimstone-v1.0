import { ArrowRight, Compass } from 'lucide-react';
import { ROUTES, type RouteId } from '@/lib/routes';
import type { NavigateFn } from '@/lib/useRouter';

const SUGGESTED: RouteId[] = ['sidemount', 'cave', 'technical', 'rebreather', 'contact'];

export default function NotFound({ navigate }: { navigate: NavigateFn }) {
  const links = ROUTES.filter((r) => SUGGESTED.includes(r.id));

  return (
    <section className="container-px mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center gap-8 pb-20 pt-32">
      <div className="flex flex-col gap-4">
        <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-accent">
          <Compass className="h-4 w-4" aria-hidden="true" />
          Error 404
        </span>
        <h1 className="text-balance font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
          {"You've swum past the end of the line."}
        </h1>
        <p className="text-pretty leading-relaxed text-slate-300">
          The page you were looking for doesn&apos;t exist or has moved. Turn the dive and head back to somewhere
          familiar.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => navigate('home')}
          className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 font-semibold text-slate-950 transition-colors hover:bg-accent-soft"
        >
          Back to home
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      <nav aria-label="Popular pages" className="flex flex-col gap-3 border-t border-white/10 pt-6">
        <h2 className="text-sm font-medium uppercase tracking-widest text-slate-400">Popular pages</h2>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((r) => (
            <li key={r.id}>
              <a
                href={r.path}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(r.id);
                }}
                className="text-slate-200 underline-offset-4 transition-colors hover:text-accent hover:underline"
              >
                {r.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
