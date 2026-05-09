import type { SiteConfig } from "@/config/types";

export const bakeryConfig: SiteConfig = {
  businessName: "Golden Crumb Bakery",
  tagline: "Baked with love, every day",
  seo: {
    title: "Golden Crumb Bakery | Fresh Artisan Breads & Pastries",
    description:
      "Golden Crumb Bakery offers fresh artisan breads, pastries, and cakes baked daily. Visit us for the best baked goods in town.",
    keywords: ["bakery", "artisan bread", "pastries", "cakes", "fresh baked"],
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
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Gallery", href: "#gallery" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
  socialLinks: {
    instagram: "https://instagram.com/goldencrumbbakery",
    facebook: "https://facebook.com/goldencrumbbakery",
  },
  hero: {
    headline: "Freshly Baked Goodness Every Morning",
    subheadline:
      "Handcrafted breads, pastries, and cakes made with the finest local ingredients — because every bite deserves to be extraordinary.",
    ctaText: "View Our Menu",
    ctaHref: "#menu",
    secondaryCtaText: "Find Us",
    secondaryCtaHref: "#contact",
    backgroundImage: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1600&q=80",
    overlayOpacity: 0.5,
  },
  about: {
    heading: "Our Story",
    description:
      "Golden Crumb Bakery was born from a passion for real, honest bread. We wake up before dawn every day to mix, proof, and bake everything from scratch using time-honored techniques and locally sourced ingredients. Our bakery is a gathering place for the community — a warm, fragrant corner of the neighborhood where friendships are baked alongside our sourdoughs.",
    image: "https://images.unsplash.com/photo-1556217477-d325251ece38?w=800&q=80",
    highlights: [
      {
        icon: "🌾",
        title: "Local Ingredients",
        description: "We partner with local farmers and mills for the freshest flour and produce.",
      },
      {
        icon: "🍞",
        title: "Baked Daily",
        description: "Everything is made fresh every morning — no day-old bread here.",
      },
      {
        icon: "❤️",
        title: "Made with Love",
        description: "Family recipes passed down through generations, perfected over decades.",
      },
    ],
  },
  menuServices: {
    heading: "Our Menu",
    subheading: "From crusty sourdoughs to delicate pastries, something for everyone.",
    type: "menu",
    categories: ["Breads", "Pastries", "Cakes & Desserts", "Drinks"],
    items: [
      {
        name: "Classic Sourdough",
        description: "Our signature 24-hour fermented sourdough with a crisp crust and open crumb.",
        price: "$8.00",
        category: "Breads",
      },
      {
        name: "Rosemary Focaccia",
        description: "Airy Italian flatbread with fresh rosemary, sea salt, and olive oil.",
        price: "$6.50",
        category: "Breads",
      },
      {
        name: "Whole Wheat Loaf",
        description: "Hearty and nutritious with a mild, nutty flavor. Perfect for sandwiches.",
        price: "$7.00",
        category: "Breads",
      },
      {
        name: "Butter Croissant",
        description: "Flaky, golden layers of buttery laminated dough — baked to perfection.",
        price: "$4.00",
        category: "Pastries",
      },
      {
        name: "Almond Danish",
        description: "Delicate pastry filled with almond cream and topped with sliced almonds.",
        price: "$4.50",
        category: "Pastries",
      },
      {
        name: "Cinnamon Roll",
        description: "Soft, pillowy roll swirled with cinnamon sugar and drizzled with vanilla glaze.",
        price: "$4.00",
        category: "Pastries",
      },
      {
        name: "Classic Birthday Cake",
        description: "Moist vanilla sponge with buttercream frosting, customizable for any occasion.",
        price: "From $45",
        category: "Cakes & Desserts",
      },
      {
        name: "Chocolate Lava Cake",
        description: "Individual warm chocolate cake with a gooey molten center. Pure indulgence.",
        price: "$7.00",
        category: "Cakes & Desserts",
      },
      {
        name: "Drip Coffee",
        description: "House-blend coffee, light or dark roast, brewed fresh all morning.",
        price: "$3.00",
        category: "Drinks",
      },
      {
        name: "Latte",
        description: "Smooth espresso paired with steamed whole milk. Hot or iced.",
        price: "$5.00",
        category: "Drinks",
      },
    ],
  },
  gallery: {
    heading: "From Our Kitchen",
    subheading: "A glimpse into the art and craft behind every bake.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=600&q=80",
        alt: "Artisan sourdough loaves",
      },
      {
        src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        alt: "Freshly baked croissants",
      },
      {
        src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
        alt: "Chocolate layer cake",
      },
      {
        src: "https://images.unsplash.com/photo-1558326567-98ae2405596b?w=600&q=80",
        alt: "Colorful macarons",
      },
      {
        src: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=600&q=80",
        alt: "Fresh cinnamon rolls",
      },
      {
        src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80",
        alt: "Baguettes and bread loaves",
      },
    ],
  },
  testimonials: {
    heading: "What Our Customers Say",
    subheading: "Real words from our real community of bread lovers.",
    testimonials: [
      {
        name: "Sarah M.",
        role: "Regular Customer",
        quote:
          "The sourdough here is absolutely incredible. I drive 20 minutes every Saturday morning just to pick one up. It's become a family ritual!",
        rating: 5,
      },
      {
        name: "James L.",
        role: "Food Blogger",
        quote:
          "Hands down the best croissants I've had outside of Paris. Perfectly laminated, buttery, and fresh out of the oven when I arrive.",
        rating: 5,
      },
      {
        name: "Emily R.",
        role: "Local Resident",
        quote:
          "They made the most beautiful birthday cake for my daughter. Everyone at the party was blown away by both the taste and the decoration.",
        rating: 5,
      },
    ],
  },
  contact: {
    heading: "Visit Us",
    subheading: "We'd love to see you. Come in for a coffee and a pastry!",
    contact: {
      address: "123 Bakery Lane, Portland, OR 97201",
      phone: "(503) 555-0123",
      email: "hello@goldencrumbbakery.com",
      mapUrl: "https://maps.google.com",
    },
    openingHours: [
      { day: "Monday – Friday", hours: "7:00 AM – 6:00 PM" },
      { day: "Saturday", hours: "7:00 AM – 5:00 PM" },
      { day: "Sunday", hours: "8:00 AM – 3:00 PM" },
    ],
    showContactForm: true,
  },
  footerTagline: "Golden Crumb Bakery — Baked with love since 2012.",
};
