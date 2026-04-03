import { useState } from "react";
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

export default function App() {
  const [locale, setLocale] = useState<"cs" | "en">("cs");
  const toggleLocale = () => setLocale((l) => (l === "cs" ? "en" : "cs"));

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Nav locale={locale} onToggleLocale={toggleLocale} />
      <Hero locale={locale} onToggleLocale={toggleLocale} />
      <Metrics />
      <Summary />
      <Experience />
      <Education />
      <Skills />
      <Footer />
    </IntlProvider>
  );
}
