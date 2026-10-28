import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.tsx';
import { ROUTES } from '@/lib/routes';
import { getPageMeta } from '@/lib/pageMeta';

export function render(path: string) {
  return renderToString(
    <StrictMode>
      <App initialPath={path} />
    </StrictMode>
  );
}

export const pages = ROUTES.map((r) => ({ path: r.path, ...getPageMeta(r.id) }));
