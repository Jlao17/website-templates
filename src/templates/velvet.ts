import type { SiteConfig } from "@/config/types";

export const velvetConfig: SiteConfig = {
  businessName: "VELVET",
  tagline: "Ambachtelijke cocktails. Gecureerde avonden.",
  style: "animated",
  seo: {
    title: "VELVET | Ambachtelijke Cocktaillounge",
    description:
      "VELVET is een intieme cocktaillounge waar meesterlijk bereide dranken een sfeer ontmoeten die is ontworpen voor onvergetelijke avonden.",
    keywords: ["cocktailbar", "lounge", "ambachtelijke cocktails", "bar", "nachtleven"],
  },
  theme: {
    primaryColor: "#7c3aed",
    primaryDarkColor: "#5b21b6",
    secondaryColor: "#08080d",
    accentColor: "#d946ef",
    mutedColor: "#1a1a2e",
    mutedForegroundColor: "#8b8ba8",
    cardBgColor: "#11111c",
    fontHeading: "'Playfair Display', Georgia, serif",
    fontBody: "'Inter', system-ui, sans-serif",
  },
  nav: [
    { label: "Verhaal", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Galerij", href: "#gallery" },
    { label: "Pers", href: "#testimonials" },
    { label: "Bezoek", href: "#contact" },
  ],
  socialLinks: {
    instagram: "https://instagram.com/velvetlounge",
    facebook: "https://facebook.com/velvetlounge",
  },
  hero: {
    headline: "Waar Elke Avond een Herinnering Wordt",
    subheadline:
      "Handgemaakte cocktails, een intieme sfeer en een menu ontworpen om u ergens anders heen te nemen.",
    ctaText: "Bekijk het Menu",
    ctaHref: "#menu",
    secondaryCtaText: "Reserveer een Tafel",
    secondaryCtaHref: "#contact",
    backgroundImage: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1600&q=80",
    overlayOpacity: 0.7,
  },
  about: {
    heading: "Een Ruimte voor Buitengewone Avonden",
    description:
      "VELVET is geboren uit het geloof dat een geweldige cocktail slechts het begin is. We obsesseren over elk detail — de herkomst van elke spirit, de temperatuur van elk glas, de manier waarop licht om 22:00 uur over de bar valt. Het resultaat is een ruimte die aanvoelt als een geheim dat de moeite waard is om te bewaren.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80",
    highlights: [
      {
        icon: "🍸",
        title: "140+ Spirits",
        description: "Een encyclopedische collectie van vijf continenten.",
      },
      {
        icon: "🏆",
        title: "Bekroond",
        description: "Drie jaar op rij erkend als beste cocktailbar van de stad.",
      },
      {
        icon: "🎵",
        title: "Gecurated Soundtrack",
        description: "Live jazz op donderdagen. DJ's op vrijdag en zaterdag.",
      },
    ],
  },
  menuServices: {
    heading: "Het Menu",
    subheading: "Elke cocktail is een kort verhaal. Elk gerecht, een perfect hoofdstuk.",
    type: "menu",
    categories: ["Signatures", "Klassiekers", "Kleine Gerechten", "Alcoholvrij"],
    items: [
      {
        name: "Midnight Garden",
        description: "Hendrick's gin, vlierbloesem, komkommerwater, houtskool tonic, gedroogde viola.",
        price: "€16",
        category: "Signatures",
      },
      {
        name: "Velvet Underground",
        description: "Mezcal, braambessenshrub, geactiveerde houtskoolsiroop, citroen, rozemarijnsrook.",
        price: "€18",
        category: "Signatures",
      },
      {
        name: "Gold Rush Sour",
        description: "Bourbon, verse citroen, honingsiroop, eiwit, Angostura schuim.",
        price: "€17",
        category: "Signatures",
      },
      {
        name: "The Crimson Veil",
        description: "Campari, zoete vermout, bloedsinaasappel, gedehydrateerd rozenblad.",
        price: "€15",
        category: "Signatures",
      },
      {
        name: "Old Fashioned",
        description: "Buffalo Trace bourbon, Demerara siroop, Angostura & sinaasappelbitters, ijsbol.",
        price: "€16",
        category: "Klassiekers",
      },
      {
        name: "Negroni",
        description: "Tanqueray 10, Campari, Cocchi Vermouth di Torino, sinaasappeltwist.",
        price: "€15",
        category: "Klassiekers",
      },
      {
        name: "Dry Martini",
        description: "Belvedere vodka of Tanqueray gin, Noilly Prat, naar uw voorkeur.",
        price: "€17",
        category: "Klassiekers",
      },
      {
        name: "Whisky Sour",
        description: "Laphroaig 10jr, citroen, eiwit, Angostura bitters.",
        price: "€16",
        category: "Klassiekers",
      },
      {
        name: "Truffel Arancini",
        description: "Saffraan risotto, zwarte truffel, Parmezaanse korst, aioli.",
        price: "€12",
        category: "Kleine Gerechten",
      },
      {
        name: "Tonijn Tartaar",
        description: "Blauwvintonijn, sesam, avocado, ponzu, knapperig wontonvel.",
        price: "€16",
        category: "Kleine Gerechten",
      },
      {
        name: "Burrata & Perzik",
        description: "Stracciatella, witte perzik, pistache, oude balsamico, zuurdesem crisps.",
        price: "€14",
        category: "Kleine Gerechten",
      },
      {
        name: "Alba Zero",
        description:
          "Seedlip Spice, tonic, komkommer, jeneverbes, gedehydrateerde citroen — geen alcohol.",
        price: "€12",
        category: "Alcoholvrij",
      },
      {
        name: "Botanische Sour",
        description:
          "Huisgemaakte shrub blend, citroen, honing, gemberbier, verse kruiden — levendig en complex.",
        price: "€11",
        category: "Alcoholvrij",
      },
    ],
  },
  gallery: {
    heading: "De Sfeer",
    subheading: "Sommige dingen zijn beter in persoon beleefd.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=600&q=80",
        alt: "Bar 's avonds",
        caption: "De Hoofdbar",
      },
      {
        src: "https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?w=600&q=80",
        alt: "Cocktail bereiding",
        caption: "Bereid met Intentie",
      },
      {
        src: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=600&q=80",
        alt: "Signature cocktail",
        caption: "Midnight Garden",
      },
      {
        src: "https://images.unsplash.com/photo-1615887023544-3a566f29d822?q=80&w=600",
        alt: "Whiskey sour cocktail",
        caption: "Whisky Sour",
      },
      {
        src: "https://images.unsplash.com/photo-1764146275574-00ec68c1fe9e?q=80&w=600",
        alt: "Cocktail close-up",
        caption: "Gold Rush Sour",
      },
      {
        src: "https://images.unsplash.com/photo-1647776112336-72f4c30fafc1?q=80&w=600",
        alt: "Barman aan het werk",
        caption: "Meestervakmanschap",
      },
    ],
  },
  testimonials: {
    heading: "Wat Ze Zeggen",
    subheading: "",
    testimonials: [
      {
        name: "Het Parool",
        role: "★★★★★ Recensie",
        quote:
          "VELVET is het soort bar dat je het gevoel geeft dat je iets hebt ontdekt wat de rest van de stad nog niet heeft gevonden. De Midnight Garden is een van de beste cocktails die we dit jaar hebben gehad.",
        rating: 5,
      },
      {
        name: "Time Out Amsterdam",
        role: "Beste Bar 2024",
        quote:
          "Onberispelijk ontworpen, onweerstaanbaar cool en bemand door mensen die echt van hun vak houden. De cocktailkaart leest als poëzie en smaakt nog beter.",
        rating: 5,
      },
      {
        name: "Emma K.",
        role: "Vaste Gast",
        quote:
          "Ik ben in cocktailbars over de hele wereld geweest en VELVET houdt zijn eigen tegen de allerbeisten. De sfeer is ongeëvenaard — warm maar gesofisticeerd.",
        rating: 5,
      },
    ],
  },
  contact: {
    heading: "Vind Ons",
    subheading: "Reserveren aanbevolen in het weekend. Inlopen altijd welkom.",
    contact: {
      address: "Neonsteeg 18, 1012 AB Amsterdam",
      phone: "020 123 4567",
      email: "hallo@velvetlounge.nl",
      mapUrl: "https://maps.google.com",
    },
    openingHours: [
      { day: "Dinsdag – Donderdag", hours: "17:00 – 1:00" },
      { day: "Vrijdag – Zaterdag", hours: "16:00 – 3:00" },
      { day: "Zondag", hours: "17:00 – Middernacht" },
      { day: "Maandag", hours: "Gesloten" },
    ],
    showContactForm: false,
  },
  footerTagline: "VELVET — Ambachtelijke cocktails. Gecureerde avonden.",
};
