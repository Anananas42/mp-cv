import { useEffect, useRef, useState } from "react";
import { useIntl } from "react-intl";

const metrics = [
  { valueKey: "metrics.yearsValue", labelKey: "metrics.years" },
  { valueKey: "metrics.pnlValue", labelKey: "metrics.pnl" },
  { valueKey: "metrics.savingsValue", labelKey: "metrics.savings" },
  { valueKey: "metrics.boardValue", labelKey: "metrics.board" },
] as const;

export default function Metrics() {
  const intl = useIntl();
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-dark-card py-16 px-6">
      <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-8">
        {metrics.map((m, i) => (
          <div
            key={m.valueKey}
            className={`text-center ${triggered ? "animate-count-up" : "opacity-0"}`}
            style={{ animationDelay: `${i * 150}ms` }}
          >
            <div className="text-3xl md:text-4xl font-bold text-teal-accent font-serif">
              {intl.formatMessage({ id: m.valueKey })}
            </div>
            <div className="mt-2 text-sm text-dark-text-muted uppercase tracking-wide">
              {intl.formatMessage({ id: m.labelKey })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
