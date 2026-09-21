# Engineering Scratchpad & Work Log

**Project**: Bhartiya Industries Web Experience  
**Branch**: `main`  
**Current Production**: [https://bhartiyaindustries.vercel.app/](https://bhartiyaindustries.vercel.app/)  
**Primary Engine**: Vanilla HTML5 / CSS3 / ES6+ JavaScript  

---

## 📌 Status & Health Snapshot

- **Build Pipeline**: Static (zero build step required, direct Edge CDN distribution via Vercel).
- **Runtime Dependencies**: `0` packages (zero `node_modules` vulnerability or maintenance overhead).
- **Core Engine Size**: `styles.css` (~39 KB unminified), `main.js` (~25 KB unminified). Total transfer < 20 KB gzipped.
- **Frame Budget**: Maintained 60 FPS on standard displays, 120 FPS on high-refresh-rate displays.

---

## 🔬 Parameter Tuning & Calibration Table

Below are the calibrated constants currently governing the dynamic engine in `js/main.js` and `css/styles.css`:

| Parameter | Current Value | Rationale & Impact |
| :--- | :--- | :--- |
| `PARTICLE_COUNT` | `clamp(130, 180, innerWidth / 8.5)` | Scaled responsively to screen width; avoids particle crowding on mobile while maintaining density on 4K. |
| Particle Spectrum | 72% White/Grey, 15% Green, 13% Gold | Rebalanced from earlier versions to keep the website clean and airy without overwhelming text readability. |
| Particle Restitution | `0.88` with min bounce `0.22 * z` | Elastic collision with screen borders prevents motes from ever disappearing or bunching along borders. |
| Mouse Wake Radius | `145 * z` px | Defines the localized repulsive eddy force around the user's cursor. |
| Card Tilt Max Angle | `±14deg` | Optimal 3D perspective depth without text distortion or clipping neighbouring layout containers. |
| Button Magnetic Pull | `clamp(-14px, 14px, delta * 0.44)` | Subtle tactile magnetism that follows cursor movement without detaching from original button flow. |
| Scroll Lerp Factor | `0.14` | Smooth exponential approach factor for reading progress and continuous parallax translation. |
| Parallax Scale Ratio | `0.20` | Vertical rate of full-bleed background images relative to scroll speed. |
| Floating Word Easing | `cubic-bezier(0.18, 1.25, 0.35, 1)` | Slight overshoot spring physics that mimics an elastic buoyant floating object. |

---

## 📝 Sprint & Iteration Log

### Sprint 1 — Base Static Architecture
- **Objective**: Replicate existing legacy brand content into a modern, responsive static web structure.
- **Accomplishments**:
  - Implemented semantic `index.html` (Hero, Products, Sustainable farming, Enquiry).
  - Built `about.html` highlighting Founder Shri Surender Kumar Gupta (1965) and modern leadership.
  - Constructed the core CSS design tokens in `css/styles.css` with flat greens, crisp whites, and Montserrat typography.

### Sprint 2 — Environmental Particle Canvas
- **Objective**: Introduce ambient living atmosphere evoking golden harvest fields.
- **Accomplishments**:
  - Added full-screen `<canvas id="ambient-canvas">` with DPR scaling.
  - Built particle class with sinusoidal harmonic oscillation.
  - Added mouse repulsive fluid eddy dynamics.

### Sprint 3 — 3D Tilt & Specular Light Across Cards
- **Objective**: Enhance card interaction across home and about pages.
- **Accomplishments**:
  - Attached 3D perspective transformation matrices to `.feature-card` and `.enquiry-card`.
  - Added CSS custom properties `--mouse-x` and `--mouse-y` for dynamic specular glare reflection.
  - Replicated effect across all About page feature cards (commit `33fd7b0`).

### Sprint 4 — Particle Refinement & Elastic Boundary Physics
- **Objective**: Address user feedback regarding particle density and edge behaviour.
- **Accomplishments**:
  - Tuned particle density bounds from unbounded to $[130, 180]$ (commits `7aa36d9`, `bccfbe6`).
  - Adjusted palette from heavy gold/green to 72% crisp white/grey starlight dust for clean elegance (commit `475ecb7`).
  - Added border bounce physics: particles bounce off screen edges rather than resetting or clustering.

### Sprint 5 — Kinetic Typography Engine (`float-word`)
- **Objective**: Make editorial text interactive and pleasant to read.
- **Accomplishments**:
  - Implemented non-destructive DOM text-node parser (`enableFloatingWords()`).
  - Wrapped textual tokens into `.float-word` spans without touching HTML tags or SVGs.
  - Added spring upward lift on hover with adjacent wave ripple via `:has(+ .float-word:hover)`.

### Sprint 6 — Documentation Overhaul & Artifacts
- **Objective**: Document complete tech stack, implementation plans, and engineering scratchpad.
- **Accomplishments**:
  - Authored comprehensive `README.md` with complete technical breakdowns and live links (commit `b008261`).
  - Created `IMPLEMENTATION_PLAN.md` detailing mathematical models, architecture, and verification matrix.
  - Created `SCRATCHPAD.md` tracking parameters, technical decisions, and sprint history.

---

## 💡 Key Architectural Decisions & Trade-offs

### 1. Vanilla JS vs. SPA Framework (React / Next.js)
- **Decision**: Remain 100% Vanilla HTML/CSS/JS.
- **Trade-off**: Requires manual DOM manipulation for interactive elements (such as wrapping words in spans).
- **Benefit**: No compilation step, zero bundle weight, instantaneous First Contentful Paint (< 0.4s), and zero vulnerability surface from third-party NPM packages.

### 2. Non-Destructive Text Node Parsing
- **Problem**: Naive `innerHTML.replace()` wipes existing event listeners, breaks inline `<svg>` structures, and can corrupt form elements.
- **Solution**: Recursive DOM text-node walker that strictly processes `Node.TEXT_NODE` (nodeType 3), splits on regex whitespace, and injects fragments without disturbing adjacent element nodes.

### 3. Elastic Boundary Bounce vs. Wrap-Around
- **Problem**: When particles wrap around screen edges, they pop visibly in and out of existence.
- **Solution**: Implemented elastic velocity reversal with coefficient $0.88$ whenever motes contact any screen boundary. This keeps particles active on screen permanently and maintains natural spatial density.

### 4. Passive Event Listeners for Scrolling
- **Problem**: Scroll listeners can trigger main-thread layout thrashing if blocking.
- **Solution**: All scroll and mousemove listeners use `{ passive: true }`, with rendering decoupled into independent `requestAnimationFrame` loops.

---

## 🎯 Active Backlog & Next Steps

- [x] Comprehensive `README.md` created and pushed to GitHub
- [x] Technical implementation plan (`IMPLEMENTATION_PLAN.md`)
- [x] Engineering scratchpad (`SCRATCHPAD.md`)
- [ ] Add `<link rel="preload">` tags for high-priority hero background images (`paddy-green.jpg`)
- [ ] Implement responsive image `srcset` for faster mobile thumbnail downloads
- [ ] Web Manifest (`manifest.json`) and Service Worker for offline brand presentation
