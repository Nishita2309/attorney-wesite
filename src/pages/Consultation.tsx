import Navigation from '@/components/Navigation';
import Footer from '@/pages/sections/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Consultation() {
  const { t } = useLanguage();

  return (
    <>
      <Navigation />

      <section className="py-24 bg-background min-h-screen">
        <div className="container max-w-3xl">
          <h1 className="font-heading text-4xl font-bold mb-6">
            {t('hero.cta')}
          </h1>

          {/* Your consultation form here */}
        </div>
      </section>

      <Footer />
    </>
  );
}
