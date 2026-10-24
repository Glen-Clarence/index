import { site } from "@/site.config";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { AccentReveal } from "@/components/motion/AccentReveal";
export function Privacy() {
  return (
    <section
      id="privacy"
      className="privacy container section"
      aria-labelledby="privacy-heading"
    >
      <div className="section-heading">
        <SectionBadge>{site.privacy.badge}</SectionBadge>
        <h2 id="privacy-heading">
          {site.privacy.first}
          <br />
          <AccentReveal>{site.privacy.accent}</AccentReveal>
        </h2>
        <p>{site.privacy.description}</p>
      </div>
      <ul className="privacy-grid">
        {site.privacy.items.map((item) => (
          <li key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
