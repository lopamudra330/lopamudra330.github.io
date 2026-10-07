export default function ProjectFilters({ categories, category, onCategory, tags, activeTag, onTag }) {
  return (
    <div className="filters">
      <div className="filter-group" role="group" aria-label="Filter by category">
        {["All", ...categories].map((c) => (
          <button
            key={c}
            className="chip"
            aria-pressed={category === c}
            onClick={() => onCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="filter-group tags" role="group" aria-label="Filter by technology or method">
        <span className="filter-label">Technology or method:</span>
        {tags.map((t) => (
          <button
            key={t}
            className="chip chip-small"
            aria-pressed={activeTag === t}
            onClick={() => onTag(activeTag === t ? null : t)}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}
