import { useIntl } from "react-intl";
import ScrollReveal from "./ScrollReveal";

const languages = [
  { key: "cs", level: 100 },
  { key: "en", level: 85 },
  { key: "ru", level: 45 },
  { key: "es", level: 25 },
] as const;

const technologies = [
  "SAP",
  "MS Dynamics NAV",
  "SAP Concur",
  "SharePoint",
  "GIST",
  "SOX",
  "US-GAAP",
  "IFRS",
  "Agile/SAFe",
  "BPMN 2.0",
  "PRINCE2",
];

export default function Skills() {
  const intl = useIntl();

  return (
    <section id="skills" className="py-20 px-6 bg-dark-card">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-dark-text">
            {intl.formatMessage({ id: "skills.title" })}
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid md:grid-cols-2 gap-12">
          <ScrollReveal delay={100}>
            <h3 className="text-lg font-semibold text-dark-text mb-6">
              {intl.formatMessage({ id: "skills.languages" })}
            </h3>
            <div className="space-y-4">
              {languages.map((lang) => (
                <div key={lang.key}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium text-dark-text-muted">
                      {intl.formatMessage({ id: `lang.${lang.key}` })}
                    </span>
                    <span className="text-dark-text-faint">
                      {intl.formatMessage({ id: `lang.${lang.key}Level` })}
                    </span>
                  </div>
                  <div className="h-2 bg-dark-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-teal-accent rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${lang.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h3 className="text-lg font-semibold text-dark-text mb-6">
              {intl.formatMessage({ id: "skills.tech" })}
            </h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm bg-dark-elevated border border-dark-border rounded-full text-dark-text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
