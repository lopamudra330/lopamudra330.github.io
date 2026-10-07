import { useState } from "react";
import InterestCard from "./InterestCard.jsx";
import MethodsAndTools from "./MethodsAndTools.jsx";
import { interests } from "../data/interests.js";

export default function Interests({ onShowProjects }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="wrap wide">
      <header className="page-head">
        <h1>Research interests</h1>
        <p className="muted">Areas I want to study, with the questions, methods and tools connected to each.</p>
      </header>

      <div className="interest-grid">
        {interests.map((it) => (
          <InterestCard
            key={it.title}
            interest={it}
            onShowProjects={onShowProjects}
            highlighted={!!selected && (it.methods.includes(selected) || it.technologies.includes(selected))}
          />
        ))}
      </div>

      <MethodsAndTools selected={selected} onSelect={setSelected} onShowProjects={onShowProjects} />
    </div>
  );
}
