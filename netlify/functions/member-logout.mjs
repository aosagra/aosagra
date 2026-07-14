import { clearMemberSessionCookie, handleError, jsonResponse } from "./_member-shared.mjs";

export async function handler(event) {
  try {
    return jsonResponse(
      200,
      { ok: true },
      {
        "set-cookie": clearMemberSessionCookie(event)
      }
    );
  } catch (error) {
    return handleError(error);
  }
}
