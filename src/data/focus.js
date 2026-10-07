// ---------------------------------------------------------------
// CURRENT FOCUS & RESEARCH JOURNEY — shown on the About tab.
// Edit text freely. Keep everything accurate and verifiable.
// ---------------------------------------------------------------

export const currentFocus = {
  label: "Current research project",
  title: "NetSense-R",
  status: "In design", // change to "In progress" or "Complete" as it develops
  question:
    "When does a communication network begin to fail — and can we see it coming?",
  subQuestions: [
    "Can early degradation be told apart from normal busy-hour slowdowns?",
    "When are simple threshold rules enough, and when does machine learning add value?",
    "How much warning time does each method give, and at what cost in false alarms?",
  ],
  github: "", // add e.g. "https://github.com/lopamudra330/netsense-r" once the repository exists
};

// Each stage: what happened, the question it raised, and the skills it built.
export const journey = [
  {
    stage: "Foundation",
    title: "Electronics and Telecommunications Engineering",
    summary: "B.Tech degree covering signals, communication systems and networks.",
    question: "How do communication systems work?",
    skills: ["Communication systems", "Signals", "Networking"],
  },
  {
    stage: "Infrastructure",
    title: "UK smart-metering communications",
    summary:
      "Worked on communications infrastructure, investigating communication failures, device behaviour and network reliability.",
    question: "Why did this communication fail?",
    skills: ["Network behaviour", "Device communication", "Distributed systems"],
  },
  {
    stage: "Reliability",
    title: "About ten years of engineering and quality assurance",
    summary:
      "Diagnosed system issues, built test automation and led technical work across complex systems.",
    question: "Could we have seen the failure coming?",
    skills: ["Wireshark", "Linux diagnostics", "Test automation", "Technical leadership"],
  },
  {
    stage: "Now",
    title: "Data-driven methods",
    summary:
      "Developing Python, statistics and machine-learning skills through independent research projects.",
    question: "Can measurements reveal problems before they become failures?",
    skills: ["Python", "Data analysis", "Machine learning", "Experiment design"],
  },
  {
    stage: "Next",
    title: "Research degree",
    summary:
      "Seeking a master's or PhD in smart energy systems, cyber-physical systems, or reliable communication networks.",
    question: "What can communication systems tell us about the world they operate in?",
    skills: ["Research methods", "Modelling", "Validation"],
  },
];
