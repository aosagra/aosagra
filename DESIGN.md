# AOS Agra design system

## Direction

The website is the formal digital home of the Agra Orthopaedic Society: academic, dignified, locally rooted, and easy to use. It should feel more like a respected professional institution than a hospital campaign or a software product.

## Identity

- The AOS Agra mark and wordmark are the sole header identity. Supporting IOA seals belong only in the footer “Affiliations” strip and must remain visually secondary.
- The Taj Mahal silhouette is the distinctive local motif. Use its arch, crop, and alignment language as a quiet structural device in heroes, section transitions, and legacy moments—never as decorative wallpaper or a literal Taj-plus-bone logo.
- Use real AOS photographs. Do not introduce stock medical imagery.

## Information architecture

- Public navigation has five MECE groups: Society, Learning, Events, Membership, and Public.
- Only verified, ready pages belong in public navigation, search, sitemap, and static output.
- Draft, login, and mock-form content can remain editable in source but stays unpublished until its underlying service is real.
- Prefer one clear action per section. Membership and event enquiries use the membership overview or direct society contact until secure forms are connected.

## Colour

- Deep Peacock Navy: `#083c50` / `oklch(0.34 0.07 218)`
- Society Blue: `#0a5672` / `oklch(0.43 0.09 223)`
- Quiet Blue-Grey: `#eef4f6` / `oklch(0.96 0.012 218)`
- White: `#ffffff`
- Restrained Gold: `#be963f` / `oklch(0.70 0.11 86)`
- Ink: `#17252d` / `oklch(0.26 0.025 225)`

Gold is reserved for the primary membership action and small points of emphasis.

## Type

- Display and editorial headings: Source Serif 4
- Interface, navigation, and body copy: Overpass
- Body measure: no more than 72 characters
- Display tracking never tighter than `-0.035em`
- The current pairing remains the production default until a replacement is approved.
- Compare typography at `/type-lab/`. On any page, add `?fontlab=1&font=source|civic|agra|contemporary` to open the preview controls.
- The “Agra” candidate uses Martel + Hind and is the preferred locally rooted, Devanagari-ready direction.

## Shape and motion

- Radius: 6px controls, 12px cards, 16px large media
- Motion: 120–220ms with strong ease-out; no bounce
- Pressable controls scale to `0.97` on active
- Reduced-motion settings remove directional movement

## Accessibility

- WCAG 2.2 AA contrast
- Visible keyboard focus
- Minimum 44px touch targets
- Semantic headings, navigation, forms, and landmarks
- Content remains understandable with images or motion disabled
