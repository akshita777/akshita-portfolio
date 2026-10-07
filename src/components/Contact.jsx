import Reveal from "./Reveal";
import Button from "./Button";
import heroImg from "../assets/cat.jpg";

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <Reveal>
        <div className="border-2 border-bone rounded-neo bg-card p-10 md:p-16 shadow-neo grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              LET'S BUILD
              <br />
              SOMETHING<span className="text-lime">.</span>
            </h2>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm">
              <a href="mailto:akshitaverma1410@gmail.com" className="text-muted hover:text-lime transition-colors">EMAIL →</a>
              <a href="https://github.com/akshita777" className="text-muted hover:text-lime transition-colors">GITHUB →</a>
              <a href="https://www.linkedin.com/in/akshita-verma-98a48723a" className="text-muted hover:text-lime transition-colors">LINKEDIN →</a>
            </div>
            <div className="mt-10">
              <Button href="mailto:akshitaverma1410@gmail.com">Get in Touch →</Button>
            </div>
          </div>

          <img
            src={heroImg}
            alt="Akshita"
            className="w-full max-w-sm mx-auto rounded-lg object-cover shadow-lg border-2 border-bone aspect-square -scale-x-100"
          />
        </div>
      </Reveal>
    </section>
  );
}
