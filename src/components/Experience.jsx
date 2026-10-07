import ExperienceItem from "./ExperienceItem.jsx";
import { experience } from "../data/experience.js";

export default function Experience() {
  return (
    <div className="wrap">
      <header className="page-head">
        <h1>Work experience</h1>
        <p className="muted">
          Research, academic and technical experience, most recent first. Entries cover research roles,
          assistantships, internships, independent research, teaching, volunteering and workshops.
        </p>
      </header>
      {experience.length === 0 ? (
        <p className="empty">No entries yet. Add one in src/data/experience.js.</p>
      ) : (
        <ol className="timeline">
          {experience.map((item, i) => (
            <ExperienceItem key={i} item={item} />
          ))}
        </ol>
      )}
    </div>
  );
}
