import { createContext, useContext, useState, type ReactNode, useEffect } from 'react';

type Language = 'fr' | 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'Le Cabinet',
    'nav.services': 'Services',
    'nav.clients': 'Clients',
    'nav.contact': 'Contact',

    // Hero
    'hero.title': 'Cabinet d\'avocats Y. Mesraoui',
    'hero.subtitle': 'Expertise juridique spécialisée en droit des affaires et droit bancaire',
    'hero.cta': 'Prendre Rendez-vous',

    // About
    'about.title': 'Mot du Maître',
    'about.quote': 'Le succès en affaires nécessite une expertise juridique solide, une pensée stratégique et une vision claire de l\'avenir',
    'about.p1': 'L\'expertise juridique, la planification stratégique et la vision prospective combinées créent une force puissante pour aider nos clients à atteindre leurs objectifs.',
    'about.p2': 'Notre cabinet est conçu pour comprendre les besoins et objectifs spécifiques de chaque client, déterminer les stratégies les plus efficaces et les moyens les plus efficients pour les mettre en œuvre.',
    'about.p3': 'Avec une équipe jeune, proactive et expérimentée et une approche orientée client, nous sommes déterminés à fournir des solutions juridiques sur mesure et des résultats éprouvés qui répondent aux besoins de nos clients.',

    // Firm
    'firm.title': 'Notre Cabinet',
    'firm.subtitle': 'Excellence juridique depuis Casablanca',
    'firm.p1': 'Le Cabinet d\'avocats Y. Mesraoui offre des services personnalisés et innovants grâce à une équipe jeune et dynamique qui apporte une perspective fraîche et une énergie renouvelée à la pratique juridique.',
    'firm.p2': 'Nous travaillons en étroite collaboration avec nos clients pour mieux comprendre et appréhender leurs besoins, et leur fournir des solutions juridiques adaptées.',
    'firm.p3': 'Notre cabinet offre des services juridiques rapides, efficaces et stratégiques.',

    // Services
    'services.title': 'Nos Services',
    'services.business.title': 'Droit des Affaires',
    'services.business.desc': 'Conseil juridique complet pour les entreprises, incluant la constitution de sociétés, les contrats commerciaux et la gouvernance d\'entreprise.',
    'services.banking.title': 'Droit Bancaire',
    'services.banking.desc': 'Expertise spécialisée en financement bancaire, conformité réglementaire et transactions financières complexes.',

    // Clients
    'clients.title': 'Ils Nous Font Confiance',

    // Contact
    'contact.title': 'Contactez-Nous',
    'contact.address': 'Adresse',
    'contact.phone': 'Téléphone',
    'contact.email': 'Email',
    'contact.address.value': '77 Angle Rue Jules César, 1er Etg, Appt 1, Roches Noires, Casablanca',

    // Consultation / Form
    'consultation.subtitle': 'Contactez-nous pour une consultation juridique personnalisée.',
    'form.name': 'Nom complet',
    'form.email': 'Email',
    'form.phone': 'Téléphone',
    'form.message': 'Votre message',
    'form.submit': 'Envoyer la demande',

    // Footer
    'footer.contact': 'Contact',
    'footer.address': 'Adresse',
    'footer.phone': 'Téléphone',
    'footer.email': 'Email',
    'footer.rights': 'Tous droits réservés.',

  },

  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'عن المكتب',
    'nav.services': 'خدماتنا',
    'nav.clients': 'عملاؤنا',
    'nav.contact': 'اتصل بنا',

    // Hero
    'hero.title': 'مكتب المحامي ياسين مسراوي',
    'hero.subtitle': 'خبرة قانونية متخصصة في قانون الأعمال والقانون المصرفي',
    'hero.cta': 'احجز استشارة',

    // About
    'about.title': 'كلمة المحامي',
    'about.quote': 'النجاح في الأعمال يتطلب خبرة قانونية قوية، وتفكيراً استراتيجياً، ورؤية واضحة للمستقبل',
    'about.p1': 'الخبرة القانونية والتخطيط الاستراتيجي والرؤية المستقبلية مجتمعة تخلق قوة فعالة لمساعدة عملائنا على تحقيق أهدافهم.',
    'about.p2': 'تم تصميم مكتبنا لفهم الاحتياجات والأهداف المحددة لكل عميل، وتحديد الاستراتيجيات الأكثر فعالية والوسائل الأكثر كفاءة لتنفيذها.',
    'about.p3': 'مع فريق شاب واستباقي وذو خبرة ونهج موجه نحو العميل، نحن مصممون على تقديم حلول قانونية مخصصة ونتائج مثبتة تلبي احتياجات عملائنا.',

    // Firm
    'firm.title': 'مكتبنا',
    'firm.subtitle': 'التميز القانوني من الدار البيضاء',
    'firm.p1': 'يقدم مكتب المحامي ياسين مسراوي خدمات شخصية ومبتكرة بفضل فريق شاب وديناميكي يجلب منظوراً جديداً وطاقة متجددة لممارسة القانون.',
    'firm.p2': 'نعمل بتعاون وثيق مع عملائنا لفهم احتياجاتهم بشكل أفضل وتزويدهم بحلول قانونية مناسبة.',
    'firm.p3': 'يقدم مكتبنا خدمات قانونية سريعة وفعالة واستراتيجية.',

    // Services
    'services.title': 'خدماتنا',
    'services.business.title': 'قانون الأعمال',
    'services.business.desc': 'استشارات قانونية شاملة للشركات، بما في ذلك تكوين الشركات والعقود التجارية وحوكمة الشركات.',
    'services.banking.title': 'القانون المصرفي',
    'services.banking.desc': 'خبرة متخصصة في التمويل المصرفي والامتثال التنظيمي والمعاملات المالية المعقدة.',

    // Clients
    'clients.title': 'عملاؤنا',

    // Contact
    'contact.title': 'اتصل بنا',
    'contact.address': 'العنوان',
    'contact.phone': 'الهاتف',
    'contact.email': 'البريد الإلكتروني',
    'contact.address.value': '77 زاوية شارع جول سيزار، الطابق الأول، شقة 1، روش نوار، الدار البيضاء',

    // Consultation / Form
    'consultation.subtitle': 'تواصل معنا للحصول على استشارة قانونية مخصصة.',
    'form.name': 'الاسم الكامل',
    'form.email': 'البريد الإلكتروني',
    'form.phone': 'الهاتف',
    'form.message': 'رسالتك',
    'form.submit': 'إرسال الطلب',

    // Footer
    'footer.contact': 'اتصل بنا',
    'footer.address': 'العنوان',
    'footer.phone': 'الهاتف',
    'footer.email': 'البريد الإلكتروني',
    'footer.rights': 'جميع الحقوق محفوظة.',

  },

  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.clients': 'Clients',
    'nav.contact': 'Contact',

    // Hero
    'hero.title': 'Y. Mesraoui Law Firm',
    'hero.subtitle': 'Legal expertise specialized in business law and banking law',
    'hero.cta': 'Book a Consultation',

    // About
    'about.title': 'Attorney\'s Message',
    'about.quote': 'Success in business requires solid legal expertise, strategic thinking, and a clear vision of the future',
    'about.p1': 'Legal expertise, strategic planning, and forward-thinking vision combined create a powerful force to help our clients achieve their objectives.',
    'about.p2': 'Our firm is designed to understand the specific needs and objectives of each client, to determine the most effective strategies and the most efficient means to implement them.',
    'about.p3': 'With a young, proactive, and experienced team and a client-oriented approach, we are determined to provide tailored legal solutions and proven results that meet our clients\' needs.',

    // Firm
    'firm.title': 'Our Firm',
    'firm.subtitle': 'Legal excellence from Casablanca',
    'firm.p1': 'Y. Mesraoui Law Firm offers personalized and innovative services thanks to a young and dynamic team that brings a fresh perspective and renewed energy to legal practice.',
    'firm.p2': 'We work in close collaboration with our clients to better understand and grasp their needs, and provide them with adapted legal solutions.',
    'firm.p3': 'Our firm offers fast, efficient, and strategic legal services.',

    // Services
    'services.title': 'Our Services',
    'services.business.title': 'Business Law',
    'services.business.desc': 'Comprehensive legal advice for businesses, including company formation, commercial contracts, and corporate governance.',
    'services.banking.title': 'Banking Law',
    'services.banking.desc': 'Specialized expertise in banking finance, regulatory compliance, and complex financial transactions.',

    // Clients
    'clients.title': 'Our Clients',

    // Contact
    'contact.title': 'Contact Us',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.address.value': '77 Angle Rue Jules César, 1st Floor, Apt 1, Roches Noires, Casablanca',

    // Consultation / Form
    'consultation.subtitle': 'Contact us for a personalized legal consultation.',
    'form.name': 'Full Name',
    'form.email': 'Email',
    'form.phone': 'Phone',
    'form.message': 'Your message',
    'form.submit': 'Send Request',

    // Footer
    'footer.contact': 'Contact',
    'footer.address': 'Address',
    'footer.phone': 'Phone',
    'footer.email': 'Email',
    'footer.rights': 'All rights reserved.',

  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fr] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}