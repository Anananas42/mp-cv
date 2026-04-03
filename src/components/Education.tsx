import { useIntl } from "react-intl";
import ScrollReveal from "./ScrollReveal";

const items = [
  {
    prefix: "edu1",
    icon: "M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15v3.75m-2.25.75h4.5m6-6v6m-2.25.75h4.5",
  },
  {
    prefix: "edu2",
    icon: "M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15v3.75m-2.25.75h4.5m6-6v6m-2.25.75h4.5",
  },
  {
    prefix: "edu3",
    icon: "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z",
  },
  {
    prefix: "edu4",
    icon: "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z",
  },
] as const;

export default function Education() {
  const intl = useIntl();

  return (
    <section id="education" className="py-20 px-6">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-on-surface">
            {intl.formatMessage({ id: "education.title" })}
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {items.map((item, i) => {
            const title = intl.formatMessage({ id: `${item.prefix}.title` });
            const institutionId = `${item.prefix}.institution`;
            const yearId = `${item.prefix}.year`;
            const institution = intl.messages[institutionId]
              ? intl.formatMessage({ id: institutionId })
              : "";
            const year = intl.messages[yearId] ? intl.formatMessage({ id: yearId }) : "";

            return (
              <ScrollReveal key={item.prefix} delay={i * 100}>
                <div className="bg-surface-elevated border border-edge rounded-lg p-5 h-full">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d={item.icon}
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-on-surface">{title}</h3>
                      {institution && (
                        <p className="text-sm text-on-surface-muted mt-1">{institution}</p>
                      )}
                      {year && <p className="text-sm text-accent mt-1">{year}</p>}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
