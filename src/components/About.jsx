import Hero from "./Hero.jsx";
import Education from "./Education.jsx";
import ResearchDirection from "./ResearchDirection.jsx";
import ResearchApproach from "./ResearchApproach.jsx";
import { profile } from "../data/profile.js";

function SimpleList({ id, title, items }) {
  return (
    <section className="block" aria-labelledby={id}>
      <h2 id={id}>{title}</h2>
      <ul className="dot-list">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default function About() {
  return (
    <div className="wrap">
      <Hero />

      <section className="block" aria-labelledby="bio-h">
        <h2 id="bio-h">Biography</h2>
        {profile.biography.map((p, i) => (
          <p key={i} className="prose">
            {p}
          </p>
        ))}
      </section>

      <ResearchDirection />
      <ResearchApproach />

      <div className="two-col">
        <Education />
        <SimpleList id="prep-h" title="Research preparation" items={profile.researchPreparation} />
        <SimpleList id="method-h" title="Methodological interests" items={profile.methodologicalInterests} />
        <SimpleList id="strength-h" title="Key strengths" items={profile.keyStrengths} />
      </div>

      <section className="block availability" aria-labelledby="avail-h">
        <h2 id="avail-h">Academic availability</h2>
        <p className="prose">{profile.availability}</p>
      </section>
    </div>
  );
}
