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

`/` · `/work` · `/work/[slug]` · `/about` · `/writing` · `/writing/[slug]` · `/contact`

## Phases

- [x] **P0 — Foundations**
- [x] **P1 — App shell & navigation**
- [ ] **P2 — Home**
- [ ] **P3 — Work + Project detail**
- [ ] **P4 — About**
- [ ] **P5 — Writing + Blog detail**
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
- [ ] Hero: badge, cycling-word headline, intro, CTAs
- [ ] Status panel with live Tehran clock
- [ ] Selected work — featured ProjectCards (3D tilt)
- [ ] WorkList with cursor-following preview tile (the centerpiece interaction)
- [ ] Skills marquee + live-git ActivityTicker

### P3 — Work + Project detail
- [ ] Work page: filter tabs, card grid, work index list
- [ ] Project detail: hero band, overview, highlights, meta card
- [ ] Gallery (placeholder image slots), comments, next-project nav, like button

### P4 — About
- [ ] Bio + portrait placeholder + status panel
- [ ] Work experience rows
- [ ] Grouped skills (level dots / "learning" badges)
- [ ] "How I got here" timeline + CTA

### P5 — Writing + Blog detail
- [ ] Writing list with search
- [ ] Blog detail: sticky scroll-spy TOC
- [ ] CodeBlock with syntax highlighting + copy
- [ ] Newsletter, comments, related posts

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
