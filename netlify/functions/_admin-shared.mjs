import { createHash, createHmac, timingSafeEqual } from "node:crypto";

const COOKIE_NAME = "aos_admin";
const DEFAULT_SESSION_SECONDS = 8 * 60 * 60;

export const contentTypes = {
  home: {
    label: "Homepage",
    path: "src/content/aos/home.json",
    description: "Hero, homepage doors, and homepage photo-story copy."
  },
  gallery: {
    label: "Gallery",
    path: "src/content/aos/gallery.json",
    description: "Recent gallery photos, captions, featured status, and ordering."
  },
  events: {
    label: "Upcoming events",
    path: "src/content/aos/events.json",
    description: "Current upcoming programmes shown across the site."
  },
  "past-events": {
    label: "Past events",
    path: "src/content/aos/past-events.json",
    description: "Completed events and archive notes."
  },
  leaders: {
    label: "Leadership",
    path: "src/content/aos/leaders.json",
    description: "Current leadership cards and portraits."
  },
  notices: {
    label: "Notices",
    path: "src/content/aos/notices.json",
    description: "Downloads, notices, and circulars."
  },
  pages: {
    label: "Editable pages",
    path: "src/content/aos/pages.json",
    description: "Selected page titles, summaries, and section copy."
  },
  navigation: {
    label: "Navigation",
    path: "src/content/aos/navigation.json",
    description: "Header menus and dropdown links."
  },
  settings: {
    label: "Society settings",
    path: "src/content/aos/settings.json",
    description: "Society name, contact details, and footer-level information."
  }
};

export function jsonResponse(statusCode, body, headers = {}) {
  return {
    statusCode,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      ...headers
    },
    body: JSON.stringify(body)
  };
}

export async function readJsonBody(event) {
  if (!event.body) {
    return {};
  }

  const body = event.isBase64Encoded
    ? Buffer.from(event.body, "base64").toString("utf8")
    : event.body;

  try {
    return JSON.parse(body);
  } catch {
    throw statusError(400, "The request body must be valid JSON.");
  }
}

export function statusError(statusCode, message, details) {
  const error = new Error(message);
  error.statusCode = statusCode;
  error.details = details;
  return error;
}

export function handleError(error) {
  const statusCode = error.statusCode ?? 500;
  return jsonResponse(statusCode, {
    ok: false,
    error: error.message ?? "Something went wrong.",
    details: error.details
  });
}

function sha256(value) {
  return createHash("sha256").update(String(value)).digest("hex");
}

function safeEqual(left, right) {
  const leftBuffer = Buffer.from(String(left));
  const rightBuffer = Buffer.from(String(right));

  if (leftBuffer.length !== rightBuffer.length) {
    return false;
  }

  return timingSafeEqual(leftBuffer, rightBuffer);
}

function base64url(input) {
  return Buffer.from(input).toString("base64url");
}

function parseCookies(cookieHeader = "") {
  return Object.fromEntries(
    cookieHeader
      .split(";")
      .map((part) => part.trim())
      .filter(Boolean)
      .map((part) => {
        const index = part.indexOf("=");
        return [part.slice(0, index), decodeURIComponent(part.slice(index + 1))];
      })
  );
}

function sessionSecret() {
  const secret = process.env.AOS_ADMIN_SESSION_SECRET;

  if (!secret || secret.length < 24) {
    throw statusError(
      500,
      "AOS_ADMIN_SESSION_SECRET is missing or too short. Use a long random value."
    );
  }

  return secret;
}

function sign(value) {
  return createHmac("sha256", sessionSecret()).update(value).digest("base64url");
}

export function createSession(username) {
  const maxAge = Number(process.env.AOS_ADMIN_SESSION_SECONDS ?? DEFAULT_SESSION_SECONDS);
  const payload = base64url(
    JSON.stringify({
      sub: username,
      exp: Date.now() + maxAge * 1000
    })
  );
  return `${payload}.${sign(payload)}`;
}

export function verifySession(event) {
  const cookies = parseCookies(event.headers.cookie ?? event.headers.Cookie ?? "");
  const token = cookies[COOKIE_NAME];

  if (!token) {
    return null;
  }

  const [payload, signature] = token.split(".");

  if (!payload || !signature || !safeEqual(sign(payload), signature)) {
    return null;
  }

  try {
    const session = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));

    if (!session.exp || session.exp < Date.now()) {
      return null;
    }

    return session;
  } catch {
    return null;
  }
}

export function requireSession(event) {
  const session = verifySession(event);

  if (!session) {
    throw statusError(401, "Please sign in to continue.");
  }

  return session;
}

export function sessionCookie(event, token, maxAge = DEFAULT_SESSION_SECONDS) {
  const host = event.headers.host ?? "";
  const isLocalhost = host.includes("localhost") || host.includes("127.0.0.1");
  const secure = isLocalhost ? "" : "; Secure";
  return `${COOKIE_NAME}=${encodeURIComponent(token)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAge}${secure}`;
}

