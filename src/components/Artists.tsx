const ARTISTS = [
  {
    name: "Ash",
    specialties: ["Custom Work", "Fine Line"],
    bio: "Specializes in intricate custom pieces and delicate fine line work, built around your vision from the first sketch.",
  },
  {
    name: "Jase",
    specialties: ["Traditional", "Custom Work"],
    bio: "Bold traditional tattooing with a modern edge — strong lines, saturated color, and designs built to last.",
  },
];

export default function Artists() {
  return (
    <section id="artists" className="relative bg-charcoal py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blood-bright">
            Our Artists
          </p>
          <h2 className="text-display mt-3 text-5xl tracking-wide text-bone sm:text-6xl">
            The Hands Behind The Work
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {ARTISTS.map((artist) => (
            <div
              key={artist.name}
              className="group relative overflow-hidden rounded-sm border border-white/10 bg-ink p-8 transition duration-300 hover:-translate-y-1 hover:border-blood-bright/50"
            >
              <div className="mb-6 flex aspect-square w-24 items-center justify-center rounded-full border border-blood-bright/30 bg-blood-bright/10">
                <span className="text-display text-4xl text-blood-bright">
                  {artist.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-display text-3xl tracking-wide text-bone">
                {artist.name}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {artist.specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-bone/70"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-bone/60">{artist.bio}</p>
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-blood-bright transition-transform duration-300 group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
