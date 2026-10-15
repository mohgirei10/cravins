"use client";
import { useEffect } from "react";

/** Adds lightweight reveal-on-scroll effects without hiding content from reduced-motion users. */
export default function ScrollAnimations() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) return;
    const targets = document.querySelectorAll<HTMLElement>("main section:not([data-no-reveal]), main section [data-reveal], main section .card-hover");
    targets.forEach((el) => el.classList.add("scroll-reveal"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return null;
}
