import Icon from "./Icon.jsx";
import { currentFocus } from "../data/focus.js";

export default function CurrentFocus() {
  const f = currentFocus;
  return (
    <section className="block focus" aria-labelledby="focus-h">
      <div className="focus-top">
        <h2 id="focus-h">{f.label}</h2>
        <span className="tag">{f.status}</span>
      </div>
      <p className="focus-title">{f.title}</p>
      <p className="focus-question">{f.question}</p>
      <ul className="focus-sub">
        {f.subQuestions.map((q, i) => (
          <li key={i}>{q}</li>
        ))}
      </ul>
      <div className="btn-row">
        <a className="btn btn-primary" href="#projects">
          See research projects
        </a>
        {f.github && (
          <a className="btn" href={f.github} target="_blank" rel="noopener noreferrer">
            <Icon name="github" /> Repository
          </a>
        )}
      </div>
    </section>
  );
}
