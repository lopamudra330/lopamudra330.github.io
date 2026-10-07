import { research } from "../data/research.js";

// The approach is a genuine sequence, so it is numbered.
export default function ResearchApproach() {
  return (
    <section className="block" aria-labelledby="approach-h">
      <h2 id="approach-h">Research approach</h2>
      <p className="muted">{research.approachIntro}</p>
      <ol className="approach">
        {research.approach.map((step, i) => (
          <li key={step.title} className="approach-step">
            <span className="approach-num" aria-hidden="true">
              {i + 1}
            </span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.note}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
