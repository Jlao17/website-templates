import type { SiteConfig } from "@/config/types";

export const dinerConfig: SiteConfig = {
  businessName: "The Griddle",
  tagline: "Buurtgerecht, zoals het hoort",
  style: "retro",
  seo: {
    title: "The Griddle | Hele Dag Ontbijt, Burgers & Comfort Food",
    description:
      "The Griddle is uw buurtplek voor ontbijt de hele dag, handgemaakte burgers, dagspecials en echte koffie. Kom zoals u bent.",
    keywords: ["diner", "hele dag ontbijt", "burgers", "comfort food", "café", "buurtrestaurant"],
  },
  theme: {
    primaryColor: "#cc2222",
    primaryDarkColor: "#991a1a",
    secondaryColor: "#fdf6e3",
    accentColor: "#1a2e5a",
    mutedColor: "#f5f0e8",
    mutedForegroundColor: "#6b5f4e",
    cardBgColor: "#fffdf7",
    fontHeading: "'Rockwell', 'Courier New', serif",
    fontBody: "system-ui, sans-serif",
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "Ons Verhaal", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Galerij", href: "#gallery" },
    { label: "Beoordelingen", href: "#testimonials" },
    { label: "Vind Ons", href: "#contact" },
  ],
  socialLinks: {
    facebook: "https://facebook.com/thegriddlecafe",
    instagram: "https://instagram.com/thegriddlecafe",
    yelp: "https://yelp.com/biz/thegriddlecafe",
  },
  hero: {
    headline: "Trek een Stoel Bij. Goed Eten Wacht op U.",
    subheadline:
      "Handgemaakte burgers, hele dag ontbijt en dagspecials van scratch elke ochtend bereid. Eerlijk eten, warme ontvangst, geen gedoe.",
    ctaText: "Bekijk het Menu",
    ctaHref: "#menu",
    secondaryCtaText: "Ons Verhaal",
    secondaryCtaHref: "#about",
    backgroundImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80",
    overlayOpacity: 0.35,
  },
  about: {
    heading: "Een Buurtplek, Door en Door",
    description:
      "The Griddle voedt al meer dan dertig jaar deze hoek van de stad. Wat begon als een klein ontbijtloket is uitgegroeid tot de plek waar vaste klanten een vaste bestelling hebben en het personeel uw naam kent. We houden het simpel: kwaliteitsvolle ingrediënten, royale porties en een keuken die trots is op elk bord. Geen trends, geen fratsen — gewoon eten waar mensen echt zin in hebben.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    highlights: [
      {
        icon: "🍳",
        title: "Hele Dag Ontbijt",
        description: "Ons volledige ontbijtmenu is beschikbaar van opening tot sluitingstijd — want ochtenden houden geen kantooruren aan.",
      },
      {
        icon: "🍔",
        title: "Handgemaakte Burgers",
        description: "Dagelijks vers gemalen gehakt, handgevormd en op bestelling bereid. Nooit bevroren, altijd echt.",
      },
      {
        icon: "☕",
        title: "Echte Koffie",
        description: "Single-origin espresso en bodemloze filterkoffie — want een goed maal verdient een goede kop.",
      },
    ],
  },
  menuServices: {
    heading: "Het Menu",
    subheading: "Dagspecials op het bord. Alles vers bereid.",
    type: "menu",
    categories: ["Ontbijt", "Burgers & Hoofdgerechten", "Bijgerechten", "Dranken"],
    items: [
      {
        name: "Het Volle Werk",
        description: "Twee eieren naar keuze, ontbijtspek, varkensworstjes, gegrilde tomaat, champignons, bruine bonen en toast.",
        price: "€11,50",
        category: "Ontbijt",
      },
      {
        name: "Eggs Benedict",
        description: "Geroosterd muffin, ontbijtspek, gepocheerde eieren en echte hollandaisesaus. Met een zijsalade.",
        price: "€10,00",
        category: "Ontbijt",
      },
      {
        name: "Gepureerde Avocado Toast",
        description: "Dik zuurdesem, gepureerde avocado, chilivlokken, citroen en twee gepocheerde eieren erop.",
        price: "€9,50",
        category: "Ontbijt",
      },
      {
        name: "Karnemelk Pannenkoekstapel",
        description: "Drie luchtige karnemelkpannenkoeken met boter, ahornsiroop en verse bessen.",
        price: "€8,50",
        category: "Ontbijt",
      },
      {
        name: "The Griddle Smash Burger",
        description: "Dubbel smash-patty, gesmolten cheddar, gesneden sla, tomaat, augurken en huissaus op een geroosterd briochebroodje. Geserveerd met friet.",
        price: "€13,50",
        category: "Burgers & Hoofdgerechten",
      },
      {
        name: "Spek & Brie Burger",
        description: "Runderpatty, gestreept spek, gesmolten brie, gekarameliseerde uienchutney en rucola op een briochebroodje. Geserveerd met friet.",
        price: "€14,50",
        category: "Burgers & Hoofdgerechten",
      },
      {
        name: "Gegrilde Kip Club",
        description: "Driedubbele geroosterde boterham, gegrild kipfilet, knapperig spek, sla, tomaat en mayo. Geserveerd met een bijgerecht naar keuze.",
        price: "€12,50",
        category: "Burgers & Hoofdgerechten",
      },
      {
        name: "Halloumi & Geroosterde Groenten Wrap",
        description: "Gegrilde halloumi, geroosterde paprika's, courgette, spinazie en hummus in een warm flatbread. Geserveerd met friet.",
        price: "€11,50",
        category: "Burgers & Hoofdgerechten",
      },
      {
        name: "Frieten met Schil",
        description: "Knapperige frieten met schil, zeezout en huiskruiden.",
        price: "€3,50",
        category: "Bijgerechten",
      },
      {
        name: "Uienringen",
        description: "Bierbeslag uienringen, goudgeel en knapperig, met een rokerige dipdressing.",
        price: "€4,00",
        category: "Bijgerechten",
      },
      {
        name: "Salade",
        description: "Gemengde bladeren, komkommer, kerstomaatje en een lichte vinaigrette.",
        price: "€3,00",
        category: "Bijgerechten",
      },
      {
        name: "Coleslaw",
        description: "Huisgemaakte romige coleslaw met appel en karwij.",
        price: "€2,50",
        category: "Bijgerechten",
      },
      {
        name: "Bodemloze Filterkoffie",
        description: "Single-origin huismengsel, lichte of donkere roostering. We blijven bijschenken.",
        price: "€3,00",
        category: "Dranken",
      },
      {
        name: "Flat White",
        description: "Dubbele espresso met fluweelzachte gestoomde melk. Haver-, soja- of volle melk.",
        price: "€3,80",
        category: "Dranken",
      },
      {
        name: "Dikke Milkshake",
        description: "Handgeklopt met echt ijs. Vanille, chocolade, aardbei of banaan.",
        price: "€5,50",
        category: "Dranken",
      },
      {
        name: "Vers Sinaasappelsap",
        description: "Op bestelling geperst. Groot glas.",
        price: "€3,50",
        category: "Dranken",
      },
    ],
  },
  gallery: {
    heading: "Leven aan de Toonbank",
    subheading: "Dertig jaar goede ochtenden en lange lunches.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80",
        alt: "Smash burger met friet",
        caption: "The Griddle Smash Burger",
      },
      {
        src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
        alt: "Burger close-up",
        caption: "Dagelijks vers bereid",
      },
      {
        src: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=600&q=80",
        alt: "Dikke milkshake",
        caption: "Handgeklopte shakes",
      },
      {
        src: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600&q=80",
        alt: "Pannenkoeken met siroop en bessen",
        caption: "Karnemelk Pannenkoekstapel",
      },
      {
        src: "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=600&q=80",
        alt: "Knapperige frieten met schil",
        caption: "Frieten met Schil",
      },
      {
        src: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=600&q=80",
        alt: "Gezellig dinerinterieur",
        caption: "Kom gezellig binnen",
      },
    ],
  },
  testimonials: {
    heading: "Wat Onze Vaste Klanten Zeggen",
    subheading: "Sommigen van deze mensen komen al sinds de opening.",
    testimonials: [
      {
        name: "Dale H.",
        role: "Elke-Dinsdag Stamgast",
        quote: "Ik eet al jaren elke dinsdag de smash burger. Mijn vrouw zegt dat ik eens iets anders moet proberen. Ze heeft ongelijk.",
        rating: 5,
      },
      {
        name: "Tara B.",
        role: "Voedselschrijfster",
        quote: "The Griddle is precies wat een buurtdiner moet zijn — pretentieloos, consistent en werkelijk heerlijk. De eggs benedict is zo goed als het maar kan.",
        rating: 5,
      },
      {
        name: "Marcus T.",
        role: "Lokale Papa",
        quote: "Zaterdagochtend pannenkoeken hier zijn een ritueel in ons huis. De kinderen zouden muiten als we ooit zouden voorstellen ergens anders heen te gaan.",
        rating: 5,
      },
    ],
  },
  contact: {
    heading: "Kom Gezellig Binnen",
    subheading: "We zitten op de hoofdstraat — u kunt ons niet missen. Geen reservering nodig.",
    contact: {
      address: "Marktstraat 42, 1234 AB Amsterdam",
      phone: "020 567 890",
      email: "hallo@thegriddle.nl",
      mapUrl: "https://maps.google.com",
    },
    openingHours: [
      { day: "Maandag – Vrijdag", hours: "7:00 – 17:00" },
      { day: "Zaterdag", hours: "7:30 – 17:00" },
      { day: "Zondag", hours: "8:00 – 15:00" },
    ],
    showContactForm: false,
  },
  footerTagline: "The Griddle — Buurtgerecht, zoals het hoort.",
};
