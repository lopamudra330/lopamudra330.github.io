function Detail({ label, items }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="exp-detail">
      <h4>{label}</h4>
      <ul>
        {items.map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ul>
    </div>
  );
}

export default function ExperienceItem({ item }) {
  return (
    <li className="timeline-item">
      <span className="timeline-dot" aria-hidden="true" />
      <article className="exp-card">
        <div className="exp-meta">
          <span className="tag">{item.type}</span>
          <span className="muted small">{item.period}</span>
        </div>
        <h3>{item.role}</h3>
        <p className="exp-org">
          {item.organization}
          {item.location ? <span className="muted">, {item.location}</span> : null}
        </p>
        {item.focus && (
          <p className="small">
            <strong>Focus:</strong> {item.focus}
          </p>
        )}
        {item.description && <p>{item.description}</p>}
        <div className="exp-grid">
          <Detail label="Responsibilities" items={item.responsibilities} />
          <Detail label="Methods" items={item.methods} />
          <Detail label="Technologies" items={item.technologies} />
          <Detail label="Outputs" items={item.outputs} />
          <Detail label="Achievements" items={item.achievements} />
        </div>
      </article>
    </li>
  );
}
