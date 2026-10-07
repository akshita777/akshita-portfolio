import { useState } from "react";

const links = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-ink/95 backdrop-blur border-b-2 border-bone">
      <nav className="max-w-6xl mx-auto flex items-center justify-center px-6 py-4 relative">
        <ul className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="text-muted hover:text-lime transition-colors duration-150">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden absolute right-6 text-bone font-mono text-xs uppercase border-2 border-bone rounded-neo px-3 py-2"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col items-center gap-4 px-6 pb-6 font-mono text-xs uppercase tracking-widest">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} onClick={() => setOpen(false)} className="text-muted hover:text-lime">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
