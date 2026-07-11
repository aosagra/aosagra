# AOS Admin Portal

The admin portal lives at `/admin/`. It is not WordPress and does not use a database.

How it works:

1. You sign in with credentials stored in Netlify environment variables.
2. The admin portal edits JSON files in the GitHub repository.
3. Netlify rebuilds and republishes the static website after the repository update.

## Netlify environment variables

Add these in Netlify → Site configuration → Environment variables. They must apply to the **Functions** scope (or all scopes) and the **Production** deploy context. Trigger a new production deploy after changing them; Netlify Functions receive the values that existed when that deploy was created.

| Variable | Purpose |
| --- | --- |
| `AOS_ADMIN_USERNAME` | Admin username. |
| `AOS_ADMIN_PASSWORD` | Admin password. Fastest setup. |
| `AOS_ADMIN_PASSWORD_HASH` | Optional safer alternative to `AOS_ADMIN_PASSWORD`; SHA-256 hash of the password. |
| `AOS_ADMIN_SESSION_SECRET` | Long random signing secret for admin sessions. Use at least 24 characters. |
| `GITHUB_OWNER` | GitHub account or organisation that owns the repo: `aosagra`. |
| `GITHUB_REPO` | Repository name: `aosagra`. |
| `GITHUB_BRANCH` | Branch to update, usually `main`. |
| `GITHUB_TOKEN` | Fine-grained GitHub token with repository contents read/write permission. |
| `GITHUB_PROJECT_PATH` | Leave blank for the current repository because this project is at its root. |

Use either `AOS_ADMIN_PASSWORD` or `AOS_ADMIN_PASSWORD_HASH`. If both are set, the hash is used.

Create the fine-grained `GITHUB_TOKEN` for only the `aosagra/aosagra` repository and grant **Contents: Read and write**. The admin uses GitHub’s repository-contents API to read and commit JSON or uploaded images; each successful save then triggers Netlify’s normal production build from `main`.

## Editable content

The portal currently edits these files:

- `src/content/aos/home.json`
- `src/content/aos/gallery.json`
- `src/content/aos/events.json`
- `src/content/aos/past-events.json`
- `src/content/aos/leaders.json`
- `src/content/aos/notices.json`
- `src/content/aos/pages.json`
- `src/content/aos/navigation.json`
- `src/content/aos/settings.json`

The quick gallery uploader stores new images under `public/assets/uploads/` and adds the uploaded image to `src/content/aos/gallery.json`.

## Member-directory privacy

Do not copy member-directory responses, phone numbers, email addresses, family information, or uploaded photographs into this public GitHub repository. The 2026–2027 directory responses are permission-controlled and intended for circulation among AOS members. A website directory should remain unpublished until secure member authentication, explicit publication rules, and the society’s final verification process are in place.
