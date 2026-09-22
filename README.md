# Stayfolio — Airbnb Listing Page Clone

**A pixel-fidelity clone of a modern property-listing page** — the full
listing view, a full-screen Photo Tour, and a keyboard-navigable single-photo
Lightbox. Built as a take-home UI fidelity exercise.

> Designed & built by **Er. Pankaj Kumar**
> © 2026 · MIT Licensed · desktop-first (mobile not in scope for this task)

---

## ✨ What's included

| Screen | What it does |
|---|---|
| **Listing page** | Hero photo grid, title/rating/share/save bar, host + capacity overview, expandable description, amenities grid + "show all" modal, sticky booking card with a guest stepper and live price breakdown, reviews with category rating bars, host profile, and a location section. |
| **Photo Tour** | Full-screen overlay opened from "Show all photos" or any hero image, showing every photo in a scrollable grid. |
| **Lightbox** | Single-photo viewer with prev/next arrows, **←/→ keyboard navigation**, a live-announced photo counter, focus trapping, and a fade/scale transition between photos. |

Every overlay (Photo Tour, Lightbox, Amenities modal) shares one
accessibility-hardened hook: focus moves in on open, Tab is trapped inside,
**Escape closes it**, and focus returns to whatever triggered it — this is
true keyboard parity, not just a visual match.

---

## 🧱 Tech stack — and why

| Layer | Choice | Why |
|---|---|---|
| **Framework** | React 18 + Vite | Fast dev server, zero-config build, no framework overhead for a static, client-only clone. |
| **Styling** | Plain CSS, one file per component, tokens in `src/styles/global.css` | Pixel-fidelity work benefits from explicit control over every value — a utility framework would fight, not help, exact spacing/color matching. |
| **State** | React `useState` only | The app has no server, no auth, no persistence requirement — Redux/Zustand would be pure overhead. |
| **Data** | Static mock module (`src/data/listing.js`) | Keeps the assessment focused on UI fidelity rather than backend plumbing, per the task's "backend is optional" note. |
| **Images** | Live Unsplash URLs (`images.unsplash.com`) | Free-to-use, no API key, no bundled binary assets, no copyright risk. |
| **Icons** | Hand-written inline SVGs (`src/components/Icons.jsx`) | No icon-library dependency; every icon shares one stroke/viewBox convention. |
| **Build/deploy** | Vite static build → any static host | The whole app is a static bundle; no server runtime needed. |

No backend, database, or API keys are required to run this project.

---

## 🚀 Run it locally

**Requirements:** Node.js 18+ and npm (bundled with Node).

```bash
# 1. Unzip and enter the project
cd airbnb-clone

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open the URL Vite prints (typically **http://localhost:5173**).

### Other useful commands

```bash
npm run build     # production build -> dist/
npm run preview   # serve the production build locally, to sanity-check before deploying
```

---

## 🌐 Deploying it live

The app is a static Vite build, so any static host works. **Vercel** is the
simplest for a project already shaped like this one:

1. Push this folder to a **private** GitHub/GitLab repo (the task asks you
   not to make it public).
2. Go to [vercel.com](https://vercel.com) → **New Project** → import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output
   directory: `dist`. (Vercel usually detects these automatically.)
4. Deploy — you'll get a `your-project.vercel.app` URL.

Alternatives that work identically for a static Vite build: **Netlify**
(drag-and-drop the `dist/` folder, or connect the repo), **Cloudflare Pages**,
or **GitHub Pages** (set `base` in `vite.config.js` to your repo name if using
a project page).

---

## 📂 Project structure

```
airbnb-clone/
├── src/
│   ├── components/        # One .jsx + co-located .css per component
│   ├── data/listing.js    # All mock content (photos, host, reviews, pricing)
│   ├── hooks/useOverlay.js# Shared focus-trap/Escape/scroll-lock hook
│   ├── styles/global.css  # Design tokens (color, type, spacing, radius, shadow)
│   ├── App.jsx / App.css
│   └── main.jsx
├── architecture/
│   ├── architecture-diagram.png / .svg
│   └── ARCHITECTURE.md    # Written rationale per layer
├── prompts/PROMPTS.md     # AI prompt sequence used to build this
├── .claude/
│   ├── agents/            # Subagent configs (fidelity, a11y, code-structure review)
│   ├── skills/            # Reusable "pixel-fidelity-review" skill
│   └── (CLAUDE.md at repo root)
├── LICENSE
└── README.md
```

---

## 🤖 AI-assisted development

This project was built with an AI coding assistant (Claude), using:
- A **discovery pass** to inventory every screen, interactive element, and
  keyboard behavior before writing code (see `prompts/PROMPTS.md`).
- Three **Claude Code subagents** (`.claude/agents/`) for repeatable
  quality passes: `ui-fidelity-reviewer`, `a11y-auditor`, `code-structure-reviewer`.
- A reusable **skill** (`.claude/skills/pixel-fidelity-review/`) documenting
  the general process for cloning a real UI without lifting its code.
- A project-level `CLAUDE.md` so any future AI session inherits the same
  conventions (design tokens only, shared overlay hook, accessibility as a
  requirement, no copied assets).

Full prompt sequence: [`prompts/PROMPTS.md`](./prompts/PROMPTS.md).

---

## 🧭 Architecture diagram

A production-scale architecture for a real vacation-rental marketplace
(covering frontend, backend, storage, search, and deployment scaling) is in
[`architecture/architecture-diagram.png`](./architecture/architecture-diagram.png),
with the written rationale in
[`architecture/ARCHITECTURE.md`](./architecture/ARCHITECTURE.md).

---

## ⚖️ A note on originality & scope

- No markup, CSS, class names, or assets were copied from any reference
  clone — this was rebuilt from first principles against Airbnb's well-known
  public visual language, using original copy and Unsplash photography.
- "Airbnb" is a trademark of Airbnb, Inc. This is an independent,
  non-commercial UI exercise, not affiliated with or endorsed by Airbnb.
- Scope is intentionally **desktop-only**, per the task brief.
