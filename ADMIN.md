# AOS Admin Portal

The admin portal lives at `/admin/`. It is not WordPress and does not use a database.

How it works:

1. You sign in with credentials stored in Netlify environment variables.
2. The admin portal edits JSON files in the GitHub repository.
3. Netlify rebuilds and republishes the static website after the repository update.

## Netlify environment variables

Add these in Netlify → Site configuration → Environment variables.

| Variable | Purpose |
| --- | --- |
| `AOS_ADMIN_USERNAME` | Admin username. |
| `AOS_ADMIN_PASSWORD` | Admin password. Fastest setup. |
| `AOS_ADMIN_PASSWORD_HASH` | Optional safer alternative to `AOS_ADMIN_PASSWORD`; SHA-256 hash of the password. |
| `AOS_ADMIN_SESSION_SECRET` | Long random signing secret for admin sessions. Use at least 24 characters. |
| `GITHUB_OWNER` | GitHub account or organisation that owns the repo. |
| `GITHUB_REPO` | Repository name. |
| `GITHUB_BRANCH` | Branch to update, usually `main`. |
| `GITHUB_TOKEN` | Fine-grained GitHub token with repository contents read/write permission. |
| `GITHUB_PROJECT_PATH` | Leave blank if this project is the repo root. Use `aosagra-modern` if the repo root contains this folder. |

Use either `AOS_ADMIN_PASSWORD` or `AOS_ADMIN_PASSWORD_HASH`. If both are set, the hash is used.

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
