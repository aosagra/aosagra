import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join, relative } from "node:path";

const root = new URL("../dist/", import.meta.url);
const rootPath = root.pathname;

if (!existsSync(rootPath)) {
  console.error("dist/ does not exist. Run npm run build first.");
  process.exit(1);
}

const walk = (directory) =>
  readdirSync(directory).flatMap((name) => {
    const path = join(directory, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });

const htmlFiles = walk(rootPath).filter((path) => extname(path) === ".html");
const missing = [];
const wordpressReferences = [];
const structuralIssues = [];
const requiredDeploymentFiles = [
  ".htaccess",
  "_headers",
  "_redirects",
  "404.html",
  "robots.txt",
  "sitemap.xml",
  "site.webmanifest"
];

for (const requiredFile of requiredDeploymentFiles) {
  if (!existsSync(join(rootPath, requiredFile))) {
    structuralIssues.push(`missing deployment file: ${requiredFile}`);
  }
}

for (const htmlFile of htmlFiles) {
  const html = readFileSync(htmlFile, "utf8");
  const localPath = relative(rootPath, htmlFile);

  if (/wp-content|wp-includes|wp-admin/i.test(html)) {
    wordpressReferences.push(localPath);
  }

  if (!/<html[^>]+lang="[^"]+"/i.test(html)) {
    structuralIssues.push(`${localPath}: missing document language`);
  }
  if ((html.match(/<main\b/gi) ?? []).length !== 1) {
    structuralIssues.push(`${localPath}: expected exactly one main landmark`);
  }
  if ((html.match(/<h1\b/gi) ?? []).length !== 1) {
    structuralIssues.push(`${localPath}: expected exactly one h1`);
  }
  if (/<img\b(?![^>]*\balt=)[^>]*>/i.test(html)) {
    structuralIssues.push(`${localPath}: image without alt text`);
  }
  if (/href="#"/i.test(html)) {
    structuralIssues.push(`${localPath}: empty hash link`);
  }

  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const value = match[1];
    if (
      value.startsWith("http") ||
      value.startsWith("mailto:") ||
      value.startsWith("tel:") ||
      value.startsWith("#") ||
      value.startsWith("data:")
    ) {
      continue;
    }

    const clean = decodeURIComponent(value.split(/[?#]/)[0]);
    if (!clean) continue;

    const target = clean.startsWith("/")
      ? join(rootPath, clean)
      : join(htmlFile, "..", clean);
    const candidates = [
      target,
      join(target, "index.html"),
      `${target}.html`
    ];

    if (!candidates.some((candidate) => existsSync(candidate))) {
      missing.push(`${localPath}: ${value}`);
    }
  }
}

if (missing.length || wordpressReferences.length || structuralIssues.length) {
  if (missing.length) {
    console.error(`Missing local targets (${missing.length}):`);
    missing.forEach((item) => console.error(`- ${item}`));
  }
  if (wordpressReferences.length) {
    console.error(`WordPress runtime references: ${wordpressReferences.join(", ")}`);
  }
  if (structuralIssues.length) {
    console.error(`Structural or accessibility issues (${structuralIssues.length}):`);
    structuralIssues.forEach((item) => console.error(`- ${item}`));
  }
  process.exit(1);
}

console.log(
  `Audit passed: ${htmlFiles.length} HTML pages, no missing local targets, no WordPress runtime references, and required page landmarks are present.`
);
