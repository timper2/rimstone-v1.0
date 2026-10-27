import type { KeyboardEvent } from 'react';

export type LayoutId = 'A' | 'B' | 'C';

const TABS: { id: LayoutId; panelId: string }[] = [
  { id: 'A', panelId: 'classes' },
  { id: 'B', panelId: 'classes-spec' },
  { id: 'C', panelId: 'classes-core' },
];

interface LayoutTabsProps {
  active: LayoutId;
  onChange: (id: LayoutId) => void;
}

export default function LayoutTabs({ active, onChange }: LayoutTabsProps) {
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    event.preventDefault();
    const index = TABS.findIndex((tab) => tab.id === active);
    const step = event.key === 'ArrowRight' ? 1 : -1;
    const next = TABS[(index + step + TABS.length) % TABS.length];
    onChange(next.id);
    document.getElementById(`layout-tab-${next.id}`)?.focus();
  };

  return (
    <div className="border-t border-white/10 bg-slate-900/30">
      <div className="mx-auto max-w-7xl container-px pt-10">
        <div
          role="tablist"
          aria-label="Class card layout"
          onKeyDown={handleKeyDown}
          className="inline-flex flex-wrap border border-white/15"
        >
          {TABS.map((tab) => {
            const selected = tab.id === active;
            return (
              <button
                key={tab.id}
                id={`layout-tab-${tab.id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={tab.panelId}
                tabIndex={selected ? 0 : -1}
                onClick={() => onChange(tab.id)}
                className={`border-white/15 px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent [&:not(:first-child)]:border-l ${
                  selected ? 'bg-accent text-slate-950' : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {tab.id === 'A' && 'Layout Option A'}
                {tab.id === 'B' && 'Layout Option B'}
                {tab.id === 'C' && 'Layout Option C'}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
