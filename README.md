# Agra Orthopaedic Society

Official website source for **aosagra.com**, the digital home of Agra Orthopaedic Society.

AOS Agra is a professional community of orthopaedic surgeons, teachers, trainees, and members working across academic learning, ethical clinical practice, fellowship, public awareness, and service in Agra.

This repository powers the public website and the lightweight Netlify admin portal used to update society content, gallery images, events, notices, and selected pages.

## What this site includes

- Modern static Astro website, with no WordPress runtime.
- AOS-first visual identity using real society photographs and a Taj-inspired motif.
- Current leadership, events, gallery, membership, academic, archive, and public-awareness pages.
- Editable JSON content under `src/content/aos/`.
- Netlify Functions for the `/admin/` portal.
- Mocked member/event/login flows for now, ready to connect later.

## Technology

- [Astro](https://astro.build/)
- Netlify static hosting
- Netlify Functions
- GitHub-backed content updates for admin editing

## Local development

```sh
npm install
npm run dev
```

Build and verify:

```sh
npm run check
npm run build
npm run audit
```

The production build is written to `dist/`.

## Netlify deployment

Use these settings:

- Build command: `npm run build`
- Publish directory: `dist`
- Functions directory: `netlify/functions`

If this repository root is used directly, leave Netlify’s base directory blank.

For admin editing, configure the environment variables listed in `.env.example` and `ADMIN.md`.

## Content editing

Most frequently edited content lives here:

- `src/content/aos/home.json`
- `src/content/aos/gallery.json`
- `src/content/aos/events.json`
- `src/content/aos/past-events.json`
- `src/content/aos/leaders.json`
- `src/content/aos/notices.json`
- `src/content/aos/pages.json`
- `src/content/aos/navigation.json`
- `src/content/aos/settings.json`

## Documentation

- `ADMIN.md` — admin portal setup
- `DEPLOYMENT.md` — launch and DNS notes
- `DESIGN.md` — approved visual direction
- `SOURCE-MIGRATION.md` — notes from the old site migration
- `ATTRIBUTION.md` — asset and source acknowledgements

## License and governance

Copyright Agra Orthopaedic Society. Public website content, society identity, member information, and photographs are governed by the society.
