const PILLARS = [
  {
    title: "Clean, Professional Studio",
    description:
      "A well-maintained, fully sanitized space where safety and craft come first, every single session.",
  },
  {
    title: "Welcoming Atmosphere",
    description:
      "Whether it's your first tattoo or your fiftieth, you'll be treated with respect and zero judgment.",
  },
  {
    title: "Charleston-Based",
    description:
      "Proudly part of the Charleston community, bringing custom artistry to the Lowcountry.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-charcoal py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blood-bright">
            About the Studio
          </p>
          <h2 className="text-display mt-3 text-5xl tracking-wide text-bone sm:text-6xl">
            Charleston&apos;s Home
            <br />
            <span className="text-blood-bright">For Custom Ink.</span>
          </h2>
          <p className="mt-6 text-lg text-bone/70">
            Southern Magnetic Tattoo is built on craft, cleanliness, and
            community. We run a professional studio where every client
            &mdash; walk-in or long-time regular &mdash; gets the same
            level of care and attention to detail.
          </p>
          <p className="mt-4 text-lg text-bone/70">
            Our space is kept spotless, our process is transparent, and
            our door is open to anyone looking for real custom artistry in
            a studio that respects the craft.
          </p>
        </div>

        <div className="grid gap-5">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="flex gap-5 rounded-sm border border-white/10 bg-ink p-6"
            >
              <span className="mt-1 h-full w-1 shrink-0 self-stretch bg-blood-bright" />
              <div>
                <h3 className="text-display text-2xl tracking-wide text-bone">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-bone/60">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
