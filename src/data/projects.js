// ---------------------------------------------------------------
// PROJECTS — each project links to its OWN GitHub repository.
// Leave github / demo / report as "" until the link exists; the site
// shows "Link to be added" instead of a broken link.
// Example: github: "https://github.com/lopamudra330/research-project-one"
// ---------------------------------------------------------------

export const projectCategories = [
  "Research Projects",
  "Technical Experiments",
  "Applied AI and Data",
  "Cloud and Distributed Systems",
  "Reproducibility and Tools",
];

const placeholderDetails = {
  context: "Add the problem context",
  motivation: "Add the motivation",
  relatedWork: "Add background or related work",
  hypothesis: "Add a hypothesis if applicable",
  contribution: "Add your specific contribution",
  input: "Add dataset or input details",
  approach: "Add the technical approach",
  architecture: "Add architecture details",
  experiment: "Add experimental design",
  baseline: "Add baseline or comparison",
  evaluation: "Add evaluation metrics",
  results: "Add results if available",
  errorAnalysis: "Add error analysis",
  limitations: "Add limitations",
  reproducibility: "Add reproduction instructions",
  futureWork: "Add future research",
};

export const projects = [
  {
    id: "project-one",
    placeholder: true,
    title: "Placeholder: add research project title",
    category: "Research Projects",
    question: "Add the research question or problem",
    description: "Add a concise project description",
    image: "/images/research-diagram-placeholder.png",
    methods: ["Literature review", "Experiment design"],
    technologies: ["Python", "Git"],
    github: "",
    demo: "",
    report: "",
    details: { ...placeholderDetails },
  },
  {
    id: "project-two",
    placeholder: true,
    title: "Placeholder: add technical experiment title",
    category: "Technical Experiments",
    question: "Add the research question or problem",
    description: "Add a concise project description",
    image: "/images/project-placeholder.png",
    methods: ["System evaluation", "Baseline comparison"],
    technologies: ["Docker", "Linux", "PostgreSQL"],
    github: "",
    demo: "",
    report: "",
    details: { ...placeholderDetails },
  },
  {
    id: "project-three",
    placeholder: true,
    title: "Placeholder: add applied AI and data project title",
    category: "Applied AI and Data",
    question: "Add the research question or problem",
    description: "Add a concise project description",
    image: "/images/project-placeholder.png",
    methods: ["Data analysis", "Machine learning"],
    technologies: ["Python", "FastAPI", "React"],
    github: "",
    demo: "",
    report: "",
    details: { ...placeholderDetails },
  },
];
