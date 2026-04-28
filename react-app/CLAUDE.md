# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A React-based presentation/slide deck application for KEN Logistics, showcasing an import-export customs software solution. Contains 25 slides with keyboard/mouse navigation, fullscreen support, and responsive scaling.

## Commands

- `npm run dev` — Start Vite dev server with HMR
- `npm run build` — Production build (outputs to `dist/`)
- `npm run lint` — Run ESLint
- `npm run preview` — Preview production build locally

## Architecture

**Stack:** React 19 (JSX, no TypeScript), Vite 8, CSS Modules

**Component hierarchy:**
```
App → Presentation (state/navigation orchestrator)
        ├── SlideComponent (Slide01–Slide25, each in own directory)
        │     └── SlideLayout (theme wrapper: light/dark)
        │           ├── Header
        │           └── Footer
        ├── Progress Bar
        ├── Controls (prev/next, fullscreen, slide list toggle)
        └── SideList (slide thumbnails panel)
```

**Key files:**
- `src/components/Presentation/Presentation.jsx` — Main orchestrator: slide state, keyboard shortcuts, auto-scaling, UI visibility
- `src/slides/index.js` — Slide registry (id, title, component) for all 25 slides
- `src/styles/global.css` — CSS custom properties (color palette, shadows, gradients) and theme definitions
- `src/components/SlideLayout/SlideLayout.jsx` — Reusable slide wrapper with light/dark theme support

**Styling:** CSS Modules per component + global CSS variables. Slides render at 1280x720 base size and are dynamically scaled via `transform: scale()` to fit the viewport.

**Navigation:** All state-driven via React hooks in Presentation.jsx. Arrow keys, Space, PageUp/Down, Home/End, F (fullscreen), L (slide list), Escape.

## Conventions

- All UI text is in Vietnamese
- Each slide lives in its own directory under `src/slides/SlideNN/` with a `.jsx` and `.module.css`
- Static images used in slides are in `public/images/`
- Fonts loaded externally: Montserrat (headings) and Inter (UI) via Google Fonts, icons via Font Awesome 6.4
- react-router-dom is installed but not currently used
- No test framework is configured
