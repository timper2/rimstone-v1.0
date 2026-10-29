import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = join(root, 'dist');
const serverDir = join(root, 'dist-server');

const { render, pages, notFoundPage } = await import(pathToFileURL(join(serverDir, 'entry-server.js')).href);
const template = await readFile(join(distDir, 'index.html'), 'utf8');

// vercel.json is read before the build runs, so it can't import the routes list.
// Fail loudly instead of silently serving a page without its prerendered HTML.
const vercelConfig = JSON.parse(await readFile(join(root, 'vercel.json'), 'utf8'));
const pageRoute = vercelConfig.routes.find((r) => r.dest === '/$1/index.html');
const pagePattern = new RegExp(`^${pageRoute.src}$`);
const unlisted = pages.filter((p) => p.path !== '/' && !pagePattern.test(p.path)).map((p) => p.path.slice(1));
if (unlisted.length) {
  console.error(
    `\nThese pages are in src/lib/routes.ts but missing from vercel.json: ${unlisted.join(', ')}\n` +
      `Add them to the list in vercel.json -> routes -> "${pageRoute.src}"\n`
  );
  process.exit(1);
}

const escapeHtml = (value) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function setAttr(html, pattern, attr, value) {
  return html.replace(pattern, (tag) => tag.replace(new RegExp(`${attr}="[^"]*"`), `${attr}="${escapeHtml(value)}"`));
}

function renderPage(page) {
  let html = template.replace('<div id="root"></div>', `<div id="root">${render(page.path)}</div>`);
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(page.title)}</title>`);
  html = setAttr(html, /<meta name="description"[^>]*>/, 'content', page.description);
  html = setAttr(html, /<link rel="canonical"[^>]*>/, 'href', page.url);
  html = setAttr(html, /<meta property="og:title"[^>]*>/, 'content', page.title);
  html = setAttr(html, /<meta property="og:description"[^>]*>/, 'content', page.description);
  html = setAttr(html, /<meta property="og:url"[^>]*>/, 'content', page.url);
  html = setAttr(html, /<meta name="twitter:title"[^>]*>/, 'content', page.title);
  html = setAttr(html, /<meta name="twitter:description"[^>]*>/, 'content', page.description);
  return html;
}

for (const page of pages) {
  const html = renderPage(page);
  const outFile = page.path === '/' ? join(distDir, 'index.html') : join(distDir, page.path.slice(1), 'index.html');
  await mkdir(dirname(outFile), { recursive: true });
  await writeFile(outFile, html);
  console.log(`prerendered ${page.path}`);
}

// Served with a real 404 status by vercel.json. No canonical, and noindex, so it never competes with real pages.
const notFoundHtml = renderPage(notFoundPage)
  .replace(/\s*<link rel="canonical"[^>]*>/, '')
  .replace('</head>', '    <meta name="robots" content="noindex" />\n  </head>');
await writeFile(join(distDir, '404.html'), notFoundHtml);
console.log('prerendered 404.html');

const lastmod = new Date().toISOString().slice(0, 10);
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...pages.map(
    (p) => `  <url><loc>${p.url}</loc><lastmod>${lastmod}</lastmod><priority>${p.priority.toFixed(1)}</priority></url>`
  ),
  '</urlset>',
  '',
].join('\n');
await writeFile(join(distDir, 'sitemap.xml'), sitemap);
console.log(`wrote sitemap.xml (${pages.length} pages)`);

await rm(serverDir, { recursive: true, force: true });
