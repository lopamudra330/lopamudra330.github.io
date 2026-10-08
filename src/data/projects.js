// ---------------------------------------------------------------
// PROJECTS — each project links to its OWN GitHub repository.
// Leave github / demo / report as "" until the link exists; the site
// shows "Link to be added" instead of a broken link.
// Example: github: "https://github.com/lopamudra330/research-project-one"
// ---------------------------------------------------------------

export const projectCategories = [
  "Research Projects",
  "Applied AI and Data",
];

export const projects = [
  {
    id: "netsense-r",
    placeholder: false,
    title: "NetSense-R: Early Warning of Communication-Link Degradation",
    category: "Research Projects",
    question: "Can link telemetry show that a communication link is degrading before it fails severely, and at what cost in false alarms?",
    description: "Pre-registered comparison of engineering threshold monitoring and an interpretable logistic model on synthetic link telemetry. On held-out episodes, the ML detector cut false alarms by about 28% and caught early degradation 3.7x more often.",
    image: "/images/netsense-r.png",
    methods: ["Experiment design", "Baseline comparison", "Machine learning"],
    technologies: ["Python", "scikit-learn", "pandas"],
    github: "https://github.com/lopamudra330/NetSense-R",
    demo: "",
    report: "https://github.com/lopamudra330/NetSense-R/blob/main/docs/methodology.md",
    details: {
      context: "Operational network monitoring is often reactive: alarms fire once service is already badly affected, and engineers then work backwards to find out why.",
      motivation: "Motivated by investigating communication failures in the UK smart-metering domain. The study models a generic IP access/backhaul link, not any smart-metering or production system.",
      relatedWork: "Threshold-based network monitoring and interpretable machine learning for degradation detection.",
      hypothesis: "Observable telemetry (latency, jitter, errors, retransmissions) carries an early signature of degradation that a simple interpretable model can use better than fixed thresholds.",
      contribution: "Designed the synthetic degradation model, telemetry validation layer, frozen train/test split, both detectors and the evaluation protocol.",
      input: "Synthetic telemetry from independent simulated link episodes, with two degradation causes (congestion and link-quality degradation) plus recovering episodes. Five random seeds.",
      approach: "Experiment 1 characterised telemetry by network state; Experiment 2 froze an engineering threshold baseline; Experiment 3 froze an interpretable logistic model. Both were evaluated once on held-out episodes.",
      architecture: "Python package: telemetry generator, data validation, episode-level splits, threshold and ML detectors, evaluation and plotting.",
      experiment: "Detector specifications were frozen on training episodes before test evaluation. The episode, not the telemetry row, is the unit of evidence.",
      baseline: "Engineering threshold monitoring, using the same persistence rules and event definitions as the ML detector.",
      evaluation: "Detection rate, detection delay, warning time before severe degradation, false alarms per 100 healthy hours, and minute-level precision/recall.",
      results: "Matched 3-minute persistence rule (held-out test): false alarms 12.9 vs 18.0 per 100 healthy hours; recovering-episode detection 91% vs 77%; median delay 37 vs 47 minutes. Early-degradation minutes caught: 34% vs 9%.",
      errorAnalysis: "No detector dominates under every setting: with the strictest persistence rule, ML detects faster but raises more false alarms than the baseline.",
      limitations: "All telemetry is synthetic. Results describe detector behaviour under the simulation's stated assumptions, not detectability in real networks.",
      reproducibility: "Fixed seeds, frozen specifications committed before test evaluation, and all metrics and figures committed in results/.",
      futureWork: "Generalisation to unseen degradation causes, unsupervised detection, and prognosis: predicting whether a degrading link will recover.",
    },
  },
  {
    id: "meterwatch",
    placeholder: false,
    title: "MeterWatch: ML Fault Detection in Smart-Meter Data",
    category: "Applied AI and Data",
    question: "Can machine learning detect smart-meter communication faults more reliably than simple rules?",
    description: "Detects communication dropouts, stuck meters and abnormal spikes in half-hourly smart-meter readings. Tested on real London household data: Isolation Forest beat a rule-based baseline (F1 0.47 vs 0.35), but performance halved compared with simulated data (F1 0.94).",
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
      input: "Daily 48-point load profiles from about 50 real households in the Smart Meters in London (Low Carbon London) dataset, plus 40 simulated homes x 60 days for comparison.",
      approach: "Labelled faults injected into 5% of days; 7 features per day (zero count, repeated values, largest jump, peak-to-average ratio, etc.); Isolation Forest vs rule-based threshold.",
      architecture: "Single Python script: load, inject faults, extract features, detect, evaluate, plot.",
      experiment: "2,400 meter-days, 120 faulty; both detectors run on identical data with a fixed random seed.",
      baseline: "Rule-based threshold: flag any zero reading or a peak above the 95th percentile.",
      evaluation: "Precision, recall and F1, plus detection rate per fault type.",
      results: "Real London data: Isolation Forest F1 0.47 vs 0.35 for rules. Simulated data: F1 0.94 vs 0.45. Rules caught every dropout but almost no stuck meters on both datasets.",
      errorAnalysis: "Real homes have sharp, irregular peaks (kettles, cookers, showers), so genuine behaviour looks like a fault and some faults look normal. Spikes were the hardest case on both datasets.",
      limitations: "Faults are injected rather than observed, and results come from one block of about 50 homes.",
      reproducibility: "pip install -r requirements.txt, then python meterwatch.py. Fixed random seed; results saved to results/.",
      futureWork: "Per-home baselines to reduce false alarms from natural spikes; testing across more London blocks; extending to cyber attacks such as false data injection.",
    },
  },
];
