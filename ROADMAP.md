# Portfolio Rebuild — Roadmap

Rebuilding the **Studio** portfolio design (`design-schema/`) as a real
**Next.js 16 (App Router) · React 19 · Tailwind v4 · TypeScript** site.

The source design is a self-contained client-side React SPA. This rebuild turns it
into real routes with server-rendered content, ports its inline-style theme to CSS
variables + Tailwind `@theme`, and keeps the interactions that make it feel alive.

## Decisions

- **Routing:** real App Router routes (not the SPA's `?p=` state router).
- **Dynamic bits:** contact form, newsletter, comments and likes stay **front-end mocks** for now.
- **Images:** styled placeholders (the export's gradient look); real assets dropped in later via `next/image`.

## Tech

| | |
|---|---|
| Framework | Next.js 16.2.7 (App Router) |
| UI | React 19.2.4 |
| Styling | Tailwind CSS v4 (`@theme`) + CSS variables |
| Fonts | Bricolage Grotesque (display) · Inter (sans) · JetBrains Mono (mono) |
| Language | TypeScript |

## Routes

`/` · `/projects` · `/projects/[slug]` · `/about-me` · `/blogs` · `/blogs/[slug]` · `/contact`

> Paths match the previously-deployed site (`/projects`, `/blogs`, `/about-me`) to
> preserve existing search rankings / inbound links. `/contact` is new. Nav labels
> stay Work / About / Writing per the design; only the URLs are pinned.

## Phases

- [x] **P0 — Foundations**
- [x] **P1 — App shell & navigation**
- [x] **P2 — Home**
- [x] **P3 — Work + Project detail**
- [x] **P4 — About**
- [x] **P5 — Writing + Blog detail**
- [ ] **P6 — Contact, ⌘K search & polish**

---

### P0 — Foundations
- [x] Load fonts via `next/font` (Bricolage Grotesque, Inter, JetBrains Mono)
- [x] Port the dark+light theme to CSS variables + Tailwind v4 `@theme`
- [x] Theme switching: dark default, `localStorage` persistence, no flash on load
- [x] Per-project accent color pairs (mint / amber / violet / sky / rose) as CSS vars
- [x] Typed data layer in `src/data` (PERSON, SKILLS, PROJECTS, BLOGS, EXPERIENCE, COMMENTS, ACTIVITY)

### P1 — App shell & navigation
- [x] Root layout, base styles, reduced-motion handling
- [x] TopBar: logo, nav, ⌘K search button, theme toggle, mobile burger + menu
- [x] Footer: CTA, page links, social links, availability
- [x] Route skeletons for all pages + active-nav highlighting
- [x] Shared primitives: Reveal (scroll-in), magnetic Button, SectionHead, Icon set
- [x] Page transitions (fade/slide)
- [x] Cache Components + `unstable_instant` on routes for instant navigation

> ⌘K search button is present in the TopBar but wired to the modal in **P6**.

### P2 — Home
- [x] Hero: badge, cycling-word headline, intro, CTAs
- [x] Status panel with live Tehran clock (dynamic hole behind Suspense)
- [x] Selected work — featured ProjectCards (3D tilt)
- [x] WorkList with cursor-following preview tile (the centerpiece interaction)
- [x] Skills marquee + live-git ActivityTicker

### P3 — Work + Project detail
- [x] Work page: filter tabs, card grid, work index list
- [x] Project detail: hero band, overview, highlights, meta card
- [x] Gallery (placeholder image slots), comments, next-project nav, like button
- [x] `/work/[slug]` statically generated (generateStaticParams) for all projects

### P4 — About
- [x] Bio + portrait placeholder + status panel
- [x] Work experience rows
- [x] Grouped skills (level dots / "learning" badges)
- [x] "How I got here" timeline + CTA

### P5 — Writing + Blog detail
- [x] Writing list with search (`/blogs`)
- [x] Blog detail (`/blogs/[slug]`, generateStaticParams): sticky scroll-spy TOC
- [x] CodeBlock with syntax highlighting + copy (theme-aware via CSS vars)
- [x] Newsletter, comments, related posts
- [x] Align URLs to the deployed site (work→/projects, about→/about-me, writing→/blogs)

### P6 — Contact, ⌘K search & polish
- [ ] Contact page: form (mock submit) + social links
- [ ] Global ⌘K search modal (projects + writing)
- [ ] Responsive breakpoints (980 / 880 / 760 / 600 / 560)
- [ ] Reduced-motion, accessibility pass
- [ ] Per-route metadata / OpenGraph, favicon
- [ ] Lint + production build green

## Workflow

One commit per phase, pushed to `origin`. Conventional-commit style, e.g.:

```
feat(p0): foundations — fonts, theme tokens, data layer
```

Each phase ticks its box here in the same commit.
