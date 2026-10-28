import { routeToPath, type RouteId } from '@/lib/routes';

const SITE_URL = 'https://rimstonediving.com';
const SITE_NAME = 'Rimstone Technical Diving';

const PAGE_META: Record<RouteId, { title: string; description: string }> = {
  home: {
    title: `${SITE_NAME} · Built one dive at a time.`,
    description:
      'Sidemount, cave, technical and CCR rebreather diving courses in Fort White, Florida, taught by a TDI Technical Instructor and PADI Technical Instructor Trainer.',
  },
  sidemount: {
    title: `Sidemount Diving Courses · ${SITE_NAME}`,
    description:
      'Sidemount diving courses in Fort White, Florida: trim, balance and gas redundancy, from Sidemount Fundamentals through Cave-Ready Sidemount.',
  },
  cave: {
    title: `Cave Diving Courses in North Florida · ${SITE_NAME}`,
    description:
      'Cavern, Intro to Cave and Full Cave diver training in the North Florida springs, focused on guideline skills, failure management and conservation.',
  },
  technical: {
    title: `Technical Diving Courses · ${SITE_NAME}`,
    description:
      'PADI Tec and TDI technical diving courses in Florida: decompression procedures, gas management and Trimix.',
  },
  rebreather: {
    title: `CCR Rebreather Courses · ${SITE_NAME}`,
    description:
      'Closed-circuit rebreather training on the KISS Sidewinder and AP Inspiration, from CCR Air Diluent through Mixed Gas and CCR Cave.',
  },
  demo: {
    title: `Try a Rebreather or Sidemount · ${SITE_NAME}`,
    description: 'Introductory try-dive experiences for divers curious about sidemount or rebreather diving in Fort White, Florida.',
  },
  services: {
    title: `Cave Guiding & Mentoring · ${SITE_NAME}`,
    description: 'Cave guiding in the North Florida springs and one-on-one mentoring for certified technical and cave divers.',
  },
  about: {
    title: `About · ${SITE_NAME}`,
    description:
      'Rimstone is led by Tim Perrault, a TDI Technical Instructor and PADI Technical Instructor Trainer based in Fort White, Florida.',
  },
  contact: {
    title: `Contact · ${SITE_NAME}`,
    description: 'Book a sidemount, cave, technical or rebreather course. Email dive@rimstonediving.com or call/text +1 (206) 227-9715.',
  },
};

function setMeta(selector: string, attr: 'content' | 'href', value: string) {
  document.querySelector(selector)?.setAttribute(attr, value);
}

export function getPageMeta(route: RouteId) {
  return { ...PAGE_META[route], url: `${SITE_URL}${routeToPath(route)}` };
}

export function applyPageMeta(route: RouteId) {
  const { title, description, url } = getPageMeta(route);

  document.title = title;
  setMeta('meta[name="description"]', 'content', description);
  setMeta('link[rel="canonical"]', 'href', url);
  setMeta('meta[property="og:title"]', 'content', title);
  setMeta('meta[property="og:description"]', 'content', description);
  setMeta('meta[property="og:url"]', 'content', url);
  setMeta('meta[name="twitter:title"]', 'content', title);
  setMeta('meta[name="twitter:description"]', 'content', description);
}
