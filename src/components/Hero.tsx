export default function Hero() {
  return (
    <section
      id="top"
      className="noise-overlay relative flex min-h-[100svh] items-center overflow-hidden bg-ink pt-24"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(162,57,232,0.22),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(162,57,232,0.12),transparent_55%)]"
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="animate-in">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-blood-bright/40 bg-blood-bright/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-blood-bright">
            Charleston, South Carolina
          </p>

          <h1 className="text-display text-6xl leading-[0.9] tracking-wide text-bone sm:text-7xl md:text-8xl">
            Ink With
            <br />
            <span className="text-blood-bright">Intention.</span>
            <br />
            Art That
            <br />
            <span className="text-outline">Lasts.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg text-bone/70 sm:text-xl">
            Southern Magnetic Tattoo is a Charleston studio built for
            custom work &mdash; every piece designed around your story,
            executed with precision, and delivered in a clean, professional
            space.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-sm bg-blood-bright px-8 py-4 text-base font-bold uppercase tracking-wider text-white shadow-[0_0_0_0_rgba(162,57,232,0.5)] transition hover:bg-blood hover:shadow-[0_0_30px_5px_rgba(162,57,232,0.35)]"
            >
              Book a Consultation
              <span className="transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
            <a
              href="https://instagram.com/southern_magnetic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-bone/25 px-8 py-4 text-base font-semibold uppercase tracking-wider text-bone/90 transition hover:border-bone/60 hover:bg-white/5"
            >
              Message Us on Instagram
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <div>
              <dt className="text-display text-3xl text-blood-bright">Custom</dt>
              <dd className="mt-1 text-xs uppercase tracking-wider text-bone/55">
                Every Piece
              </dd>
            </div>
            <div>
              <dt className="text-display text-3xl text-blood-bright">Walk-Ins</dt>
              <dd className="mt-1 text-xs uppercase tracking-wider text-bone/55">
                Welcome
              </dd>
            </div>
            <div>
              <dt className="text-display text-3xl text-blood-bright">Clean</dt>
              <dd className="mt-1 text-xs uppercase tracking-wider text-bone/55">
                Pro Studio
              </dd>
            </div>
          </dl>
        </div>

        <div className="animate-in relative hidden aspect-[4/5] w-full max-w-md justify-self-end overflow-hidden rounded-sm border border-white/10 bg-charcoal shadow-2xl lg:block">
          <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(162,57,232,0.28),rgba(10,10,10,0.95))]" />
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <p className="text-display text-3xl leading-tight text-white">
              Custom Work.
              <br />
              Fine Line.
              <br />
              <span className="text-blood-bright">Traditional.</span>
            </p>
          </div>
          <div className="absolute right-6 top-6 h-16 w-16 rounded-full border-2 border-blood-bright/60" />
          <div className="absolute right-10 top-10 h-8 w-8 rounded-full bg-blood-bright" />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ink to-transparent" />
    </section>
  );
}
