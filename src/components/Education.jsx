import { profile } from "../data/profile.js";

export default function Education() {
  return (
    <section className="block" aria-labelledby="education-h">
      <h2 id="education-h">Education</h2>
      <ul className="plain-list">
        {profile.education.map((ed, i) => (
          <li key={i} className="edu-item">
            <div className="edu-head">
              <strong>{ed.degree}</strong>
              {ed.period && <span className="muted">{ed.period}</span>}
            </div>
            <div>
              {ed.institution}
              {ed.location ? `, ${ed.location}` : ""}
            </div>
            {ed.details && <p className="muted small">{ed.details}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}
