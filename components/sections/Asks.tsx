import { site } from "@/site.config";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { AccentReveal } from "@/components/motion/AccentReveal";
export function Asks() {
  return (
    <section id="asks" className="asks section" aria-labelledby="asks-heading">
      <div className="container">
        <div className="asks__heading">
          <div>
            <SectionBadge>{site.asks.badge}</SectionBadge>
            <h2 id="asks-heading">
              {site.asks.first}
              <br />
              <AccentReveal dark>{site.asks.accent}</AccentReveal>
            </h2>
          </div>
          <p>{site.asks.description}</p>
        </div>
        <ul className="ask-list">
          {site.asks.items.map((item) => (
            <li key={item.ask}>
              <blockquote>“{item.ask}”</blockquote>
              <p className="meta">{item.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
