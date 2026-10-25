"use client";
import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger } from "./gsap";
import { useMotion } from "./MotionProvider";

export function PageMotion({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const { enabled } = useMotion();

  useGSAP(
    () => {
      if (!enabled) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.defaults({ ease: "power3.out", duration: 0.8 });

        const intro = gsap.timeline();
        intro
          .from(".nav", {
            y: -24,
            autoAlpha: 0,
            duration: 0.55,
            clearProps: "transform",
          })
          .from(
            ".hero .section-badge",
            { y: 18, autoAlpha: 0, duration: 0.45, clearProps: "transform" },
            "-=0.15",
          )
          .from(
            ".hero h1",
            { y: 40, autoAlpha: 0, duration: 0.95, clearProps: "transform" },
            "-=0.2",
          )
          .from(
            ".hero__aside > *",
            {
              y: 22,
              autoAlpha: 0,
              stagger: 0.1,
              duration: 0.55,
              clearProps: "transform",
            },
            "-=0.5",
          )
          .from(
            ".research-scene",
            { y: 48, autoAlpha: 0, duration: 1, clearProps: "transform" },
            "-=0.4",
          );

        const later =
          ".section-heading, .introduction > div, .introduction__body, .evidence__heading, .asks__heading, .closing__inner > div:first-child, .moment-grid li, .privacy-grid li, .begin-steps li, .begin-notes li, .ask-list li, .source-kinds li, .graph-tree, .care-list li, .example-list button, .plan, .faq details, .story-chapter";
        gsap.set(later, { y: 36, autoAlpha: 0 });

        const rise = (elements: Element[]) =>
          gsap.to(elements, {
            y: 0,
            autoAlpha: 1,
            stagger: 0.09,
            overwrite: "auto",
            clearProps: "transform",
          });

        ScrollTrigger.batch(later, {
          start: "top 90%",
          interval: 0.08,
          batchMax: 8,
          once: true,
          onEnter: rise,
        });

        gsap.to(".closing-index__sheet", {
          y: (index) => (index === 1 ? 12 : -10),
          rotation: (index) => (index - 1) * 4,
          duration: 3.6,
          stagger: 0.18,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        requestAnimationFrame(() => ScrollTrigger.refresh());
      });

      return () => mm.revert();
    },
    { scope: root, dependencies: [enabled] },
  );

  return <div ref={root}>{children}</div>;
}
