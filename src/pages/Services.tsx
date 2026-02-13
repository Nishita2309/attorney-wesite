import Navigation from '@/components/Navigation';
import Footer from '@/pages/sections/Footer';
import { Briefcase, Building2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Briefcase,
      image: '/services/services-business.jpg',
      title: t('services.business.title'),
      desc: t('services.business.desc'),
    },
    {
      icon: Building2,
      image: '/services/services-banking.jpg',
      title: t('services.banking.title'),
      desc: t('services.banking.desc'),
    },
  ];

  return (
    <>
      <Navigation />

      <section className="py-24 bg-background min-h-screen">
        <div className="container px-6 mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl font-bold gold-accent inline-block">
              {t('services.title')}
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl shadow-lg overflow-hidden group transition hover:shadow-2xl"
              >
                {/* Image */}
                <div className="overflow-hidden h-56">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>

                  <h3 className="font-heading text-2xl font-semibold mb-4">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
