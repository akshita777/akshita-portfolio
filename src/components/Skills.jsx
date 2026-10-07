import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import {
  Coffee, Code2, Cpu, Leaf, Atom, FileCode, Globe, Palette,
  Database, GitBranch, GitFork, Terminal,
} from "lucide-react";

const skills = [
  { name: "Java", icon: Coffee, color: "bg-[#E76F00]" },
  { name: "Python", icon: Code2, color: "bg-[#3776AB]" },
  { name: "C++", icon: Cpu, color: "bg-[#00599C]" },
  { name: "Spring Boot", icon: Leaf, color: "bg-[#6DB33F]" },
  { name: "React", icon: Atom, color: "bg-[#087EA4]" },
  { name: "JavaScript", icon: FileCode, color: "bg-[#C9A227]" },
  { name: "HTML", icon: Globe, color: "bg-[#E34F26]" },
  { name: "CSS", icon: Palette, color: "bg-[#264DE4]" },
  { name: "SQL", icon: Database, color: "bg-[#00758F]" },
  { name: "PostgreSQL", icon: Database, color: "bg-[#336791]" },
  { name: "Git", icon: GitBranch, color: "bg-[#F05133]" },
  { name: "GitHub", icon: GitFork, color: "bg-[#3D3D3D]" },
  { name: "Linux", icon: Terminal, color: "bg-[#333333]" },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <SectionHeading title="Tech Stack" />
      <Reveal>
        <div className="flex flex-wrap gap-3">
          {skills.map(({ name, icon: Icon, color }) => (
            <span
              key={name}
              className={`${color} inline-flex items-center gap-2.5 rounded-neo border-2 border-ink px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-widest text-white shadow-neo-sm`}
            >
              <Icon size={16} strokeWidth={2.5} />
              {name}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
