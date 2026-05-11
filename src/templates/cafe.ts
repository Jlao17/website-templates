import type { SiteConfig } from "@/config/types";

export const cafeConfig: SiteConfig = {
  businessName: "The Cozy Cup",
  tagline: "Uw buurtcafé",
  seo: {
    title: "The Cozy Cup | Specialty Koffie & Lichte Hapjes",
    description:
      "The Cozy Cup is uw buurt specialty café met single-origin koffie, huisgemaakte gebakjes en een warme sfeer om te werken of te ontspannen.",
    keywords: ["café", "koffie", "specialty koffie", "gebak", "brunch"],
  },
  theme: {
    primaryColor: "#6b4f3a",
    primaryDarkColor: "#4a3426",
    secondaryColor: "#f0e6da",
    accentColor: "#d4956a",
    mutedColor: "#f8f3ee",
    mutedForegroundColor: "#8c6f5a",
    cardBgColor: "#fdf8f4",
    fontHeading: "Georgia, serif",
    fontBody: "system-ui, sans-serif",
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "Over ons", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Galerij", href: "#gallery" },
    { label: "Beoordelingen", href: "#testimonials" },
    { label: "Vind Ons", href: "#contact" },
  ],
  socialLinks: {
    instagram: "https://instagram.com/thecozycup",
    facebook: "https://facebook.com/thecozycup",
    tiktok: "https://tiktok.com/@thecozycup",
  },
  hero: {
    headline: "Uw Perfecte Kopje, Elke Ochtend",
    subheadline:
      "Single-origin koffie, huisgemaakte gebakjes en een warm plekje in de wereld om even te vertragen en het moment te savoureren.",
    ctaText: "Bekijk Ons Menu",
    ctaHref: "#menu",
    secondaryCtaText: "Vind Ons",
    secondaryCtaHref: "#contact",
    backgroundImage: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&q=80",
    overlayOpacity: 0.45,
  },
  about: {
    heading: "Onze Filosofie",
    description:
      "The Cozy Cup is ontstaan vanuit een liefde voor geweldige koffie en gemeenschap. Wij geloven dat een goede kop koffie meer moet zijn dan een ochtendgewoonte — het moet een beleving zijn. We sourcen rechtstreeks van kleine boerderijen, roosteren in kleine batches en serveren elke kop met zorg. Ons café is ontworpen als een plek waar u kunt werken, lezen, een vriend ontmoeten of gewoon even op adem kunt komen.",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80",
    highlights: [
      {
        icon: "☕",
        title: "Direct Trade Koffie",
        description: "We sourcen rechtstreeks van boerderijen in Ethiopië, Colombia en Guatemala.",
      },
      {
        icon: "🫐",
        title: "Seizoensmenu",
        description: "Ons voedselmenu wisselt met de seizoenen en gebruikt lokale, verse ingrediënten.",
      },
      {
        icon: "🌿",
        title: "Duurzame Praktijken",
        description: "Composteerbare verpakkingen, nul-afval keuken en CO₂-gecompenseerd roosteren.",
      },
    ],
  },
  menuServices: {
    heading: "Wat Wij Serveren",
    subheading: "Goede koffie. Goed eten. Goede sfeer.",
    type: "menu",
    categories: ["Espresso & Koffie", "Koude Dranken", "Eten", "Gebak"],
    items: [
      {
        name: "Espresso",
        description: "Een perfect getrokken dubbele shot van onze huismengsel espresso.",
        price: "€3,00",
        category: "Espresso & Koffie",
      },
      {
        name: "Flat White",
        description: "Ristretto shots met fluweelzachte microschuimmelk. Zijdezacht en sterk.",
        price: "€4,50",
        category: "Espresso & Koffie",
      },
      {
        name: "Pour Over",
        description: "Single-origin koffie op bestelling gezet. Vraag naar de selectie van vandaag.",
        price: "€5,50",
        category: "Espresso & Koffie",
      },
      {
        name: "Cold Brew",
        description: "12 uur koud gebrouwen, zacht en chocoladeachtig. Geserveerd met ijs.",
        price: "€5,00",
        category: "Koude Dranken",
      },
      {
        name: "Matcha Latte",
        description: "Ceremonial-grade matcha geklopt met havermelk. Warm of ijskoud.",
        price: "€5,50",
        category: "Koude Dranken",
      },
      {
        name: "Avocado Toast",
        description: "Zuurdesemtoast, gepureerde avocado, gepocheerd ei, chilivlokken, citroen.",
        price: "€10,50",
        category: "Eten",
      },
      {
        name: "Granola Bowl",
        description: "Huisgemaakte granola, seizoensfruit, kokosyoghurt, honing, zaden.",
        price: "€9,00",
        category: "Eten",
      },
      {
        name: "Bananenbrood",
        description: "Vochtig, nootachtig bananenbrood met walnoot en chocoladestukjes. Op verzoek geroosterd.",
        price: "€4,00",
        category: "Gebak",
      },
    ],
  },
  gallery: {
    heading: "Onze Ruimte",
    subheading: "Een café ontworpen voor comfort, gemeenschap en geweldige koffie.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=600&q=80",
        alt: "Specialty koffie latte art",
      },
      {
        src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80",
        alt: "Gezellig café interieur",
      },
      {
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
        alt: "Caféterras met planten",
      },
      {
        src: "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=600&q=80",
        alt: "Pour over koffie zetten",
      },
      {
        src: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80",
        alt: "Gebak vitrine",
      },
      {
        src: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=600&q=80",
        alt: "Café werkplek",
      },
    ],
  },
  testimonials: {
    heading: "Wat Mensen Zeggen",
    subheading: "Woorden van onze vaste klanten.",
    testimonials: [
      {
        name: "Alex P.",
        role: "Dagelijkse Stamgast",
        quote:
          "Ik werk hier drie dagen per week. Het wifi is snel, de muziek is perfect en de flat white is eerlijk gezegd de beste die ik ooit heb gehad.",
        rating: 5,
      },
      {
        name: "Chloe W.",
        role: "Koffieliefhebber",
        quote:
          "De pour-over selectie hier is ongelofelijk. Ze kennen hun koffie echt en praten graag over de boerderijen en processen.",
        rating: 5,
      },
      {
        name: "Tom B.",
        role: "Weekend Bruncher",
        quote:
          "De avocado toast en cold brew combinatie is mijn zaterdagritueel. Geweldig eten, geweldige koffie en een heerlijke sfeer.",
        rating: 5,
      },
    ],
  },
  contact: {
    heading: "Kom Even Dag Zeggen",
    subheading: "We zijn elke dag open en zien u altijd graag.",
    contact: {
      address: "Esdoornstraat 88, 1011 AB Amsterdam",
      phone: "020 555 0789",
      email: "hoi@thecozycup.nl",
      mapUrl: "https://maps.google.com",
    },
    openingHours: [
      { day: "Maandag – Vrijdag", hours: "7:00 – 19:00" },
      { day: "Zaterdag", hours: "8:00 – 18:00" },
      { day: "Zondag", hours: "9:00 – 17:00" },
    ],
    showContactForm: false,
  },
  footerTagline: "The Cozy Cup — Een warm plekje in een drukke wereld.",
};
