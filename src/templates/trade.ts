import type { SiteConfig } from "@/config/types";

export const ironcladConfig: SiteConfig = {
  businessName: "Ironclad Plumbing & Heating",
  tagline: "Betrouwbaar vakwerk. Eerlijke prijzen. Geen nonsens.",
  style: "trades",
  seo: {
    title: "Ironclad Loodgieterij & Verwarming | Spoedloodgieter & Keteltechnicus",
    description:
      "Ironclad Loodgieterij & Verwarming verzorgt spoedoproepen, ketelinstallaties, centrale verwarming, rioolontstopping en volledige badkamermontage. Gas Safe geregistreerd.",
    keywords: [
      "loodgieter",
      "verwarmingstechnicus",
      "spoedloodgieter",
      "ketelinstallatie",
      "gas safe",
      "rioolontstopping",
      "badkamermontage",
    ],
  },
  theme: {
    primaryColor: "#f97316",
    primaryDarkColor: "#c2410c",
    secondaryColor: "#0f0f0f",
    accentColor: "#ffffff",
    mutedColor: "#1a1a1a",
    mutedForegroundColor: "#9ca3af",
    cardBgColor: "#1a1a1a",
    fontHeading: "'Arial Black', 'Arial Bold', Arial, sans-serif",
    fontBody: "system-ui, sans-serif",
  },
  nav: [
    { label: "Diensten", href: "#menu" },
    { label: "Over ons", href: "#about" },
    { label: "Ons Werk", href: "#gallery" },
    { label: "Beoordelingen", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
  socialLinks: {
    facebook: "https://facebook.com/ironcladplumbing",
  },
  hero: {
    headline: "Probleem? Wij Lossen Het Op.",
    subheadline:
      "NL-Gas gecertificeerde monteurs voor spoedoproepen, ketelinstallaties, centrale verwarming en volledige badkamermontage. Beschikbaar 24/7 — geen klus te groot of te klein.",
    ctaText: "Vraag Gratis Offerte Aan",
    ctaHref: "#contact",
    secondaryCtaText: "Alle Diensten Bekijken",
    secondaryCtaHref: "#menu",
    backgroundImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80",
    overlayOpacity: 0.65,
  },
  about: {
    heading: "Meer Dan 20 Jaar Vakmanschap",
    description:
      "Ironclad begon in 2003 als eenmansoperatie en is uitgegroeid tot een team van 12 volledig gekwalificeerde monteurs. We hebben nooit groei nagestreefd om het groeien zelf — elke monteur die we aannemen doorloopt dezelfde rigoureuze keuring die we zouden toepassen als ze naar ons eigen huis zouden komen. We zijn op tijd, prijzen eerlijk en laten de plek schoner achter dan we hem aantroffen.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    highlights: [
      {
        icon: "🔒",
        title: "NL-Gas Geregistreerd",
        description: "Al het gaswerk uitgevoerd door volledig geregistreerde NL-Gas monteurs. Certificaatnummer beschikbaar op aanvraag.",
      },
      {
        icon: "🛡️",
        title: "Volledig Verzekerd",
        description: "€5 miljoen aansprakelijkheidsverzekering bij elke klus. U bent gedekt vanaf het moment dat we aankomen.",
      },
      {
        icon: "✅",
        title: "Geen Verborgen Kosten",
        description: "Wij bieden vooraf een prijs aan en houden ons eraan. Als de opdracht verandert, vertellen we u dat vóórdat we het werk uitvoeren.",
      },
    ],
  },
  menuServices: {
    heading: "Onze Diensten",
    subheading: "Spoed of gepland — wij dekken alles.",
    type: "services",
    categories: ["Spoed", "Verwarming", "Loodgieterij", "Badkamers", "Gas"],
    items: [
      {
        name: "Spoedoproep",
        description:
          "Gesprongen leiding, geen warm water, ketelstoring — wij reageren binnen het uur, 24 uur per dag, 7 dagen per week. Geen toeslag voor nacht en weekend.",
        price: "Vanaf €85",
        icon: "🚨",
        category: "Spoed",
      },
      {
        name: "Ketelinstallatie",
        description:
          "Levering en montage van A-klasse combi-, systeem- of enkelvoudige ketels. Alle grote merken op voorraad. 10 jaar fabrieksgarantie beschikbaar.",
        price: "Vanaf €1.200",
        icon: "🔥",
        category: "Verwarming",
      },
      {
        name: "Jaarlijkse Ketelservice",
        description:
          "Volledige demontage, reiniging en inspectie. Houdt uw garantie geldig, uw ketel efficiënt en uw rekeningen laag.",
        price: "€85",
        icon: "🌡️",
        category: "Verwarming",
      },
      {
        name: "Radiatorinstallatie",
        description:
          "Levering en montage van nieuwe radiatoren, TRV's en handdoekradiatoren. Volledige systeembalansering inbegrepen.",
        price: "Vanaf €150",
        icon: "♨️",
        category: "Verwarming",
      },
      {
        name: "Lekdetectie & Reparatie",
        description:
          "Niet-invasieve technologie om verborgen lekken te lokaliseren zonder onnodige schade. Gevonden en gerepareerd in één keer goed.",
        price: "Vanaf €95",
        icon: "💧",
        category: "Loodgieterij",
      },
      {
        name: "Rioolontstopping",
        description:
          "Hogedrukspuiten en handmatige reiniging voor verstopte afvoeren, toiletten, wastafels en badkuipen. Geurbehandeling inbegrepen.",
        price: "Vanaf €75",
        icon: "🔧",
        category: "Loodgieterij",
      },
      {
        name: "Kraan- & Leidingvervanging",
        description:
          "Nieuwe kranen, afsluiters, flexibele slangen en koperen leidingwerk. Levering of montage. Dagsservice beschikbaar.",
        price: "Vanaf €65",
        icon: "🚰",
        category: "Loodgieterij",
      },
      {
        name: "Badkamerinstallatie",
        description:
          "Volledige sloopbeurt en renovatie. Ensuite, natte ruimtes en volledige badkamers. Wij verzorgen tegels, loodgieterswerk en afwerking.",
        price: "Vanaf €800",
        icon: "🛁",
        category: "Badkamers",
      },
      {
        name: "Doucheinstallatie",
        description:
          "Elektrische, krachtige of thermostatische douches. Inloopcabines en natte ruimtesystemen. Levering of montage.",
        price: "Vanaf €250",
        icon: "🚿",
        category: "Badkamers",
      },
      {
        name: "Gasveligheidscertificaat",
        description:
          "Veiligheidsinspectie voor verhuurders uitgevoerd door NL-Gas geregistreerde monteurs. Volledige inspectie en certificaat op dezelfde dag.",
        price: "€75",
        icon: "📋",
        category: "Gas",
      },
    ],
  },
  gallery: {
    heading: "Recent Werk",
    subheading: "Elke klus afgewerkt op hetzelfde niveau — of het nu een kraan of een volledige badkamer is.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
        alt: "Loodgieter monteert leidingen",
        caption: "Leidingvervanging",
      },
      {
        src: "https://images.unsplash.com/photo-1581244277943-fe4a9c777e08?w=600&q=80",
        alt: "Badkamerrenovatie",
        caption: "Volledige Badkamerrenovatie",
      },
      {
        src: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&q=80",
        alt: "Moderne badkamermontage",
        caption: "Ensuite Installatie",
      },
      {
        src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        alt: "Monteur aan het werk",
        caption: "Spoedoproep",
      },
      {
        src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
        alt: "Ketelinstallatie",
        caption: "Ketelinstallatie",
      },
      {
        src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
        alt: "Gereedschap en fittingen",
        caption: "Alleen Kwaliteitsonderdelen",
      },
    ],
  },
  testimonials: {
    heading: "Wat Onze Klanten Zeggen",
    subheading: "Meer dan 500 vijfsterrenbeoordelingen op Google en Werkspot.",
    testimonials: [
      {
        name: "Paul M.",
        role: "Huiseigenaar",
        quote:
          "Ketel kapot op kerstavond. Ironclad had binnen 90 minuten een monteur langs en zorgde dat we die avond weer warm water hadden. Absolute redders — en de prijs was volledig redelijk.",
        rating: 5,
      },
      {
        name: "Sandra K.",
        role: "Verhuurder, 4 panden",
        quote:
          "Ik gebruik Ironclad voor al mijn huurpanden — gascertificaten, jaarlijkse services, spoedoproepen. Altijd betrouwbaar, altijd professioneel, altijd eerlijk over de prijs. Ik ga nergens anders heen.",
        rating: 5,
      },
      {
        name: "Dave R.",
        role: "Huiseigenaar",
        quote:
          "Drie offertes gevraagd voor een volledige badkamerrenovatie. Ironclad was het meest grondig bij de inspectie en came in competitief. De afwerking is onberispelijk en ze waren in vier dagen klaar.",
        rating: 5,
      },
    ],
  },
  contact: {
    heading: "Neem Contact Op",
    subheading: "Gratis offertes voor al het geplande werk. Spoedlijn 24/7 bereikbaar.",
    contact: {
      address: "Unit 4, Handelsweg Bedrijventerrein, 1043 AB Amsterdam",
      phone: "020 555 0123",
      email: "hallo@ironcladtrades.nl",
      mapUrl: "https://maps.google.com",
    },
    openingHours: [
      { day: "Maandag – Vrijdag", hours: "7:00 – 18:00" },
      { day: "Zaterdag", hours: "8:00 – 16:00" },
      { day: "Zondag", hours: "Alleen spoed" },
      { day: "24/7 Spoedlijn", hours: "020 555 0999" },
    ],
    showContactForm: false,
  },
  footerTagline: "Ironclad Loodgieterij & Verwarming — Betrouwbaar vakwerk. Eerlijke prijzen. Geen nonsens.",
};
