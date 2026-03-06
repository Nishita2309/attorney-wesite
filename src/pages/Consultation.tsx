import Navigation from '@/components/Navigation';
import Footer from '@/pages/sections/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Consultation() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <>
      <Navigation />

      <section className="py-24 bg-background min-h-screen">
        <div className="container max-w-3xl">
          <h1 className="font-heading text-4xl font-bold mb-8">
            {t('hero.cta')}
          </h1>

          <form
            className="space-y-6 bg-white p-8 rounded-2xl shadow-sm border border-border"
            onSubmit={(e) => {
              e.preventDefault();
              navigate('/contact');
            }}
          >
            <div>
              <label htmlFor="consult-name" className="text-sm font-medium">
                {t('form.name')}
              </label>
              <input
                id="consult-name"
                type="text"
                required
                className="w-full mt-2 p-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div>
              <label htmlFor="consult-email" className="text-sm font-medium">
                {t('form.email')}
              </label>
              <input
                id="consult-email"
                type="email"
                required
                className="w-full mt-2 p-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div>
              <label htmlFor="consult-phone" className="text-sm font-medium">
                {t('form.phone')}
              </label>
              <input
                id="consult-phone"
                type="tel"
                className="w-full mt-2 p-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div>
              <label htmlFor="consult-message" className="text-sm font-medium">
                {t('form.message')}
              </label>
              <textarea
                id="consult-message"
                rows={5}
                required
                className="w-full mt-2 p-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary text-white hover:bg-primary/90 mt-4 h-12 text-lg font-medium"
            >
              {t('form.submit')}
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
