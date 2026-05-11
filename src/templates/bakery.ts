import type { SiteConfig } from "@/config/types";

export const bakeryConfig: SiteConfig = {
  businessName: "Golden Crumb Bakery",
  tagline: "Elke dag met liefde gebakken",
  seo: {
    title: "Golden Crumb Bakery | Vers Ambachtelijk Brood & Gebak",
    description:
      "Golden Crumb Bakery biedt dagelijks vers ambachtelijk brood, gebak en taarten. Kom langs voor het lekkerste bakgoed van de buurt.",
    keywords: ["bakkerij", "ambachtelijk brood", "gebak", "taarten", "vers gebakken"],
  },
  theme: {
    primaryColor: "#c8956c",
    primaryDarkColor: "#a0724d",
    secondaryColor: "#f5ede4",
    accentColor: "#8b5e3c",
    mutedColor: "#f7f0ea",
    mutedForegroundColor: "#6b5a4e",
    cardBgColor: "#fff8f3",
    fontHeading: "Georgia, serif",
    fontBody: "system-ui, sans-serif",
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "Over ons", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Galerij", href: "#gallery" },
    { label: "Beoordelingen", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
  socialLinks: {
    instagram: "https://instagram.com/goldencrumbbakery",
    facebook: "https://facebook.com/goldencrumbbakery",
  },
  hero: {
    headline: "Elke Ochtend Vers Gebakken Heerlijkheden",
    subheadline:
      "Handgemaakt brood, gebak en taarten van de beste lokale ingrediënten — want elke hap verdient iets bijzonders.",
    ctaText: "Bekijk Ons Menu",
    ctaHref: "#menu",
    secondaryCtaText: "Vind Ons",
    secondaryCtaHref: "#contact",
    backgroundImage: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1600&q=80",
    overlayOpacity: 0.5,
  },
  about: {
    heading: "Ons Verhaal",
    description:
      "Golden Crumb Bakery is geboren uit een passie voor eerlijk, ambachtelijk brood. Wij staan elke dag voor zonsopgang op om alles van nul te mengen, rijzen en bakken met tijdloze technieken en lokaal gesourcede ingrediënten. Onze bakkerij is een ontmoetingsplek voor de buurt — een warme, geurende hoek van de wijk waar vriendschappen worden gesmeed naast onze zuurdesems.",
    image: "https://images.unsplash.com/photo-1556217477-d325251ece38?w=800&q=80",
    highlights: [
      {
        icon: "🌾",
        title: "Lokale Ingrediënten",
        description: "Wij werken samen met lokale boeren en molens voor het versste meel en de lekkerste producten.",
      },
      {
        icon: "🍞",
        title: "Dagelijks Gebakken",
        description: "Alles wordt elke ochtend vers gemaakt — hier geen oud brood.",
      },
      {
        icon: "❤️",
        title: "Gemaakt met Liefde",
        description: "Familierecepten doorgegeven door generaties, decennialang geperfectioneerd.",
      },
    ],
  },
  menuServices: {
    heading: "Ons Menu",
    subheading: "Van knapperig zuurdesem tot delicaat gebak — voor elk wat wils.",
    type: "menu",
    categories: ["Brood", "Gebak", "Taarten & Desserts", "Dranken"],
    items: [
      {
        name: "Klassiek Zuurdesembrood",
        description: "Ons signature 24-uur gefermenteerd zuurdesem met een knapperige korst en open kruim.",
        price: "€7,50",
        category: "Brood",
      },
      {
        name: "Rozemarijn Focaccia",
        description: "Luchtig Italiaans plat brood met verse rozemarijn, zeezout en olijfolie.",
        price: "€5,95",
        category: "Brood",
      },
      {
        name: "Volkoren Brood",
        description: "Stevig en voedzaam met een milde, nootachtige smaak. Perfect voor sandwiches.",
        price: "€6,50",
        category: "Brood",
      },
      {
        name: "Boter Croissant",
        description: "Bladerige, goudgele laagjes van boterig gelamineerd deeg — gebakken tot perfectie.",
        price: "€3,50",
        category: "Gebak",
      },
      {
        name: "Amandelkoek",
        description: "Delicaat gebak gevuld met amandelcrème en bestrooid met geschaafde amandelen.",
        price: "€4,00",
        category: "Gebak",
      },
      {
        name: "Kaneelrol",
        description: "Zacht, luchtig rolletje gedraaid met kaneelsuiker en besprenkeld met vanilleglazuur.",
        price: "€3,50",
        category: "Gebak",
      },
      {
        name: "Klassieke Verjaardagstaart",
        description: "Vochtige vanillespons met botercroom, aanpasbaar voor elke gelegenheid.",
        price: "Vanaf €40",
        category: "Taarten & Desserts",
      },
      {
        name: "Chocolade Lava Cake",
        description: "Individuele warme chocoladetaart met een gesmolten kern. Pure verwennerij.",
        price: "€6,50",
        category: "Taarten & Desserts",
      },
      {
        name: "Filterkoffie",
        description: "Huismengsel koffie, lichte of donkere roostering, de hele ochtend vers gezet.",
        price: "€2,75",
        category: "Dranken",
      },
      {
        name: "Latte",
        description: "Zachte espresso gecombineerd met gestoomde volle melk. Warm of ijskoud.",
        price: "€4,50",
        category: "Dranken",
      },
    ],
  },
  gallery: {
    heading: "Uit Onze Keuken",
    subheading: "Een blik achter de schermen van elke bakking.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=600&q=80",
        alt: "Ambachtelijke zuurdesembroden",
      },
      {
        src: "https://images.unsplash.com/photo-1623334044303-241021148842?w=600&q=80",
        alt: "Vers gebakken croissants",
      },
      {
        src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
        alt: "Chocolade laagjestaart",
      },
      {
        src: "https://images.unsplash.com/photo-1558326567-98ae2405596b?w=600&q=80",
        alt: "Kleurrijke macarons",
      },
      {
        src: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=600&q=80",
        alt: "Verse kaneelrollen",
      },
      {
        src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80",
        alt: "Stokbrood en broodjes",
      },
    ],
  },
  testimonials: {
    heading: "Wat Onze Klanten Zeggen",
    subheading: "Echte woorden van onze echte gemeenschap van broodliefhebbers.",
    testimonials: [
      {
        name: "Sarah M.",
        role: "Vaste Klant",
        quote:
          "Het zuurdesem hier is absoluut ongelooflijk. Ik rijd elke zaterdagochtend 20 minuten speciaal hierheen. Het is een familieritueel geworden!",
        rating: 5,
      },
      {
        name: "James L.",
        role: "Voedingsblogger",
        quote:
          "Veruit de beste croissants die ik buiten Parijs heb gegeten. Perfect gelamineerd, boterig en vers uit de oven als ik aankom.",
        rating: 5,
      },
      {
        name: "Emily R.",
        role: "Buurtbewoner",
        quote:
          "Ze maakten de mooiste verjaardagstaart voor mijn dochter. Iedereen op het feestje was onder de indruk van zowel de smaak als de decoratie.",
        rating: 5,
      },
    ],
  },
  contact: {
    heading: "Kom Langs",
    subheading: "We zien u graag. Kom even voor een koffie en een gebakje!",
    contact: {
      address: "Bakkerijstraat 12, 1234 AB Amsterdam",
      phone: "020 555 0123",
      email: "hallo@goldencrumbbakery.nl",
      mapUrl: "https://maps.google.com",
    },
    openingHours: [
      { day: "Maandag – Vrijdag", hours: "7:00 – 18:00" },
      { day: "Zaterdag", hours: "7:00 – 17:00" },
      { day: "Zondag", hours: "8:00 – 15:00" },
    ],
    showContactForm: true,
  },
  footerTagline: "Golden Crumb Bakery — Met liefde gebakken sinds 2012.",
};
