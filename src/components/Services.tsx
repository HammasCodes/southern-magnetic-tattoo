const SERVICES = [
  {
    tag: "01",
    title: "Custom Tattoos",
    description:
      "One-on-one design collaboration to build a piece that's entirely yours, from concept to final line work.",
  },
  {
    tag: "02",
    title: "Walk-Ins Welcome",
    description:
      "Have flash in mind or a spontaneous idea? Come on in — we'll fit you in when we can.",
  },
  {
    tag: "03",
    title: "Consultations",
    description:
      "Sit down with an artist to talk placement, size, and design before any ink touches skin.",
  },
  {
    tag: "04",
    title: "Cover-Ups",
    description:
      "Not happy with old work? We specialize in transforming it into something you'll love.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blood-bright">
            What We Do
          </p>
          <h2 className="text-display mt-3 text-5xl tracking-wide text-bone sm:text-6xl">
            Services
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col rounded-sm border border-white/10 bg-charcoal p-7 transition duration-300 hover:-translate-y-1 hover:border-blood-bright/40"
            >
              <span className="text-display text-4xl text-white/15 transition group-hover:text-blood-bright/30">
                {service.tag}
              </span>
              <h3 className="text-display mt-4 text-2xl tracking-wide text-bone">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-bone/60">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
