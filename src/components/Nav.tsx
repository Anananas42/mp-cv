import { useEffect, useState } from "react";
import { useIntl } from "react-intl";

interface NavProps {
  locale: string;
  onToggleLocale: () => void;
}

const sections = [
  { id: "summary", key: "nav.summary" },
  { id: "experience", key: "nav.experience" },
  { id: "education", key: "nav.education" },
  { id: "skills", key: "nav.skills" },
  { id: "contact", key: "nav.contact" },
] as const;

export default function Nav({ locale, onToggleLocale }: NavProps) {
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-white/10 animate-fade-in-up">
      <div className="mx-auto max-w-5xl flex items-center justify-between px-6 py-3">
        <ul className="hidden md:flex gap-6">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="text-sm text-slate-300 hover:text-teal-accent-light transition-colors"
              >
                {intl.formatMessage({ id: s.key })}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden text-slate-300 hover:text-white"
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

        <button
          type="button"
          onClick={onToggleLocale}
          className="text-sm font-medium text-slate-300 hover:text-white border border-slate-600 rounded px-2 py-1 transition-colors"
        >
          {locale === "cs" ? "EN" : "CZ"}
        </button>
      </div>

      {mobileOpen && (
        <ul className="md:hidden bg-navy border-t border-white/10 px-6 py-4 space-y-3">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="block text-slate-300 hover:text-white transition-colors"
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
