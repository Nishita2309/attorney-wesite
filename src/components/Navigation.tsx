import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe, Phone, Mail, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationModal from '@/pages/ConsultationModal';

type NavLink =
  | { label: string; href: string }
  | { label: string; action: () => void };

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);


  const navLinks: NavLink[] = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.about'), href: '/about' },
    { label: t('nav.services'), href: '/services' },
    { label: t('nav.clients'), href: '/clients' },
    { label: t('nav.contact'), href: '/contact' },
  ];

  const isRouteLink = (
    link: NavLink
  ): link is { label: string; href: string } => {
    return 'href' in link;
  };

  const languageNames: Record<string, string> = {
    fr: 'Français',
    ar: 'العربية',
    en: 'English',
  };

  return (
    <>
      {/* ================= HEADER WRAPPER ================= */}
      <header className="fixed top-0 left-0 w-full z-50">

        {/* ================= TOP BAR ================= */}
        <div className="bg-primary text-primary-foreground py-2">
          <div className="w-full px-6 flex justify-between items-center text-sm">

            <div className="flex items-center gap-6">
              <a
                href="tel:+212520534480"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Phone className="h-4 w-4" />
                +212 5 20 53 44 80
              </a>

              <a
                href="mailto:maitremesraoui@gmail.com"
                className="hidden md:flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Mail className="h-4 w-4" />
                maitremesraoui@gmail.com
              </a>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary-foreground hover:text-accent hover:bg-white/10 gap-2"
                >
                  <Globe className="h-4 w-4" />
                  {languageNames[language]}
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end">
                {(['fr', 'ar', 'en'] as const).map((lang) => (
                  <DropdownMenuItem
                    key={lang}
                    onClick={() => setLanguage(lang)}
                  >
                    {languageNames[lang]}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* ================= MAIN NAV ================= */}
        <nav
          className={`border-b transition ${
            isScrolled
              ? 'bg-background/95 backdrop-blur shadow-sm'
              : 'bg-background'
          }`}
        >
          <div className="w-full px-6">
            <div className="flex items-center h-20">

              {/* LOGO */}
              <Link to="/" className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-accent font-heading font-bold">
                    YM
                  </span>
                </div>
                <div>
                  <div className="font-heading font-semibold">
                    Mesraoui Law
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Attorneys
                  </div>
                </div>
              </Link>

              {/* DESKTOP NAV */}
              <div className="hidden md:flex items-center gap-2 ml-auto">
                {navLinks.map((link) =>
                  isRouteLink(link) ? (
                    <Link key={link.label} to={link.href}>
                      <Button variant="ghost" size="sm">
                        {link.label}
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      key={link.label}
                      variant="ghost"
                      size="sm"
                      onClick={link.action}
                    >
                      {link.label}
                    </Button>
                  )
                )}

                <div className="w-px h-5 bg-border mx-2" />

                {/* CTA BUTTON (ONLY ONE NOW) */}
                <Link to="/consultation">
                  <Button
                    size="sm"
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    {t('hero.cta')}
                  </Button>
                </Link>
              </div>

              {/* MOBILE BUTTON */}
              <button
                onClick={() => setIsMobileOpen((prev) => !prev)}
                className="md:hidden ml-auto p-2"
              >
                {isMobileOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* SPACER (so content doesn't hide under fixed header) */}
      <div className="h-[110px] md:h-[120px]" />

      {/* MODAL (if you still use it somewhere) */}
      {isModalOpen && (
        <ConsultationModal onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
}
