import Navigation from '@/components/Navigation';
import Footer from '@/pages/sections/Footer';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <Navigation />

      <section className="py-24 bg-background min-h-screen">
        <div className="container px-6 mx-auto text-center">
          <h1 className="font-heading text-4xl font-bold gold-accent inline-block mb-16">
            {t('contact.title')}
          </h1>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Address */}
            <div className="p-8 rounded-2xl shadow-lg bg-card flex flex-col items-center">
              <MapPin className="h-10 w-10 text-accent mx-auto mb-4" />
              <h3 className="font-heading text-xl mb-4">
                {t('contact.address')}
              </h3>
              <a
                href="https://maps.google.com"
                target="_blank"
                className="text-base text-muted-foreground hover:text-accent transition text-center"
              >
                {t('contact.address.value')}
              </a>
            </div>

            {/* Phone */}
            <div className="p-8 rounded-2xl shadow-lg bg-card flex flex-col items-center">
              <Phone className="h-10 w-10 text-accent mx-auto mb-4" />
              <h3 className="font-heading text-xl mb-4">
                {t('contact.phone')}
              </h3>
              <div className="flex flex-col sm:flex-row justify-center gap-4 text-base text-muted-foreground text-center">
                <a
                  href="tel:+212520534480"
                  className="hover:text-accent transition"
                >
                  +212 5 20 53 44 80
                </a>
                <span className="hidden sm:inline">|</span>
                <a
                  href="tel:+212689811598"
                  className="hover:text-accent transition"
                >
                  +212 6 89 81 15 98
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="p-8 rounded-2xl shadow-lg bg-card flex flex-col items-center">
              <Mail className="h-10 w-10 text-accent mx-auto mb-4" />
              <h3 className="font-heading text-xl mb-4">
                {t('contact.email')}
              </h3>
              <a
                href="mailto:maitremesraoui@gmail.com"
                className="text-base text-muted-foreground hover:text-accent transition text-center break-all"
              >
                maitremesraoui@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
