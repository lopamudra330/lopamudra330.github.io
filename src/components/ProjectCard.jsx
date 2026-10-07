import Icon from "./Icon.jsx";
import SafeImage from "./SafeImage.jsx";

export function TechTag({ name, onClick, active }) {
  const mono = name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const content = (
    <>
      <span className="tech-mono" aria-hidden="true">
        {name.length <= 3 ? name.toUpperCase() : mono}
      </span>
      {name}
    </>
  );
  if (!onClick) return <span className="tech">{content}</span>;
  return (
    <button className="tech" aria-pressed={!!active} onClick={() => onClick(name)} title={`Show projects using ${name}`}>
      {content}
    </button>
  );
}

export function ProjectLinks({ project }) {
  return (
    <div className="card-links">
      {project.github ? (
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          <Icon name="github" size={16} /> Repository
        </a>
      ) : (
        <span className="muted small">Repository link to be added</span>
      )}
      {project.report && (
        <a href={project.report} target="_blank" rel="noopener noreferrer">
          <Icon name="file" size={16} /> Technical report
        </a>
      )}
      {project.demo && (
        <a href={project.demo} target="_blank" rel="noopener noreferrer">
          <Icon name="external" size={16} /> Demo
        </a>
      )}
    </div>
  );
}

export default function ProjectCard({ project, onOpen, onTag, activeTag }) {
  return (
    <article className="project-card">
      <SafeImage className="project-img" src={project.image} alt={`Figure for ${project.title}`} placeholderText="Add project figure" />
      <div className="project-body">
        <p className="project-cat">
          {project.category}
          {project.placeholder && <span className="tag tag-warn">Placeholder</span>}
        </p>
        <h3>{project.title}</h3>
        <p className="project-q">
          <strong>Question:</strong> {project.question}
        </p>
        <p className="small">{project.description}</p>
        <div className="chip-line" aria-label="Methods">
          {project.methods.map((m) => (
            <button key={m} className="method" aria-pressed={activeTag === m} onClick={() => onTag(m)} title={`Show projects using ${m}`}>
              {m}
            </button>
          ))}
        </div>
        <div className="chip-line" aria-label="Technologies">
          {project.technologies.map((t) => (
            <TechTag key={t} name={t} onClick={onTag} active={activeTag === t} />
          ))}
        </div>
        <ProjectLinks project={project} />
        <button className="btn btn-primary details-btn" onClick={() => onOpen(project)}>
          Read case study
        </button>
      </div>
    </article>
  );
}
