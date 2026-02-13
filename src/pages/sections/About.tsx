import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-muted/30"
    >
      <div className="container px-6 mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* ===== LEFT CONTENT ===== */}
        <div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 relative inline-block">
            {t('about.title')}
            <span className="block w-14 h-[3px] bg-accent mt-3 rounded-full"></span>
          </h2>

          {/* Quote */}
          <blockquote className="border-l-4 border-accent pl-6 italic text-muted-foreground mb-6">
            “{t('about.quote')}”
            <div className="mt-3 text-sm font-medium not-italic text-foreground">
              — John C. Maxwell
            </div>
          </blockquote>

          <p className="text-muted-foreground mb-5 leading-relaxed">
            {t('about.p1')}
          </p>

          <p className="text-muted-foreground mb-5 leading-relaxed">
            {t('about.p2')}
          </p>

          <p className="text-muted-foreground leading-relaxed">
            {t('about.p3')}
          </p>
        </div>

        {/* ===== RIGHT IMAGE ===== */}
        <div>
          <img
            src="/about-office.jpg"
            alt="Law firm office"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
