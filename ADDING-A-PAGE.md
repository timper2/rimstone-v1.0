# Adding a new page

## Prompt to paste into v0

Copy this, fill in the brackets, and send it:

```
Add a new page: [Page name] at /[url-path].
Content: [what the page is about, or paste the copy].
Show it in the navbar: [yes/no]. Show it in the footer: [yes/no].
Follow ADDING-A-PAGE.md and confirm every checklist item when you are done.
```

## Checklist

Every new page needs all of these. The build catches the first two automatically; the rest have to be done by hand.

1. **`src/lib/routes.ts`**: add the page to `RouteId` and `ROUTES` (id, path, label, short, priority). The sitemap is generated from this list.
2. **`vercel.json`**: add the path to the page list in `routes`. If you skip this, the build stops with an error naming the missing page.
3. **`src/pages/[Name].tsx`**: create the page component.
4. **`src/App.tsx`**: add a `case` for the new route that renders the page.
5. **`src/lib/pageMeta.ts`**: add a unique title (under 60 characters) and description (under 160 characters). TypeScript errors if this is missing.
6. **`public/llms.txt`**: add a line with the page URL and a one-sentence summary so AI search engines know about it.
7. **`index.html` JSON-LD**: update only if the page is a new course or service that should appear in the structured data.
8. **Navigation**: add a link in the navbar and/or footer if the page should be reachable from them.
9. **Images**: add descriptive `alt` text, and set `width` and `height` on every `<img>`.
10. **Verify**: run the build, then open the prerendered page in `dist/[path]/index.html` and check the title, description, and content are in the HTML.

After publishing, submit the updated sitemap in Google Search Console (`https://[your-domain]/sitemap.xml`).
