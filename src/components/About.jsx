import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <SectionHeading title="About Me" />
      <div className="max-w-3xl">
        <Reveal>
          <p className="text-muted leading-relaxed border-2 border-bone rounded-neo bg-card p-6 shadow-neo-bone">
            Hi! I'm Akshita Verma, a Java &amp; Full Stack Developer and MCA student at IIPS, DAVV, Indore, with a current GPA of 9.0. I enjoy building practical applications, exploring backend development, and turning ideas into working software. I started out exploring different parts of development, but over time I found myself more interested in what happens behind the interface — how applications work, how APIs communicate, how data is handled, and how separate pieces come together into a working system.
          </p>
        </Reveal>
      </div>

    </section>
  );
}
