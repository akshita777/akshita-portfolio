import Reveal from "./Reveal";
import Button from "./Button";
import heroImg from "../assets/image.jpeg";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/akshita777",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.05.78 2.13v3.16c0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/akshita-verma-98a48723a",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8.16h4.56V24H.22zM8.34 8.16h4.37v2.16h.06c.61-1.15 2.1-2.37 4.33-2.37 4.63 0 5.48 3.05 5.48 7.02V24h-4.56v-7.9c0-1.88-.03-4.3-2.62-4.3-2.63 0-3.03 2.05-3.03 4.17V24H8.34z" />
      </svg>
    ),
  },
  {
    label: "Gmail",
    href: "mailto:akshitaverma1410@gmail.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section id="top" className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-lime mb-5">
            Java • Backend • Full Stack
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            HI, I'M AKSHITA.
            <br />
            <span className="text-lime">JAVA</span> BACKEND
            <br />
            DEVELOPER.
          </h1>
          <p className="mt-6 text-muted max-w-md leading-relaxed">
            I build backend systems and full-stack applications using Java, Spring Boot, React and SQL.
          </p>
          <div className="mt-8 flex items-center gap-6 font-mono text-xs uppercase tracking-widest">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="text-muted hover:text-lime transition-colors duration-150"
              >
                {s.icon}
              </a>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#projects" variant="secondary">View My Projects</Button>
            <Button href="#contact" variant="secondary">Contact Me</Button>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-neo border-2 px-6 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-150 ease-out hover:-translate-y-[2px] active:translate-y-[3px] bg-panel text-bone border-bone shadow-[4px_4px_0_#DFFF00] hover:shadow-[6px_6px_0_#DFFF00] active:shadow-none"
            >
              Resume
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <img
            src={heroImg}
            alt="Akshita"
            className="w-full max-w-md mx-auto rounded-lg object-cover shadow-lg border-2 border-bone aspect-square"
          />
        </Reveal>
      </div>
    </section>
  );
}
