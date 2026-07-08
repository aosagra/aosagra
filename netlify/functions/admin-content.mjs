import {
  getContentType,
  handleError,
  jsonResponse,
  listContentTypes,
  readGithubJson,
  readJsonBody,
  requireSession,
  statusError,
  writeGithubJson
} from "./_admin-shared.mjs";

export async function handler(event) {
  try {
    requireSession(event);

    if (event.httpMethod === "GET") {
      const params = new URLSearchParams(event.rawQuery ?? "");
      const type = params.get("type");

      if (!type) {
        return jsonResponse(200, {
          ok: true,
          types: listContentTypes()
        });
      }

      const contentType = getContentType(type);
      const { value, path } = await readGithubJson(contentType.path);

      return jsonResponse(200, {
        ok: true,
        type,
        label: contentType.label,
        description: contentType.description,
        path,
        value
      });
    }

    if (event.httpMethod === "POST") {
      const { type, value } = await readJsonBody(event);
      const contentType = getContentType(type);

      if (value === undefined) {
        throw statusError(400, "Missing content value.");
      }

      let parsedValue;

      try {
        parsedValue = typeof value === "string" ? JSON.parse(value) : value;
      } catch {
        throw statusError(400, "The content editor contains invalid JSON.");
      }

      const result = await writeGithubJson(
        contentType.path,
        parsedValue,
        `Update AOS ${contentType.label.toLowerCase()} content`
      );

      return jsonResponse(200, {
        ok: true,
        type,
        label: contentType.label,
        path: result.path,
        commit: result.commit
      });
    }

    throw statusError(405, "Unsupported method.");
  } catch (error) {
    return handleError(error);
  }
}
