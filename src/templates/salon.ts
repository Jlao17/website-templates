import type { SiteConfig } from "@/config/types";

export const salonConfig: SiteConfig = {
  businessName: "Luxe Beauty Studio",
  tagline: "Waar schoonheid perfectie ontmoet",
  seo: {
    title: "Luxe Beauty Studio | Premium Haar & Schoonheidssalon",
    description:
      "Luxe Beauty Studio biedt premium haarstyling, kleuring, huidverzorging en nagelbehandelingen. Boek vandaag nog uw afspraak.",
    keywords: ["haarsalon", "schoonheidssalon", "haarkleur", "huidverzorging", "nagelsalon"],
  },
  theme: {
    primaryColor: "#b5838d",
    primaryDarkColor: "#8a5a63",
    secondaryColor: "#f8f0f2",
    accentColor: "#e8a0a8",
    mutedColor: "#fdf4f6",
    mutedForegroundColor: "#9a7a80",
    cardBgColor: "#fff5f7",
    fontHeading: "Didot, Bodoni MT, serif",
    fontBody: "system-ui, sans-serif",
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "Over ons", href: "#about" },
    { label: "Diensten", href: "#menu" },
    { label: "Galerij", href: "#gallery" },
    { label: "Beoordelingen", href: "#testimonials" },
    { label: "Boek Nu", href: "#contact" },
  ],
  socialLinks: {
    instagram: "https://instagram.com/luxebeautystudio",
    facebook: "https://facebook.com/luxebeautystudio",
    tiktok: "https://tiktok.com/@luxebeautystudio",
  },
  hero: {
    headline: "Oogverblindend Mooi, Onweerstaanbaar Zelfverzekerd",
    subheadline:
      "Premium haar-, huid- en schoonheidsbehandelingen uitgevoerd met precisie en zorg. Omdat u zich elke dag buitengewoon mag voelen.",
    ctaText: "Maak een Afspraak",
    ctaHref: "#contact",
    secondaryCtaText: "Onze Diensten",
    secondaryCtaHref: "#menu",
    backgroundImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=80",
    overlayOpacity: 0.5,
  },
  about: {
    heading: "Over Onze Studio",
    description:
      "Luxe Beauty Studio werd in 2015 opgericht door meester-stylist Natasha Voss, met een visie om een salonervaring te creëren die zo ontspannend als transformerend is. Ons team van hoogopgeleide stylisten en schoonheidstherapeuten is gepassioneerd over hun vak en toegewijd aan het helpen van elke klant er op zijn of haar allerbest uit te zien en zich zo te voelen. We gebruiken uitsluitend premium, cruelty-free producten die uw haar en huid verzorgen.",
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80",
    highlights: [
      {
        icon: "✂️",
        title: "Deskundige Stylisten",
        description: "Ons team heeft samen meer dan 50 jaar ervaring in topsalons wereldwijd.",
      },
      {
        icon: "🌸",
        title: "Premium Producten",
        description: "We gebruiken uitsluitend cruelty-free salonmerken voor elke behandeling.",
      },
      {
        icon: "💆",
        title: "Volledige Ontspanning",
        description: "Elke behandeling inclusief gratis hoofdhuidmassage of handbehandeling.",
      },
    ],
  },
  menuServices: {
    heading: "Onze Diensten",
    subheading: "Professionele behandelingen op maat voor u.",
    type: "services",
    categories: ["Haar", "Kleur", "Huidverzorging", "Nagels"],
    items: [
      {
        name: "Dameskapsel & Styling",
        description: "Consult, wassen, precisiesnit, föhnen en stylen.",
        price: "€68",
        duration: "60 min",
        category: "Haar",
      },
      {
        name: "Herenknippen & Verzorging",
        description: "Klassieke of moderne knip met warm doekje en hoofdhuidmassage.",
        price: "€40",
        duration: "45 min",
        category: "Haar",
      },
      {
        name: "Keratinebehandeling",
        description: "Smoothingbehandeling die krullen elimineert tot 3 maanden.",
        price: "€165",
        duration: "120 min",
        category: "Haar",
      },
      {
        name: "Volledig Verven",
        description: "Eenproces volledige kleur met glansbehandeling.",
        price: "€85+",
        duration: "90 min",
        category: "Kleur",
      },
      {
        name: "Balayage / Highlights",
        description: "Handgeschilderde highlights of volledig folie — gepersonaliseerd naar uw look.",
        price: "€130+",
        duration: "150 min",
        category: "Kleur",
      },
      {
        name: "Toner / Glans",
        description: "Vernieuw en verbeter uw bestaande kleur met een toningbehandeling.",
        price: "€40",
        duration: "45 min",
        category: "Kleur",
      },
      {
        name: "Klassieke Facial",
        description: "Diepe reiniging, exfoliatie, masker en vochtinbrengende behandeling.",
        price: "€82",
        duration: "60 min",
        category: "Huidverzorging",
      },
      {
        name: "Gel Manicure",
        description: "Langdurige gellak met nagelvorming en nagelriemverzorging.",
        price: "€45",
        duration: "45 min",
        category: "Nagels",
      },
    ],
  },
  gallery: {
    heading: "Ons Werk",
    subheading: "Een portfolio van transformaties uit onze studio.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
        alt: "Haarstyling sessie",
      },
      {
        src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80",
        alt: "Haarkleur balayage",
      },
      {
        src: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&q=80",
        alt: "Prachtige blowout styling",
      },
      {
        src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80",
        alt: "Huidverzorging facialbehandeling",
      },
      {
        src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
        alt: "Nagelkunst en manicure",
      },
      {
        src: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&q=80",
        alt: "Elegant saloninterieur",
      },
    ],
  },
  testimonials: {
    heading: "Klantliefde",
    subheading: "Laat de resultaten voor zichzelf spreken.",
    testimonials: [
      {
        name: "Olivia S.",
        role: "Loyale Klant",
        quote:
          "Natasha is een wondermiddel. Ze heeft mijn haar volledig getransformeerd met balayage en ik heb me nog nooit zo zelfverzekerd gevoeld. Ik ga nergens anders meer heen.",
        rating: 5,
      },
      {
        name: "Rachel M.",
        role: "Eerste Bezoeker",
        quote:
          "Ik was nerveus om een nieuwe salon te proberen, maar het hele team liet me me zo welkom voelen. Beste kapsel dat ik ooit heb gehad — en de hoofdhuidmassage? Hemels.",
        rating: 5,
      },
      {
        name: "Jessica T.",
        role: "Vaste Klant",
        quote:
          "De facial hier is absoluut ongelooflijk. Mijn huid heeft er nog nooit zo goed uitgezien. Ik vertrek altijd fris, mooi en volledig verwend.",
        rating: 5,
      },
    ],
  },
  contact: {
    heading: "Boek Uw Afspraak",
    subheading: "We verwelkomen u graag. Boek online of bel ons.",
    contact: {
      address: "Glamourlaan 210, 1054 AB Amsterdam",
      phone: "020 555 0321",
      email: "boek@luxebeautystudio.nl",
      mapUrl: "https://maps.google.com",
    },
    openingHours: [
      { day: "Maandag – Vrijdag", hours: "9:00 – 19:00" },
      { day: "Zaterdag", hours: "9:00 – 18:00" },
      { day: "Zondag", hours: "Gesloten" },
    ],
    showContactForm: true,
  },
  footerTagline: "Luxe Beauty Studio — Waar schoonheid perfectie ontmoet.",
};
