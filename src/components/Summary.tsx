import { useIntl } from "react-intl";
import ScrollReveal from "./ScrollReveal";

const highlights = [
  "summary.highlight1",
  "summary.highlight2",
  "summary.highlight3",
  "summary.highlight4",
] as const;

const keyAreas = [
  "keyAreas.finance",
  "keyAreas.erp",
  "keyAreas.shared",
  "keyAreas.ma",
  "keyAreas.turnaround",
  "keyAreas.compliance",
] as const;

export default function Summary() {
  const intl = useIntl();

  return (
    <section id="summary" className="py-20 px-6">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-slate-900">
            {intl.formatMessage({ id: "summary.title" })}
          </h2>
          <p className="mt-6 text-lg text-slate-700 leading-relaxed">
            {intl.formatMessage({ id: "summary.text" })}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <ul className="mt-8 space-y-4">
            {highlights.map((key) => (
              <li key={key} className="flex gap-3 text-slate-700">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-teal-accent" />
                <span>{intl.formatMessage({ id: key })}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <h3 className="mt-12 text-lg font-semibold text-slate-900">
            {intl.formatMessage({ id: "keyAreas.title" })}
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {keyAreas.map((key) => (
              <span
                key={key}
                className="px-4 py-2 text-sm font-medium rounded-full bg-teal-accent/10 text-teal-accent border border-teal-accent/20"
              >
                {intl.formatMessage({ id: key })}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
