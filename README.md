# Lopamudra Panigrahi — Research Portfolio

Source code for **https://lopamudra330.github.io**, a research portfolio built with React and Vite and published with GitHub Pages.

This repository holds only the website: its code, images, project summaries, links to separate project repositories, the profile photo and (later) the CV. Project source code lives in its own repositories.

---

## Contents

1. [Install Node.js](#1-install-nodejs)
2. [Clone the repository](#2-clone-the-repository)
3. [Install dependencies](#3-install-dependencies)
4. [Run the website locally](#4-run-the-website-locally)
5. [How to update my research portfolio](#5-how-to-update-my-research-portfolio)
6. [Add individual research repositories](#6-add-individual-research-repositories)
7. [Replace the profile image](#7-replace-the-profile-image)
8. [Add the CV later](#8-add-the-cv-later)
9. [Add project figures and diagrams](#9-add-project-figures-and-diagrams)
10. [Run the production build](#10-run-the-production-build)
11. [Push changes to GitHub](#11-push-changes-to-github)
12. [Enable GitHub Pages](#12-enable-github-pages)
13. [How automatic redeployment works](#13-how-automatic-redeployment-works)
14. [Troubleshooting](#14-troubleshooting)
15. [Avoiding broken image paths](#15-avoiding-broken-image-paths)
16. [Replacing placeholders with accurate information](#16-replacing-placeholders-with-accurate-information)

---

## Folder structure

```
lopamudra330.github.io/
├── .github/workflows/deploy.yml     # builds and publishes the site
├── public/                          # copied as-is into the site
│   ├── images/
│   │   ├── profile.jpg              # ADD THIS (your portrait)
│   │   ├── project-placeholder.png
│   │   └── research-diagram-placeholder.png
│   └── Lopamudra_Panigrahi_CV.pdf   # ADD LATER
├── src/
│   ├── data/                        # ← all editable content lives here
│   │   ├── profile.js  experience.js  projects.js
│   │   ├── interests.js  socials.js  research.js
│   ├── components/                  # layout only — no need to edit
│   ├── styles/global.css            # colours, fonts, spacing
│   ├── App.jsx  main.jsx
├── docs/example-project-README.md   # template for each project repository
├── index.html  package.json  vite.config.js
```

---

## 1. Install Node.js

- Download the **LTS** version from https://nodejs.org and install it.
- Check it worked (open a terminal / Command Prompt):

```bash
node -v    # should show v20 or later
npm -v
```

Also install Git from https://git-scm.com if you do not have it.

## 2. Clone the repository

```bash
git clone https://github.com/lopamudra330/lopamudra330.github.io.git
cd lopamudra330.github.io
```

## 3. Install dependencies

```bash
npm install
```

Run this once, and again whenever `package.json` changes.

## 4. Run the website locally

```bash
npm run dev
```

Open the address it prints (usually http://localhost:5173). The page refreshes automatically when you save a file. Press `Ctrl + C` to stop.

---

## 5. How to update my research portfolio

You update **the same website over time**. You never need to create a new website — edit a data file, preview, then push.

**Workflow for every update:**

```bash
npm run dev          # 1. preview your edits locally
npm run build        # 2. confirm the production build succeeds
git add .            # 3. stage the changes
git commit -m "Update research portfolio"
git push origin main # 4. GitHub Actions rebuilds and publishes automatically
```

### What to edit, and where

| To change | Edit file | Field |
|---|---|---|
| Name, headline, location | `src/data/profile.js` | `name`, `headline`, `location` |
| Biography | `src/data/profile.js` | `biography` (one string per paragraph) |
| Profile photo | `public/images/profile.jpg` | or `image` path in `profile.js` |
| CV PDF | `public/Lopamudra_Panigrahi_CV.pdf` | `cvAvailable`, `cvPath` |
| Education | `src/data/profile.js` | `education` |
| Research preparation, methodological interests, key strengths | `src/data/profile.js` | `researchPreparation`, `methodologicalInterests`, `keyStrengths` |
| Research direction | `src/data/research.js` | `direction` |
| Research approach | `src/data/research.js` | `approach` |
| Work and research experience | `src/data/experience.js` | one object per entry |
| Projects, research questions, descriptions, images, methods, technologies, GitHub/report/demo links | `src/data/projects.js` | one object per project |
| Research interests | `src/data/interests.js` | `interests` |
| Tools and methods grid | `src/data/interests.js` | `toolsAndMethods` |
| Email, GitHub, LinkedIn, Google Scholar, ORCID | `src/data/socials.js` | matching field |

### Example: `src/data/profile.js`

```js
export const profile = {
  name: "Lopamudra Panigrahi",
  headline: "Prospective researcher exploring ...",
  location: "Bhadrak, Odisha, India 756100",
  image: "/images/profile.jpg",
  imageAlt: "Portrait of Lopamudra Panigrahi",
  cvAvailable: false,
  cvPath: "/Lopamudra_Panigrahi_CV.pdf",
  biography: [
    "First paragraph ...",
    "Second paragraph ...",
  ],
  education: [
    {
      degree: "B.Tech in Computer Science",       // your real degree
      institution: "Your University",
      period: "2010 – 2014",
      location: "City, Country",
      details: "Final-year project on ...",
    },
  ],
  researchPreparation: ["Completed an online course in ...", "Reading group on ..."],
  methodologicalInterests: ["Controlled experiments", "Reproducible pipelines"],
  keyStrengths: ["Systematic evaluation of complex systems"],
  availability: "Seeking ... Available from September 2027.",
};
```

### Example: `src/data/experience.js`

```js
export const experience = [
  {
    type: "Independent research",
    role: "Independent researcher",
    organization: "Self-directed",
    period: "Jan 2026 – Present",
    location: "Remote",
    focus: "Reliability of data-driven applications",
    description: "Short description.",
    responsibilities: ["Designed the experiment", "Analysed results"],
    methods: ["Experiment design", "Data analysis"],
    technologies: ["Python", "Docker"],
    outputs: ["Technical report (link)"],
    achievements: [],            // empty lists are hidden automatically
  },
];
```

### Example: `src/data/projects.js`

```js
{
  id: "cache-reliability-study",          // unique, no spaces
  placeholder: false,                     // removes the "Placeholder" label
  title: "How cache policy affects tail latency",
  category: "Cloud and Distributed Systems", // must match a name in projectCategories
  question: "Does policy X reduce 99th-percentile latency under load Y?",
  description: "A concise description.",
  image: "/images/projects/cache-study.png",
  methods: ["Experiment design", "Baseline comparison"],
  technologies: ["Python", "Docker", "Linux"],
  github: "https://github.com/lopamudra330/cache-reliability-study",
  demo: "",                               // leave "" to hide
  report: "https://github.com/lopamudra330/cache-reliability-study/blob/main/report.pdf",
  details: {
    context: "...", motivation: "...", relatedWork: "...", hypothesis: "...",
    contribution: "...", input: "...", approach: "...", architecture: "...",
    experiment: "...", baseline: "...", evaluation: "...", results: "...",
    errorAnalysis: "...", limitations: "...", reproducibility: "...", futureWork: "...",
  },
}
```

Any `details` field left as `""` is hidden in the case study.

### Example: `src/data/interests.js`

```js
{
  icon: "cloud",   // brain, data, cloud, shield, code, flask, repeat, people
  title: "Cloud and distributed systems",
  description: "One or two sentences.",
  questions: ["A question you want to study?"],
  relatedProjects: ["cache-reliability-study"],   // project ids
  methods: ["System evaluation"],
  technologies: ["Docker"],
}
```

### Example: `src/data/socials.js`

```js
export const socials = {
  email: "lopamudraaspirant2026@gmail.com",
  github: "https://github.com/lopamudra330",
  githubUsername: "lopamudra330",
  linkedin: "https://www.linkedin.com/in/lopamudra-panigrahi-8b0204442",
  googleScholar: "https://scholar.google.com/citations?user=XXXX",
  orcid: "https://orcid.org/0000-0000-0000-0000",
  researchProfile: "",
};
```

### Example: `src/data/research.js`

```js
export const research = {
  direction: "My current research direction is ...",
  approachIntro: "The stages I aim to follow ...",
  approach: [
    { title: "Problem formulation", note: "State a precise, answerable question." },
    // add, remove or reorder steps — numbering updates automatically
  ],
};
```

---

## 6. Add individual research repositories

Each project gets **its own public repository** — do not put project code in this website repository.

1. On GitHub, create a new public repository, e.g. `research-project-one`.
2. Add the project's code, a `README.md` (use `docs/example-project-README.md` as a template), `requirements.txt` or `package.json`, data notes, results, figures and, if available, a technical report.
3. Copy the repository URL into the project's `github` field in `src/data/projects.js`.
4. Build and push this website (section 5).

Until `github` is filled in, the card shows "Repository link to be added" instead of a broken link.

## 7. Replace the profile image

1. Save a portrait as `public/images/profile.jpg` (square, about 600×600 px, under 300 KB).
2. Keep the filename, or change `image` in `src/data/profile.js`.
3. Refresh the browser. If the file is missing or misnamed, the site shows a neutral "Add profile image" box — it never breaks.

The component uses the image like this:

```jsx
<img src={profile.image} alt={profile.imageAlt} />
```

## 8. Add the CV later

1. Add the PDF to the `public` folder as `public/Lopamudra_Panigrahi_CV.pdf`.
2. In `src/data/profile.js`, change `cvAvailable: false` to `cvAvailable: true`.
3. Run `npm run build` and check it succeeds.
4. Commit and push:

```bash
git add .
git commit -m "Add CV"
git push origin main
```

While `cvAvailable` is `false`, the site shows a disabled "CV coming soon" label — no broken link. When `true`, it shows "Download CV", which opens the PDF in a new tab.

## 9. Add project figures and diagrams

1. Create `public/images/projects/` and save figures there (PNG, JPG, WebP or SVG; ideally under 500 KB each, about 1200×675 px for cards).
2. Set the project's `image` field, e.g. `image: "/images/projects/my-diagram.png"`.
3. To reuse the defaults, keep `"/images/project-placeholder.png"` or `"/images/research-diagram-placeholder.png"`, or replace those files with your own using the same names.

## 10. Run the production build

```bash
npm run build      # creates the dist/ folder
npm run preview    # optional: view the built site at http://localhost:4173
```

If `npm run build` shows an error, fix it before pushing — the online deployment runs the same command.

## 11. Push changes to GitHub

First time only (creating the repository):

1. On GitHub, create a **public** repository named exactly **`lopamudra330.github.io`** (no README, no licence — keep it empty).
2. In the project folder:

```bash
git init
git add .
git commit -m "Initial research portfolio"
git branch -M main
git remote add origin https://github.com/lopamudra330/lopamudra330.github.io.git
git push -u origin main
```

Every update after that:

```bash
git add .
git commit -m "Update research portfolio"
git push origin main
```

## 12. Enable GitHub Pages

1. Open the repository on GitHub → **Settings** → **Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push any change (or open **Actions → Deploy research portfolio to GitHub Pages → Run workflow**).
4. After the workflow finishes (about 1–2 minutes), visit https://lopamudra330.github.io.

### User site vs project site

| | User site | Project site |
|---|---|---|
| Repository name | `lopamudra330.github.io` | any name, e.g. `portfolio` |
| Address | `https://lopamudra330.github.io` | `https://lopamudra330.github.io/portfolio` |
| `base` in `vite.config.js` | `"/"` (current setting) | `"/portfolio/"` |

This project is set up as a **user site**. Only one user site exists per account. If you ever publish it as a project site instead, change `base` and prefix image and CV paths accordingly (or use `import.meta.env.BASE_URL`).

## 13. How automatic redeployment works

`.github/workflows/deploy.yml` runs whenever you push to `main` (or start it manually). It:

1. checks out the code,
2. sets up Node.js 20,
3. installs dependencies with `npm ci`,
4. runs `npm run build`,
5. uploads `dist/`,
6. publishes it to GitHub Pages.

Watch progress in the **Actions** tab. A green tick means the live site has been updated.

## 14. Troubleshooting

| Problem | Fix |
|---|---|
| `npm: command not found` | Install Node.js (section 1) and reopen the terminal. |
| `npm ci` fails in Actions: missing lock file | Commit `package-lock.json` (`git add package-lock.json`). |
| Blank page on the live site | Check `base` in `vite.config.js` is `"/"` and the repository is named `lopamudra330.github.io`. |
| Site not updating | Check the Actions tab for a red cross; open it to read the error. Hard-refresh the browser (`Ctrl + Shift + R`). |
| 404 on the live site | Settings → Pages → Source must be **GitHub Actions**. |
| Image not showing | See section 15. |
| Build error mentioning a data file | Usually a missing comma or quote in `src/data/*.js`. The error shows the file and line number. |
| `git push` rejected | Run `git pull origin main`, then push again. |

## 15. Avoiding broken image paths

- Files in `public/` are referenced **without** `public`: `public/images/profile.jpg` → `"/images/profile.jpg"`.
- Paths are **case-sensitive** on GitHub Pages: `Profile.JPG` ≠ `profile.jpg`.
- Avoid spaces in filenames; use hyphens (`my-figure.png`).
- Always start the path with `/`.
- A wrong path never crashes the site — you will see a placeholder box, which tells you the path needs checking.

## 16. Replacing placeholders with accurate information

- Search the project for `Add ` and `Placeholder` to find every placeholder:

```bash
grep -rn "Add \|Placeholder\|placeholder: true" src/data
```

- Replace each one only with information you can support (a link, a document, a repository).
- Set `placeholder: false` on a project once it is real.
- Remove the example experience entry once you add a real one.
- Leave optional links as `""` — they are hidden or shown as "Not added yet", never as broken links.
- Do not add results, publications or achievements until they exist.
