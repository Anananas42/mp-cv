import { useIntl } from "react-intl";

export default function Footer() {
  const intl = useIntl();

  return (
    <footer id="contact" className="bg-hero text-hero-text py-16 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-3xl font-bold">
          {intl.formatMessage({ id: "footer.cta" })}
        </h2>

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-hero-text-faint">
          <a
            href={`mailto:${intl.formatMessage({ id: "hero.email" })}`}
            className="hover:text-hero-text transition-colors"
          >
            {intl.formatMessage({ id: "hero.email" })}
          </a>
          <a
            href={`tel:${intl.formatMessage({ id: "hero.phone" })}`}
            className="hover:text-hero-text transition-colors"
          >
            {intl.formatMessage({ id: "hero.phone" })}
          </a>
          <a
            href="https://www.linkedin.com/in/miroslav-pazderka-4784628a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-hero-text transition-colors"
          >
            LinkedIn
          </a>
        </div>

        <p className="mt-10 text-sm text-hero-text-faint">
          {intl.formatMessage({ id: "footer.copyright" })}
        </p>
      </div>
    </footer>
  );
}
