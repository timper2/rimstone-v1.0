import { readFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// The key must match public/<key>.txt, which search engines fetch to verify ownership.
const KEY = '33c376b633b6e9e20289f68f316e599f';

// Only notify search engines for production deploys; previews and local builds would
// submit URLs that aren't live yet.
if (process.env.VERCEL_ENV !== 'production') {
  console.log('indexnow: skipped (not a production build)');
  process.exit(0);
}

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sitemap = await readFile(join(root, 'dist', 'sitemap.xml'), 'utf8');
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

if (!urlList.length) {
  console.log('indexnow: skipped (no URLs in sitemap)');
  process.exit(0);
}

const host = new URL(urlList[0]).host;

// Never fail the build because a search engine is slow or down.
try {
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host,
      key: KEY,
      keyLocation: `https://${host}/${KEY}.txt`,
      urlList,
    }),
    signal: AbortSignal.timeout(10000),
  });
  console.log(`indexnow: submitted ${urlList.length} URLs for ${host} -> HTTP ${res.status}`);
} catch (error) {
  console.warn(`indexnow: submission failed (${error.message}); build continues`);
}
