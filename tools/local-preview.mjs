import { createServer } from "node:http";
import { readFileSync, existsSync, statSync } from "node:fs";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const distRoot = path.join(projectRoot, "dist");
const privateRoot = path.resolve(projectRoot, "..", "AOS_Member_Portal_Private");
const port = Number(process.env.PORT ?? 4324);
const host = process.env.HOST ?? "127.0.0.1";

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".xml": "application/xml; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8"
};

const functionFiles = {
  "public-directory": "public-directory.mjs",
  "member-login": "member-login.mjs",
  "member-directory": "member-directory.mjs",
  "member-session": "member-session.mjs",
  "member-logout": "member-logout.mjs"
};

function loadPrivateEnv() {
  const files = {
    AOS_MEMBER_DIRECTORY_JSON_BASE64: "AOS_MEMBER_DIRECTORY_JSON_BASE64.txt",
    AOS_MEMBER_ACCESS_CODES_JSON_BASE64: "AOS_MEMBER_ACCESS_CODES_JSON_BASE64.txt",
    AOS_MEMBER_SESSION_SECRET: "AOS_MEMBER_SESSION_SECRET.txt"
  };

  for (const [key, fileName] of Object.entries(files)) {
    const filePath = path.join(privateRoot, fileName);

    if (!process.env[key] && existsSync(filePath)) {
      process.env[key] = readFileSync(filePath, "utf8").trim();
    }
  }
}

function normaliseHeaders(headers = {}) {
  const output = {};

  for (const [key, value] of Object.entries(headers)) {
    output[key.toLowerCase()] = value;
  }

  return output;
}

function readRequestBody(request) {
  return new Promise((resolve, reject) => {
    const chunks = [];

    request.on("data", (chunk) => chunks.push(chunk));
    request.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    request.on("error", reject);
  });
}

async function serveFunction(request, response, name) {
  const fileName = functionFiles[name];

  if (!fileName) {
    response.writeHead(404, { "content-type": "application/json; charset=utf-8" });
    response.end(JSON.stringify({ ok: false, error: "Local function not found." }));
    return;
  }

  loadPrivateEnv();

  const functionUrl = pathToFileURL(path.join(projectRoot, "netlify", "functions", fileName)).href;
  const module = await import(functionUrl);
  const body = await readRequestBody(request);
  const result = await module.handler({
    httpMethod: request.method,
    headers: normaliseHeaders(request.headers),
    path: request.url?.split("?")[0] ?? "",
    rawUrl: request.url ?? "",
    body,
    isBase64Encoded: false
  });

  response.writeHead(result.statusCode ?? 200, result.headers ?? {});
  response.end(result.body ?? "");
}

function safeStaticPath(urlPath) {
  const decoded = decodeURIComponent(urlPath);
  const filePath = path.join(distRoot, decoded);

  if (!filePath.startsWith(distRoot)) {
    return null;
  }

  if (decoded.endsWith("/")) {
    return path.join(filePath, "index.html");
  }

  if (existsSync(filePath) && statSync(filePath).isDirectory()) {
    return path.join(filePath, "index.html");
  }

  const indexPath = path.join(distRoot, decoded, "index.html");

  if (!existsSync(filePath) && existsSync(indexPath)) {
    return indexPath;
  }

  return filePath;
}

async function serveStatic(request, response) {
  const urlPath = (request.url ?? "/").split("?")[0];
  const filePath = safeStaticPath(urlPath);

  if (!filePath) {
    response.writeHead(403, { "content-type": "text/plain; charset=utf-8" });
    response.end("Forbidden");
    return;
  }

  try {
    const data = await readFile(filePath);
    response.writeHead(200, {
      "content-type": contentTypes[path.extname(filePath)] ?? "application/octet-stream"
    });
    response.end(data);
  } catch {
    const notFound = path.join(distRoot, "404.html");
    const data = existsSync(notFound) ? await readFile(notFound) : Buffer.from("Not found");
    response.writeHead(404, { "content-type": "text/html; charset=utf-8" });
    response.end(data);
  }
}

const server = createServer(async (request, response) => {
  try {
    const urlPath = (request.url ?? "/").split("?")[0];
    const functionMatch = urlPath.match(/^\/\.netlify\/functions\/([a-z-]+)$/);

    if (functionMatch) {
      await serveFunction(request, response, functionMatch[1]);
      return;
    }

    await serveStatic(request, response);
  } catch (error) {
    response.writeHead(500, { "content-type": "application/json; charset=utf-8" });
    response.end(JSON.stringify({ ok: false, error: error.message ?? "Local preview failed." }));
  }
});

server.listen(port, host, () => {
  console.log(`Local preview: http://${host}:${port}/`);
  console.log("Serving built pages and local member-directory functions.");
});
