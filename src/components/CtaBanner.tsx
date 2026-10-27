import { ArrowRight } from 'lucide-react';
import type { NavigateFn } from '@/lib/useRouter';

interface CtaBannerProps {
  navigate: NavigateFn;
  title?: string;
  text?: string;
}

export default function CtaBanner({
  navigate,
  title = 'Ready to plan your next step?',
  text = 'Tell me about your experience and goals, and I will map out the right training path for you.',
}: CtaBannerProps) {
  return (
    <section className="mx-auto max-w-7xl container-px py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 px-6 py-12 sm:px-12 sm:py-16">
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative max-w-2xl">
          <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300">{text}</p>
          <button
            onClick={() => navigate('contact')}
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-accent-soft"
          >
            Get in touch
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
