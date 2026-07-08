import {
  createSession,
  handleError,
  jsonResponse,
  readJsonBody,
  sessionCookie,
  statusError,
  verifyAdminCredentials
} from "./_admin-shared.mjs";

export async function handler(event) {
  try {
    if (event.httpMethod !== "POST") {
      throw statusError(405, "Use POST to sign in.");
    }

    const { username = "", password = "" } = await readJsonBody(event);

    if (!verifyAdminCredentials(username, password)) {
      throw statusError(401, "The username or password is incorrect.");
    }

    const token = createSession(username);

    return jsonResponse(
      200,
      { ok: true },
      {
        "set-cookie": sessionCookie(event, token)
      }
    );
  } catch (error) {
    return handleError(error);
  }
}
