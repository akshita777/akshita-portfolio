export default function SectionHeading({ kicker, title, id }) {
  return (
    <div id={id} className="scroll-mt-24 mb-8 md:mb-10">
      {kicker && (
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-lime mb-3">{kicker}</p>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase inline-block border-b-4 border-lime pb-1">{title}</h2>
    </div>
  );
}
