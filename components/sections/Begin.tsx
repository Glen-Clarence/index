import { site } from "@/site.config";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { AccentReveal } from "@/components/motion/AccentReveal";
export function Begin() {
  return (
    <section
      id="start"
      className="begin container section"
      aria-labelledby="begin-heading"
    >
      <div className="section-heading">
        <SectionBadge>{site.begin.badge}</SectionBadge>
        <h2 id="begin-heading">
          {site.begin.first}
          <br />
          <AccentReveal>{site.begin.accent}</AccentReveal>
        </h2>
        <p>{site.begin.description}</p>
      </div>
      <ol className="begin-steps">
        {site.begin.steps.map((step, i) => (
          <li key={step.label}>
            <span className="meta">
              0{i + 1} / {step.label}
            </span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </li>
        ))}
      </ol>
      <ul className="begin-notes">
        {site.begin.notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </section>
  );
}
