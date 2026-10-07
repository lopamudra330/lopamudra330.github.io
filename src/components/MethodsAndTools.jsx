import { toolsAndMethods, interests } from "../data/interests.js";
import { projects } from "../data/projects.js";

export default function MethodsAndTools({ selected, onSelect, onShowProjects }) {
  const item = toolsAndMethods.find((t) => t.name === selected);
  const relatedInterests = item
    ? interests.filter((i) => i.methods.includes(item.name) || i.technologies.includes(item.name))
    : [];
  const projectCount = item
    ? projects.filter((p) => p.methods.includes(item.name) || p.technologies.includes(item.name)).length
    : 0;

  return (
    <section className="block" aria-labelledby="tools-h">
      <h2 id="tools-h">Tools and methods for research</h2>
      <p className="muted">
        Tools and methods that support experimentation and analysis. Select one to see where it fits.
      </p>
      <div className="tools-grid" role="group" aria-label="Tools and methods">
        {toolsAndMethods.map((t) => (
          <button
            key={t.name}
            className={`tool tool-${t.kind}`}
            aria-pressed={selected === t.name}
            onClick={() => onSelect(selected === t.name ? null : t.name)}
          >
            <span className="tool-name">{t.name}</span>
            <span className="tool-kind">{t.kind === "method" ? "Method" : "Tool"}</span>
          </button>
        ))}
      </div>

      <div className="tool-detail" aria-live="polite">
        {item ? (
          <>
            <p>
              <strong>{item.name}</strong>: {item.use}.
            </p>
            <p className="small">
              Related interests:{" "}
              {relatedInterests.length ? relatedInterests.map((i) => i.title).join(", ") : "none listed yet"}
            </p>
            {projectCount > 0 ? (
              <button className="link-btn" onClick={() => onShowProjects({ tag: item.name })}>
                View {projectCount} project{projectCount > 1 ? "s" : ""} using {item.name}
              </button>
            ) : (
              <p className="muted small">No projects listed with this yet.</p>
            )}
          </>
        ) : (
          <p className="muted small">Nothing selected.</p>
        )}
      </div>
    </section>
  );
}
