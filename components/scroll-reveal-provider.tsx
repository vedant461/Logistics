"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollRevealProvider() {
  const pathname = usePathname();

  useEffect(() => {
    // Select candidates for scroll reveal
    const candidates = document.querySelectorAll(
      "section > *, .shell > *, [data-animate], .hero-section .shell > *, .site-footer > *",
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
      // Do not apply to pure decorative full-width background overlays, map card or pseudo elements
      if (
        el.getAttribute("aria-hidden") === "true" ||
        el.classList.contains("bg-layer") ||
        el.classList.contains("hero-map-column") ||
        el.classList.contains("hero-map-card") ||
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
