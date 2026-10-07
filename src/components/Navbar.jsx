import { useRef } from "react";
import Icon from "./Icon.jsx";
import MobileMenu from "./MobileMenu.jsx";
import { profile } from "../data/profile.js";

export default function Navbar({ tabs, active, onSelect, theme, onToggleTheme }) {
  const tabRefs = useRef([]);

  // Arrow-key navigation between tabs (WAI-ARIA tabs pattern)
  const onKeyDown = (e, index) => {
    let next = null;
    if (e.key === "ArrowRight") next = (index + 1) % tabs.length;
    if (e.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = tabs.length - 1;
    if (next !== null) {
      e.preventDefault();
      tabRefs.current[next]?.focus();
      onSelect(tabs[next].id);
    }
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <a
          className="brand"
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            onSelect("about");
          }}
        >
          {profile.name}
        </a>

        <nav className="desktop-nav" aria-label="Main">
          <div role="tablist" aria-label="Portfolio sections" className="tablist">
            {tabs.map((t, i) => (
              <button
                key={t.id}
                id={`tab-${t.id}`}
                ref={(el) => (tabRefs.current[i] = el)}
                role="tab"
                aria-selected={active === t.id}
                aria-controls={`panel-${t.id}`}
                tabIndex={active === t.id ? 0 : -1}
                className="tab"
                onClick={() => onSelect(t.id)}
                onKeyDown={(e) => onKeyDown(e, i)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </nav>

        <div className="header-actions">
          <button
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Light mode" : "Dark mode"}
          >
            <Icon name={theme === "dark" ? "sun" : "moon"} />
          </button>
          <MobileMenu tabs={tabs} active={active} onSelect={onSelect} />
        </div>
      </div>
    </header>
  );
}
