const PHONE_DISPLAY = "843-202-0785";
const PHONE_TEL = "tel:+18432020785";
const INSTAGRAM_HANDLE = "@southern_magnetic";
const INSTAGRAM_URL = "https://instagram.com/southern_magnetic";
const ADDRESS = "535 Stinson Dr, Charleston, SC 29407";

export default function Contact() {
  return (
    <section
      id="contact"
      className="noise-overlay relative overflow-hidden bg-ink py-24 sm:py-32"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(162,57,232,0.18),transparent_60%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-blood-bright">
          Ready When You Are
        </p>
        <h2 className="text-display mt-3 text-5xl tracking-wide text-bone sm:text-6xl md:text-7xl">
          Let&apos;s Make Something Permanent
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-bone/65">
          Call, text, or message us on Instagram to book a consultation
          &mdash; or just walk in.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={PHONE_TEL}
              className="group inline-flex items-center justify-center gap-3 rounded-sm bg-blood-bright px-9 py-5 text-lg font-bold uppercase tracking-wider text-white shadow-[0_0_0_0_rgba(162,57,232,0.5)] transition hover:bg-blood hover:shadow-[0_0_30px_5px_rgba(162,57,232,0.35)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden
              >
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02Z" />
              </svg>
              {PHONE_DISPLAY}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-bone/25 px-9 py-5 text-lg font-semibold uppercase tracking-wider text-bone/90 transition hover:border-bone/60 hover:bg-white/5"
            >
              DM {INSTAGRAM_HANDLE}
            </a>
          </div>
          <p className="text-sm uppercase tracking-wider text-bone/45">
            Tap to call &middot; Wed&ndash;Sun, 12PM&ndash;11PM
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-2xl gap-6 border-t border-white/10 pt-10 text-left sm:grid-cols-2">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-bone/45">
              Visit
            </h3>
            <p className="mt-2 text-bone/80">{ADDRESS}</p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-bone/45">
              Call or Message
            </h3>
            <a
              href={PHONE_TEL}
              className="mt-2 block font-semibold text-bone/80 hover:text-blood-bright"
            >
              {PHONE_DISPLAY}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block font-semibold text-bone/80 hover:text-blood-bright"
            >
              {INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
