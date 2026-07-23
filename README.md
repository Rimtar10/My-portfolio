# Rim Tarhini — Portfolio

Built from the design brief: React + Vite + TypeScript, Tailwind CSS v4 (custom
"Warm Creative" theme), Framer Motion, React Three Fiber + drei for the hero,
Lucide React for icons.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build to dist/
npm run preview   # preview the production build locally
```

## Things to finish before it's fully "yours"

These are flagged inline in the code too (search for `TODO` / "coming soon"),
but the short list:

1. **Photos.** The About portrait, the three Beyond Code tiles, and every
   project screenshot are currently elegant placeholder gradients
   (`src/components/ui/PlaceholderImage.tsx`). Drop real images into
   `public/images/` and swap the relevant `<PlaceholderImage />` usage for a
   plain `<img src="/images/whatever.jpg" ... />` in:
   - `src/components/sections/About.tsx`
   - `src/components/sections/BeyondCode.tsx`
   - `src/components/ui/ProjectCard.tsx`

2. **Skill tiers.** `src/data/skills.ts` has a full first-pass tier
   (Familiar/Proficient/Advanced/Expert) assigned per skill, based on the
   roles described in the brief — but you know your own levels better than
   the brief does. Open that file and adjust any `tier` values; the bars
   pick up the change automatically.

3. **Contact form.** The form in `src/components/sections/Contact.tsx` is
   fully wired to POST to Formspree — it just needs your real form ID.
   Create a form at [formspree.io](https://formspree.io) and paste the ID
   into `src/data/site.ts` (`formspreeId`). Until then the UI works but
   won't actually send anything (a small note under the form says so).

4. **LinkedIn URL.** `src/data/site.ts` has a placeholder LinkedIn URL —
   swap it for your real profile link.

5. **Favicon.** Replaced the Vite default with a small on-brand mark
   (`public/favicon.svg`) using the node/wireframe motif from the hero —
   feel free to swap for something else.

## Notes on a few decisions

- **Deep-teal** is used in exactly one place (the footer/contact section),
  per the brief's own "use sparingly" rule — Beyond Code stays on the warm
  `bg-alt` cream tone instead.
- **3 projects are visually featured** (span the full grid width, bigger
  screenshot area): the OMS matching engine, GoCart, and Envision — the
  three strongest technical stories in the set. The rest are still all
  there, just in the standard card size.
- **The 3D hero** (`src/components/three/`) is code-split via `React.lazy`
  so it never blocks first paint, and falls back to a static gradient for
  `prefers-reduced-motion` or if WebGL isn't available at all. It does NOT
  gate on `navigator.hardwareConcurrency` — several mainstream browsers cap
  that value for privacy reasons, and gating on it would silently disable
  the signature visual for a chunk of real visitors on a scene that's tiny
  anyway (12 vertices).
- **Dark mode** from the brief's Section 2 is optional and not implemented
  here — the color tokens (`src/index.css` `@theme` block) are all named
  so a dark variant could be added later without restructuring anything.

## Deploying

Zero-config on [Vercel](https://vercel.com) or [Netlify](https://netlify.com) —
connect the GitHub repo and both will detect the Vite build automatically
(`npm run build`, output directory `dist`).

## Project structure

```
src/
  data/         content + config (experience, projects, skills, site info)
  hooks/        useReducedMotion, useMediaQuery, useCanRender3D
  components/
    layout/     Navbar
    sections/   one file per page section (Hero, About, Experience, ...)
    three/      the R3F hero scene (code-split) + ambient gradient blob
    ui/         shared primitives (Button, Badge, ProjectCard, SkillBar, ...)
```
