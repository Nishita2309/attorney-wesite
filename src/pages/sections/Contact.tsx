import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-cover bg-center bg-[url('/contact-bg.jpg')]" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/95" />

      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-semibold">
            {t('contact.title')}
          </h2>
          <div className="w-16 h-[3px] bg-accent mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Address */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-10 text-center shadow-xl hover:-translate-y-2 transition">
            <MapPin className="h-12 w-12 text-accent mx-auto mb-6" />
            <h3 className="font-heading text-xl md:text-2xl mb-4">
              {t('contact.address')}
            </h3>
            <p className="text-white/80 text-sm md:text-base">
              {t('contact.address.value')}
            </p>
          </div>

          {/* Phone */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-10 text-center shadow-xl hover:-translate-y-2 transition">
            <Phone className="h-12 w-12 text-accent mx-auto mb-6" />
            <h3 className="font-heading text-xl md:text-2xl mb-4">
              {t('contact.phone')}
            </h3>
            <p className="text-white/80 text-sm md:text-base">
              +212 5 20 53 44 80 <br />
              +212 6 89 81 15 98
            </p>
          </div>

          {/* Email */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-10 text-center shadow-xl hover:-translate-y-2 transition">
            <Mail className="h-12 w-12 text-accent mx-auto mb-6" />
            <h3 className="font-heading text-xl md:text-2xl mb-4">
              {t('contact.email')}
            </h3>
            <p className="text-white/80 text-sm md:text-base break-words">
              maitremesraoui@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}