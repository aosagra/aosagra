import { createHash, createHmac, timingSafeEqual } from "node:crypto";

const COOKIE_NAME = "aos_member";
const DEFAULT_SESSION_SECONDS = 12 * 60 * 60;

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

function memberSessionSecret() {
  const secret = process.env.AOS_MEMBER_SESSION_SECRET;

  if (!secret || secret.length < 24) {
    throw statusError(
      500,
      "AOS_MEMBER_SESSION_SECRET is missing or too short. Use a long random value."
    );
  }

  return secret;
}

function sign(value) {
  return createHmac("sha256", memberSessionSecret()).update(value).digest("base64url");
}

export function createMemberSession(member = {}) {
  const maxAge = Number(process.env.AOS_MEMBER_SESSION_SECONDS ?? DEFAULT_SESSION_SECONDS);
  const payload = base64url(
    JSON.stringify({
      sub: member.id ?? "aos-member",
      name: member.name ?? "",
      email: member.email ?? "",
      exp: Date.now() + maxAge * 1000
    })
  );
  return `${payload}.${sign(payload)}`;
}

export function verifyMemberSession(event) {
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

export function requireMemberSession(event) {
  const session = verifyMemberSession(event);

  if (!session) {
    throw statusError(401, "Please enter the AOS member access code to continue.");
  }

  return session;
}

export function memberSessionCookie(event, token, maxAge = DEFAULT_SESSION_SECONDS) {
  const host = event.headers.host ?? "";
  const isLocalhost = host.includes("localhost") || host.includes("127.0.0.1");
  const secure = isLocalhost ? "" : "; Secure";
  return `${COOKIE_NAME}=${encodeURIComponent(token)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAge}${secure}`;
}

export function clearMemberSessionCookie(event) {
  return memberSessionCookie(event, "", 0);
}

function readAccessCodesSource() {
  if (process.env.AOS_MEMBER_ACCESS_CODES_JSON_BASE64) {
    return Buffer.from(process.env.AOS_MEMBER_ACCESS_CODES_JSON_BASE64, "base64").toString("utf8");
  }

  return process.env.AOS_MEMBER_ACCESS_CODES_JSON ?? "";
}

function configuredMemberCodes() {
  const source = readAccessCodesSource();

  if (!source) {
    return [];
  }

  let parsed;

  try {
    parsed = JSON.parse(source);
  } catch {
    throw statusError(500, "AOS member access codes are not valid JSON.");
  }

  const rows = Array.isArray(parsed) ? parsed : parsed.codes;

  if (!Array.isArray(rows)) {
    throw statusError(500, "AOS member access code data must be a JSON array or an object with a codes array.");
  }

  return rows
    .map((row, index) => ({
      id: cleanText(row.id) || `member-${index + 1}`,
      name: cleanText(row.name),
      email: cleanText(row.email),
      codeHash: cleanText(row.codeHash ?? row.hash).toLowerCase(),
      active: row.active !== false
    }))
    .filter((row) => row.codeHash);
}

function assertMemberAccessConfig() {
  const missing = [];

  if (
    !process.env.AOS_MEMBER_ACCESS_CODES_JSON &&
    !process.env.AOS_MEMBER_ACCESS_CODES_JSON_BASE64 &&
    !process.env.AOS_MEMBER_ACCESS_CODE &&
    !process.env.AOS_MEMBER_ACCESS_CODE_HASH
  ) {
    missing.push(
      "AOS_MEMBER_ACCESS_CODES_JSON_BASE64, AOS_MEMBER_ACCESS_CODES_JSON, AOS_MEMBER_ACCESS_CODE, or AOS_MEMBER_ACCESS_CODE_HASH"
    );
  }
  if (!process.env.AOS_MEMBER_SESSION_SECRET) {
    missing.push("AOS_MEMBER_SESSION_SECRET");
  }

  if (missing.length) {
    throw statusError(500, "Private member access is being connected by the AOS office.", { missing });
  }
}

export function verifyMemberAccessCode(accessCode) {
  assertMemberAccessConfig();

  const accessHash = sha256(accessCode);
  const memberCode = configuredMemberCodes().find(
    (row) => row.active && safeEqual(accessHash, row.codeHash)
  );

  if (memberCode) {
    return {
      id: memberCode.id,
      name: memberCode.name,
      email: memberCode.email
    };
  }

  const expectedHash = process.env.AOS_MEMBER_ACCESS_CODE_HASH?.trim().toLowerCase();

  if (expectedHash) {
    return safeEqual(accessHash, expectedHash) ? { id: "aos-member" } : null;
  }

  return safeEqual(accessHash, sha256(process.env.AOS_MEMBER_ACCESS_CODE)) ? { id: "aos-member" } : null;
}

function readChunkedEnv(prefix) {
  const parts = [];

  for (let index = 1; ; index += 1) {
    const value = process.env[`${prefix}_PART_${index}`];

    if (!value) {
      break;
    }

    parts.push(value.trim());
  }

  return parts.join("");
}

function readDirectorySource() {
  const chunkedBase64 = readChunkedEnv("AOS_MEMBER_DIRECTORY_JSON_BASE64");
  const directBase64 = process.env.AOS_MEMBER_DIRECTORY_JSON_BASE64?.trim();

  if (chunkedBase64 || directBase64) {
    return Buffer.from(chunkedBase64 || directBase64, "base64").toString("utf8");
  }

  return process.env.AOS_MEMBER_DIRECTORY_JSON ?? "";
}

function cleanText(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

function firstValue(row, keys) {
  for (const key of keys) {
    const exact = cleanText(row[key]);

    if (exact) {
      return exact;
    }
  }

  const lowerEntries = Object.entries(row).map(([key, value]) => [key.toLowerCase(), value]);

  for (const key of keys) {
    const lowerKey = key.toLowerCase();
    const match = lowerEntries.find(([candidate]) => candidate.includes(lowerKey));
    const value = cleanText(match?.[1]);

    if (value) {
      return value;
    }
  }

  return "";
}

function yes(value) {
  return /^yes\b/i.test(cleanText(value));
}

function normalizeMember(row, index) {
  const firstName = firstValue(row, ["First Name of Orthopaedic Surgeon", "First Name"]);
  const lastName = firstValue(row, ["Last Name / Surname of Orthopaedic Surgeon", "Last Name"]);
  const name =
    firstValue(row, [
      "Full Name as it should appear in AOS Directory",
      "Standardized Name",
      "Name"
    ]) || [firstName, lastName].filter(Boolean).join(" ");

  if (!name) {
    return null;
  }

  const permission = firstValue(row, [
    "Which details may be included in the AOS Digital Directory circulated among AOS members?"
  ]).toLowerCase();
  const mayShowContact = permission.includes("mobile") || permission.includes("email");
  const mayShowPhoto =
    permission.includes("photograph") ||
    yes(firstValue(row, ["I permit AOS to use my photograph in the AOS Digital / Printed Directory"]));

  const city =
    firstValue(row, ["Place of Practice / City", "City"]) ||
    firstValue(row, ["If Outside Agra / Other, please mention city"]);
  const mobile = mayShowContact ? firstValue(row, ["Mobile Number", "Any Mobile/WhatsApp", "Phone"]) : "";
  const whatsapp = mayShowContact ? firstValue(row, ["WhatsApp Number", "Whatsapp Mobile"]) : "";
  const email = mayShowContact ? firstValue(row, ["Email ID", "Any Email", "Email"]) : "";
  const photoUrl = mayShowPhoto
    ? firstValue(row, [
        "Passport Size Photo of Orthopaedic Surgeon",
        "Passport Size Photo of the Orthopedic Surgeon",
        "Photo URL"
      ])
    : "";

  return {
    id: firstValue(row, ["Member ID"]) || `member-${index + 1}`,
    name,
    city,
    hospital: firstValue(row, ["Hospital / Clinic Name", "Clinic / Hospital Name"]),
    qualification: firstValue(row, ["Highest Orthopaedic Qualification", "PG Degree"]),
    appointment: firstValue(row, ["Present Appointment / Designation", "Present Appointment"]),
    interest: firstValue(row, ["Main Area of Orthopaedic Interest", "Academic Interest"]),
    executivePost: firstValue(row, ["If yes, please mention your current AOS Executive post for 2026–2027"]),
    mobile,
    whatsapp,
    email,
    photoUrl,
    updatedAt: firstValue(row, ["Timestamp"]),
    consent: cleanText(permission) || "AOS member directory consent recorded"
  };
}

export function readMemberDirectory() {
  const source = readDirectorySource();

  if (!source) {
    return {
      configured: false,
      updatedAt: "",
      members: []
    };
  }

  let parsed;

  try {
    parsed = JSON.parse(source);
  } catch {
    throw statusError(500, "AOS member directory data is not valid JSON.");
  }

  const rows = Array.isArray(parsed) ? parsed : parsed.members;

  if (!Array.isArray(rows)) {
    throw statusError(500, "AOS member directory data must be a JSON array or an object with a members array.");
  }

  const members = rows
    .map((row, index) => normalizeMember(row, index))
    .filter(Boolean)
    .sort((left, right) => left.name.localeCompare(right.name));

  return {
    configured: true,
    updatedAt: cleanText(parsed.updatedAt),
    members
  };
}
