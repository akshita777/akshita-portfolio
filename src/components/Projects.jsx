import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    name: "UPI-MESH",
    desc: "Offline payment system built with Java and Spring Boot, designed around offline peer-to-peer payment communication.",
    tech: ["JAVA", "SPRING BOOT", "CRYPTOGRAPHY", "MESH NETWORKING"],
    shadow: "shadow-neo",
    border: "border-lime",
    hoverShadow: "hover:shadow-[7px_7px_0_#DFFF00]",
    filled: true,
    github: "https://github.com/akshita777/UPI-Mesh",
    demo: "#",
  },
  {
    name: "CINEBOOK",
    desc: "A highly scalable backend system designed to manage large-scale ticket reservations. Built to handle high concurrency — resolving race conditions when thousands of users try to book the same seat for a popular event.",
    tech: ["JAVA", "SPRING BOOT", "POSTGRESQL/MYSQL", "REDIS", "KAFKA", "DOCKER"],
    shadow: "shadow-neo-azure",
    border: "border-azure",
    hoverShadow: "hover:shadow-[7px_7px_0_#4DA3FF]",
    filled: true,
    github: "https://github.com/akshita777/CineBook",
    demo: "https://drive.google.com/file/d/1Vtfa4Ei1YK9xRn-NNhLI2TfOVCs-w_1S/view?usp=sharing",
  },
  {
    name: "IIPS REPOSITORY SYSTEM",
    desc: "Centralized project management and evaluation platform for the MCA Integrated program at IIPS DAVV — GitHub OAuth onboarding, project submission, guide allocation, and rubric-based evaluation.",
    tech: ["NEXT.JS", "SPRING BOOT", "POSTGRESQL", "SPRING SECURITY", "TAILWIND"],
    shadow: "shadow-neo-bone",
    border: "border-bone",
    hoverShadow: "hover:shadow-[7px_7px_0_#F5F5F0]",
    filled: true,
    github: "https://github.com/akshita777/iips-ug-pg-project-repository-system",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <SectionHeading title="Projects" />
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.05}>
            <div
              className={`group border-2 ${p.border} rounded-neo bg-card p-7 ${p.shadow} transition-all duration-150 hover:-translate-y-[3px] ${p.hoverShadow} h-full flex flex-col min-h-[220px]`}
            >
              {p.filled ? (
                <>
                  <h3 className="text-xl font-extrabold tracking-tight">{p.name}</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed flex-1">{p.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="font-mono text-[10px] uppercase tracking-widest border border-white/15 rounded-neo px-2.5 py-1 text-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-5">
                    <a
                      href={p.github}
                      className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-bone hover:text-lime transition-colors duration-150"
                    >
                      View Project <span className="transition-transform duration-150 group-hover:translate-x-1">→</span>
                    </a>
                    <a
                      href={p.demo}
                      className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-muted hover:text-azure transition-colors duration-150"
                    >
                      Live Demo ↗
                    </a>
                  </div>
                </>
              ) : (
                <span className="sr-only">{p.name}</span>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
