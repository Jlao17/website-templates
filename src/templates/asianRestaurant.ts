import type { SiteConfig } from "@/config/types";

export const asianRestaurantConfig: SiteConfig = {
  businessName: "Hana",
  tagline: "Japanse & Pan-Aziatische keuken — elegant, seizoensgebonden, eerlijk",
  style: "asian",
  seo: {
    title: "Hana | Japans & Pan-Aziatisch Fine Dining",
    description:
      "Hana brengt de delicate smaken van Japan en de pan-Aziatische keuken aan tafel — seizoensgebonden ingrediënten, deskundige techniek en een eetkamer ontworpen voor rustige momenten.",
    keywords: ["japans restaurant", "pan-aziatisch", "sushi", "ramen", "fine dining", "aziatische keuken"],
  },
  theme: {
    primaryColor: "#c41e3a",
    primaryDarkColor: "#9b1830",
    secondaryColor: "#f8f4ed",
    accentColor: "#c9a84c",
    mutedColor: "#f0ebe0",
    mutedForegroundColor: "#8a8070",
    cardBgColor: "#f8f4ed",
    fontHeading: "Palatino Linotype, Palatino, Book Antiqua, Georgia, serif",
    fontBody: "system-ui, sans-serif",
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "Ons Verhaal", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Galerij", href: "#gallery" },
    { label: "Beoordelingen", href: "#testimonials" },
    { label: "Reserveer", href: "#contact" },
  ],
  socialLinks: {
    instagram: "https://instagram.com/hana.restaurant",
    facebook: "https://facebook.com/hanarestaurant",
    yelp: "https://yelp.com/biz/hana-restaurant",
  },
  hero: {
    headline: "Waar Elk Gerecht een Verhaal Vertelt",
    subheadline:
      "Geïnspireerd door de seizoenen en de tradities van Japan, is elk gerecht bij Hana samengesteld met intentie — een stille viering van ingrediënt, techniek en tijd.",
    ctaText: "Reserveer een Tafel",
    ctaHref: "#contact",
    secondaryCtaText: "Bekijk Menu",
    secondaryCtaHref: "#menu",
    backgroundImage: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1600&q=80",
    overlayOpacity: 0.58,
  },
  about: {
    heading: "Een Filosofie van Eenvoud",
    description:
      "Hana — wat 'bloem' betekent in het Japans — opende in 2017 met één overtuiging: de beste maaltijden zijn gebouwd op terughoudendheid. Hoofdchef Kenji Mori leerde in Kyoto voor hij een decennium in Amsterdam doorbracht, en zijn kookunst weerspiegelt beide werelden. Seizoensgebonden producten sturen elke menuwijziging, elk ingrediënt gekozen voor wat het bijdraagt in plaats van wat het gedwongen kan worden te doen. De eetkamer is rustig, warm en haastloos — een plek om aanwezig te zijn.",
    image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=800&q=80",
    highlights: [
      {
        icon: "🌸",
        title: "Seizoensmenu's",
        description: "Ons menu verandert met de seizoenen — lentebloesem, zomerhitte, herfstoogst, winterwarmte.",
      },
      {
        icon: "🔪",
        title: "Japanse Techniek",
        description: "Elke snit, elke smoor, elke garnering weerspiegelt jaren training in traditionele Japanse keukens.",
      },
      {
        icon: "🌿",
        title: "Lokaal & Duurzaam",
        description: "We sourcen van boerderijen die we bij naam kennen. Duurzaamheid is geen beleid — het is een relatie.",
      },
    ],
  },
  menuServices: {
    heading: "Het Menu",
    subheading: "Een selectie seizoensgebonden gerechten — regelmatig bijgewerkt.",
    type: "menu",
    categories: ["Kleine Gerechten", "Hoofdgerechten", "Sushi & Sashimi", "Desserts", "Dranken"],
    items: [
      {
        name: "Edamame met Zeezout",
        description: "Vers gestoomde jonge sojabonen, afgemaakt met geschild zeezout en een scheutje geroosterde sesamolie.",
        price: "€6",
        category: "Kleine Gerechten",
      },
      {
        name: "Gyoza — Varken & Gember",
        description: "Gebakken dumplings gevuld met gekruid varkensvlees en verse gember, geserveerd met een citrus ponzu-dip.",
        price: "€9",
        category: "Kleine Gerechten",
      },
      {
        name: "Agedashi Tofu",
        description: "Zijdeachtige tofu licht gebeslag en diepgefried, geserveerd in een lichte dashi-bouillon met daikon en lente-ui.",
        price: "€9",
        category: "Kleine Gerechten",
      },
      {
        name: "Miso Soep",
        description: "Klassieke witte miso-bouillon met wakame zeewier, zachte tofu en gesneden lente-ui.",
        price: "€4",
        category: "Kleine Gerechten",
      },
      {
        name: "Wagyu Tataki",
        description: "Dun gesneden gesch roeid wagyu, yuzu kosho, microgroenten en een ponzu-dressing. Een gerecht dat u vraagt te vertragen.",
        price: "€24",
        category: "Kleine Gerechten",
      },
      {
        name: "Tonkotsu Ramen",
        description: "Rijke varkensbouillon, twaalf uur langzaam gekookt. Belegd met chashu varkensbuik, zachtgekookt ei, nori en bamboescheuten.",
        price: "€18",
        category: "Hoofdgerechten",
      },
      {
        name: "Miso Zwarte Kabeljauw",
        description: "Nobu-geïnspireerde zwarte kabeljauw gemarineerd in witte miso en mirin gedurende 48 uur, geserveerd met ingelegde komkommer en gestoomde rijst.",
        price: "€28",
        category: "Hoofdgerechten",
      },
      {
        name: "Eend Katsu Curry",
        description: "Knapperige panko-gepaneerde eendenborst, Japanse gouden currysaus, geraspte witte kool en plakkerige rijst.",
        price: "€22",
        category: "Hoofdgerechten",
      },
      {
        name: "Tofu & Paddenstoelen Donburi",
        description: "Gebakken shiitake, koningsoester- en enoki-paddenstoelen met gemarineerde tofu over gekruide rijst. Veganistisch.",
        price: "€16",
        category: "Hoofdgerechten",
      },
      {
        name: "Omakase Nigiri (8 stuks)",
        description: "Chefsselectie van acht seizoensgebonden nigiri — de vis verandert dagelijks op basis van wat 's ochtends op de markt is aangekomen.",
        price: "€26",
        category: "Sushi & Sashimi",
      },
      {
        name: "Zalm Sashimi (6 plakjes)",
        description: "Premium Schotse zalm, dik gesneden en geserveerd met verse wasabi, ingelegde gember en sojasaus.",
        price: "€16",
        category: "Sushi & Sashimi",
      },
      {
        name: "Dragon Roll",
        description: "Garnalen tempura en komkommer van binnen, belegd met avocado, pittige mayo en tobiko. Een showstuk rol.",
        price: "€18",
        category: "Sushi & Sashimi",
      },
      {
        name: "Mochi Ijs",
        description: "Huisgemaakt mochi met keuze uit matcha-, zwart sesam- of yuzu-ijsvulling.",
        price: "€8",
        category: "Desserts",
      },
      {
        name: "Matcha Tiramisu",
        description: "Een Japanse twist op de Italiaanse klassieker — laagjes matcha-spons, mascarpone en een bestrooing van ceremoniegrond matcha.",
        price: "€9",
        category: "Desserts",
      },
      {
        name: "Japanse Whisky Highball",
        description: "Suntory Toki whisky, premium bruiswater, een twist citroenschil. Simpel. Perfect.",
        price: "€12",
        category: "Dranken",
      },
      {
        name: "Sake — Junmai Daiginjo",
        description: "Premium sake, koud geserveerd, bloemig en schoon met een lange minerale afdronk. 180ml karaf.",
        price: "€14",
        category: "Dranken",
      },
      {
        name: "Ceremoniële Matcha",
        description: "Op bestelling geklopt met gefilterd water op 80°C. Geserveerd met één seizoensgebonden wagashi-snoepje.",
        price: "€7",
        category: "Dranken",
      },
    ],
  },
  gallery: {
    heading: "De Beleving",
    subheading: "Details die ertoe doen.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&q=80",
        alt: "Omakase nigiri arrangement",
        caption: "Omakase Nigiri",
      },
      {
        src: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600&q=80",
        alt: "Kom ramen",
        caption: "Tonkotsu Ramen",
      },
      {
        src: "https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=600&q=80",
        alt: "Japans restaurant interieur",
        caption: "De Eetkamer",
      },
      {
        src: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=600&q=80",
        alt: "Matcha bereiding",
        caption: "Cere moniële Matcha",
      },
      {
        src: "https://images.unsplash.com/photo-1576577445504-6af96477db52?w=600&q=80",
        alt: "Sushi close-up",
        caption: "Precisie & Zorg",
      },
      {
        src: "https://images.unsplash.com/photo-1607301405752-92a9d7e6f928?w=600&q=80",
        alt: "Japanse whisky highball",
        caption: "Japanse Whisky Highball",
      },
    ],
  },
  testimonials: {
    heading: "Wat Onze Gasten Zeggen",
    testimonials: [
      {
        name: "Anya T.",
        role: "Voedselschrijfster, Het Parool",
        quote:
          "De miso zwarte kabeljauw is een van de beste gerechten die ik dit jaar heb gegeten — zijdeachtig, geurig en afgewerkt met opmerkelijke terughoudendheid. Hana is een werkelijk bijzondere ruimte.",
        rating: 5,
      },
      {
        name: "David L.",
        role: "Vaste Gast",
        quote:
          "Ik kom al twee jaar naar Hana en de consistentie is buitengewoon. Elk gerecht, elk bezoek, voelt doordacht. De omakase is onmisbaar.",
        rating: 5,
      },
      {
        name: "Priya S.",
        role: "Gelegenheidsbezoeker",
        quote:
          "We vierden ons jubileum hier en het hele team maakte het oprecht persoonlijk aanvoelen. De matcha tiramisu alleen al is de reis waard.",
        rating: 5,
      },
    ],
  },
  contact: {
    heading: "Reserveer Uw Tafel",
    subheading: "Wij adviseren vooraf te reserveren, met name voor weekendavonden.",
    contact: {
      address: "Bloesemstraat 14, 1011 AB Amsterdam",
      phone: "+31 20 123 4567",
      email: "reserveringen@hana-restaurant.nl",
      mapUrl: "https://maps.google.com",
    },
    openingHours: [
      { day: "Maandag", hours: "Gesloten" },
      { day: "Dinsdag – Donderdag", hours: "12:00 – 15:00,  18:00 – 22:30" },
      { day: "Vrijdag – Zaterdag", hours: "12:00 – 15:00,  18:00 – 23:00" },
      { day: "Zondag", hours: "12:00 – 16:00" },
    ],
    showContactForm: true,
  },
  footerTagline: "Hana — Seizoensgebonden Japanse & Pan-Aziatische keuken. Amsterdam, est. 2017.",
};
