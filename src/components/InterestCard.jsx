import { useId, useState } from "react";
import Icon from "./Icon.jsx";
import { projects } from "../data/projects.js";

export default function InterestCard({ interest, onShowProjects, highlighted }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const related = projects.filter((p) => interest.relatedProjects.includes(p.id));

  return (
    <article className={`interest-card${highlighted ? " is-highlighted" : ""}`}>
      <div className="interest-head">
        <span className="interest-icon">
          <Icon name={interest.icon} size={22} />
        </span>
        <h3>{interest.title}</h3>
      </div>
      <p className="small">{interest.description}</p>
      <button className="link-btn" aria-expanded={open} aria-controls={panelId} onClick={() => setOpen((o) => !o)}>
        {open ? "Hide questions and methods" : "Show questions and methods"}
      </button>
      <div id={panelId} hidden={!open} className="interest-more">
        <h4>Research questions</h4>
        <ul className="dot-list small">
          {interest.questions.map((q, i) => (
            <li key={i}>{q}</li>
          ))}
        </ul>
        <h4>Related projects</h4>
        {related.length ? (
          <button
            className="link-btn"
            onClick={() => onShowProjects({ ids: interest.relatedProjects, label: interest.title })}
          >
            View {related.length} related project{related.length > 1 ? "s" : ""}
          </button>
        ) : (
          <p className="muted small">Projects to be added</p>
        )}
        <h4>Methods</h4>
        <div className="chip-line">
          {interest.methods.map((m) => (
            <button key={m} className="method" onClick={() => onShowProjects({ tag: m })} title={`Show projects using ${m}`}>
              {m}
            </button>
          ))}
        </div>
        <h4>Technologies</h4>
        <div className="chip-line">
          {interest.technologies.map((t) => (
            <button key={t} className="method" onClick={() => onShowProjects({ tag: t })} title={`Show projects using ${t}`}>
              {t}
            </button>
          ))}
        </div>
      </div>
    </article>
  );
}
