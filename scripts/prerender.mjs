import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = join(root, 'dist');
const serverDir = join(root, 'dist-server');

const { render, pages } = await import(pathToFileURL(join(serverDir, 'entry-server.js')).href);
const template = await readFile(join(distDir, 'index.html'), 'utf8');

const escapeHtml = (value) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function setAttr(html, pattern, attr, value) {
  return html.replace(pattern, (tag) => tag.replace(new RegExp(`${attr}="[^"]*"`), `${attr}="${escapeHtml(value)}"`));
}

for (const page of pages) {
  let html = template.replace('<div id="root"></div>', `<div id="root">${render(page.path)}</div>`);
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(page.title)}</title>`);
  html = setAttr(html, /<meta name="description"[^>]*>/, 'content', page.description);
  html = setAttr(html, /<link rel="canonical"[^>]*>/, 'href', page.url);
  html = setAttr(html, /<meta property="og:title"[^>]*>/, 'content', page.title);
  html = setAttr(html, /<meta property="og:description"[^>]*>/, 'content', page.description);
  html = setAttr(html, /<meta property="og:url"[^>]*>/, 'content', page.url);
  html = setAttr(html, /<meta name="twitter:title"[^>]*>/, 'content', page.title);
  html = setAttr(html, /<meta name="twitter:description"[^>]*>/, 'content', page.description);

  const outFile = page.path === '/' ? join(distDir, 'index.html') : join(distDir, page.path.slice(1), 'index.html');
  await mkdir(dirname(outFile), { recursive: true });
  await writeFile(outFile, html);
  console.log(`prerendered ${page.path}`);
}

await rm(serverDir, { recursive: true, force: true });
