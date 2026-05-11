import type { SiteConfig } from "@/config/types";

export const japanConfig: SiteConfig = {
  businessName: "Nihon Journeys",
  tagline: "Discover the Soul of Japan",
  style: "japan",
  seo: {
    title: "Nihon Journeys | Premium Japan Travel Agency",
    description:
      "Experience the magic of Japan with expertly curated tours. From ancient Kyoto temples to neon-lit Tokyo — discover the Land of the Rising Sun.",
    keywords: ["Japan travel", "Japan tours", "Tokyo", "Kyoto", "Japan travel agency", "Japan holiday"],
  },
  theme: {
    primaryColor: "#c0392b",
    primaryDarkColor: "#96281b",
    secondaryColor: "#1a1a2e",
    accentColor: "#f0a500",
    mutedColor: "#0c0f18",
    mutedForegroundColor: "#8892a4",
    cardBgColor: "#141824",
    fontHeading: "Georgia, 'Times New Roman', serif",
    fontBody: "system-ui, -apple-system, sans-serif",
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "Regions", href: "#regions" },
    { label: "Tours", href: "#tours" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Book Now", href: "#contact" },
  ],
  socialLinks: {
    instagram: "https://instagram.com/nihonjourneys",
    facebook: "https://facebook.com/nihonjourneys",
    youtube: "https://youtube.com/nihonjourneys",
  },
  hero: {
    headline: "Discover the Soul of Japan",
    subheadline:
      "From cherry blossom-lined paths in ancient Kyoto to the neon-lit streets of Tokyo — let us guide you through the Land of the Rising Sun.",
    ctaText: "Explore Regions",
    ctaHref: "#regions",
    secondaryCtaText: "View Tours",
    secondaryCtaHref: "#tours",
    backgroundImage:
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1600&q=80",
    overlayOpacity: 0.6,
  },
  about: {
    heading: "Why Travel with Nihon Journeys",
    description:
      "With over 15 years of crafting unforgettable Japanese adventures, we go beyond the tourist trail. Our native-speaking guides, handpicked ryokan stays, and seamless logistics let you focus entirely on experiencing Japan's extraordinary culture, cuisine, and landscapes.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
    highlights: [
      {
        icon: "🗾",
        title: "Local Expert Guides",
        description:
          "Our guides are native Japanese speakers with deep regional knowledge and personal connections across the country.",
      },
      {
        icon: "🏯",
        title: "Authentic Experiences",
        description:
          "Sleep in centuries-old ryokan, learn tea ceremony, join local matsuri festivals, and dine where the locals do.",
      },
      {
        icon: "✈️",
        title: "Seamless Planning",
        description:
          "From JR passes to restaurant reservations and pocket Wi-Fi, we handle every detail so you don't have to.",
      },
    ],
  },
  menuServices: {
    heading: "Featured Tour Packages",
    subheading: "Carefully crafted itineraries for every type of traveler.",
    type: "services",
    categories: ["Cultural", "Nature", "Food & Drink", "Adventure", "Luxury"],
    items: [
      {
        name: "Classic Japan: Tokyo to Kyoto",
        description:
          "The ultimate Japan introduction. Explore Tokyo's vibrant neighborhoods, ride the shinkansen through Mt. Fuji country, and wander Kyoto's ancient temples and geisha districts.",
        price: "From €2,890",
        duration: "10 days",
        category: "Cultural",
        icon: "🗼",
      },
      {
        name: "Cherry Blossom Trail",
        description:
          "Chase the sakura front from Kyushu to Hokkaido during peak bloom season. Visit the finest hanami spots guided by our timing experts.",
        price: "From €3,450",
        duration: "12 days",
        category: "Nature",
        icon: "🌸",
      },
      {
        name: "Japan Food Pilgrim",
        description:
          "A deep dive into regional Japanese cuisine — ramen in Sapporo, wagyu in Kobe, okonomiyaki in Osaka, and omakase sushi at a Tokyo counter.",
        price: "From €3,200",
        duration: "11 days",
        category: "Food & Drink",
        icon: "🍜",
      },
      {
        name: "Ryokan & Onsen Retreat",
        description:
          "Unwind in Japan's finest traditional inns. Soak in outdoor hot springs overlooking mountain scenery, enjoy multi-course kaiseki dinners, and experience pure omotenashi.",
        price: "From €2,650",
        duration: "8 days",
        category: "Luxury",
        icon: "♨️",
      },
      {
        name: "Hokkaido Powder Season",
        description:
          "World-class skiing at Niseko, Furano, and Rusutsu. Japan's legendary light powder snow combined with après-ski ramen, sake, and fresh seafood.",
        price: "From €2,990",
        duration: "9 days",
        category: "Adventure",
        icon: "⛷️",
      },
      {
        name: "Hidden Japan: Rural & Coastal",
        description:
          "Explore the Japan most tourists miss — Kanazawa's geisha districts, ancient Shimane shrines, the Seto Inland Sea islands, and rural Shikoku.",
        price: "From €3,100",
        duration: "10 days",
        category: "Cultural",
        icon: "⛩️",
      },
    ],
  },
  gallery: {
    heading: "Captured in Japan",
    subheading: "A glimpse of the moments waiting for you.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
        alt: "Fushimi Inari torii gates, Kyoto",
        caption: "Fushimi Inari, Kyoto",
      },
      {
        src: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=800&q=80",
        alt: "Shibuya crossing at night, Tokyo",
        caption: "Shibuya Crossing, Tokyo",
      },
      {
        src: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&q=80",
        alt: "Cherry blossoms in Hokkaido",
        caption: "Cherry Blossoms, Hokkaido",
      },
      {
        src: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=800&q=80",
        alt: "Mount Fuji reflection in lake",
        caption: "Mount Fuji, Chubu",
      },
      {
        src: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=800&q=80",
        alt: "Traditional Japanese garden",
        caption: "Japanese Garden, Kansai",
      },
      {
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
        alt: "Okinawa tropical beach and coral",
        caption: "Kerama Islands, Okinawa",
      },
    ],
  },
  testimonials: {
    heading: "Stories from Our Travelers",
    subheading: "Real experiences from people who've explored Japan with us.",
    testimonials: [
      {
        name: "Emma & Thomas",
        role: "Honeymoon travelers",
        quote:
          "Nihon Journeys made our honeymoon absolutely magical. The ryokan in Hakone with Mount Fuji views was a dream — and our guide knew hidden spots in Kyoto we never would have found on our own.",
        rating: 5,
      },
      {
        name: "Sophie Delamare",
        role: "Solo traveler",
        quote:
          "As a solo female traveler I was nervous about Japan. My Nihon Journeys guide made me feel completely safe while having the most incredible adventure of my life. Already planning my next trip!",
        rating: 5,
      },
      {
        name: "The Andersen Family",
        role: "Family with teenagers",
        quote:
          "We were worried Japan might not be family-friendly, but Nihon Journeys designed a perfect blend of culture, food, and fun. My teenagers are already asking to go back!",
        rating: 5,
      },
    ],
  },
  contact: {
    heading: "Start Your Japan Journey",
    subheading: "Let our Japan specialists craft your perfect itinerary.",
    contact: {
      address: "Keizersgracht 400, 1016 GC Amsterdam",
      phone: "+31 20 123 4567",
      email: "hello@nihonjourneys.nl",
    },
    openingHours: [
      { day: "Monday – Friday", hours: "9:00 – 18:00" },
      { day: "Saturday", hours: "10:00 – 16:00" },
      { day: "Sunday", hours: "Closed" },
    ],
    showContactForm: true,
  },
  footerTagline: "Bridging the world to Japan, one journey at a time.",
};
