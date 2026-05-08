import type { SiteConfig } from "@/config/types";

export const restaurantConfig: SiteConfig = {
  businessName: "Bella Cucina",
  tagline: "Authentic Italian cuisine",
  seo: {
    title: "Bella Cucina | Authentic Italian Restaurant",
    description:
      "Experience authentic Italian cuisine at Bella Cucina. Fresh pasta, wood-fired pizza, and fine wines in a warm, welcoming atmosphere.",
    keywords: ["Italian restaurant", "pasta", "pizza", "fine dining", "Italian cuisine"],
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
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Gallery", href: "#gallery" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Reservations", href: "#contact" },
  ],
  socialLinks: {
    instagram: "https://instagram.com/bellacucina",
    facebook: "https://facebook.com/bellacucina",
    yelp: "https://yelp.com/biz/bellacucina",
  },
  hero: {
    headline: "La Dolce Vita on Every Plate",
    subheadline:
      "Handmade pasta, wood-fired pizza, and time-honored recipes straight from the heart of Italy — now in your neighborhood.",
    ctaText: "Reserve a Table",
    ctaHref: "#contact",
    secondaryCtaText: "Explore Menu",
    secondaryCtaHref: "#menu",
    backgroundImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80",
    overlayOpacity: 0.55,
  },
  about: {
    heading: "Our Heritage",
    description:
      "Bella Cucina was founded in 1998 by Chef Marco Ricci, who brought his grandmother's recipes from Napoli to share with the world. Every dish on our menu tells a story — of fresh ingredients, slow-cooked sauces, and the kind of warmth that only home-cooked Italian food can deliver. We are more than a restaurant; we are a family table.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    highlights: [
      {
        icon: "🍝",
        title: "Fresh Pasta Daily",
        description: "All pasta is hand-rolled in-house each morning using semolina and farm eggs.",
      },
      {
        icon: "🔥",
        title: "Wood-Fired Oven",
        description: "Our 900°F wood-fired oven gives every pizza the perfect char and flavor.",
      },
      {
        icon: "🍷",
        title: "Curated Wine List",
        description: "Over 80 Italian wines carefully selected to complement every dish.",
      },
    ],
  },
  menuServices: {
    heading: "Our Menu",
    subheading: "Crafted with seasonal ingredients and traditional techniques.",
    type: "menu",
    categories: ["Antipasti", "Pasta", "Pizza", "Secondi", "Desserts"],
    items: [
      {
        name: "Bruschetta al Pomodoro",
        description: "Grilled bread rubbed with garlic, topped with fresh tomatoes, basil, and EVOO.",
        price: "$9.00",
        category: "Antipasti",
      },
      {
        name: "Burrata e Prosciutto",
        description: "Creamy burrata with aged prosciutto di Parma, arugula, and truffle honey.",
        price: "$16.00",
        category: "Antipasti",
      },
      {
        name: "Tagliatelle al Ragù",
        description: "Fresh egg tagliatelle with our 6-hour slow-cooked Bolognese meat sauce.",
        price: "$22.00",
        category: "Pasta",
      },
      {
        name: "Cacio e Pepe",
        description: "Roman classic: tonnarelli pasta with Pecorino Romano and freshly cracked pepper.",
        price: "$19.00",
        category: "Pasta",
      },
      {
        name: "Margherita D.O.P.",
        description: "San Marzano tomatoes, buffalo mozzarella, fresh basil, extra-virgin olive oil.",
        price: "$18.00",
        category: "Pizza",
      },
      {
        name: "Diavola",
        description: "Spicy Calabrese salami, fior di latte, tomato, chili oil.",
        price: "$21.00",
        category: "Pizza",
      },
      {
        name: "Branzino alla Griglia",
        description: "Grilled Mediterranean sea bass with lemon, capers, and roasted vegetables.",
        price: "$32.00",
        category: "Secondi",
      },
      {
        name: "Tiramisù",
        description: "Classic Italian dessert with mascarpone, espresso-soaked ladyfingers, and cocoa.",
        price: "$10.00",
        category: "Desserts",
      },
    ],
  },
  gallery: {
    heading: "A Taste of Bella Cucina",
    subheading: "Every dish, a work of art.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
        alt: "Elegant pasta dish",
      },
      {
        src: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80",
        alt: "Wood-fired pizza",
      },
      {
        src: "https://images.unsplash.com/photo-1560717845-968823efbee1?w=600&q=80",
        alt: "Restaurant interior",
      },
      {
        src: "https://images.unsplash.com/photo-1551183053-bf91798d765b?w=600&q=80",
        alt: "Italian desserts",
      },
      {
        src: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&q=80",
        alt: "Antipasti spread",
      },
      {
        src: "https://images.unsplash.com/photo-1428515613728-6b4607e44363?w=600&q=80",
        alt: "Wine and dining",
      },
    ],
  },
  testimonials: {
    heading: "Guest Reviews",
    subheading: "What our guests are saying.",
    testimonials: [
      {
        name: "Maria T.",
        role: "Anniversary Dinner",
        quote:
          "The most romantic dinner we've had in years. The tagliatelle ragù brought back memories of our honeymoon in Bologna. Simply magnificent.",
        rating: 5,
      },
      {
        name: "David K.",
        role: "Food Critic",
        quote:
          "Bella Cucina sets the gold standard for Italian dining in the city. The wood-fired Margherita pizza is a religious experience.",
        rating: 5,
      },
      {
        name: "Sophie N.",
        role: "Regular Diner",
        quote:
          "We celebrate every birthday and anniversary here. The staff know us by name and always make us feel like family.",
        rating: 5,
      },
    ],
  },
  contact: {
    heading: "Make a Reservation",
    subheading: "Join us for an unforgettable evening.",
    contact: {
      address: "45 Via Roma, New York, NY 10001",
      phone: "(212) 555-0456",
      email: "reservations@bellacucina.com",
      mapUrl: "https://maps.google.com",
    },
    openingHours: [
      { day: "Monday – Thursday", hours: "12:00 PM – 10:00 PM" },
      { day: "Friday – Saturday", hours: "12:00 PM – 11:00 PM" },
      { day: "Sunday", hours: "1:00 PM – 9:00 PM" },
    ],
    showContactForm: true,
  },
  footerTagline: "Bella Cucina — La dolce vita, every night.",
};
