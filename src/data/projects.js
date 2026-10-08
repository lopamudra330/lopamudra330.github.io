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
    id: "meterwatch",
    placeholder: false,
    title: "MeterWatch: ML Fault Detection in Smart-Meter Data",
    category: "Applied AI and Data",
    question: "Can machine learning detect smart-meter communication faults more reliably than simple rules?",
    description: "Detects communication dropouts, stuck meters and abnormal spikes in half-hourly smart-meter readings. Isolation Forest reached F1 0.94 vs 0.45 for a rule-based baseline.",
    image: "/images/meterwatch.png",
    methods: ["Machine learning", "Baseline comparison", "Data analysis"],
    technologies: ["Python", "scikit-learn", "pandas"],
    github: "https://github.com/lopamudra330/meterwatch",
    demo: "",
    report: "",
    details: {
      context: "UK smart meters send energy readings every 30 minutes over Zigbee home networks and the DCC national network. Communication or device failures leave tell-tale patterns in the data.",
      motivation: "Inspired by communication and reliability failures I troubleshot on the UK DCC smart metering programme using Ubiqua and Wireshark.",
      relatedWork: "Unsupervised anomaly detection for energy time series; Isolation Forest (Liu et al., 2008).",
      hypothesis: "An unsupervised model on simple daily-profile features will catch more fault types, with fewer false alarms, than threshold rules.",
      contribution: "Designed the fault taxonomy (dropout, flatline, spike), feature set, baseline and evaluation.",
      input: "Daily 48-point load profiles: 40 homes x 60 days of realistic demo data, with a loader for the Smart Meters in London (Low Carbon London) dataset.",
      approach: "Labelled faults injected into 5% of days; 7 features per day (zero count, repeated values, largest jump, peak-to-average ratio, etc.); Isolation Forest vs rule-based threshold.",
      architecture: "Single Python script: load, inject faults, extract features, detect, evaluate, plot.",
      experiment: "2,400 meter-days, 120 faulty; both detectors run on identical data with a fixed random seed.",
      baseline: "Rule-based threshold: flag any zero reading or a peak above the 95th percentile.",
      evaluation: "Precision, recall and F1, plus detection rate per fault type.",
      results: "Isolation Forest: F1 0.94 (precision 0.94, recall 0.94). Rules: F1 0.45. Rules caught 0% of stuck meters; the model caught 100%.",
      errorAnalysis: "Short spikes are the hardest case (77% caught) because they resemble normal evening peaks.",
      limitations: "Results are on realistic demo data with injected faults; real-world validation on the London dataset is the next step.",
      reproducibility: "pip install -r requirements.txt, then python meterwatch.py. Fixed random seed; results saved to results/.",
      futureWork: "Validate on real London data; add time-series models (autoencoders) for spikes; extend to cyber attacks such as false data injection.",
    },
  },
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
];
