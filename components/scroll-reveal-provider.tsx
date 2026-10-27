"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollRevealProvider() {
  const pathname = usePathname();

  useEffect(() => {
    // Select candidates for scroll reveal (exclude hero top elements which use dedicated cascading hero intro animation)
    const candidates = document.querySelectorAll(
      "section:not(.hero-section) > *, .shell:not(.hero-shell) > *, [data-animate]:not(.hero-intro), .site-footer > *",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -40px 0px",
        threshold: 0.08,
      },
    );

    candidates.forEach((el) => {
      // Do not apply to pure decorative full-width background overlays, map card, hero intro elements or pseudo elements
      if (
        el.getAttribute("aria-hidden") === "true" ||
        el.classList.contains("bg-layer") ||
        el.classList.contains("hero-intro") ||
        el.closest(".hero-intro") ||
        el.tagName === "STYLE" ||
        el.tagName === "SCRIPT"
      ) {
        return;
      }
      el.classList.add("reveal-element");
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
