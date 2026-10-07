import { useEffect, useState, useCallback } from "react";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Interests from "./components/Interests.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export const TABS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Work Experience" },
  { id: "projects", label: "Projects" },
  { id: "interests", label: "Interests" },
  { id: "contact", label: "Contact" },
];

function tabFromHash() {
  const id = window.location.hash.replace("#", "");
  return TABS.some((t) => t.id === id) ? id : "about";
}

function readTheme() {
  return document.documentElement.getAttribute("data-theme") || "light";
}

export default function App() {
  const [active, setActive] = useState(tabFromHash);
  const [theme, setTheme] = useState(readTheme);
  const [projectFilter, setProjectFilter] = useState(null);

  useEffect(() => {
    const onHash = () => setActive(tabFromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      /* storage unavailable: theme still works for this visit */
    }
  }, [theme]);

  const goTo = useCallback((id, focusPanel = false) => {
    setActive(id);
    if (window.location.hash !== `#${id}`) {
      history.pushState(null, "", `#${id}`);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Move focus to the new content only when selected from the mobile menu or a link;
    // desktop tabs keep focus so arrow-key navigation continues to work.
    if (focusPanel) {
      requestAnimationFrame(() => document.getElementById(`panel-${id}`)?.focus({ preventScroll: true }));
    }
  }, []);

  // Used by Interests to jump to Projects with a filter applied
  const showProjectsFor = useCallback(
    (filter) => {
      setProjectFilter(filter);
      goTo("projects", true);
    },
    [goTo]
  );

  const panels = {
    about: <About />,
    experience: <Experience />,
    projects: <Projects externalFilter={projectFilter} clearExternalFilter={() => setProjectFilter(null)} />,
    interests: <Interests onShowProjects={showProjectsFor} />,
    contact: <Contact />,
  };

  return (
    <>
      <a className="skip-link" href={`#panel-${active}`}>
        Skip to content
      </a>
      <Navbar
        tabs={TABS}
        active={active}
        onSelect={goTo}
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      />
      <main className="main">
        {TABS.map((t) => (
          <section
            key={t.id}
            id={`panel-${t.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${t.id}`}
            tabIndex={-1}
            hidden={active !== t.id}
            className="panel"
          >
            {active === t.id && panels[t.id]}
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}
