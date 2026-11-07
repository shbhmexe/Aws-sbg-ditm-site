"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const revealAll = () => {
      document.querySelectorAll("[data-reveal]").forEach((el) => {
        el.classList.add("revealed");
      });
    };

    const targets = Array.from(document.querySelectorAll("[data-reveal]"));
    if (!targets.length) return;

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      revealAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.05, rootMargin: "60px 0px" }
    );

    targets.forEach((t) => {
      // If already within or above the viewport, reveal immediately
      const rect = t.getBoundingClientRect();
      if (rect.top <= window.innerHeight + 100) {
        t.classList.add("revealed");
      } else {
        observer.observe(t);
      }
    });

    // Safety fallback: ensure nothing stays hidden if observer or layout misses it
    const timer = setTimeout(revealAll, 600);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
