export default function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`w-full flex items-center ${className}`}>
      <div className="mx-auto">{children}</div>
    </section>
  );
}
