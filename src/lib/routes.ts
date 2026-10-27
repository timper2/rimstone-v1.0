export type RouteId =
  | 'home'
  | 'sidemount'
  | 'cave'
  | 'technical'
  | 'rebreather'
  | 'demo'
  | 'contact'
  | 'services'
  | 'about';

export interface RouteDef {
  id: RouteId;
  path: string;
  label: string;
  short: string;
}

export const ROUTES: RouteDef[] = [
  // Keep all existing entries unchanged
  { id: 'home', path: '/', label: 'Home', short: 'Home' },
  { id: 'sidemount', path: '/sidemount', label: 'Sidemount', short: 'Sidemount' },
  { id: 'cave', path: '/cave', label: 'Cave Diving', short: 'Cave' },
  { id: 'technical', path: '/technical', label: 'Technical Diving', short: 'Technical' },
  { id: 'rebreather', path: '/rebreather', label: 'Rebreather', short: 'CCR' },
  { id: 'demo', path: '/tryout', label: 'Demo', short: 'Demo' },
  { id: 'services', path: '/services', label: 'Services', short: 'Services' },
  { id: 'about', path: '/about', label: 'About', short: 'About' },
  { id: 'contact', path: '/contact', label: 'Contact', short: 'Contact' },
];

export function pathToRoute(path: string): RouteId {
  const match = ROUTES.find((r) => r.path === path);
  return match ? match.id : 'home';
}

export function routeToPath(id: RouteId): string {
  const match = ROUTES.find((r) => r.id === id);
  return match ? match.path : '/';
}
