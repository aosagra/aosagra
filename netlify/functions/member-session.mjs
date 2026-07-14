import { handleError, jsonResponse, verifyMemberSession } from "./_member-shared.mjs";

export async function handler(event) {
  try {
    return jsonResponse(200, {
      ok: true,
      authenticated: Boolean(verifyMemberSession(event))
    });
  } catch (error) {
    return handleError(error);
  }
}
