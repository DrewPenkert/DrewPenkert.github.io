# CLAUDE.md — drew-site

## Project overview
Drew Penkert's personal portfolio site. React 19 + Vite, deployed to GitHub Pages via `npm run deploy` (gh-pages). No TypeScript, no component library, no CSS framework — plain JSX and hand-written CSS.

## Stack
- React 19, React Router v7, Vite 8
- GSAP for animations, Lenis for smooth scroll
- CSS per-component (co-located `.css` files)
- Deploy: `gh-pages -d dist` → `drewpenkert.github.io`

## File conventions
- Each page/case study is a self-contained `FooCaseStudy.jsx` + `FooCaseStudy.css` pair in `src/`
- Routes are defined in `main.jsx`
- Static assets live in `public/` and are referenced with absolute paths (e.g. `/image.png`)
- Shared utilities: `animations.js` (Lenis + GSAP scroll init), `Cursor.jsx`, `CookieBanner.jsx`

## Code style
- Functional components only, no class components
- Co-locate data arrays (META, PROJECTS, etc.) at the top of the file that uses them
- Use `useNavigate` for programmatic routing, never `<Link>` from react-router for project cards
- CSS class names use BEM-ish kebab-case (`.cs-reveal`, `.project-item`, `.about-grid`)
- No utility-class frameworks — write specific CSS selectors
- No TypeScript, no PropTypes — keep it plain JS

## Animation patterns
- Scroll-reveal: add `.cs-reveal` class, `IntersectionObserver` adds `.cs-visible` on enter
- Page-level scroll/animation init goes in a `useEffect` at the top of the component
- Lenis is initialised once per page via `initLenis()` from `animations.js`

## Adding a new case study
1. Create `src/FooCaseStudy.jsx` and `src/FooCaseStudy.css`
2. Add route in `main.jsx`
3. Add entry to `PROJECTS` array in `App.jsx` with `slug`
4. Add `NEXT_PROJECT` pointer in the previous case study so navigation chains correctly
5. Put images in `public/` — URL-encode spaces in filenames or rename to use hyphens

## Copy and tone
- Natural, conversational language — write how a person speaks, not how a brand deck reads
- No em dashes (—) in copy; use commas, full stops, or rewrite the sentence

## What not to do
- Do not add TypeScript, Tailwind, or any CSS-in-JS
- Do not install new dependencies without asking
- Do not add comments explaining what code does — only add comments for non-obvious WHY
- Do not create README or doc files unless asked
- Do not push or deploy without explicit instruction — `npm run deploy` publishes live
