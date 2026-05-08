import type { SiteConfig } from "@/config/types";

export const cafeConfig: SiteConfig = {
  businessName: "The Cozy Cup",
  tagline: "Your neighborhood café",
  seo: {
    title: "The Cozy Cup | Specialty Coffee & Light Bites",
    description:
      "The Cozy Cup is your neighborhood specialty café offering single-origin coffee, house-made pastries, and a warm atmosphere to work or relax.",
    keywords: ["café", "coffee", "specialty coffee", "pastries", "brunch"],
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
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Find Us", href: "#contact" },
  ],
  socialLinks: {
    instagram: "https://instagram.com/thecozycup",
    facebook: "https://facebook.com/thecozycup",
    tiktok: "https://tiktok.com/@thecozycup",
  },
  hero: {
    headline: "Your Perfect Cup, Every Morning",
    subheadline:
      "Single-origin coffees, house-made pastries, and a warm corner of the world where you can slow down and savor the moment.",
    ctaText: "See Our Menu",
    ctaHref: "#menu",
    secondaryCtaText: "Find Us",
    secondaryCtaHref: "#contact",
    backgroundImage: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&q=80",
    overlayOpacity: 0.45,
  },
  about: {
    heading: "Our Philosophy",
    description:
      "The Cozy Cup was born out of a love for great coffee and community. We believe that a good cup of coffee should be more than a morning ritual — it should be an experience. We source directly from small farms, roast in small batches, and serve every cup with care. Our café is designed to be a place where you can work, read, meet a friend, or just breathe.",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80",
    highlights: [
      {
        icon: "☕",
        title: "Direct Trade Coffee",
        description: "We source directly from farms in Ethiopia, Colombia, and Guatemala.",
      },
      {
        icon: "🫐",
        title: "Seasonal Menu",
        description: "Our food menu rotates with the seasons using local, fresh ingredients.",
      },
      {
        icon: "🌿",
        title: "Sustainable Practices",
        description: "Compostable packaging, zero-waste kitchen, and carbon offset roasting.",
      },
    ],
  },
  menuServices: {
    heading: "What We Serve",
    subheading: "Good coffee. Good food. Good vibes.",
    type: "menu",
    categories: ["Espresso & Coffee", "Cold Drinks", "Food", "Pastries"],
    items: [
      {
        name: "Espresso",
        description: "A perfectly pulled double shot of our house-blend espresso.",
        price: "$3.50",
        category: "Espresso & Coffee",
      },
      {
        name: "Flat White",
        description: "Ristretto shots with velvety micro-foam milk. Silky and strong.",
        price: "$5.00",
        category: "Espresso & Coffee",
      },
      {
        name: "Pour Over",
        description: "Single-origin coffee brewed to order. Ask about today's selection.",
        price: "$6.00",
        category: "Espresso & Coffee",
      },
      {
        name: "Cold Brew",
        description: "12-hour cold brew, smooth and chocolatey. Served over ice.",
        price: "$5.50",
        category: "Cold Drinks",
      },
      {
        name: "Matcha Latte",
        description: "Ceremonial-grade matcha whisked with oat milk. Hot or iced.",
        price: "$6.00",
        category: "Cold Drinks",
      },
      {
        name: "Avocado Toast",
        description: "Sourdough toast, smashed avocado, poached egg, chili flakes, lemon.",
        price: "$12.00",
        category: "Food",
      },
      {
        name: "Granola Bowl",
        description: "House granola, seasonal fruit, coconut yogurt, honey, seeds.",
        price: "$10.00",
        category: "Food",
      },
      {
        name: "Banana Bread",
        description: "Moist, nutty banana bread with walnut and chocolate chips. Toasted on request.",
        price: "$4.50",
        category: "Pastries",
      },
    ],
  },
  gallery: {
    heading: "Our Space",
    subheading: "A café designed for comfort, community, and great coffee.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=600&q=80",
        alt: "Specialty coffee latte art",
      },
      {
        src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80",
        alt: "Cozy café interior",
      },
      {
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
        alt: "Café terrace with plants",
      },
      {
        src: "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=600&q=80",
        alt: "Pour over coffee brewing",
      },
      {
        src: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80",
        alt: "Pastries display",
      },
      {
        src: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=600&q=80",
        alt: "Café workspace",
      },
    ],
  },
  testimonials: {
    heading: "What People Say",
    subheading: "Words from our regulars.",
    testimonials: [
      {
        name: "Alex P.",
        role: "Daily Regular",
        quote:
          "I work from here three days a week. The WiFi is fast, the music is perfect, and the flat white is honestly the best I've ever had.",
        rating: 5,
      },
      {
        name: "Chloe W.",
        role: "Coffee Enthusiast",
        quote:
          "The pour-over selection here is incredible. They genuinely know their coffee and love talking about the farms and processes.",
        rating: 5,
      },
      {
        name: "Tom B.",
        role: "Weekend Bruncher",
        quote:
          "The avocado toast and cold brew combo is my Saturday ritual. Great food, great coffee, and a lovely atmosphere.",
        rating: 5,
      },
    ],
  },
  contact: {
    heading: "Come Say Hi",
    subheading: "We're open every day and always happy to see you.",
    contact: {
      address: "88 Maple Street, Austin, TX 78701",
      phone: "(512) 555-0789",
      email: "hi@thecozycup.com",
      mapUrl: "https://maps.google.com",
    },
    openingHours: [
      { day: "Monday – Friday", hours: "7:00 AM – 7:00 PM" },
      { day: "Saturday", hours: "8:00 AM – 6:00 PM" },
      { day: "Sunday", hours: "9:00 AM – 5:00 PM" },
    ],
    showContactForm: false,
  },
  footerTagline: "The Cozy Cup — A warm place in a busy world.",
};
