import { site } from "@/site.config";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { AccentReveal } from "@/components/motion/AccentReveal";
export function Moments() {
  return (
    <section
      id="moments"
      className="moments container section"
      aria-labelledby="moments-heading"
    >
      <div className="section-heading">
        <SectionBadge>{site.moments.badge}</SectionBadge>
        <h2 id="moments-heading">
          {site.moments.first}
          <br />
          <AccentReveal>{site.moments.accent}</AccentReveal>
        </h2>
        <p>{site.moments.description}</p>
      </div>
      <ol className="moment-grid">
        {site.moments.items.map((item, i) => (
          <li key={item.title}>
            <span className="meta">
              0{i + 1} / {item.when}
            </span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
