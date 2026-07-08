# Deploying aosagra.com

The website is a fully static build. It does not require WordPress, PHP, a database, or a Node.js process after deployment.

## Before going live

- Keep a complete backup of the existing website and database.
- Confirm that `aosagra.com` and `www.aosagra.com` both have valid HTTPS certificates.
- Decide which hostname is canonical and redirect the other at the hosting level.
- Remember that contact, registration, membership, and login forms are design previews. They intentionally do not transmit or store information yet.

## cPanel or Apache hosting

1. Build the website with `npm run build`.
2. Upload the contents of `dist/` to the domain’s document root, usually `public_html/`.
3. Ensure the hidden `.htaccess` file is uploaded. It provides the custom 404 page, security headers, caching, compression, and redirects from old AOS addresses.
4. Verify the new site before removing the old WordPress installation.
5. After approval, remove or move the old WordPress files outside the public document root. Keep the backup.

The generated `aosagra-production.zip` file contains the deployable contents of `dist/` at its root and is suitable for cPanel’s upload-and-extract workflow.

## Cloudflare Pages, Netlify, or another static host

- Project directory: `aosagra-modern`
- Build command: `npm run build`
- Output directory: `dist`
- Node version: current LTS

The generated `_headers` and `_redirects` files are included for static hosts that support those conventions.

## Netlify admin portal

The admin portal is available at `/admin/`. It uses Netlify Functions and GitHub repository updates rather than WordPress or a database. See `ADMIN.md` for the required environment variables and GitHub token permissions.

Important: if you want the admin portal to work, deploy the source project to Netlify through Git/GitHub or Netlify CLI. A drag-and-drop upload of `dist/` or `aosagra-production.zip` will publish the public website, but it will not deploy the Netlify Functions used by `/admin/`.

Two packaged artifacts are included:

- `aosagra-production.zip` — clean static output from `dist/`, suitable for simple static hosting.
- `aosagra-netlify-source.zip` — source project package for a GitHub/Netlify setup with functions and admin editing.

### Recommended Netlify launch path

1. Put the `aosagra-modern` source project in a GitHub repository.
2. In Netlify, create a new site from that repository.
3. Use these build settings:
   - Base directory: `aosagra-modern` if the repository contains this folder; blank if this folder is the repository root.
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Functions directory: `netlify/functions`
4. Add the environment variables from `ADMIN.md`.
5. Deploy the site.
6. Add `aosagra.com` and `www.aosagra.com` under Netlify domain management.
7. Point the DNS records to Netlify and make `https://aosagra.com` the canonical domain.
8. Visit `/admin/`, sign in, and test loading `Homepage` and `Gallery`.

## Verification checklist

- Home, About AOS, Academics, Events, Membership, Public Awareness, and Contact load over HTTPS.
- `/admin/` loads, rejects unknown credentials, and can load editable JSON after Netlify environment variables are set.
- The mobile menu opens and every dropdown destination works.
- `/past-presidents/` redirects to `/past-leadership/`.
- The old ORTHOCON article address redirects to `/orthocon-2026/`.
- The PDF brochure downloads successfully.
- The custom 404 page appears for a made-up address.
- `robots.txt` and `sitemap.xml` return successfully.
- No page points to `/wp-content/`, `/wp-admin/`, or `/wp-includes/`.
