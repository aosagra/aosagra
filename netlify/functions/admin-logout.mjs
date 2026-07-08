import { clearSessionCookie, handleError, jsonResponse } from "./_admin-shared.mjs";

export async function handler(event) {
  try {
    return jsonResponse(
      200,
      { ok: true },
      {
        "set-cookie": clearSessionCookie(event)
      }
    );
  } catch (error) {
    return handleError(error);
  }
}
