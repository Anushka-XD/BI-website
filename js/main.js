/* Full-page style scroll + UI helpers */
(function () {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isMobile = () => window.matchMedia("(max-width: 768px)").matches;

  function setSnap() {
    document.documentElement.classList.toggle("snap-on", !prefersReduced && !isMobile());
  }
  setSnap();
  window.addEventListener("resize", setSnap);

  /* Mobile nav */
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

  /* Reveal on scroll */
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("visible"));
  }

  /* Copy enquiry details */
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

  /* Wheel-assisted section snap (desktop) — unique full-page feel */
  let locked = false;
  const sections = () =>
    Array.from(document.querySelectorAll(".snap-section")).filter((s) => {
      const style = getComputedStyle(s);
      return style.display !== "none" && s.offsetHeight > 0;
    });

  function currentIndex() {
    const list = sections();
    const mid = window.scrollY + window.innerHeight * 0.35;
    let best = 0;
    let bestDist = Infinity;
    list.forEach((sec, i) => {
      const dist = Math.abs(sec.offsetTop - mid);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    return best;
  }

  function goTo(index) {
    const list = sections();
    if (index < 0 || index >= list.length) return;
    locked = true;
    list[index].scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" });
    setTimeout(() => {
      locked = false;
    }, 850);
  }

  let wheelAccum = 0;
  let wheelTimer;

  window.addEventListener(
    "wheel",
    (e) => {
      if (prefersReduced || isMobile() || locked) return;
      if (Math.abs(e.deltaY) < 8) return;

      wheelAccum += e.deltaY;
      clearTimeout(wheelTimer);
      wheelTimer = setTimeout(() => {
        wheelAccum = 0;
      }, 180);

      if (Math.abs(wheelAccum) < 60) return;

      const dir = wheelAccum > 0 ? 1 : -1;
      wheelAccum = 0;
      e.preventDefault();
      goTo(currentIndex() + dir);
    },
    { passive: false }
  );

  /* Keyboard */
  window.addEventListener("keydown", (e) => {
    if (prefersReduced || isMobile() || locked) return;
    if (["ArrowDown", "PageDown", " "].includes(e.key)) {
      e.preventDefault();
      goTo(currentIndex() + 1);
    } else if (["ArrowUp", "PageUp"].includes(e.key)) {
      e.preventDefault();
      goTo(currentIndex() - 1);
    }
  });
})();
