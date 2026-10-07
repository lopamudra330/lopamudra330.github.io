import { useEffect, useRef, useState } from "react";
import Icon from "./Icon.jsx";

export default function MobileMenu({ tabs, active, onSelect }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    listRef.current?.querySelector("a")?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onClick = (e) => {
      if (!listRef.current?.contains(e.target) && !buttonRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <div className="mobile-menu">
      <button
        ref={buttonRef}
        className="icon-btn"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
      >
        <Icon name={open ? "close" : "menu"} />
      </button>
      {open && (
        <nav id="mobile-nav" aria-label="Main (mobile)" className="mobile-nav" ref={listRef}>
          <ul>
            {tabs.map((t) => (
              <li key={t.id}>
                <a
                  href={`#${t.id}`}
                  aria-current={active === t.id ? "page" : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    onSelect(t.id, true);
                  }}
                >
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
