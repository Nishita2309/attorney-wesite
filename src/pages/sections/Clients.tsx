import { useLanguage } from '@/contexts/LanguageContext'

/* ================= CLIENT LOGOS ================= */
const clientLogos = [
  '/clients/cms.png',
  '/clients/hydrocentral.png',
  '/clients/cmc.jpg',
  '/clients/jamalook.png',
  '/clients/tribologie.jpg',
  '/clients/gam.jpg',
]

export default function Clients() {
  const { t } = useLanguage()

  return (
    <section id="clients" className="py-24 bg-background">
      <div className="container px-4">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold gold-accent inline-block">
            {t('clients.title')}
          </h2>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {clientLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-white rounded-xl border shadow-sm hover:shadow-lg transition duration-300 grayscale hover:grayscale-0 hover:scale-105"
            >
              <img
                src={logo}
                alt={`Client ${index + 1}`}
                className="max-h-14 object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
