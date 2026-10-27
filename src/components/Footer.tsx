import { Clock3, Mail, MapPin, Phone, Waves } from 'lucide-react';
import type { RouteId } from '@/lib/routes';
import type { NavigateFn } from '@/lib/useRouter';

interface FooterProps {
  navigate: NavigateFn;
}

export default function Footer({ navigate }: FooterProps) {
  const courseLinks: { label: string; route: RouteId }[] = [
    { label: 'Sidemount', route: 'sidemount' },
    { label: 'Cave', route: 'cave' },
    { label: 'Technical', route: 'technical' },
    { label: 'CCR', route: 'rebreather' },
    { label: 'Demo', route: 'demo' },
  ];
  const exploreLinks: { label: string; route: RouteId }[] = [
    { label: 'Services', route: 'services' },
    { label: 'About', route: 'about' },
    { label: 'Contact', route: 'contact' },
  ];

  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl container-px py-14">
        <div className="grid gap-10 md:grid-cols-6">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 text-white">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/15 ring-1 ring-accent/40">
                <Waves className="h-5 w-5 text-accent" strokeWidth={2} />
              </span>
              <span className="font-display text-lg font-bold tracking-tight">Rimstone Technical Diving</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Operating out of Fort White, Florida—the epicenter of Cave Country. Training thinking divers to excel in unforgiving environments.
            </p>
          </div>

          <div className="grid gap-10 md:col-span-2 md:grid-cols-2">
            <div>
              <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-slate-500">
                Courses
              </h4>
              <ul className="mt-4 space-y-2.5">
                {courseLinks.map((link) => (
                  <li key={link.route}>
                    <button
                      onClick={() => navigate(link.route)}
                      className="text-left text-sm text-slate-300 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-slate-500">
                Explore
              </h4>
              <ul className="mt-4 space-y-2.5">
                {exploreLinks.map((link) => (
                  <li key={link.route}>
                    <button
                      onClick={() => navigate(link.route)}
                      className="text-left text-sm text-slate-300 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-slate-500">
              Hours
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <Clock3 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                <span>
                  <span className="block">Mon - Fri</span>
                  <span className="text-slate-400">9:00 - 5:00</span>
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock3 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                <span>
                  <span className="block">Sat - Sun</span>
                  <span className="text-slate-400">Closed</span>
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-slate-500">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:dive@rimstonediving.com" className="hover:text-accent">
                  dive@rimstonediving.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-accent" />
                <span>+1 (206) 227-9715 (Call / Text / WhatsApp)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Fort White, Florida</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Rimstone Technical Diving. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
