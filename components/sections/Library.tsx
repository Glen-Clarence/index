import { site } from "@/site.config";
import { SectionBadge } from "@/components/ui/SectionBadge";
export function Library() {
  return (
    <section
      id="library"
      className="library container section"
      aria-labelledby="library-heading"
    >
      <div className="section-heading">
        <SectionBadge>{site.library.badge}</SectionBadge>
        <h2 id="library-heading">
          {site.library.heading.split("\n").map((line, i) => (
            <span className="heading-line" key={i}>
              {line}
            </span>
          ))}
        </h2>
        <p>{site.library.description}</p>
      </div>
      <div className="library-layout">
        <div className="graph-forest" aria-label="Sample knowledge graph">
          {site.library.trees.map((tree) => (
            <div className="graph-tree" key={tree.name}>
              <h3>{tree.name}</h3>
              <ul>
                {tree.children.map((child) => (
                  <li key={child}>{child}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="care">
          <h3>{site.library.careTitle}</h3>
          <p>{site.library.careLead}</p>
          <ul className="care-list">
            {site.library.care.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.detail}</span>
              </li>
            ))}
          </ul>
          <p className="care-note">{site.library.careNote}</p>
        </div>
      </div>
      <div id="privacy" className="privacy-band">
        <h3>{site.library.privacyTitle}</h3>
        <p>{site.library.privacy}</p>
      </div>
    </section>
  );
}
