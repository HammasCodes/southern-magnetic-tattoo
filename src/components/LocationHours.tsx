const ADDRESS = "535 Stinson Dr, Charleston, SC 29407";
const MAPS_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  ADDRESS
)}&output=embed`;
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  ADDRESS
)}`;

const HOURS = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday", time: "Closed" },
  { day: "Wednesday", time: "12:00 PM – 11:00 PM" },
  { day: "Thursday", time: "12:00 PM – 11:00 PM" },
  { day: "Friday", time: "12:00 PM – 11:00 PM" },
  { day: "Saturday", time: "12:00 PM – 11:00 PM" },
  { day: "Sunday", time: "12:00 PM – 11:00 PM" },
];

export default function LocationHours() {
  return (
    <section id="location" className="relative bg-charcoal py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blood-bright">
            Find Us
          </p>
          <h2 className="text-display mt-3 text-5xl tracking-wide text-bone sm:text-6xl">
            Location &amp; Hours
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-sm border border-white/10">
            <iframe
              title="Southern Magnetic Tattoo location map"
              src={MAPS_EMBED_SRC}
              className="h-80 w-full grayscale lg:h-full"
              style={{ border: 0, filter: "invert(92%) contrast(85%)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex flex-col justify-between gap-10 rounded-sm border border-white/10 bg-ink p-8 sm:p-10">
            <div>
              <h3 className="text-display text-2xl tracking-wide text-blood-bright">
                Address
              </h3>
              <p className="mt-3 text-lg text-bone/85">{ADDRESS}</p>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-wider text-bone/55 hover:text-blood-bright"
              >
                Get Directions &rarr;
              </a>
            </div>

            <div>
              <h3 className="text-display text-2xl tracking-wide text-blood-bright">
                Hours
              </h3>
              <ul className="mt-3 divide-y divide-white/10">
                {HOURS.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-center justify-between py-2.5 text-bone/80"
                  >
                    <span className="font-medium">{h.day}</span>
                    <span
                      className={h.time === "Closed" ? "text-bone/35" : "text-bone/90"}
                    >
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="tel:+18432020785"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-blood-bright px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-blood"
            >
              Call to Book: 843-202-0785
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
