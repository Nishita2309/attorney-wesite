import { useTranslation } from 'react-i18next'
import { Building2, Briefcase, Globe, Shield, Landmark, Users } from 'lucide-react'

/* ================= CLIENT LOGOS ================= */
const clientsList = [
  { Icon: Building2, name: 'C.M.S' },
  { Icon: Globe, name: 'Hydrocentrale' },
  { Icon: Shield, name: 'C.M.C Tennis' },
  { Icon: Users, name: 'Jamalook' },
  { Icon: Briefcase, name: 'Tribologie' },
  { Icon: Landmark, name: 'GAM Equipement' },
]

export default function Clients() {
  const { t } = useTranslation()

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
          {clientsList.map(({ Icon, name }, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-lg transition duration-300 grayscale hover:grayscale-0 hover:scale-105"
            >
              <Icon className="h-10 w-10 mb-3 text-muted-foreground transition-colors hover:text-accent" />
              <span className="text-sm font-medium text-center text-card-foreground">
                {name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
