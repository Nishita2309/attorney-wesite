import { Scale } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative h-[70vh] md:h-[75vh] flex items-center justify-center text-primary-foreground overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-[url('/hero.jpg')]" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90" />

      {/* Content */}
      <div className="container relative z-10 text-center px-4 max-w-4xl mx-auto">

        <Scale className="h-12 w-12 md:h-14 md:w-14 text-accent mx-auto mb-5" />

        <h1 className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold mb-4 leading-tight">
          {t('hero.title')}
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
          {t('hero.subtitle')}
        </p>

      </div>
    </section>
  );
}
