/**
 * Intrinsic pixel sizes of the images in public/images. Setting width and height
 * on <img> lets the browser reserve space before the photo loads, so the page
 * doesn't jump around. Update this when adding or replacing a photo.
 */
const IMAGE_SIZES: Record<string, { width: number; height: number }> = {
  '/images/CCRHeader.webp': { width: 960, height: 540 },
  '/images/CCRJVC.webp': { width: 886, height: 886 },
  '/images/CCRPlanning.webp': { width: 1102, height: 1452 },
  '/images/CCRTim.webp': { width: 1024, height: 768 },
  '/images/SMharnesssetup.webp': { width: 768, height: 1024 },
  '/images/abouttim.webp': { width: 795, height: 988 },
  '/images/cavedivers.webp': { width: 1600, height: 1066 },
  '/images/cavediversentrance.webp': { width: 1600, height: 1066 },
  '/images/doubles.webp': { width: 1024, height: 768 },
  '/images/heropicture.webp': { width: 706, height: 960 },
  '/images/homepagefirstpicture.webp': { width: 1600, height: 900 },
  '/images/sidemount-enhanced.webp': { width: 1600, height: 1400 },
  '/images/sidemountJVC.webp': { width: 1600, height: 1065 },
};

// Remote Pexels photos are requested at w=940&h=650.
export const PEXELS_SIZE = { width: 940, height: 650 };

export function imageSize(src: string) {
  return IMAGE_SIZES[src] ?? PEXELS_SIZE;
}

/** Props for the main photo at the top of a page: load it first. */
export const ABOVE_THE_FOLD = {
  loading: 'eager',
  decoding: 'async',
  // React 18 doesn't know the camelCase prop yet, so pass the HTML attribute directly.
  ...{ fetchpriority: 'high' },
} as const;

/** Props for photos further down: wait until the visitor scrolls near them. */
export const BELOW_THE_FOLD = {
  loading: 'lazy',
  decoding: 'async',
} as const;
