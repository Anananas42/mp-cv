import { useState } from "react";
import { useIntl } from "react-intl";
import ScrollReveal from "./ScrollReveal";

const experiences = [
  { prefix: "exp1", bulletIds: ["exp1.bullet1", "exp1.bullet2", "exp1.bullet3"] },
  { prefix: "exp2", bulletIds: ["exp2.bullet1", "exp2.bullet2", "exp2.bullet3"] },
  {
    prefix: "exp3",
    bulletIds: ["exp3.bullet1", "exp3.bullet2", "exp3.bullet3", "exp3.bullet4"],
  },
  { prefix: "exp4", bulletIds: ["exp4.bullet1", "exp4.bullet2"] },
  { prefix: "exp5", bulletIds: ["exp5.bullet1", "exp5.bullet2", "exp5.bullet3"] },
  { prefix: "exp6", bulletIds: ["exp6.bullet1", "exp6.bullet2"] },
] as const;

export default function Experience() {
  const intl = useIntl();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="experience" className="py-20 px-6 bg-slate-50">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-slate-900">
            {intl.formatMessage({ id: "experience.title" })}
          </h2>
        </ScrollReveal>

        <div className="mt-12 relative">
          {/* Timeline line — desktop only */}
          <div className="hidden md:block absolute left-[7px] top-2 bottom-2 w-px bg-slate-300" />

          <div className="space-y-6">
            {experiences.map((exp, i) => {
              const isOpen = openIndex === i;
              return (
                <ScrollReveal key={exp.prefix} delay={i * 80}>
                  <div className="md:pl-10 relative">
                    {/* Timeline dot */}
                    <div
                      className={`hidden md:block absolute left-0 top-5 h-[15px] w-[15px] rounded-full border-2 transition-colors ${
                        isOpen ? "bg-teal-accent border-teal-accent" : "bg-white border-slate-400"
                      }`}
                    />

                    <button
                      type="button"
                      onClick={() => toggle(i)}
                      className="w-full text-left bg-white rounded-lg border border-slate-200 p-6 hover:border-teal-accent/40 hover:shadow-md transition-all"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <h3 className="text-lg font-bold text-slate-900">
                            {intl.formatMessage({ id: `${exp.prefix}.company` })}
                          </h3>
                          <p className="text-teal-accent font-medium">
                            {intl.formatMessage({ id: `${exp.prefix}.role` })}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-slate-500 whitespace-nowrap">
                            {intl.formatMessage({ id: `${exp.prefix}.period` })}
                          </span>
                          <svg
                            aria-hidden="true"
                            className={`w-5 h-5 text-slate-400 transition-transform flex-shrink-0 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? "max-h-[500px] mt-4 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="border-t border-slate-100 pt-4 space-y-3">
                          <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                            {intl.formatMessage({ id: `${exp.prefix}.scope` })}
                          </p>
                          <ul className="space-y-2">
                            {exp.bulletIds.map((bulletId) => (
                              <li
                                key={bulletId}
                                className="flex gap-3 text-slate-600 leading-relaxed"
                              >
                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-accent" />
                                <span>{intl.formatMessage({ id: bulletId })}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </button>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
