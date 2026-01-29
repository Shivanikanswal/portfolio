export default function Section({ id, children, className = "" }) {
  return (
    <section
      id={id}
      className={`section-container w-full flex items-center ${className}`}
    >
      <div className="mx-auto my-auto">{children}</div>
    </section>
  );
}
