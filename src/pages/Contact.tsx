import { useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
} from 'lucide-react';

const INTERESTS = [
  'Sidemount',
  'Cave Diving',
  'Technical Diving',
  'Rebreather / KISS Sidewinder',
  '1-Day Technical Try-Out',
  'Cave Guiding',
  'Technical Mentoring',
  'Not sure yet',
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'submitting') return;
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    formData.append("_captcha", "false");
    formData.append("_template", "box");
    formData.append("_subject", "New Contact Submission from Rimstone Technical Diving");

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full rounded-lg border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent';

  return (
    <div className="animate-fade-in">
      <section className="relative flex min-h-[45vh] items-end overflow-hidden">
        <img
          src="https://pexels.com"
          alt="Diver silhouette in sunlit water"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/40" />
        <div className="relative mx-auto w-full max-w-7xl container-px pb-14 pt-32">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            Get in touch
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let's plan your dive.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Whether you have a specific course in mind or just want to talk through your options,
            send a message and I will get back to you personally.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-white">
              Send a message
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Fields marked with an asterisk are required.
            </p>

            {status === 'success' ? (
              <div className="mt-8 flex items-start gap-3 rounded-2xl border border-accent/30 bg-accent/10 p-6">
                <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-accent" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">Message sent</h3>
                  <p className="mt-1 text-sm text-slate-300">
                    Thanks for reaching out. I will reply to you by email as soon as I can. In the
                    meantime, feel free to complete the diver medical form.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-sm font-semibold text-accent hover:text-accent-soft"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form 
                onSubmit={submit} 
                action={["https:", "", "formsubmit.co", "ajax", "rehash.cation1q@icloud.com"].join("/")}
                method="POST"
                className="mt-8 space-y-5"
              >
                <input type="text" name="_honey" style={{ display: 'none' }} />

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">
                      Name *
                    </label>
                    <input
                      name="name"
                      className={inputClass}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      className={inputClass}
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">Phone</label>
                    <input
                      name="phone"
                      className={inputClass}
                      placeholder="Optional"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">
                      Interested in
                    </label>
                    <select
                      name="course_interest"
                      className={inputClass}
                    >
                      <option value="">Select a course</option>
                      {INTERESTS.map((i) => (
                        <option key={i} value={i}>
                          {i}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-300">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    className={`${inputClass} min-h-[140px] resize-y`}
                    placeholder="Tell me about your experience, certifications and what you would like to achieve."
                    required
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                    <AlertCircle className="h-4 w-4 flex-shrink-0" />
                    Something went wrong sending your message. Please try again in a moment.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-accent-soft disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send message'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
