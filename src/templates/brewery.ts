import type { SiteConfig } from "@/config/types";

export const breweryConfig: SiteConfig = {
  businessName: "Iron Forge Brewing Co.",
  tagline: "Ambachtelijk bier gebrouwen met toewijding",
  style: "dark",
  seo: {
    title: "Iron Forge Brewing Co. | Ambachtelijke Brouwerij & Taplokaal",
    description:
      "Iron Forge Brewing Co. brouwt stoere, volsmaakse bieren in het hart van de stad. Bezoek ons taplokaal voor verse pints, brouwerij rondleidingen en liveevenementen.",
    keywords: ["ambachtelijke brouwerij", "taplokaal", "ambachtelijk bier", "IPA", "stout", "brouwerijrondleidingen", "lokaal bier"],
  },
  theme: {
    primaryColor: "#d97706",
    primaryDarkColor: "#b45309",
    secondaryColor: "#1c1917",
    accentColor: "#f59e0b",
    mutedColor: "#292524",
    mutedForegroundColor: "#a8a29e",
    cardBgColor: "#231f1e",
    fontHeading: "'Impact', 'Arial Narrow', 'Arial Black', sans-serif",
    fontBody: "system-ui, sans-serif",
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "Ons Verhaal", href: "#about" },
    { label: "Bieren op Tap", href: "#menu" },
    { label: "Het Taplokaal", href: "#gallery" },
    { label: "Beoordelingen", href: "#testimonials" },
    { label: "Bezoek Ons", href: "#contact" },
  ],
  socialLinks: {
    instagram: "https://instagram.com/ironforgebrewing",
    facebook: "https://facebook.com/ironforgebrewing",
    twitter: "https://twitter.com/ironforgebrewing",
    yelp: "https://yelp.com/biz/ironforgebrewing",
  },
  hero: {
    headline: "Bier Gebrouwen voor Mensen Die Het Menen.",
    subheadline:
      "Geen compromissen. Geen snelle oplossingen. Elke batch die we brouwen is gebouwd op kwaliteitsvolle ingrediënten, eerlijk vakmanschap en een niet aflatende zoektocht naar de perfecte pint. Welkom bij Iron Forge.",
    ctaText: "Bekijk Wat er op Tap Staat",
    ctaHref: "#menu",
    secondaryCtaText: "Plan Uw Bezoek",
    secondaryCtaHref: "#contact",
    backgroundImage: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1600&q=80",
    overlayOpacity: 0.78,
  },
  about: {
    heading: "Gesmeed in Vuur. Gebrouwen met Doel.",
    description:
      "Iron Forge Brewing Co. werd in 2018 opgericht door twee voormalige staalarbeiders die hun helmen inruilden voor brouwpetten maar hun arbeidsethos nooit verloren. Onze brouwerij is gevestigd in een omgebouwd ijzerwerken pand uit de jaren 1920 in het magazijndistrict — blootgesteld steen, stalen balken en het gesuis van gistingstanks. We brouwen in kleine batches met lokaal gemout gerst en hele-kegel hop van boerderijen. Elk bier dat we uitbrengen staat op ons woord, en dat nemen we serieus.",
    image: "https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=800&q=80",
    highlights: [
      {
        icon: "🍺",
        title: "Kleinschalig Brouwen",
        description: "We brouwen in batches van 10 vaten zodat elk vat de aandacht krijgt die het verdient.",
      },
      {
        icon: "🌾",
        title: "Lokale Ingrediënten",
        description: "Gemout gerst van regionale boerderijen, hele-kegel hop en lokaal gesourcede toevoegingen.",
      },
      {
        icon: "🏢",
        title: "Historisch Taplokaal",
        description: "Drink in een omgebouwd ijzerwerken pand uit de jaren 1920. De geschiedenis is deel van de beleving.",
      },
    ],
  },
  menuServices: {
    heading: "Wat er op Tap Staat",
    subheading: "Een wisselend aanbod van huisbieren en seizoensreleases. Altijd vers, altijd koud.",
    type: "menu",
    categories: ["IPA's", "Lagers & Pilsners", "Stouts & Porters", "Seizoens & Zuren"],
    items: [
      {
        name: "Anvil IPA",
        description: "Ons vlaggenschip West Coast IPA. Agressief gehopt met Centennial en Simcoe voor een harsachtige, citrusrijke beet en een schone bittere afdronk. 6,8% ABV.",
        price: "€7 / pint",
        category: "IPA's",
      },
      {
        name: "Slag Heap Hazy",
        description: "New England-stijl hazy IPA barst van tropische fruitaroma's. Zachte mondvoel, lage bitterheid, gevaarlijk drinkbaar. 6,2% ABV.",
        price: "€8 / pint",
        category: "IPA's",
      },
      {
        name: "Double Trouble DIPA",
        description: "Een dubbele IPA voor de moedigen. Harsachtig naaldhout en rijpe mango in balans met een stevige bitterheid. 8,5% ABV — respecteer de pint.",
        price: "€9 / pint",
        category: "IPA's",
      },
      {
        name: "Foundry Pilsner",
        description: "Fris en verfrissend Tsjechisch-stijl pilsner. Edelhop, bleke mout en een droge, schone afdronk. De werkmanspint. 4,8% ABV.",
        price: "€6 / pint",
        category: "Lagers & Pilsners",
      },
      {
        name: "Cold Steel Lager",
        description: "Amerikaans-stijl koud gelagerd bier. Licht van body, subtiele maïszoetheid en een ijskoude afdronk. Van begin tot eind verpletterd drinkbaar. 4,2% ABV.",
        price: "€5 / pint",
        category: "Lagers & Pilsners",
      },
      {
        name: "Midnight Shift Stout",
        description: "Rijke, fluweelzachte havermolenout met geroosterde koffie en pure chocoladekarakter. Zacht genoeg om de hele avond te drinken. 6,0% ABV.",
        price: "€7 / pint",
        category: "Stouts & Porters",
      },
      {
        name: "Iron Rail Porter",
        description: "Klassieke robuuste porter. Geroosterde mout, hints van toffee en een fluistering van rook. Gebrouwen voor de serieuze drinker. 5,8% ABV.",
        price: "€7 / pint",
        category: "Stouts & Porters",
      },
      {
        name: "Spark Gap Kettle Sour",
        description: "Seizoensgebonden zure tarwebier met verse framboos en citroenschil. Helder, zuur en verfrissend. Beperkte batches. 4,5% ABV.",
        price: "€8 / pint",
        category: "Seizoens & Zuren",
      },
      {
        name: "Harvest Märzen",
        description: "Traditionele Beierse Märzen. Rijke toffeemout, lichte edelhopkruidigheid en een gladde lagerafdronk. Herfst in een glas. 5,6% ABV.",
        price: "€7 / pint",
        category: "Seizoens & Zuren",
      },
    ],
  },
  gallery: {
    heading: "Binnen de Smederij",
    subheading: "Staal, stoom en de geur van verse hop. Hier wordt het bier gemaakt.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=600&q=80",
        alt: "Roestvrijstalen brouwtanks",
      },
      {
        src: "https://images.unsplash.com/photo-1612528443702-f6741f70a049?w=600&q=80",
        alt: "Verse pints op de taplokaalbar",
      },
      {
        src: "https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=600&q=80",
        alt: "Brouwapparatuur in het pakhuis",
      },
      {
        src: "https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=600&q=80",
        alt: "Gerst en hop ingrediënten",
      },
      {
        src: "https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?w=600&q=80",
        alt: "Glazen ambachtelijk bier op een bar",
      },
      {
        src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
        alt: "Taplokaal interieur met blootgesteld steen",
      },
    ],
  },
  testimonials: {
    heading: "Recht van de Stamgasten",
    subheading: "",
    testimonials: [
      {
        name: "Rick P.",
        role: "Ambachtelijk Bierliefhebber",
        quote: "De Anvil IPA is de maatstaf waaraan ik elke West Coast IPA nu afmeet. Dennen en citrus, perfect gebalanceerde bitterheid — ik ben op zoek naar die pint geweest sinds mijn eerste bezoek.",
        rating: 5,
      },
      {
        name: "Sofia K.",
        role: "Lokale Blogger",
        quote: "Iron Forge heeft de beste sfeer van elk taplokaal dat ik heb bezocht. Blootgesteld steen, gedempt licht, geweldige muziek — en de Midnight Shift Stout is misschien wel de beste stout die ik ooit heb gehad.",
        rating: 5,
      },
      {
        name: "Ben O.",
        role: "Stamgast",
        quote: "De brouwerijrondleiding is elk centje waard. Je kunt het verschil proeven dat kleinschalige zorg maakt. De flight sampler is ongelooflijk voordelig.",
        rating: 5,
      },
    ],
  },
  contact: {
    heading: "Het Taplokaal Is Open",
    subheading: "Vind ons in het magazijndistrict. Honden welkom op het terras.",
    contact: {
      address: "Smidseweg 800, 3011 AB Rotterdam",
      phone: "010 555 0842",
      email: "taplokaal@ironforgebrewing.nl",
      mapUrl: "https://maps.google.com",
    },
    openingHours: [
      { day: "Maandag – Dinsdag", hours: "Gesloten" },
      { day: "Woensdag – Donderdag", hours: "15:00 – 22:00" },
      { day: "Vrijdag", hours: "14:00 – 23:00" },
      { day: "Zaterdag", hours: "12:00 – 23:00" },
      { day: "Zondag", hours: "12:00 – 20:00" },
    ],
    showContactForm: true,
  },
  footerTagline: "Iron Forge Brewing Co. — Stevig gebouwd. Eerlijk gebrouwen. Est. 2018.",
};
