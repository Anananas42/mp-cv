import { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import ThemeToggle from "./ThemeToggle";

interface NavProps {
  locale: string;
  onToggleLocale: () => void;
  theme: string;
  onToggleTheme: () => void;
}

const sections = [
  { id: "summary", key: "nav.summary" },
  { id: "experience", key: "nav.experience" },
  { id: "education", key: "nav.education" },
  { id: "skills", key: "nav.skills" },
  { id: "contact", key: "nav.contact" },
] as const;

export default function Nav({ locale, onToggleLocale, theme, onToggleTheme }: NavProps) {
  const intl = useIntl();
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-hero/95 backdrop-blur-sm border-b border-white/10 animate-fade-in-up">
      <div className="mx-auto max-w-5xl flex items-center justify-between px-6 py-3">
        <ul className="hidden md:flex gap-6">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="text-sm text-on-surface-muted hover:text-accent-light transition-colors"
              >
                {intl.formatMessage({ id: s.key })}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden text-on-surface-muted hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <div className="flex items-center gap-3">
          <ThemeToggle
            theme={theme}
            onToggle={onToggleTheme}
            className="text-on-surface-muted hover:text-white border border-edge"
          />
          <button
            type="button"
            onClick={onToggleLocale}
            className="text-base font-medium text-on-surface-muted hover:text-white border border-edge rounded-lg px-5 py-2.5 transition-colors"
          >
            {locale === "cs" ? "EN" : "CZ"}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <ul className="md:hidden bg-hero border-t border-white/10 px-6 py-4 space-y-3">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="block text-on-surface-muted hover:text-white transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {intl.formatMessage({ id: s.key })}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
