/* ============================================================
   Bhartiya Industries — Living, Dynamic Environment Engine
   Sunlit Golden Pollen Motes, Interactive Dynamic Media Lens,
   Magnetic Ripple Buttons, Layered Parallax & Slide-In Dynamics
   ============================================================ */
(function () {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReduced) {
    document.documentElement.style.scrollBehavior = "auto";
  }

  /* ------------------------------------------------------------
     1. Sticky Header Elevation on Scroll
     ------------------------------------------------------------ */
  const header = document.querySelector(".site-header");
  function handleHeaderScroll() {
    if (!header) return;
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
  window.addEventListener("scroll", handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  /* ------------------------------------------------------------
     2. Mobile Nav
     ------------------------------------------------------------ */
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", links.classList.contains("open"));
    });
    links.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => links.classList.remove("open"));
    });
  }

  /* ------------------------------------------------------------
     3. Smooth in-page anchor scroll (accounts for sticky header)
     ------------------------------------------------------------ */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = (header ? header.offsetHeight : 0) + 12;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top,
        behavior: prefersReduced ? "auto" : "smooth",
      });
      history.pushState(null, "", id);
    });
  });

  /* ------------------------------------------------------------
     4. Reveal on scroll with bidirectional dynamic sliding choreography
     (Slides in on scroll down, reverses dynamically when scrolling back up)
     ------------------------------------------------------------ */
  const reveals = document.querySelectorAll(".reveal, .split");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            // When user scrolls back up past the element, reverse the sliding effects!
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "30px 0px -40px 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("visible"));
  }

  /* ------------------------------------------------------------
     5. Copy enquiry details
     ------------------------------------------------------------ */
  document.querySelectorAll("[data-copy]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const value = btn.getAttribute("data-copy");
      try {
        await navigator.clipboard.writeText(value);
        const prev = btn.textContent;
        btn.textContent = "Copied";
        btn.classList.add("copied");
        setTimeout(() => {
          btn.textContent = prev;
          btn.classList.remove("copied");
        }, 1600);
      } catch {
        const range = document.createRange();
        const node = btn.parentElement.querySelector(".value");
        if (node) {
          range.selectNodeContents(node);
          const sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
        }
      }
    });
  });

  if (prefersReduced) return;

  /* ------------------------------------------------------------
     6. Highly Interactive Buttons: Magnetic Attraction & Liquid Ripple
     ------------------------------------------------------------ */
  const interactiveButtons = document.querySelectorAll(".btn, .card-arrow, .rail-contact, .product-icon, .copy-btn");

  interactiveButtons.forEach((btn) => {
    // Liquid ripple wave on click
    btn.addEventListener("click", (e) => {
      const rect = btn.getBoundingClientRect();
      const circle = document.createElement("span");
      circle.classList.add("ripple-wave");
      const diameter = Math.max(rect.width, rect.height);
      const radius = diameter / 2;
      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${e.clientX - rect.left - radius}px`;
      circle.style.top = `${e.clientY - rect.top - radius}px`;

      const existingRipple = btn.querySelector(".ripple-wave");
      if (existingRipple) existingRipple.remove();

      btn.appendChild(circle);
      setTimeout(() => circle.remove(), 650);
    });

    // Enhanced magnetic fluid tracking with dynamic scale
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const pullX = Math.max(-14, Math.min(14, x * 0.44));
      const pullY = Math.max(-14, Math.min(14, y * 0.44));
      btn.style.transform = `translate3d(${pullX.toFixed(1)}px, ${pullY.toFixed(1)}px, 0) scale(1.05)`;
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "";
    });
  });

  /* ------------------------------------------------------------
     7. Dynamic Interactive Image Lens & Pan (Enhanced 2.5D depth & dual layer shift)
     ------------------------------------------------------------ */
  const imageFrames = document.querySelectorAll(".split-media .frame");

  imageFrames.forEach((frame) => {
    let bounds = null;
    const offsetBg = frame.parentElement ? frame.parentElement.querySelector(".offset-bg") : null;

    frame.addEventListener("mouseenter", () => {
      bounds = frame.getBoundingClientRect();
    });

    frame.addEventListener("mousemove", (e) => {
      if (!bounds) bounds = frame.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const y = e.clientY - bounds.top;
      const pctX = (x / bounds.width) * 100;
      const pctY = (y / bounds.height) * 100;

      // Dynamic sunbeam specular sheen coordinate
      frame.style.setProperty("--mouse-x", `${pctX}%`);
      frame.style.setProperty("--mouse-y", `${pctY}%`);

      // Fluid 2.5D camera pan inside the window (amplified parallax response)
      const panX = ((x / bounds.width) - 0.5) * -26;
      const panY = ((y / bounds.height) - 0.5) * -26;
      frame.style.setProperty("--img-pan-x", `${panX.toFixed(1)}px`);
      frame.style.setProperty("--img-pan-y", `${panY.toFixed(1)}px`);

      // Dynamic responsive frame perspective tilt
      const rotY = ((x / bounds.width) - 0.5) * 6;
      const rotX = -((y / bounds.height) - 0.5) * 6;
      frame.style.transform = `perspective(900px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale(1.025)`;

      // Opposite motion on background panel for layered 3D depth
      if (offsetBg) {
        offsetBg.style.transform = `translate3d(${(-panX * 0.75).toFixed(1)}px, ${(-panY * 0.75).toFixed(1)}px, 0) scale(1.02)`;
      }
    });

    frame.addEventListener("mouseleave", () => {
      bounds = null;
      frame.style.setProperty("--img-pan-x", "0px");
      frame.style.setProperty("--img-pan-y", "0px");
      frame.style.transform = "";
      if (offsetBg) offsetBg.style.transform = "";
    });
  });

  /* ------------------------------------------------------------
     8. Interactive 3D Tilt & Specular Sheen for Feature & Enquiry Cards
     ------------------------------------------------------------ */
  const tiltCards = document.querySelectorAll(".feature-card, .enquiry-card");

  tiltCards.forEach((card) => {
    let bounds = null;
    let rafId = null;

    function refreshBounds() {
      bounds = card.getBoundingClientRect();
    }

    card.addEventListener("mouseenter", () => {
      refreshBounds();
      card.style.transition = "transform 0.08s ease-out, box-shadow 0.25s ease, border-color 0.25s ease";
    });

    card.addEventListener("mousemove", (e) => {
      if (!bounds) refreshBounds();

      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (!bounds) return;
        const x = e.clientX - bounds.left;
        const y = e.clientY - bounds.top;

        const clampedX = Math.max(0, Math.min(bounds.width, x));
        const clampedY = Math.max(0, Math.min(bounds.height, y));

        const pctX = (clampedX / bounds.width) * 100;
        const pctY = (clampedY / bounds.height) * 100;

        card.style.setProperty("--mouse-x", `${pctX.toFixed(1)}%`);
        card.style.setProperty("--mouse-y", `${pctY.toFixed(1)}%`);

        const rotY = ((clampedX / bounds.width) - 0.5) * 14;
        const rotX = -((clampedY / bounds.height) - 0.5) * 14;

        card.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateZ(10px) scale(1.035)`;
      });
    });

    card.addEventListener("mouseleave", () => {
      if (rafId) cancelAnimationFrame(rafId);
      bounds = null;
      card.style.transition = "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.3s ease";
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)";
      card.style.setProperty("--mouse-x", "50%");
      card.style.setProperty("--mouse-y", "50%");
    });
  });

  window.addEventListener("resize", () => {
    tiltCards.forEach((card) => {
      card.style.transform = "";
    });
  });

  /* ------------------------------------------------------------
     9. Mouse Tracking for Particle Fluid Wake
     ------------------------------------------------------------ */
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let mouseActive = false;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    mouseActive = true;
  }, { passive: true });

  document.addEventListener("mouseleave", () => {
    mouseActive = false;
  });

  /* ------------------------------------------------------------
     10. Dynamic Scroll Engine: Progress Bar, Continuous Parallax & Kinetic Flow
     ------------------------------------------------------------ */
  const scrollProgress = document.getElementById("scroll-progress");
  const parallaxBgs = document.querySelectorAll(".hero-bg, .banner-bg, .page-hero-bg");
  const offsetBgs = document.querySelectorAll(".split-media .offset-bg");
  const patternBgs = document.querySelectorAll(".pattern-bg");

  let currentScroll = window.scrollY;
  let targetScroll = window.scrollY;
  let lastScrollY = window.scrollY;
  let scrollVelocity = 0;
  let isTicking = false;

  function updateScrollDynamics() {
    currentScroll += (targetScroll - currentScroll) * 0.14;
    scrollVelocity = (targetScroll - lastScrollY);
    lastScrollY = targetScroll;

    // 1. Dynamic Top Scroll Progress Line
    if (scrollProgress) {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? (currentScroll / maxScroll) * 100 : 0;
      scrollProgress.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }

    // 2. Parallax on full-bleed background images
    parallaxBgs.forEach((bg) => {
      const section = bg.closest("section");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const centerOffset = rect.top + rect.height / 2 - window.innerHeight / 2;
        const translateY = centerOffset * 0.2;
        bg.style.transform = `translate3d(0, ${translateY.toFixed(1)}px, 0)`;
      }
    });

    // 3. Layer separation depth on offset background panels
    offsetBgs.forEach((offsetEl) => {
      const splitMedia = offsetEl.closest(".split-media");
      if (!splitMedia) return;
      const rect = splitMedia.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const offsetShift = (rect.top - window.innerHeight / 2) * 0.08;
        offsetEl.style.transform = `translate3d(0, ${offsetShift.toFixed(1)}px, 0)`;
      }
    });



    if (Math.abs(targetScroll - currentScroll) > 0.1 || Math.abs(scrollVelocity) > 0.1) {
      requestAnimationFrame(updateScrollDynamics);
    } else {
      isTicking = false;
    }
  }

  window.addEventListener("scroll", () => {
    targetScroll = window.scrollY;
    if (!isTicking) {
      isTicking = true;
      requestAnimationFrame(updateScrollDynamics);
    }
  }, { passive: true });

  updateScrollDynamics();

  /* ------------------------------------------------------------
     11. Rich Atmospheric Motes System: Sunlit Gold, Emerald & Small White/Grey Specks
     (Scattered across entire viewport on load, bounces at all borders, never disappears)
     ------------------------------------------------------------ */
  const canvas = document.getElementById("ambient-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let dpr = window.devicePixelRatio || 1;
  let particles = [];
  const PARTICLE_COUNT = Math.min(235, Math.max(160, Math.floor(window.innerWidth / 6.2)));

  function resizeCanvas() {
    dpr = window.devicePixelRatio || 1;
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Keep all existing particles strictly within updated screen borders
    particles.forEach((p) => {
      const r = p.radius || 2;
      p.x = Math.max(r, Math.min(width - r, p.x));
      p.y = Math.max(r, Math.min(height - r, p.y));
    });
  }
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  class SunlitPollenMote {
    constructor() {
      this.reset();
    }

    reset() {
      this.z = 0.35 + Math.random() * 1.45;

      // Categorize: 38% medium green motes, 38% crisp white dust, 24% sunlit golden harvest pollen
      const categoryRoll = Math.random();

      if (categoryRoll < 0.38) {
        // Medium-sized vibrant agricultural green motes
        this.type = "green";
        this.isBokeh = Math.random() < 0.08;
        // Specifically medium-sized radius
        this.radius = this.isBokeh
          ? (3.0 + Math.random() * 2.5) * this.z
          : (1.8 + Math.random() * 1.5) * this.z;
        this.baseAlpha = this.isBokeh
          ? (0.12 + Math.random() * 0.16)
          : (0.28 + Math.random() * 0.44);

        const greenPalettes = [
          "106, 181, 95",  // brand vibrant green #6ab55f
          "79, 154, 69",   // forest green #4f9a45
          "92, 198, 85",   // fresh living leaf green
          "120, 205, 95",  // sunlit harvest green
          "72, 172, 88",   // lush crop emerald
        ];
        this.rgb = greenPalettes[Math.floor(Math.random() * greenPalettes.length)];
      } else if (categoryRoll < 0.76) {
        // Crisp white and luminous atmospheric dust motes
        this.type = "dust";
        this.isBokeh = Math.random() < 0.06;
        this.radius = this.isBokeh
          ? (2.2 + Math.random() * 2.0) * this.z
          : (0.85 + Math.random() * 1.25) * this.z;
        this.baseAlpha = this.isBokeh
          ? (0.12 + Math.random() * 0.18)
          : (0.26 + Math.random() * 0.50);

        const whiteGreyPalettes = [
          "255, 255, 255", // crisp pure white
          "255, 255, 255", // brilliant pure white
          "250, 252, 255", // luminous pearl white
          "245, 248, 252", // radiant starlight white
          "235, 240, 246", // soft silver white
          "218, 225, 232", // pale misty grey
        ];
        this.rgb = whiteGreyPalettes[Math.floor(Math.random() * whiteGreyPalettes.length)];
      } else {
        // Sunlit golden harvest pollen
        this.type = "pollen";
        this.isBokeh = Math.random() < 0.14;
        this.radius = this.isBokeh
          ? (3.0 + Math.random() * 3.5) * this.z
          : (1.2 + Math.random() * 2.0) * this.z;
        this.baseAlpha = this.isBokeh
          ? (0.07 + Math.random() * 0.12)
          : (0.18 + Math.random() * 0.52);

        const goldPalettes = [
          "245, 195, 60",  // rich sunlit gold
          "235, 180, 50",  // warm ripe harvest gold
          "220, 165, 40",  // golden paddy grain
          "250, 210, 75",  // luminous sunbeam gold
        ];
        this.rgb = goldPalettes[Math.floor(Math.random() * goldPalettes.length)];
      }

      this.alpha = this.baseAlpha;

      // Already scattered across the ENTIRE viewport upon arrival (not emerging from edges)
      const screenW = width > 50 ? width : window.innerWidth;
      const screenH = height > 50 ? height : window.innerHeight;
      const r = this.radius;
      this.x = r + 15 + Math.random() * Math.max(100, screenW - r * 2 - 30);
      this.y = r + 15 + Math.random() * Math.max(100, screenH - r * 2 - 30);

      // Active organic 2D velocity in all 360-degree directions
      const angle = Math.random() * Math.PI * 2;
      const speed = (0.2 + Math.random() * 0.4) * this.z;
      this.baseVx = Math.cos(angle) * speed;
      this.baseVy = Math.sin(angle) * speed;
      this.vx = this.baseVx;
      this.vy = this.baseVy;

      // Independent multi-frequency 2D wander oscillation
      this.phaseX = Math.random() * Math.PI * 2;
      this.phaseY = Math.random() * Math.PI * 2;
      this.oscFreqX = 0.006 + Math.random() * 0.015;
      this.oscFreqY = 0.005 + Math.random() * 0.013;
      this.oscAmp = 0.35 + Math.random() * 0.75;
    }

    update(time, cursorX, cursorY) {
      this.phaseX += this.oscFreqX;
      this.phaseY += this.oscFreqY;
      const fieldBreeze = Math.sin(time * 0.0006) * 0.2;
      const swayX = Math.cos(this.phaseX) * this.oscAmp + fieldBreeze;
      const swayY = Math.sin(this.phaseY) * this.oscAmp;

      // Cursor interaction: fluid wake and swirling eddies around mouse
      if (mouseActive) {
        const dx = this.x - cursorX;
        const dy = this.y - cursorY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 145 * this.z;

        if (dist < maxDist && dist > 0) {
          const force = (1 - dist / maxDist) * 2.0 * this.z;
          const angle = Math.atan2(dy, dx);
          this.vx += Math.cos(angle) * force * 0.5 - Math.sin(angle) * force * 0.2;
          this.vy += Math.sin(angle) * force * 0.5 + Math.cos(angle) * force * 0.2;
        }
      }

      // Smooth dampening towards base flow + 2D organic wandering
      this.vx += (this.baseVx + swayX - this.vx) * 0.045;
      this.vy += (this.baseVy + swayY - this.vy) * 0.045;

      // Clamp max velocity
      const maxSpd = 7.5 * this.z;
      this.vx = Math.max(-maxSpd, Math.min(maxSpd, this.vx));
      this.vy = Math.max(-maxSpd, Math.min(maxSpd, this.vy));

      this.x += this.vx;
      this.y += this.vy;

      // Subtle twinkle luminance
      this.alpha = this.baseAlpha * (0.78 + 0.32 * Math.sin(this.phaseX * 2.0));

      // ----------------------------------------------------------
      // Elastic Border Bounce Physics (Page Borders: Left, Right, Top, Bottom)
      // Never disappears, stays bouncing within viewport borders indefinitely
      // ----------------------------------------------------------
      const minBounce = 0.22 * this.z;

      // Left border bounce
      if (this.x - this.radius <= 0) {
        this.x = this.radius;
        this.vx = Math.max(minBounce, Math.abs(this.vx) * 0.88);
        this.baseVx = Math.max(0.12 * this.z, Math.abs(this.baseVx));
      } else if (this.x + this.radius >= width) {
        // Right border bounce
        this.x = width - this.radius;
        this.vx = -Math.max(minBounce, Math.abs(this.vx) * 0.88);
        this.baseVx = -Math.max(0.12 * this.z, Math.abs(this.baseVx));
      }

      // Top border bounce
      if (this.y - this.radius <= 0) {
        this.y = this.radius;
        this.vy = Math.max(minBounce, Math.abs(this.vy) * 0.88);
        this.baseVy = Math.max(0.12 * this.z, Math.abs(this.baseVy));
      } else if (this.y + this.radius >= height) {
        // Bottom border bounce
        this.y = height - this.radius;
        this.vy = -Math.max(minBounce, Math.abs(this.vy) * 0.88);
        this.baseVy = -Math.max(0.12 * this.z, Math.abs(this.baseVy));
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.rgb}, ${Math.max(0.06, Math.min(1, this.alpha))})`;
      ctx.fill();

      // Atmospheric specular glow
      if (this.type === "dust") {
        if (this.z > 1.25) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius * 1.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${this.rgb}, ${Math.max(0, this.alpha * 0.14)})`;
          ctx.fill();
        }
      } else if (this.type === "green" && this.z > 0.85) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 2.0, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.rgb}, ${Math.max(0, this.alpha * 0.16)})`;
        ctx.fill();
      } else if (!this.isBokeh && this.z > 1.1) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.rgb}, ${Math.max(0, this.alpha * 0.16)})`;
        ctx.fill();
      }
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new SunlitPollenMote());
  }

  function animateParticles(now) {
    if (document.hidden) {
      requestAnimationFrame(animateParticles);
      return;
    }
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update(now, mouseX, mouseY);
      particles[i].draw();
    }

    requestAnimationFrame(animateParticles);
  }
  requestAnimationFrame(animateParticles);

  /* ------------------------------------------------------------
     12. Smooth Interactive Floating Text & Words Engine
     (Hovering on any text or word causes it to float smoothly with elastic spring)
     ------------------------------------------------------------ */
  function enableFloatingWords() {
    const targetSelectors = [
      "h1", "h2", "h3", "h4", "h5", "h6",
      "p",
      ".eyebrow",
      ".lead",
      ".hero-tagline",
      ".features-list li",
      ".value",
      ".about-lead",
      ".stat-card strong",
      ".stat-card span",
      ".experience-badge strong",
      ".experience-badge span"
    ];

    const elements = document.querySelectorAll(targetSelectors.join(", "));

    elements.forEach((el) => {
      if (el.dataset.floatEnabled) return;
      el.dataset.floatEnabled = "true";

      function processNode(node) {
        if (node.nodeType === Node.TEXT_NODE) {
          const text = node.textContent;
          if (!text.trim()) return;

          const parts = text.split(/(\s+)/);
          const fragment = document.createDocumentFragment();

          parts.forEach((part) => {
            if (/^\s+$/.test(part)) {
              fragment.appendChild(document.createTextNode(part));
            } else if (part.length > 0) {
              const span = document.createElement("span");
              span.className = "float-word";
              span.textContent = part;
              fragment.appendChild(span);
            }
          });

          node.replaceWith(fragment);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          const tag = node.tagName.toLowerCase();
          if (tag === "svg" || tag === "input" || tag === "textarea" || tag === "button" || tag === "canvas") {
            return;
          }
          Array.from(node.childNodes).forEach(processNode);
        }
      }

      Array.from(el.childNodes).forEach(processNode);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", enableFloatingWords);
  } else {
    enableFloatingWords();
  }
})();
