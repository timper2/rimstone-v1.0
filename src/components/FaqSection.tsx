import { ChevronDown } from 'lucide-react';
import { FAQ } from '@/data/faq';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://rimstonediving.com/#faq',
  mainEntity: FAQ.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

export default function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="border-t border-white/10">
      <div className="mx-auto grid max-w-7xl gap-12 container-px py-24 sm:py-32 lg:grid-cols-3">
        <header className="flex flex-col gap-4">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-accent">FAQ</p>
          <h2
            id="faq-heading"
            className="text-balance font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Common questions
          </h2>
          <p className="text-pretty text-sm leading-relaxed text-slate-400">
            Straight answers about locations, course length, prerequisites and booking.
          </p>
        </header>

        <div className="flex flex-col border-t border-white/10 lg:col-span-2">
          {FAQ.map((item) => (
            <details key={item.question} className="group border-b border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-display text-base font-semibold text-white transition-colors hover:text-accent sm:text-lg [&::-webkit-details-marker]:hidden">
                {item.question}
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-slate-500 transition-transform group-open:rotate-180 group-open:text-accent"
                  aria-hidden="true"
                />
              </summary>
              <p className="max-w-2xl pb-6 text-sm leading-relaxed text-slate-300 sm:text-base">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </section>
  );
}
