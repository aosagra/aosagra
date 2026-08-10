import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { getStore } from "@netlify/blobs";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const privateDir = resolve(
  process.env.AOS_MEMBER_PRIVATE_DIR || resolve(projectRoot, "..", "AOS_Member_Portal_Private")
);
const storeName = process.env.AOS_MEMBER_BLOBS_STORE || "aos-member-portal";

function readSiteId() {
  if (process.env.NETLIFY_SITE_ID) {
    return process.env.NETLIFY_SITE_ID;
  }

  const statePath = resolve(projectRoot, ".netlify", "state.json");

  if (!existsSync(statePath)) {
    throw new Error("NETLIFY_SITE_ID is missing and .netlify/state.json was not found.");
  }

  return JSON.parse(readFileSync(statePath, "utf8")).siteId;
}

function readNetlifyToken() {
  if (process.env.NETLIFY_AUTH_TOKEN) {
    return process.env.NETLIFY_AUTH_TOKEN;
  }

  const configPath = resolve(process.env.HOME || "", "Library", "Preferences", "netlify", "config.json");

  if (!existsSync(configPath)) {
    throw new Error("NETLIFY_AUTH_TOKEN is missing and the local Netlify config was not found.");
  }

  const config = JSON.parse(readFileSync(configPath, "utf8"));
  const user = config.users?.[config.userId];
  const auth = user?.auth;
  const token = typeof auth === "object" ? auth.token : auth;

  if (!token) {
    throw new Error("No Netlify token found in the local Netlify config.");
  }

  return token;
}

async function decodeBase64JsonFile(filename) {
  const source = await readFile(resolve(privateDir, filename), "utf8");
  const json = Buffer.from(source.trim(), "base64").toString("utf8");
  JSON.parse(json);
  return json;
}

function countRows(json, key) {
  const parsed = JSON.parse(json);
  const rows = Array.isArray(parsed) ? parsed : parsed[key] || [];
  return Array.isArray(rows) ? rows.length : 0;
}

function shortHash(value) {
  return createHash("sha256").update(value).digest("hex").slice(0, 12);
}

const directory = await decodeBase64JsonFile("AOS_MEMBER_DIRECTORY_JSON_BASE64.txt");
const accessCodes = await decodeBase64JsonFile("AOS_MEMBER_ACCESS_CODES_JSON_BASE64.txt");
const store = getStore({
  name: storeName,
  siteID: readSiteId(),
  token: readNetlifyToken(),
  consistency: "strong"
});

await store.set("directory.json", directory, {
  metadata: {
    kind: "member-directory",
    rows: String(countRows(directory, "members"))
  }
});
await store.set("access-codes.json", accessCodes, {
  metadata: {
    kind: "member-access-codes",
    rows: String(countRows(accessCodes, "codes"))
  }
});

const verifiedDirectory = await store.get("directory.json", {
  consistency: "strong",
  type: "text"
});
const verifiedAccessCodes = await store.get("access-codes.json", {
  consistency: "strong",
  type: "text"
});

console.log("blob_upload_ok", Boolean(verifiedDirectory && verifiedAccessCodes));
console.log("directory_rows", countRows(directory, "members"));
console.log("access_code_rows", countRows(accessCodes, "codes"));
console.log("directory_sha256", shortHash(verifiedDirectory || ""));
console.log("codes_sha256", shortHash(verifiedAccessCodes || ""));
