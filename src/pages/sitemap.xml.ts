import { publicPages } from "../data/site";

const staticPaths = ["", "404/"];

export function GET() {
  const urls = [...staticPaths, ...publicPages.map((page) => `${page.slug}/`)]
    .filter((path) => path !== "404/")
    .map((path) => `<url><loc>https://aosagra.com/${path}</loc></url>`)
    .join("");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    { headers: { "Content-Type": "application/xml" } }
  );
}
