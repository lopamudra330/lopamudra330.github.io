// ---------------------------------------------------------------
// INTERESTS — research interest cards and the tools & methods grid.
// relatedProjects uses project ids from projects.js.
// icon options: brain, data, cloud, shield, code, flask, repeat, people
// ---------------------------------------------------------------

export const interests = [
  {
    icon: "brain",
    title: "Intelligent applications",
    description: "How learned components can be built into applications that behave predictably for the people who use them.",
    questions: ["When does adding a learned component measurably improve an application?"],
    relatedProjects: ["project-three"],
    methods: ["Experiment design", "System evaluation"],
    technologies: ["Python", "FastAPI"],
  },
  {
    icon: "data",
    title: "Artificial intelligence and data-driven systems",
    description: "Using data to support decisions, and understanding the conditions under which that support can be trusted.",
    questions: ["How sensitive are data-driven decisions to the quality of the underlying data?"],
    relatedProjects: ["project-three"],
    methods: ["Data analysis", "Machine learning"],
    technologies: ["Python", "PostgreSQL"],
  },
  {
    icon: "cloud",
    title: "Cloud and distributed systems",
    description: "Behaviour of systems spread across many machines: performance, failure and cost trade-offs.",
    questions: ["How do deployment choices change the reliability of a distributed service?"],
    relatedProjects: ["project-two"],
    methods: ["System evaluation", "Baseline comparison"],
    technologies: ["Docker", "Linux"],
  },
  {
    icon: "shield",
    title: "Reliable and scalable systems",
    description: "Methods for showing that a system keeps working correctly as load, data and complexity grow.",
    questions: ["Which testing and evaluation methods best predict failures at scale?"],
    relatedProjects: ["project-two"],
    methods: ["System evaluation", "Experiment design"],
    technologies: ["Docker", "PostgreSQL"],
  },
  {
    icon: "code",
    title: "Software systems research",
    description: "Studying how software is designed, verified and maintained, using evidence rather than convention.",
    questions: ["Add a research question here"],
    relatedProjects: ["project-one"],
    methods: ["Literature review", "Experiment design"],
    technologies: ["Git", "GitHub"],
  },
  {
    icon: "flask",
    title: "Research engineering",
    description: "Building the experimental infrastructure that makes research questions testable.",
    questions: ["Add a research question here"],
    relatedProjects: ["project-one", "project-two"],
    methods: ["Experiment design", "Reproducible research"],
    technologies: ["Python", "Docker"],
  },
  {
    icon: "repeat",
    title: "Reproducibility and open research tools",
    description: "Making experiments rerunnable by others through open code, documented data and clear procedures.",
    questions: ["What minimum documentation lets an independent person reproduce an experiment?"],
    relatedProjects: ["project-one"],
    methods: ["Reproducible research"],
    technologies: ["Git", "GitHub", "Docker"],
  },
  {
    icon: "people",
    title: "Human-centred and real-world technology",
    description: "Technology evaluated in the setting where people actually use it, not only in the lab.",
    questions: ["Add a research question here"],
    relatedProjects: [],
    methods: ["Data analysis", "System evaluation"],
    technologies: ["React", "JavaScript"],
  },
];

// Tools & methods grid. kind: "tool" or "method"; use: how it supports research
export const toolsAndMethods = [
  { name: "Python", kind: "tool", use: "Analysis scripts, experiments and prototypes" },
  { name: "JavaScript", kind: "tool", use: "Interactive prototypes and study interfaces" },
  { name: "React", kind: "tool", use: "Front ends for prototypes and demonstrations" },
  { name: "Git", kind: "tool", use: "Versioning code and experiment history" },
  { name: "GitHub", kind: "tool", use: "Sharing code openly for review and reuse" },
  { name: "Docker", kind: "tool", use: "Repeatable experimental environments" },
  { name: "Linux", kind: "tool", use: "Running and observing systems under test" },
  { name: "PostgreSQL", kind: "tool", use: "Structured storage for experimental data" },
  { name: "FastAPI", kind: "tool", use: "Lightweight services for system prototypes" },
  { name: "Machine learning", kind: "method", use: "Learning models from data for evaluation" },
  { name: "Data analysis", kind: "method", use: "Turning measurements into evidence" },
  { name: "Experiment design", kind: "method", use: "Planning fair, controlled comparisons" },
  { name: "System evaluation", kind: "method", use: "Measuring behaviour against defined criteria" },
  { name: "Reproducible research", kind: "method", use: "Making results rerunnable by others" },
];
