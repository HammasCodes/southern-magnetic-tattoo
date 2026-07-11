const PHONE_DISPLAY = "843-202-0785";
const INSTAGRAM_HANDLE = "@southern_magnetic";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-5 text-center sm:flex-row sm:justify-between sm:text-left sm:px-8">
        <p className="text-display text-lg tracking-wide text-bone">
          SOUTHERN <span className="text-blood-bright">MAGNETIC</span>
        </p>
        <p className="text-sm text-bone/50">
          {`535 Stinson Dr, Charleston, SC 29407 · ${PHONE_DISPLAY} · ${INSTAGRAM_HANDLE}`}
        </p>
        <p className="text-xs text-bone/35">
          {`© ${new Date().getFullYear()} Southern Magnetic Tattoo. All rights reserved.`}
        </p>
      </div>
    </footer>
  );
}
