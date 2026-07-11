const SHOWCASE = [
  "Fine Line Botanical",
  "Traditional Americana",
  "Custom Blackwork",
  "Cover-Up Transformation",
  "Neo-Traditional Color",
  "Fine Line Portrait",
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blood-bright">
            Portfolio
          </p>
          <h2 className="text-display mt-3 text-5xl tracking-wide text-bone sm:text-6xl">
            Recent Work
          </h2>
          <p className="mt-4 text-bone/60">
            See more on Instagram{" "}
            <a
              href="https://instagram.com/southern_magnetic"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blood-bright hover:underline"
            >
              @southern_magnetic
            </a>
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SHOWCASE.map((label) => (
            <div
              key={label}
              className="group aspect-square overflow-hidden rounded-sm border border-white/10 bg-charcoal shadow-sm transition hover:border-blood-bright/40"
            >
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center">
                <span className="h-px w-10 bg-blood-bright/60" />
                <span className="text-display text-xl tracking-wide text-bone/80">
                  {label}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-bone/35">
                  Photo Coming Soon
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://instagram.com/southern_magnetic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-bone/25 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-bone/90 transition hover:border-bone/60 hover:bg-white/5"
          >
            See More on Instagram @southern_magnetic
          </a>
        </div>
      </div>
    </section>
  );
}
