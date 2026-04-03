import { useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import cs from "../i18n/cs.json";
import en from "../i18n/en.json";
import Education from "./Education";
import Experience from "./Experience";
import Footer from "./Footer";
import Hero from "./Hero";
import Metrics from "./Metrics";
import Nav from "./Nav";
import Skills from "./Skills";
import Summary from "./Summary";

const messages = { cs, en } as const;

type Theme = "dark" | "light";

export default function App() {
  const [locale, setLocale] = useState<"cs" | "en">("cs");
  const [theme, setTheme] = useState<Theme>("dark");
  const toggleLocale = () => setLocale((l) => (l === "cs" ? "en" : "cs"));
  const toggleTheme = () =>
    setTheme((t) => {
      const next = t === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      return next;
    });

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Nav
        locale={locale}
        onToggleLocale={toggleLocale}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <Hero
        locale={locale}
        onToggleLocale={toggleLocale}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <Metrics />
      <Summary />
      <Experience />
      <Education />
      <Skills />
      <Footer />
    </IntlProvider>
  );
}
