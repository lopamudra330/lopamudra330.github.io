import { research } from "../data/research.js";

export default function ResearchDirection() {
  return (
    <section className="block direction" aria-labelledby="direction-h">
      <h2 id="direction-h">Research direction</h2>
      <p className="lead">{research.direction}</p>
    </section>
  );
}
