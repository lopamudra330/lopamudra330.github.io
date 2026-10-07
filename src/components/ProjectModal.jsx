import { useEffect, useRef } from "react";
import Icon from "./Icon.jsx";
import SafeImage from "./SafeImage.jsx";
import { ProjectLinks } from "./ProjectCard.jsx";

const SECTIONS = [
  ["context", "Problem context"],
  ["motivation", "Motivation"],
  ["relatedWork", "Related work or background"],
  ["hypothesis", "Hypothesis"],
  ["contribution", "My contribution"],
  ["input", "Dataset or input"],
  ["approach", "Technical approach"],
  ["architecture", "System architecture"],
  ["experiment", "Experimental design"],
  ["baseline", "Baseline or comparison"],
  ["evaluation", "Evaluation metrics"],
  ["results", "Results"],
  ["errorAnalysis", "Error analysis"],
  ["limitations", "Limitations"],
  ["reproducibility", "Reproducibility instructions"],
  ["futureWork", "Future research"],
];

export default function ProjectModal({ project, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (project && dialog && !dialog.open) dialog.showModal();
  }, [project]);

  if (!project) return null;

  return (
    <dialog
      ref={ref}
      className="modal"
      aria-labelledby="modal-title"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) ref.current.close(); // click on backdrop
      }}
    >
      <div className="modal-inner">
        <div className="modal-head">
          <div>
            <p className="project-cat">{project.category}</p>
            <h2 id="modal-title">{project.title}</h2>
          </div>
          <button className="icon-btn" onClick={() => ref.current.close()} aria-label="Close case study">
            <Icon name="close" />
          </button>
        </div>

        <div className="modal-question">
          <h3>Research question</h3>
          <p>{project.question}</p>
        </div>

        <SafeImage className="modal-img" src={project.image} alt={`Figure for ${project.title}`} placeholderText="Add project figure or diagram" />

        <dl className="case-study">
          {SECTIONS.map(([key, label]) =>
            project.details?.[key] ? (
              <div key={key} className="case-row">
                <dt>{label}</dt>
                <dd>{project.details[key]}</dd>
              </div>
            ) : null
          )}
        </dl>

        <h3 className="links-h">Repository, report and demo</h3>
        <ProjectLinks project={project} />
      </div>
    </dialog>
  );
}
