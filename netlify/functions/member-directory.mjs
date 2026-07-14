import {
  handleError,
  jsonResponse,
  readMemberDirectory,
  requireMemberSession,
  statusError
} from "./_member-shared.mjs";

export async function handler(event) {
  try {
    if (event.httpMethod !== "GET") {
      throw statusError(405, "Use GET to read the member directory.");
    }

    requireMemberSession(event);

    const directory = readMemberDirectory();

    return jsonResponse(200, {
      ok: true,
      configured: directory.configured,
      updatedAt: directory.updatedAt,
      count: directory.members.length,
      members: directory.members
    });
  } catch (error) {
    return handleError(error);
  }
}
