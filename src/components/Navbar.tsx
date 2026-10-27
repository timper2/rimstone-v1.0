import { useEffect, useState } from 'react';
import { Menu, Waves, X } from 'lucide-react';
import { ROUTES, type RouteId } from '@/lib/routes';
import type { NavigateFn } from '@/lib/useRouter';

interface NavbarProps {
  route: RouteId;
  navigate: NavigateFn;
}

export default function Navbar({ route, navigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: RouteId) => {
    setOpen(false);
    navigate(id);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between container-px py-4">
        <button
          onClick={() => go('home')}
          className="flex items-center gap-2.5 text-white transition-opacity hover:opacity-80"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/15 ring-1 ring-accent/40">
            <Waves className="h-5 w-5 text-accent" strokeWidth={2} />
          </span>
          <span className="flex flex-col items-start font-display tracking-tight">
            <span className="text-lg font-bold">Rimstone Technical Diving</span>
            <span className="text-[0.65rem] font-medium tracking-wide text-accent">Fort White, Florida // The Heart of Florida&apos;s Cave Country</span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {ROUTES.map((r) => (
            <button
              key={r.id}
              onClick={() => go(r.id)}
              className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                route === r.id ? 'text-white' : 'text-slate-300 hover:text-white'
              }`}
            >
              {r.short}
              {route === r.id && (
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent" />
              )}
            </button>
          ))}
          <button
            onClick={() => go('contact')}
            className="ml-3 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-accent-soft"
          >
            Book a course
          </button>
        </nav>

        <button
          className="grid h-10 w-10 place-items-center rounded-md text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col container-px py-3">
            {ROUTES.map((r) => (
              <button
                key={r.id}
                onClick={() => go(r.id)}
                className={`rounded-md px-3 py-3 text-left text-base font-medium transition-colors ${
                  route === r.id ? 'bg-white/5 text-accent' : 'text-slate-200 hover:bg-white/5'
                }`}
              >
                {r.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
