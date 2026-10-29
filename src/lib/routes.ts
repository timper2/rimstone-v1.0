export type RouteId =
  | 'home'
  | 'sidemount'
  | 'cave'
  | 'technical'
  | 'rebreather'
  | 'demo'
  | 'contact'
  | 'services'
  | 'about'
  | 'notfound';

/** Not in ROUTES, so it stays out of the navbar and sitemap. Prerendered to dist/404.html. */
export const NOT_FOUND_PATH = '/404';

export interface RouteDef {
  id: RouteId;
  path: string;
  label: string;
  short: string;
  /** Sitemap priority (0.0–1.0). The build generates sitemap.xml from this list. */
  priority: number;
}

export const ROUTES: RouteDef[] = [
  // Keep all existing entries unchanged
  { id: 'home', path: '/', label: 'Home', short: 'Home', priority: 1.0 },
  { id: 'sidemount', path: '/sidemount', label: 'Sidemount', short: 'Sidemount', priority: 0.9 },
  { id: 'cave', path: '/cave', label: 'Cave Diving', short: 'Cave', priority: 0.9 },
  { id: 'technical', path: '/technical', label: 'Technical Diving', short: 'Technical', priority: 0.9 },
  { id: 'rebreather', path: '/rebreather', label: 'Rebreather', short: 'CCR', priority: 0.9 },
  { id: 'demo', path: '/tryout', label: 'Demo', short: 'Demo', priority: 0.7 },
  { id: 'services', path: '/services', label: 'Services', short: 'Services', priority: 0.7 },
  { id: 'about', path: '/about', label: 'About', short: 'About', priority: 0.6 },
  { id: 'contact', path: '/contact', label: 'Contact', short: 'Contact', priority: 0.6 },
];

export function pathToRoute(path: string): RouteId {
  const match = ROUTES.find((r) => r.path === path);
  return match ? match.id : 'notfound';
}

export function routeToPath(id: RouteId): string {
  if (id === 'notfound') return NOT_FOUND_PATH;
  const match = ROUTES.find((r) => r.id === id);
  return match ? match.path : '/';
}
