import Navigation from '@/components/Navigation';
import Footer from '@/pages/sections/Footer';
import { useTranslation } from 'react-i18next';
import { Building2, Briefcase, Globe, Shield, Landmark, Users } from 'lucide-react';

const clientsList = [
  { Icon: Building2, name: 'C.M.S' },
  { Icon: Globe, name: 'Hydrocentrale' },
  { Icon: Shield, name: 'C.M.C Tennis' },
  { Icon: Users, name: 'Jamalook' },
  { Icon: Briefcase, name: 'Tribologie' },
  { Icon: Landmark, name: 'GAM Equipement' },
];

export default function Clients() {
  const { t } = useTranslation();

  return (
    <>
      <Navigation />

      <section className="py-24 bg-background min-h-screen">
        <div className="container px-6 mx-auto text-center">
          <h1 className="font-heading text-4xl font-bold gold-accent inline-block mb-16">
            {t('clients.title')}
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
            {clientsList.map(({ Icon, name }, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-card rounded-xl border border-border shadow-md hover:shadow-lg transition hover:scale-105 grayscale hover:grayscale-0"
              >
                <Icon className="h-12 w-12 mb-4 text-muted-foreground transition-colors hover:text-accent" />
                <span className="text-base font-medium text-card-foreground">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
