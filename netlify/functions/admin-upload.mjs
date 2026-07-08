import {
  handleError,
  jsonResponse,
  readGithubJson,
  readJsonBody,
  requireSession,
  safeAssetName,
  statusError,
  writeGithubFile,
  writeGithubJson
} from "./_admin-shared.mjs";

const MAX_UPLOAD_BYTES = 7 * 1024 * 1024;

function decodeDataUrl(dataUrl) {
  const match = /^data:(image\/(?:jpeg|jpg|png|webp|gif));base64,(.+)$/i.exec(dataUrl ?? "");

  if (!match) {
    throw statusError(400, "Upload data must be a base64 image data URL.");
  }

  const buffer = Buffer.from(match[2], "base64");

  if (buffer.byteLength > MAX_UPLOAD_BYTES) {
    throw statusError(400, "Please keep image uploads under 7 MB.");
  }

  return buffer;
}

export async function handler(event) {
  try {
    requireSession(event);

    if (event.httpMethod !== "POST") {
      throw statusError(405, "Use POST to upload an image.");
    }

    const {
      filename = "aos-gallery.jpg",
      dataUrl,
      caption = "AOS activity",
      alt = "Agra Orthopaedic Society activity photograph",
      featured = false,
      addToGallery = true
    } = await readJsonBody(event);

    const safeName = safeAssetName(filename);
    const uploadPath = `public/assets/uploads/${safeName}`;
    const publicSrc = `/assets/uploads/${safeName}`;
    const buffer = decodeDataUrl(dataUrl);

    await writeGithubFile(uploadPath, buffer, `Upload AOS gallery image: ${safeName}`);

    let gallery;

    if (addToGallery) {
      const currentGallery = await readGithubJson("src/content/aos/gallery.json");
      const items = Array.isArray(currentGallery.value) ? currentGallery.value : [];
      const maxOrder = items.reduce((max, item) => Math.max(max, Number(item.order) || 0), 0);
      const nextItem = {
        id: safeName.replace(/\.[^.]+$/, ""),
        src: publicSrc,
        alt,
        caption,
        featured: Boolean(featured),
        order: maxOrder + 1
      };

      gallery = [...items, nextItem];
      await writeGithubJson("src/content/aos/gallery.json", gallery, "Add uploaded AOS gallery image");
    }

    return jsonResponse(200, {
      ok: true,
      src: publicSrc,
      gallery
    });
  } catch (error) {
    return handleError(error);
  }
}
