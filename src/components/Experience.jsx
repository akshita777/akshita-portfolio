import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const certs = [
  {
    title: "NVIDIA",
    detail: "Applications of AI for Anomaly Detection — Workshop focused on AI-driven anomaly detection, exploring techniques for identifying unusual patterns and detecting potential anomalies in data.",
    link: "https://drive.google.com/file/d/1F-Ju86dxJvd2h9jAk7aackJDE5fbnV4C/view?usp=sharing",
  },
  {
    title: "AVINYA Exhibition",
    detail: "DDoS Mitigation Project — Showcased a DDoS Mitigation project at the AVINYA Exhibition, demonstrating a practical approach to detecting and mitigating network-based attacks.",
    link: "https://drive.google.com/file/d/1-zPkHYkev7xGUS-LEcEoOZg6q4Ekh1OK/view?usp=sharing",
  },
];

export default function Experience() {
  return (
    <>
      <section id="education" className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <SectionHeading title="Education" />
        <Reveal>
          <div className="border-2 border-bone rounded-neo bg-card p-7 shadow-neo-bone">
            <h3 className="text-xl font-extrabold tracking-tight">Master of Computer Application (MCA)</h3>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.25em] text-muted">IIPS, DAVV</p>
            <p className="mt-4 inline-block font-mono text-xs uppercase tracking-widest bg-lime text-ink border-2 border-ink rounded-neo px-3 py-1.5">
              Current GPA: 9.0
            </p>
          </div>
        </Reveal>
      </section>

      <section id="certifications" className="max-w-6xl mx-auto px-6 pb-16 md:pb-24">
        <SectionHeading title="Certifications & Achievements" />
        <div className="grid md:grid-cols-2 gap-5">
          {certs.map((c, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="border-2 border-bone rounded-neo bg-card p-6 shadow-neo h-full">
                <span className="block w-3 h-3 bg-lime border-2 border-ink mb-4" />
                <h3 className="font-bold text-sm tracking-wide">{c.title}</h3>
                <p className="mt-2 text-sm text-muted">{c.detail}</p>
                {c.link && (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-4 font-mono text-[11px] uppercase tracking-widest text-lime hover:underline"
                  >
                    View Certificate →
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
