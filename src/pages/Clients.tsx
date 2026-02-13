import Navigation from '@/components/Navigation';
import Footer from '@/pages/sections/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const clientLogos = [
  '/clients/cms.png',
  '/clients/hydrocentral.png',
  '/clients/cmc.jpg',
  '/clients/jamalook.png',
  '/clients/tribologie.jpg',
  '/clients/gam.jpg',
];

export default function Clients() {
  const { t } = useLanguage();

  return (
    <>
      <Navigation />

      <section className="py-24 bg-background min-h-screen">
        <div className="container px-6 mx-auto text-center">
          <h1 className="font-heading text-4xl font-bold gold-accent inline-block mb-16">
            {t('clients.title')}
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition hover:scale-105 grayscale hover:grayscale-0"
              >
                <img
                  src={logo}
                  alt="Client logo"
                  className="max-h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
