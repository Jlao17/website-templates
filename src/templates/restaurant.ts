import type { SiteConfig } from "@/config/types";

export const restaurantConfig: SiteConfig = {
  businessName: "Bella Cucina",
  tagline: "Authentieke Italiaanse keuken",
  seo: {
    title: "Bella Cucina | Authentiek Italiaans Restaurant",
    description:
      "Beleef authentieke Italiaanse keuken bij Bella Cucina. Verse pasta, houtovenpizza en uitstekende wijnen in een warme, gastvrije sfeer.",
    keywords: ["Italiaans restaurant", "pasta", "pizza", "fine dining", "Italiaanse keuken"],
  },
  theme: {
    primaryColor: "#c0392b",
    primaryDarkColor: "#96281b",
    secondaryColor: "#fdf2f2",
    accentColor: "#27ae60",
    mutedColor: "#fef9f9",
    mutedForegroundColor: "#7f8c8d",
    cardBgColor: "#fffafa",
    fontHeading: "Palatino Linotype, serif",
    fontBody: "system-ui, sans-serif",
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "Over ons", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Galerij", href: "#gallery" },
    { label: "Beoordelingen", href: "#testimonials" },
    { label: "Reserveren", href: "#contact" },
  ],
  socialLinks: {
    instagram: "https://instagram.com/bellacucina",
    facebook: "https://facebook.com/bellacucina",
    yelp: "https://yelp.com/biz/bellacucina",
  },
  hero: {
    headline: "La Dolce Vita op Elk Bord",
    subheadline:
      "Handgemaakte pasta, houtovenpizza en tijdloze recepten rechtstreeks uit het hart van Italië — nu in uw buurt.",
    ctaText: "Reserveer een Tafel",
    ctaHref: "#contact",
    secondaryCtaText: "Bekijk Menu",
    secondaryCtaHref: "#menu",
    backgroundImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80",
    overlayOpacity: 0.55,
  },
  about: {
    heading: "Onze Erfenis",
    description:
      "Bella Cucina werd in 1998 opgericht door chef-kok Marco Ricci, die de recepten van zijn grootmoeder uit Napoli meebracht om met de wereld te delen. Elk gerecht op ons menu vertelt een verhaal — van verse ingrediënten, langzaam gekookte sauzen en de warmte die alleen zelfgemaakte Italiaanse keuken kan bieden. We zijn meer dan een restaurant; we zijn een familietafel.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    highlights: [
      {
        icon: "🍝",
        title: "Dagelijks Verse Pasta",
        description: "Alle pasta wordt elke ochtend in huis met de hand uitgerold van semolina en boerderijeitjes.",
      },
      {
        icon: "🔥",
        title: "Houtgestookte Oven",
        description: "Onze houtgestookte oven op 480°C geeft elke pizza de perfecte korst en smaak.",
      },
      {
        icon: "🍷",
        title: "Gecureerde Wijnkaart",
        description: "Meer dan 80 Italiaanse wijnen zorgvuldig geselecteerd om elk gerecht te complementeren.",
      },
    ],
  },
  menuServices: {
    heading: "Ons Menu",
    subheading: "Bereid met seizoensgebonden ingrediënten en traditionele technieken.",
    type: "menu",
    categories: ["Antipasti", "Pasta", "Pizza", "Hoofdgerechten", "Desserts"],
    items: [
      {
        name: "Bruschetta al Pomodoro",
        description: "Gegrild brood inwrijven met knoflook, belegd met verse tomaten, basilicum en extra vergine olijfolie.",
        price: "€8,50",
        category: "Antipasti",
      },
      {
        name: "Burrata e Prosciutto",
        description: "Romige burrata met gerijpte prosciutto di Parma, rucola en truffelh honing.",
        price: "€14,50",
        category: "Antipasti",
      },
      {
        name: "Tagliatelle al Ragù",
        description: "Verse eitagliatelle met onze 6 uur lang langzaam gekookte Bolognese vleessaus.",
        price: "€20,00",
        category: "Pasta",
      },
      {
        name: "Cacio e Pepe",
        description: "Romeinse klassieker: tonnarelli pasta met Pecorino Romano en versgemalen zwarte peper.",
        price: "€17,50",
        category: "Pasta",
      },
      {
        name: "Margherita D.O.P.",
        description: "San Marzano tomaten, buffel mozzarella, verse basilicum, extra vergine olijfolie.",
        price: "€16,50",
        category: "Pizza",
      },
      {
        name: "Diavola",
        description: "Pikante Calabrese salami, fior di latte, tomaat, chiliolie.",
        price: "€19,00",
        category: "Pizza",
      },
      {
        name: "Branzino alla Griglia",
        description: "Gegrilde Middellandse Zeebaars met citroen, kappertjes en gegrilde groenten.",
        price: "€29,00",
        category: "Hoofdgerechten",
      },
      {
        name: "Tiramisù",
        description: "Klassiek Italiaans dessert met mascarpone, in espresso gedrenkte ladyfingers en cacao.",
        price: "€9,00",
        category: "Desserts",
      },
    ],
  },
  gallery: {
    heading: "Een Proeverij van Bella Cucina",
    subheading: "Elk gerecht, een kunstwerk.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
        alt: "Elegant pastagerecht",
      },
      {
        src: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80",
        alt: "Houtgestookte pizza",
      },
      {
        src: "https://images.unsplash.com/photo-1560717845-968823efbee1?w=600&q=80",
        alt: "Restaurant interieur",
      },
      {
        src: "https://images.unsplash.com/photo-1691688334265-7936fb8c49ba?w=600&q=80",
        alt: "Italiaanse desserts",
      },
      {
        src: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&q=80",
        alt: "Antipasti assortiment",
      },
      {
        src: "https://images.unsplash.com/photo-1428515613728-6b4607e44363?w=600&q=80",
        alt: "Wijn en dineren",
      },
    ],
  },
  testimonials: {
    heading: "Gastbeoordelingen",
    subheading: "Wat onze gasten zeggen.",
    testimonials: [
      {
        name: "Maria T.",
        role: "Jubileumdiner",
        quote:
          "Het meest romantische diner dat we in jaren hebben gehad. De tagliatelle ragù bracht herinneringen terug aan onze huwelijksreis in Bologna. Gewoon prachtig.",
        rating: 5,
      },
      {
        name: "David K.",
        role: "Voedselcriticus",
        quote:
          "Bella Cucina zet de gouden standaard voor Italiaans dineren in de stad. De houtgestookte Margherita pizza is een religieuze ervaring.",
        rating: 5,
      },
      {
        name: "Sophie N.",
        role: "Vaste Gast",
        quote:
          "We vieren elk verjaardagsfeest en jubileum hier. Het personeel kent ons bij naam en laat ons altijd als familie voelen.",
        rating: 5,
      },
    ],
  },
  contact: {
    heading: "Maak een Reservering",
    subheading: "Kom voor een onvergetelijke avond.",
    contact: {
      address: "Via Roma 45, 1071 AB Amsterdam",
      phone: "020 555 0456",
      email: "reserveringen@bellacucina.nl",
      mapUrl: "https://maps.google.com",
    },
    openingHours: [
      { day: "Maandag – Donderdag", hours: "12:00 – 22:00" },
      { day: "Vrijdag – Zaterdag", hours: "12:00 – 23:00" },
      { day: "Zondag", hours: "13:00 – 21:00" },
    ],
    showContactForm: true,
  },
  footerTagline: "Bella Cucina — La dolce vita, elke avond.",
};
