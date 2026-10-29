import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.tsx';
import { NOT_FOUND_PATH, ROUTES } from '@/lib/routes';
import { getPageMeta } from '@/lib/pageMeta';

export function render(path: string) {
  return renderToString(
    <StrictMode>
      <App initialPath={path} />
    </StrictMode>
  );
}

export const pages = ROUTES.map((r) => ({ path: r.path, priority: r.priority, ...getPageMeta(r.id) }));

export const notFoundPage = { path: NOT_FOUND_PATH, ...getPageMeta('notfound') };
