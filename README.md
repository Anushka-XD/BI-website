# Bhartiya Industries — Official Web Experience

[![Live Website](https://img.shields.io/badge/Live%20Website-bhartiyaindustries.vercel.app-6ab55f?style=for-the-badge&logo=vercel&logoColor=white)](https://bhartiyaindustries.vercel.app/)
[![Tech Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20ES6%2B%20%7C%20Canvas2D-2f6fed?style=for-the-badge)](https://developer.mozilla.org/)
[![Performance](https://img.shields.io/badge/Performance-Zero%20Dependencies%20%7C%2060%2B%20FPS-4f9a45?style=for-the-badge)](https://web.dev/)

> **"Nurturing Nature, Nourishing Lives"** — A bespoke, high-performance, animation-rich web platform for **Bhartiya Industries**, premier rice millers and global exporters established in 1965.

---

## 📑 Table of Contents

1. [Project Overview](#-project-overview)
2. [Live Deployment](#-live-deployment)
3. [Complete Technology Stack](#-complete-technology-stack)
4. [Architecture & Project Structure](#-architecture--project-structure)
5. [Visual Effects & Implementation Plans](#-visual-effects--implementation-plans)
   - [1. Ambient Atmospheric Living Particle Canvas (Sunlit Motes)](#1-ambient-atmospheric-living-particle-canvas-sunlit-motes)
   - [2. Interactive Kinetic Floating Words & Typography Engine](#2-interactive-kinetic-floating-words--typography-engine)
   - [3. Interactive 3D Tilt & Specular Sheen for Cards](#3-interactive-3d-tilt--specular-sheen-for-cards)
   - [4. Dynamic 2.5D Interactive Media Lens & Dual-Layer Parallax](#4-dynamic-25d-interactive-media-lens--dual-layer-parallax)
   - [5. Magnetic Fluid Buttons & Liquid Ripple Waves](#5-magnetic-fluid-buttons--liquid-ripple-waves)
   - [6. Bidirectional Choreographed Scroll Reveals](#6-bidirectional-choreographed-scroll-reveals)
   - [7. Kinetic Scroll Dynamics: Progress Line & Depth Parallax](#7-kinetic-scroll-dynamics-progress-line--depth-parallax)
   - [8. Sticky Glassmorphism Header with Elevation Shift](#8-sticky-glassmorphism-header-with-elevation-shift)
   - [9. One-Click Copy Clipboard Feedback System](#9-one-click-copy-clipboard-feedback-system)
   - [10. Accessibility & Reduced Motion Engine](#10-accessibility--reduced-motion-engine)
6. [Design System & Color Palette](#-design-system--color-palette)
7. [Pages & Content Structure](#-pages--content-structure)
8. [Local Development & Setup](#-local-development--setup)
9. [Deployment](#-deployment)
10. [Performance Highlights](#-performance-highlights)
11. [License & Credits](#-license--credits)

---

## 🌾 Project Overview

**Bhartiya Industries** is a multi-page web application showcasing five decades of heritage in agriculture, grain milling, and global export. The website is engineered with modern aesthetics: organic fluid animations, micro-interactions, canvas-driven environmental motes, and interactive typography that evokes golden paddy fields and pristine grains.

The application operates with **zero external JavaScript runtime dependencies or heavy frameworks**, maximizing performance, instant loading speeds, and consistent 60–120 FPS rendering across devices.

---

## 🚀 Live Deployment

The website is continuously deployed and hosted on Vercel:

- **Production URL**: [https://bhartiyaindustries.vercel.app/](https://bhartiyaindustries.vercel.app/)
- **Repository**: [Anushka-XD/BI-website](https://github.com/Anushka-XD/BI-website)

---

## 🛠 Complete Technology Stack

| Layer | Technology | Details & Role |
| :--- | :--- | :--- |
| **Markup & Semantics** | **HTML5** | Strict semantic elements (`<header>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`), accessible ARIA attributes (`aria-expanded`, `aria-hidden`, `aria-label`). |
| **Styling & Design System** | **CSS3 (Vanilla)** | CSS Custom Properties (Design Tokens), Flexbox & CSS Grid, 3D Transforms (`perspective`, `rotateX/Y`, `translate3d`), CSS backdrop filters, keyframe animations, fluid typography (`clamp()`). |
| **Logic & Environment Engine** | **JavaScript (ES6+)** | Pure Vanilla ES6+ inside an IIFE closure; non-blocking, event-delegated, hardware-accelerated. |
| **Graphics & Rendering** | **HTML5 Canvas 2D API** | Custom particle system rendering pollen, starlight motes, and agricultural dust in real time. |
| **Browser Web APIs** | **IntersectionObserver API** | Efficient scroll-triggered visibility and choreography tracking without scroll-thrashing. |
| | **requestAnimationFrame (rAF)** | Silky 60+ FPS animation loops for particle physics and continuous parallax interpolation. |
| | **Async Clipboard API** | Instant one-click copy functionality (`navigator.clipboard.writeText`) with fallback. |
| | **matchMedia API** | Automatic compliance with `prefers-reduced-motion: reduce`. |
| **Typography** | **Google Fonts** | `Montserrat` weights 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold) with preconnect optimization. |
| **Iconography** | **Vector SVGs** | Clean, inline SVG icons for instant render times and zero icon-font overhead. |
| **Hosting & CI/CD** | **Vercel** | Global Edge CDN hosting with zero-configuration Git deployment. |

---

## 📁 Architecture & Project Structure

```bash
BI-website/
├── README.md               # Complete project documentation & technical specifications
├── index.html              # Landing page (Hero, Products, Machinery, Legacy, Enquiry)
├── about.html              # About page (Founder story, Mission, Modern Sorting, Outreach)
├── css/
│   └── styles.css          # Unified stylesheet: tokens, layouts, animations, responsive rules
├── js/
│   └── main.js             # Core animation engine: canvas, tilt, magnetic, reveals, float words
└── images/
    ├── logo.png            # Official company brand crest
    ├── paddy-green.jpg     # Hero background image of lush paddy fields
    ├── rice-plant.jpg      # Vibrant close-up of mature rice crops
    ├── rice-grains.jpg     # High-resolution Sharbati grains
    ├── cooked-rice.jpg     # Premium cooked fluffy rice bowl
    ├── terraces.jpg        # Terraced paddy farming fields
    ├── rice-closeup.jpg    # Detailed macro of PR11 grains
    ├── rice-field-1.png    # Historic rice field landscape
    ├── rice-field-2.png    # Traditional Basmati fields
    ├── sunset-field.jpg    # Golden hour agricultural panoramic banner
    ├── harvest.jpg         # Golden harvest landscape banner
    └── map.png             # Global export distribution network graphic
```

---

## 🎨 Visual Effects & Implementation Plans

The website features custom-engineered interactive visual effects designed to bring the grain milling process and agricultural environment to life. Below are the implementation breakdowns for each effect.

---

### 1. Ambient Atmospheric Living Particle Canvas (Sunlit Motes)

![Ambient Canvas](https://img.shields.io/badge/Feature-Canvas_2D_Particle_Physics-6ab55f?style=flat-square)

#### Purpose & Visual Design
Simulates the ambient environment of an open paddy field at harvest: golden pollen specks, fresh leaf motes, and soft starlight dust drifting peacefully in the sunlight. The motes respond dynamically to the visitor's cursor, creating a gentle fluid wake.

#### Implementation Architecture
- **Canvas Setup**: A fixed, full-viewport `<canvas id="ambient-canvas">` with `pointer-events: none` and high DPI compensation (`window.devicePixelRatio`).
- **Particle Classification**:
  - **72% Atmospheric Dust & Starlight**: Pure crisp whites, pearl whites, and misty slate greys (`rgba(255, 255, 255)`, `rgba(205, 215, 225)`).
  - **15% Fresh Living Emerald Leaf Motes**: Vibrant crop greens (`#6ab55f`, `#4f9a45`, `#72ac58`).
  - **13% Sunlit Golden Harvest Pollen**: Warm golden paddy hues (`#f5c33c`, `#eab432`, `#ffd24b`).
- **Kinetic Physics Model**:
  - Each particle has depth $z \in [0.35, 1.8]$, which scales its radius, velocity, and visual opacity.
  - Multi-frequency 2D harmonic wandering:
    $$\Delta x_{\text{sway}} = \cos(\text{phaseX}) \cdot A + \text{fieldBreeze}$$
    $$\Delta y_{\text{sway}} = \sin(\text{phaseY}) \cdot A$$
  - **Fluid Cursor Wake**: When the mouse moves within radius $R = 145 \cdot z$, an interactive eddy repulsive force deflects motes:
    $$\vec{F} = \left(1 - \frac{d}{R}\right) \cdot 2.0 \cdot z$$
  - **Elastic Viewport Bounce**: Particles bounce off viewport boundaries (`x <= 0`, `x >= width`, `y <= 0`, `y >= height`) with restitution $0.88$, ensuring particles remain active on-screen without disappearing or resetting.
- **Rendering Loop**: Driven by `requestAnimationFrame`, pausing automatically via `document.hidden` when the tab loses focus.

---

### 2. Interactive Kinetic Floating Words & Typography Engine

![Floating Words](https://img.shields.io/badge/Feature-Kinetic_DOM_Text_Engine-2f6fed?style=flat-square)

#### Purpose & Visual Design
Makes editorial content and product descriptions feel alive. When hovering over any heading, paragraph, or badge, the exact word hovered floats upward smoothly with an organic spring curve, while neighbouring words ripple sympathetically.

#### Implementation Architecture
- **Non-Destructive Text Node Splitting**:
  - `enableFloatingWords()` walks through semantic containers (`h1`–`h6`, `p`, `.section-label`, `.value`, `.stat-card`).
  - Only pure `TEXT_NODE` (nodeType 3) items are split on regex `/\s+/`, wrapping individual words in `<span class="float-word">word</span>` while preserving whitespace text nodes.
  - Excludes SVG trees, form inputs, buttons, and canvas nodes to protect interactive controls.
- **Micro-Wave Cascade via CSS Sibling Selectors**:
  - The hovered word elevates with spring physics:
    ```css
    .float-word:hover {
      transform: translateY(-5px) scale(1.055);
      color: var(--green-forest);
      text-shadow: 0 4px 14px rgba(106, 181, 95, 0.28);
    }
    ```
  - Preceding and subsequent words lift in sympathy using modern adjacent and `:has()` selectors:
    ```css
    .float-word:hover + .float-word,
    .float-word:has(+ .float-word:hover) {
      transform: translateY(-2.5px) scale(1.025);
    }
    ```
  - Headings feature a playful $-1.5^\circ$ rotational accent on hover.
  - White-text banners (Hero, Banner sections) automatically switch to a luminous starlight bloom glow.

---

### 3. Interactive 3D Tilt & Specular Sheen for Cards

![3D Card Tilt](https://img.shields.io/badge/Feature-3D_Perspective_Tilt-8e7cc3?style=flat-square)

#### Purpose & Visual Design
Feature cards and enquiry boxes react to mouse movements with tactile 3D perspective tilts and a dynamic specular glare tracking the cursor position across the card's surface.

#### Implementation Architecture
- **Dynamic Perspective Calculation**:
  - Cards bind `mouseenter`, `mousemove`, and `mouseleave` listeners.
  - Mouse coordinates are clamped and normalized relative to the card dimensions ($x \in [0, \text{width}]$, $y \in [0, \text{height}]$).
  - Rotation angles are calculated around the center:
    $$\text{rotY} = \left(\frac{x}{\text{width}} - 0.5\right) \cdot 14^\circ$$
    $$\text{rotX} = -\left(\frac{y}{\text{height}} - 0.5\right) \cdot 14^\circ$$
- **Hardware-Accelerated Transform**:
  ```css
  card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(10px) scale(1.035)`;
  ```
- **Dynamic Specular Glare (CSS Custom Properties)**:
  - Cursor percentages are written to CSS properties `--mouse-x` and `--mouse-y`.
  - An overlay pseudo-element renders a soft radial gradient light beam focused on $(--mouse-x, --mouse-y)$.
- **Smooth Spring Return**:
  - On `mouseleave`, cards transition back to neutral $(0^\circ, 0^\circ, 0\text{px})$ via cubic-bezier `cubic-bezier(0.16, 1, 0.3, 1)`.

---

### 4. Dynamic 2.5D Interactive Media Lens & Dual-Layer Parallax

![2.5D Media Lens](https://img.shields.io/badge/Feature-2.5D_Media_Depth-63d366?style=flat-square)

#### Purpose & Visual Design
Product showcase image frames act as responsive 3D observation viewports. Moving the cursor over an image pans the photography subtly inside the frame, while the frame tilts in perspective and the backdrop panel shifts in the opposite direction.

#### Implementation Architecture
- **Dual-Layer Movement**:
  - **Foreground Frame**: Tilts up to $\pm 3^\circ$ perspective (`rotateX`, `rotateY`).
  - **Internal Image**: Pans in the inverse direction of the cursor (`--img-pan-x`, `--img-pan-y` up to $\pm 26\text{px}$) creating an illusion of looking through a window into a field.
  - **Offset Background (`.offset-bg`)**: Translates in counter-direction $(-panX \cdot 0.75)$, producing layered 2.5D physical depth.
- **Specular Sunbeam Glare**:
  - A dynamic sheen gradient moves across the glass layer of the frame tracking cursor percentage coordinates.

---

### 5. Magnetic Fluid Buttons & Liquid Ripple Waves

![Magnetic Buttons](https://img.shields.io/badge/Feature-Magnetic_Interaction-4f9a45?style=flat-square)

#### Purpose & Visual Design
Primary buttons (`.btn`), arrows, and quick-contact links pull magnetically toward the user's cursor when hovered, accompanied by a liquid expanding ripple wave on click.

#### Implementation Architecture
- **Magnetic Proximity Vector**:
  - Calculates distance vector $(\Delta x, \Delta y)$ from the button's center.
  - Pull is clamped to $\pm 14\text{px}$:
    $$\text{pullX} = \text{clamp}(-14, 14, \Delta x \cdot 0.44)$$
    $$\text{pullY} = \text{clamp}(-14, 14, \Delta y \cdot 0.44)$$
  - Button translates smoothly via `translate3d(pullX, pullY, 0) scale(1.05)`.
- **Liquid Ripple Wave**:
  - On click, calculates click coordinate relative to the button's top-left.
  - Creates a `.ripple-wave` circular element spanning the maximum diagonal dimension.
  - Scales from `scale(0)` to `scale(2.5)` with fading opacity, automatically removed from the DOM after 650ms.
- **Ambient Light Sheen**:
  - Buttons feature an ambient $45^\circ$ light bar across their surface that slides through on hover (`translateX(-120%)` to `translateX(120%)`).

---

### 6. Bidirectional Choreographed Scroll Reveals

![Choreographed Reveals](https://img.shields.io/badge/Feature-Bidirectional_Choreography-2f6fed?style=flat-square)

#### Purpose & Visual Design
Elements do not merely fade in once; sections slide gracefully onto the screen with cinematic choreography when scrolling down, and reverse smoothly if the user scrolls back up.

#### Implementation Architecture
- **IntersectionObserver Engine**:
  - Configured with `threshold: 0.12` and `rootMargin: "30px 0px -40px 0px"`.
  - Automatically adds `.visible` when entering the viewport, and removes `.visible` when leaving, enabling bidirectional animations.
- **Staggered Choreography & Alternating Directions**:
  - **Standard Split Sections**: Text slides in from the left (`translate3d(-175px, 25px, 0) rotate(-3.5deg)`), while media slides in from the right (`translate3d(175px, 25px, 0) rotate(3.5deg)`).
  - **Reversed Split Sections (`.split.reverse`)**: Seamlessly inverts entry paths.
  - **Feature Grid Cards**: Enter from three distinct angles:
    - Card 1: Enters from left ($-145\text{px}, -4^\circ$).
    - Card 2: Enters from bottom ($+85\text{px}$, delayed by $120\text{ms}$).
    - Card 3: Enters from right ($+145\text{px}, +4^\circ$, delayed by $240\text{ms}$).
  - **Cascading Content Inside Cards**: Headings, paragraphs, feature lists, and buttons cascade into place with progressive transition delays ($60\text{ms}$, $120\text{ms}$, $180\text{ms}$).
  - **Accent Line Expansion**: Section title green accent bars expand from $0\text{px}$ to $68\text{px}$ width upon entering view.

---

### 7. Kinetic Scroll Dynamics: Progress Line & Depth Parallax

![Scroll Engine](https://img.shields.io/badge/Feature-Lerped_Scroll_Engine-8e7cc3?style=flat-square)

#### Purpose & Visual Design
Provides spatial depth during page navigation through smooth linear interpolation (lerp), background parallax shifts, and a responsive top progress indicator.

#### Implementation Architecture
- **Linear Interpolation Loop**:
  - Target scroll position is tracked via scroll event (`passive: true`).
  - Smoothed scroll is computed:
    $$\text{currentScroll} += (\text{targetScroll} - \text{currentScroll}) \cdot 0.14$$
- **Top Reading Progress Bar**:
  - Computes scroll percentage: $\frac{\text{currentScroll}}{\text{maxScroll}} \times 100\%$.
  - Updates `#scroll-progress` bar width rendered with an emerald-forest gradient.
- **Continuous Multi-Layer Image Parallax**:
  - Background imagery across Hero, Banner, and Page Hero sections shifts vertically based on viewport center offset:
    $$\text{translateY} = (\text{rect.top} + \text{height}/2 - \text{windowHeight}/2) \cdot 0.2$$

---

### 8. Sticky Glassmorphism Header with Elevation Shift

![Glassmorphism Header](https://img.shields.io/badge/Feature-Sticky_Glassmorphism-6ab55f?style=flat-square)

#### Purpose & Visual Design
The top header provides seamless navigation with an elevated translucent glass effect that activates when leaving the top of the page.

#### Implementation Architecture
- **State Transition**:
  - Monitors scroll threshold $> 20\text{px}$.
  - Adds `.scrolled` class toggling background to `rgba(255, 255, 255, 0.98)` with deep box-shadow (`0 4px 20px rgba(0, 0, 0, 0.06)`).
  - Native backdrop blur: `backdrop-filter: blur(14px)`.
- **Sliding Nav Underlines**:
  - Navigation links feature an active green bottom line that scales from left-to-right (`scaleX(0)` to `scaleX(1)`) on hover and active route state.
- **Header Offset Anchor Calculation**:
  - In-page smooth scrolling dynamically subtracts the header height $+ 12\text{px}$ to prevent content clipping under the sticky bar.

---

### 9. One-Click Copy Clipboard Feedback System

![Clipboard Copy](https://img.shields.io/badge/Feature-Async_Clipboard-4f9a45?style=flat-square)

#### Purpose & Visual Design
Provides an effortless way for buyers and partners to copy contact information (email, phone number) without clumsy text selection or form hurdles.

#### Implementation Architecture
- **Modern Async API with Fallback**:
  - Calls `navigator.clipboard.writeText(value)`.
  - Includes full fallback using `document.createRange()` and `window.getSelection()` for older browser versions.
- **Micro-Interaction UI State**:
  - Button text morphs to `"Copied"` with a green success badge style.
  - Automatically resets to original label after $1600\text{ms}$.

---

### 10. Accessibility & Reduced Motion Engine

![Accessibility](https://img.shields.io/badge/Accessibility-WCAG_Compliant-2f6fed?style=flat-square)

#### Purpose & Compliance
Ensures full accessibility for visitors who experience vestibular disorders or motion sensitivities.

#### Implementation Architecture
- **Media Query Check**:
  - JavaScript checks `window.matchMedia("(prefers-reduced-motion: reduce)").matches`.
  - Instantly bypasses particle updates and resets scrolling behavior to `auto`.
- **CSS Graceful Degradation**:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
    #ambient-canvas { display: none !important; }
    .reveal { opacity: 1 !important; transform: none !important; }
    .float-word { transform: none !important; }
  }
  ```

---

## 🎨 Design System & Color Palette

The project uses a curated palette reflecting agricultural vitality and clean industrial precision:

```css
:root {
  /* Brand Accents */
  --green:         #6ab55f;    /* Vibrant leaf green (primary CTA & accents) */
  --green-dark:    #4f9a45;    /* Deep forest hover tone */
  --green-forest:  #3d7a36;    /* Rich organic canopy green */
  --green-soft:    #e8f5e6;    /* Fresh tinted badge & card background */

  /* Utility & Communication */
  --whatsapp:      #63d366;    /* Official WhatsApp brand color */
  --messenger:     #4c8bf5;    /* Messenger rail icon color */
  --purple:        #8e7cc3;    /* Distinct vertical quick-contact banner */
  --blue:          #2f6fed;    /* Accent highlight */

  /* Monochromes & Typography */
  --black:         #1a1a1a;    /* High-contrast headings */
  --text:          #222222;    /* Primary body typography */
  --text-muted:    #666666;    /* Secondary captions & descriptions */
  --text-light:    #888888;    /* Muted labels & borders */
  --white:         #ffffff;    /* Surface canvas */
  --border:        #e5e5e5;    /* Minimalist section divider lines */

  /* Timing Functions */
  --ease-spring:   cubic-bezier(0.16, 1, 0.3, 1);
  --ease-soft:     cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

---

## 📄 Pages & Content Structure

### 1. Home (`index.html`)
- **Top Utility Bar**: Direct email, telephone, and social profile links.
- **Sticky Navigation**: Brand logo, navigation menu, and quick CTA button.
- **Hero Section**: Panoramic paddy background with animated messaging and direct navigation CTAs.
- **Product Category Quick Bar**: 4-column quick links with custom vector iconography.
- **Who We Are**: Company legacy summary, rice terraces media frame with experience badge.
- **Premium Varieties Grid**: Sustainable farming, state-of-the-art milling, and global recognition cards with 3D tilt.
- **Global Outreach**: Export footprint visualization and descriptive world reach overview.
- **Sustainable Farming Deep-Dive**: Eco-friendly agriculture, water stewardship, and quality benchmarks.
- **Product Detail Sections**:
  - *Sharbati Rice* — Characteristics, culinary uses, and aroma profile.
  - *Basmati Farming* — Alluvial soils, seed preservation, and organic methods.
  - *PR11 Rice* — Pusa Basmati 1121 attributes, grain length, and nutrition.
  - *Traditional Basmati* — GI-tagged Himalayan cultivation and culinary excellence.
- **Enquiry Section**: One-click copy email/phone cards and social connectivity.
- **Footer**: Brand statement, quick links, product index, and copyright details.

### 2. About Us (`about.html`)
- **Page Hero**: Clean header banner introducing the heritage.
- **Detailed History**: Shri Surender Kumar Gupta's founding vision in 1965 and modern leadership under Vice President Prateek Gupta.
- **Founder's Legacy & Machinery Cards**:
  - *Leadership for the Future*
  - *Machinery and Production Capacity* (250 tons packing daily, 100 tons paddy-to-rice conversion daily).
  - *Technological Advancements* (2 Sortex plants, online sorting).
- **Machinery Inventory Banner**: Highlights of Bhullar Z4, Stake 5001, and Bhullar A5 milling precision.
- **Quality Assurance & Global Reach**: Comprehensive quality inspection protocols and international shipping.
- **Community & Sustainability Initiatives**: Socio-economic development and environmental stewardship.

---

## 💻 Local Development & Setup

Since the project is built purely with standard HTML5, CSS3, and JavaScript, no complex build steps, compiler tooling, or node module installations are required.

### Option 1: Live Server (VS Code / Cursor / IDEs)
1. Open the project folder in your editor.
2. Right-click `index.html` and select **"Open with Live Server"**.
3. The site will open at `http://127.0.0.1:5500`.

### Option 2: Python HTTP Server
Run from the root directory:
```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Open your browser at `http://localhost:8000`.

### Option 3: Node `serve` or `npx`
```bash
npx serve .
```

---

## 🚢 Deployment

The repository is configured for automatic continuous deployment on **Vercel**:

### Deploy with Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project directory
vercel
```

### Deploy via GitHub Integration
1. Push any commits to the `main` branch.
2. Vercel automatically detects changes, generates an atomic build, and deploys to the global edge network.

---

## ⚡ Performance Highlights

- **Zero JS Framework Overhead**: Fast Time-To-Interactive (TTI) and First Contentful Paint (FCP).
- **Passive Event Listeners**: All window scroll and mouse tracking listeners use `{ passive: true }` to avoid blocking main-thread layout calculations.
- **RAF-Throttled Updates**: Dynamic mouse tracking and 3D tilts use `requestAnimationFrame` cancellation handles to prevent redundant rendering work.
- **GPU-Accelerated Compositing**: All visual shifts use `transform: translate3d()` and `transform: perspective()` to run directly on the GPU compositor thread without triggering layout reflows.
- **Font Optimization**: Google Fonts are loaded via `preconnect` links to `fonts.googleapis.com` and `fonts.gstatic.com` with `display=swap`.

---

## 📜 License & Credits

- **Copyright**: © 2024–Present **Bhartiya Industries**. All rights reserved.
- **Design & Engineering**: Built with focus on agricultural storytelling, grain purity, and modern digital aesthetics.
- **Brand Slogan**: *Nurturing Nature, Nourishing Lives*.
