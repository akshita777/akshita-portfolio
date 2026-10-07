export default function Button({ href, children, variant = "primary", className = "" }) {
  const base =
    "inline-flex items-center gap-2 rounded-neo border-2 px-6 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-150 ease-out hover:-translate-y-[2px] active:translate-y-[3px]";
  const styles =
    variant === "primary"
      ? "bg-lime text-ink border-ink shadow-[4px_4px_0_#F5F5F0] hover:shadow-[6px_6px_0_#F5F5F0] active:shadow-none"
      : "bg-panel text-bone border-bone shadow-[4px_4px_0_#DFFF00] hover:shadow-[6px_6px_0_#DFFF00] active:shadow-none";
  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}
