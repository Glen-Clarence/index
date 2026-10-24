"use client";
import { useEffect, useRef, useState } from "react";
import { site } from "@/site.config";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { StoryStage } from "@/components/product/StoryStage";
import { useMotion } from "@/components/motion/MotionProvider";
const chapters = [
  {
    label: "Save",
    heading: "One place for everything.",
    body: "Bookmarks, videos, articles, repositories, and collections. Index brings what you have already saved into a single library.",
    detail: "Chrome, YouTube, the web, GitHub, and Google.",
  },
  {
    label: "Search",
    heading: "Describe what you remember.",
    body: "You don’t need the exact words. Ask for “that video explaining Redis clustering,” and Index looks for the meaning.",
    detail: "A half-remembered title is enough to start.",
  },
  {
    label: "Connect",
    heading: "See what belongs together.",
    body: "Saved things stay linked. Index finds the relationships between articles, videos, and repositories, including ones you saved years apart.",
    detail: "Topics and collections, without folders to maintain.",
  },
];
export function ProductStory() {
  const [step, setStep] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const { enabled } = useMotion();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!matchMedia("(min-width: 768px)").matches) return;
        for (const entry of entries)
          if (entry.isIntersecting)
            setStep(Number((entry.target as HTMLElement).dataset.step));
      },
      { rootMargin: "-25% 0px -45% 0px", threshold: 0 },
    );
    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);
  const select = (index: number) => {
    setStep(index);
    if (matchMedia("(min-width: 768px)").matches)
      refs.current[index]?.scrollIntoView({
        block: "center",
        behavior: enabled ? "smooth" : "instant",
      });
  };
  return (
    <section
      id="how-it-works"
      className="product-story section"
      aria-labelledby="story-heading"
    >
      <div className="container">
        <div className="section-heading">
          <SectionBadge>{site.story.badge}</SectionBadge>
          <h2 id="story-heading">
            {site.story.heading.split("\n").map((line, i) => (
              <span className="heading-line" key={i}>
                {line}
              </span>
            ))}
          </h2>
          <p>{site.story.description}</p>
        </div>
        <div className="story-layout">
          <div className="story-sticky">
            <div
              className="story-controls"
              role="group"
              aria-label="Product stages"
            >
              {chapters.map((chapter, i) => (
                <button
                  key={chapter.label}
                  aria-pressed={i === step}
                  onClick={() => select(i)}
                >
                  <span>0{i + 1}</span>
                  {chapter.label}
                </button>
              ))}
            </div>
            <StoryStage step={step} />
          </div>
          <div className="story-chapters">
            {chapters.map((chapter, i) => (
              <div
                key={chapter.label}
                data-step={i}
                ref={(element) => {
                  refs.current[i] = element;
                }}
                className={`story-chapter ${i === step ? "is-active" : ""}`}
              >
                <span className="chapter-number">
                  0{i + 1} / {chapter.label}
                </span>
                <h3>{chapter.heading}</h3>
                <p>{chapter.body}</p>
                <p className="chapter-detail">{chapter.detail}</p>
                <div className="story-mobile-stage">
                  <StoryStage step={i} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
