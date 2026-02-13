import { Briefcase, Building2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Briefcase,
      title: t('services.business.title'),
      desc: t('services.business.desc'),
      image: '/services/services-business.jpg', // add your image path
    },
    {
      icon: Building2,
      title: t('services.banking.title'),
      desc: t('services.banking.desc'),
      image: '/services/services-banking.jpg', // add your image path
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container px-4">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold gold-accent inline-block">
            {t('services.title')}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-500 group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-8 bg-card">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>

                <h3 className="font-heading text-xl md:text-2xl font-semibold mb-4">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {service.desc}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
