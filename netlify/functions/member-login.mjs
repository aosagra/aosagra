import {
  createMemberSession,
  handleError,
  jsonResponse,
  memberSessionCookie,
  readJsonBody,
  statusError,
  verifyMemberAccessCode
} from "./_member-shared.mjs";

export async function handler(event) {
  try {
    if (event.httpMethod !== "POST") {
      throw statusError(405, "Use POST to sign in.");
    }

    const { accessCode = "" } = await readJsonBody(event);

    const member = verifyMemberAccessCode(accessCode);

    if (!member) {
      throw statusError(401, "The member access code is incorrect.");
    }

    const token = createMemberSession(member);

    return jsonResponse(
      200,
      { ok: true },
      {
        "set-cookie": memberSessionCookie(event, token)
      }
    );
  } catch (error) {
    return handleError(error);
  }
}
