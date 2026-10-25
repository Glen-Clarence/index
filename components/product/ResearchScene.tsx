"use client";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap, useGSAP } from "@/components/motion/gsap";
import { useMotion } from "@/components/motion/MotionProvider";
import { useResearch, useSurfaceSource } from "./ResearchProvider";
import { SourceReader } from "./SourceReader";
import { TopicSelector } from "./TopicSelector";
import { Citation } from "./Citation";
import { SourceIcon } from "./SourceIcon";
import { Mark } from "@/components/ui/Mark";
import { AmbientField } from "@/components/motion/AmbientField";
import { SourceConnections } from "./SourceConnections";
export function ResearchScene() {
  const { topic, openSource } = useResearch();
  const { source: reading, closeSource } = useSurfaceSource("scene");
  const { enabled } = useMotion();
  const scene = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!enabled || reading) return;
      const cards = scene.current?.querySelectorAll(".source-fragment");
      const paper = scene.current?.querySelector(".synthesis-paper");
      if (!cards?.length) return;

      gsap.fromTo(
        cards,
        { autoAlpha: 0, x: -22, rotation: -2 },
        {
          autoAlpha: 1,
          x: 0,
          rotation: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
        },
      );
      if (paper) {
        gsap.fromTo(
          paper,
          { autoAlpha: 0, y: 18 },
          { autoAlpha: 1, y: 0, duration: 0.7, delay: 0.18, ease: "power3.out" },
        );
      }
      gsap.to(cards, {
        y: -7,
        duration: 2.8,
        stagger: { each: 0.28, from: "end" },
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.8,
      });
    },
    { scope: scene, dependencies: [enabled, topic.id, reading] },
  );

  return (
    <div
      ref={scene}
      className="research-scene"
      aria-label="Interactive library preview"
    >
      <div className="scene-toolbar">
        <span>
          <Mark />
          Your library, in one place
        </span>
        <span className="meta">Sample library</span>
      </div>
      {reading && <SourceReader source={reading} onClose={closeSource} />}
      <div className="scene-canvas" key={topic.id} hidden={!!reading}>
        <AmbientField />
        <div className="source-stack">
          {topic.sources.map((source, i) => {
            return (
              <button
                key={source.id}
                className={`source-fragment source-fragment--${i}`}
                onClick={() => openSource(source, "scene")}
              >
                <span className="source-fragment__type">
                  <SourceIcon kind={source.kind} size={16} />
                  {source.kind}
                  <ArrowUpRight size={16} />
                </span>
                <strong>{source.title}</strong>
                <p>{source.excerpt}</p>
              </button>
            );
          })}
        </div>
        <SourceConnections />
        <article className="synthesis-paper">
          <p className="meta">Closest matches</p>
          <h2>{topic.title}</h2>
          <div className="synthesis-findings">
            {topic.findings.map((finding, i) => (
              <p key={i}>
                {finding.text}
                <span className="citations">
                  {finding.sources.map((id) => {
                    const number = topic.sources.findIndex((s) => s.id === id);
                    return (
                      <Citation
                        key={id}
                        source={topic.sources[number]}
                        number={number + 1}
                        surface="scene"
                      />
                    );
                  })}
                </span>
              </p>
            ))}
          </div>
          <div className="synthesis-takeaway">{topic.takeaway}</div>
        </article>
      </div>
      <div className="scene-bottom">
        <TopicSelector />
        <span className="scene-hint">Describe it. Index finds it.</span>
      </div>
    </div>
  );
}
