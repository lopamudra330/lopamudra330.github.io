import { useEffect, useMemo, useState } from "react";
import ProjectFilters from "./ProjectFilters.jsx";
import ProjectCard from "./ProjectCard.jsx";
import ProjectModal from "./ProjectModal.jsx";
import { projects, projectCategories } from "../data/projects.js";

export default function Projects({ externalFilter, clearExternalFilter }) {
  const [category, setCategory] = useState("All");
  const [tag, setTag] = useState(null);
  const [ids, setIds] = useState(null); // filter from an interest card
  const [open, setOpen] = useState(null);
  const [opener, setOpener] = useState(null);

  // Apply a filter passed from the Interests tab
  useEffect(() => {
    if (!externalFilter) return;
    setCategory("All");
    if (externalFilter.tag) {
      setTag(externalFilter.tag);
      setIds(null);
    }
    if (externalFilter.ids) {
      setIds(externalFilter);
      setTag(null);
    }
    clearExternalFilter();
  }, [externalFilter, clearExternalFilter]);

  const tags = useMemo(() => {
    const set = new Set();
    projects.forEach((p) => [...p.technologies, ...p.methods].forEach((t) => set.add(t)));
    return [...set].sort((a, b) => a.localeCompare(b));
  }, []);

  const visible = projects.filter(
    (p) =>
      (category === "All" || p.category === category) &&
      (!tag || p.technologies.includes(tag) || p.methods.includes(tag)) &&
      (!ids || ids.ids.includes(p.id))
  );

  const reset = () => {
    setCategory("All");
    setTag(null);
    setIds(null);
  };

  return (
    <div className="wrap wide">
      <header className="page-head">
        <h1>Research and technical projects</h1>
        <p className="muted">
          Each project lives in its own public repository with code, data notes and reproduction steps. Select a
          technology or method to see related work.
        </p>
      </header>

      <ProjectFilters
        categories={projectCategories}
        category={category}
        onCategory={(c) => {
          setCategory(c);
          setIds(null);
        }}
        tags={tags}
        activeTag={tag}
        onTag={(t) => {
          setTag(t);
          setIds(null);
        }}
      />

      <p className="result-line" aria-live="polite">
        Showing {visible.length} of {projects.length}
        {tag ? ` using ${tag}` : ""}
        {ids ? ` related to ${ids.label}` : ""}
        {category !== "All" ? ` in ${category}` : ""}
        {(tag || ids || category !== "All") && (
          <button className="link-btn" onClick={reset}>
            Clear filters
          </button>
        )}
      </p>

      {visible.length === 0 ? (
        <p className="empty">No projects match this filter yet. New projects can be added in src/data/projects.js.</p>
      ) : (
        <div className="project-grid">
          {visible.map((p) => (
            <ProjectCard
              key={p.id}
              project={p}
              activeTag={tag}
              onTag={(t) => {
                setTag(tag === t ? null : t);
                setIds(null);
              }}
              onOpen={(proj) => {
                setOpener(document.activeElement);
                setOpen(proj);
              }}
            />
          ))}
        </div>
      )}

      <ProjectModal
        project={open}
        onClose={() => {
          setOpen(null);
          opener?.focus?.();
        }}
      />
    </div>
  );
}
