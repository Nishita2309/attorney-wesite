import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground pt-14 pb-8">
      <div className="container px-4">

        {/* ===== Contact Grid ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">

          {/* Address */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-accent" />
              <h4 className="font-heading text-lg font-semibold">
                {t('contact.address')}
              </h4>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=77+Angle+Rue+Jules+César+Casablanca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-accent transition-colors text-sm leading-relaxed"
            >
              {t('contact.address.value')}
            </a>
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-accent" />
              <h4 className="font-heading text-lg font-semibold">
                {t('contact.phone')}
              </h4>
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <a
                href="tel:+212520534480"
                className="hover:text-accent transition-colors"
              >
                +212 5 20 53 44 80
              </a>

              <a
                href="tel:+212689811598"
                className="hover:text-accent transition-colors"
              >
                +212 6 89 81 15 98
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-accent" />
              <h4 className="font-heading text-lg font-semibold">
                {t('contact.email')}
              </h4>
            </div>

            <a
              href="mailto:maitremesraoui@gmail.com"
              className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
            >
              maitremesraoui@gmail.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 text-center text-sm text-primary-foreground/70">
          © 2026 Y. Mesraoui Law Firm. {t('footer.rights')}
        </div>

      </div>
    </footer>
  );
}
