import { useIntl } from "react-intl";
import ThemeToggle from "./ThemeToggle";

interface HeroProps {
  locale: string;
  onToggleLocale: () => void;
  theme: string;
  onToggleTheme: () => void;
}

export default function Hero({ locale, onToggleLocale, theme, onToggleTheme }: HeroProps) {
  const intl = useIntl();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-hero text-hero-text px-6 transition-colors duration-300">
      <div className="absolute top-6 right-6 flex items-center gap-3">
        <ThemeToggle
          theme={theme}
          onToggle={onToggleTheme}
          className="text-hero-text-faint hover:text-hero-text border border-hero-text-faint/30"
        />
        <button
          type="button"
          onClick={onToggleLocale}
          className="text-base font-medium text-hero-text-faint hover:text-hero-text border border-hero-text-faint/30 rounded-lg px-5 py-2.5 transition-colors"
        >
          {locale === "cs" ? "EN" : "CZ"}
        </button>
      </div>

      <div className="text-center max-w-3xl">
        <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight">
          {intl.formatMessage({ id: "hero.name" })}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-hero-text-muted leading-relaxed">
          {intl.formatMessage({ id: "hero.title" })}
        </p>
        <p className="mt-2 text-accent-light text-lg font-medium">
          {intl.formatMessage({ id: "hero.subtitle" })}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-hero-text-faint">
          <span className="flex items-center gap-2">
            <svg
              aria-hidden="true"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            {intl.formatMessage({ id: "hero.location" })}
          </span>
          <a
            href={`tel:${intl.formatMessage({ id: "hero.phone" })}`}
            className="flex items-center gap-2 hover:text-hero-text transition-colors"
          >
            <svg
              aria-hidden="true"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            {intl.formatMessage({ id: "hero.phone" })}
          </a>
          <a
            href={`mailto:${intl.formatMessage({ id: "hero.email" })}`}
            className="flex items-center gap-2 hover:text-hero-text transition-colors"
          >
            <svg
              aria-hidden="true"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            {intl.formatMessage({ id: "hero.email" })}
          </a>
          <a
            href="https://www.linkedin.com/in/miroslav-pazderka-4784628a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-hero-text transition-colors"
          >
            <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            {intl.formatMessage({ id: "hero.linkedin" })}
          </a>
        </div>
      </div>

      <a
        href="#summary"
        className="absolute bottom-8 text-hero-text-faint hover:text-hero-text transition-colors animate-bounce"
      >
        <span className="sr-only">{intl.formatMessage({ id: "hero.scrollDown" })}</span>
        <svg
          aria-hidden="true"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </a>
    </section>
  );
}
