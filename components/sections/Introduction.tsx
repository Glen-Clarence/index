import { site } from "@/site.config";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { AccentReveal } from "@/components/motion/AccentReveal";
import {
  Bookmark,
  BookOpen,
  FolderGit2,
  Layers,
  Play,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
const kindIcons: Record<string, LucideIcon> = {
  Bookmarks: Bookmark,
  Videos: Play,
  Articles: BookOpen,
  Repositories: FolderGit2,
  Collections: Layers,
};
export function Introduction() {
  return (
    <section
      className="introduction container section"
      aria-labelledby="intro-heading"
    >
      <div>
        <SectionBadge>{site.intro.badge}</SectionBadge>
        <h2 id="intro-heading">
          {site.intro.first}
          <br />
          <AccentReveal>{site.intro.accent}</AccentReveal>
        </h2>
      </div>
      <Reveal className="introduction__body">
        <p>{site.intro.description}</p>
        <ul className="source-kinds" aria-label="What Index brings together">
          {site.intro.kinds.map((kind) => {
            const Icon = kindIcons[kind.name];
            return (
              <li key={kind.name}>
                <Icon size={20} aria-hidden="true" />
                <strong>{kind.name}</strong>
                <span>{kind.detail}</span>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </section>
  );
}