export function clearSessionCookie(event) {
  return sessionCookie(event, "", 0);
}

export function assertAdminConfig() {
  const missing = [];

  if (!process.env.AOS_ADMIN_USERNAME) missing.push("AOS_ADMIN_USERNAME");
  if (!process.env.AOS_ADMIN_PASSWORD && !process.env.AOS_ADMIN_PASSWORD_HASH) {
    missing.push("AOS_ADMIN_PASSWORD or AOS_ADMIN_PASSWORD_HASH");
  }
  if (!process.env.AOS_ADMIN_SESSION_SECRET) missing.push("AOS_ADMIN_SESSION_SECRET");

  if (missing.length) {
    throw statusError(500, "Admin credentials are not configured.", { missing });
  }
}

export function verifyAdminCredentials(username, password) {
  assertAdminConfig();

  const expectedUsername = process.env.AOS_ADMIN_USERNAME;
  const passwordHash = process.env.AOS_ADMIN_PASSWORD_HASH?.trim().toLowerCase();
  const passwordPlainText = process.env.AOS_ADMIN_PASSWORD;

  if (!safeEqual(sha256(username), sha256(expectedUsername))) {
    return false;
  }

  if (passwordHash) {
    return safeEqual(sha256(password), passwordHash);
  }

  return safeEqual(sha256(password), sha256(passwordPlainText));
}

function githubConfig() {
  const missing = [];
  const owner = process.env.GITHUB_OWNER;
  const repo = process.env.GITHUB_REPO;
  const token = process.env.GITHUB_TOKEN;
  const branch = process.env.GITHUB_BRANCH ?? "main";
  const projectPath = (process.env.GITHUB_PROJECT_PATH ?? "").replace(/^\/+|\/+$/g, "");

  if (!owner) missing.push("GITHUB_OWNER");
  if (!repo) missing.push("GITHUB_REPO");
  if (!token) missing.push("GITHUB_TOKEN");

  if (missing.length) {
    throw statusError(500, "GitHub publishing is not configured.", { missing });
  }

  return { owner, repo, token, branch, projectPath };
}

function repoPath(relativePath) {
  const { projectPath } = githubConfig();
  return [projectPath, relativePath].filter(Boolean).join("/");
}

function encodedPath(path) {
  return path.split("/").map(encodeURIComponent).join("/");
}

async function githubFetch(path, options = {}) {
  const { owner, repo, token } = githubConfig();
  const url = path.startsWith("https://")
    ? path
    : `https://api.github.com/repos/${owner}/${repo}${path}`;

  const response = await fetch(url, {
    ...options,
    headers: {
      accept: "application/vnd.github+json",
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
      "x-github-api-version": "2022-11-28",
      ...options.headers
    }
  });

  if (!response.ok) {
    const details = await response.text();
    throw statusError(response.status, `GitHub request failed with ${response.status}.`, {
      details: details.slice(0, 500)
    });
  }

  return response.json();
}

export function listContentTypes() {
  return Object.entries(contentTypes).map(([id, value]) => ({
    id,
    label: value.label,
    description: value.description
  }));
}

export function getContentType(id) {
  const contentType = contentTypes[id];

  if (!contentType) {
    throw statusError(404, "Unknown content type.");
  }

  return contentType;
}

export async function readGithubJson(relativePath) {
  const { branch } = githubConfig();
  const path = repoPath(relativePath);
  const data = await githubFetch(`/contents/${encodedPath(path)}?ref=${encodeURIComponent(branch)}`);
  const text = Buffer.from(data.content, "base64").toString("utf8");

  return {
    value: JSON.parse(text),
    sha: data.sha,
    path
  };
}

export async function writeGithubFile(relativePath, contentBuffer, message, existingSha) {
  const { branch } = githubConfig();
  const path = repoPath(relativePath);

  const payload = {
    message,
    content: Buffer.from(contentBuffer).toString("base64"),
    branch
  };

  if (existingSha) {
    payload.sha = existingSha;
  }

  return githubFetch(`/contents/${encodedPath(path)}`, {
    method: "PUT",
    body: JSON.stringify(payload)
  });
}

export async function writeGithubJson(relativePath, value, message) {
  const current = await readGithubJson(relativePath);
  const body = `${JSON.stringify(value, null, 2)}\n`;
  const result = await writeGithubFile(relativePath, Buffer.from(body, "utf8"), message, current.sha);

  return {
    path: current.path,
    commit: result.commit?.sha
  };
}

export function safeAssetName(filename) {
  const extension = filename.split(".").pop()?.toLowerCase();
  const safeBase = filename
    .replace(/\.[^.]+$/, "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

  if (!safeBase || !["jpg", "jpeg", "png", "webp", "gif"].includes(extension ?? "")) {
    throw statusError(400, "Please upload a JPG, PNG, WEBP, or GIF image.");
  }

  return `${Date.now()}-${safeBase}.${extension}`;
}
