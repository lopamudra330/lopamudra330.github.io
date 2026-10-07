import { useRef, useState } from "react";
import { journey } from "../data/focus.js";

// An ordered path, so the stages are numbered. Select a stage to read about it.
export default function ResearchJourney() {
  const [active, setActive] = useState(journey.length - 2); // opens on "Now"
  const refs = useRef([]);
  const item = journey[active];

  const onKeyDown = (e, i) => {
    let next = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = Math.min(i + 1, journey.length - 1);
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = Math.max(i - 1, 0);
    if (next !== null) {
      e.preventDefault();
      setActive(next);
      refs.current[next]?.focus();
    }
  };

  return (
    <section className="block" aria-labelledby="journey-h">
      <h2 id="journey-h">From industry to research</h2>
      <p className="muted">Each stage raised the question that led to the next. Select a stage.</p>

      <ol className="journey" role="list">
        {journey.map((j, i) => (
          <li key={j.stage}>
            <button
              ref={(el) => (refs.current[i] = el)}
              className="journey-step"
              aria-pressed={active === i}
              aria-controls="journey-detail"
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
            >
              <span className="journey-num" aria-hidden="true">{i + 1}</span>
              <span className="journey-stage">{j.stage}</span>
            </button>
          </li>
        ))}
      </ol>

      <div id="journey-detail" className="journey-detail" aria-live="polite">
        <h3>{item.title}</h3>
        <p>{item.summary}</p>
        <p className="journey-q">{item.question}</p>
        <div className="chip-line">
          {item.skills.map((s) => (
            <span key={s} className="method">{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
