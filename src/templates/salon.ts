import type { SiteConfig } from "@/config/types";

export const salonConfig: SiteConfig = {
  businessName: "Luxe Beauty Studio",
  tagline: "Where beauty meets excellence",
  seo: {
    title: "Luxe Beauty Studio | Premium Hair & Beauty Salon",
    description:
      "Luxe Beauty Studio offers premium hair styling, coloring, skincare, and nail services. Book your appointment today.",
    keywords: ["hair salon", "beauty salon", "hair coloring", "skincare", "nail salon"],
  },
  theme: {
    primaryColor: "#b5838d",
    primaryDarkColor: "#8a5a63",
    secondaryColor: "#f8f0f2",
    accentColor: "#e8a0a8",
    mutedColor: "#fdf4f6",
    mutedForegroundColor: "#9a7a80",
    cardBgColor: "#fff5f7",
    fontHeading: "Didot, Bodoni MT, serif",
    fontBody: "system-ui, sans-serif",
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#menu" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Book Now", href: "#contact" },
  ],
  socialLinks: {
    instagram: "https://instagram.com/luxebeautystudio",
    facebook: "https://facebook.com/luxebeautystudio",
    tiktok: "https://tiktok.com/@luxebeautystudio",
  },
  hero: {
    headline: "Look Fabulous, Feel Unstoppable",
    subheadline:
      "Premium hair, skin, and beauty services delivered with precision and care. Because you deserve to feel extraordinary every day.",
    ctaText: "Book Appointment",
    ctaHref: "#contact",
    secondaryCtaText: "Our Services",
    secondaryCtaHref: "#menu",
    backgroundImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=80",
    overlayOpacity: 0.5,
  },
  about: {
    heading: "About Our Studio",
    description:
      "Luxe Beauty Studio was founded in 2015 by master stylist Natasha Voss, with a vision to create a salon experience that is as relaxing as it is transformative. Our team of highly trained stylists and beauty therapists are passionate about their craft and committed to helping every client look and feel their absolute best. We use only premium, cruelty-free products that nourish your hair and skin.",
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80",
    highlights: [
      {
        icon: "✂️",
        title: "Expert Stylists",
        description: "Our team has 50+ combined years of experience in top salons worldwide.",
      },
      {
        icon: "🌸",
        title: "Premium Products",
        description: "We exclusively use cruelty-free, salon-grade brands for every service.",
      },
      {
        icon: "💆",
        title: "Full Relaxation",
        description: "Every service includes a complimentary scalp massage or hand treatment.",
      },
    ],
  },
  menuServices: {
    heading: "Our Services",
    subheading: "Professional treatments tailored to you.",
    type: "services",
    categories: ["Hair", "Color", "Skincare", "Nails"],
    items: [
      {
        name: "Women's Haircut & Style",
        description: "Consultation, wash, precision cut, blow-dry and style.",
        price: "$75",
        duration: "60 min",
        category: "Hair",
      },
      {
        name: "Men's Cut & Groom",
        description: "Classic or modern cut with hot towel finish and scalp massage.",
        price: "$45",
        duration: "45 min",
        category: "Hair",
      },
      {
        name: "Keratin Treatment",
        description: "Smoothing treatment that eliminates frizz for up to 3 months.",
        price: "$180",
        duration: "120 min",
        category: "Hair",
      },
      {
        name: "Full Color",
        description: "Single process all-over color with gloss treatment.",
        price: "$95+",
        duration: "90 min",
        category: "Color",
      },
      {
        name: "Balayage / Highlights",
        description: "Hand-painted highlights or full foil — personalized to your look.",
        price: "$145+",
        duration: "150 min",
        category: "Color",
      },
      {
        name: "Toner / Gloss",
        description: "Refresh and enhance your existing color with a toning treatment.",
        price: "$45",
        duration: "45 min",
        category: "Color",
      },
      {
        name: "Classic Facial",
        description: "Deep cleanse, exfoliation, mask, and moisturizing treatment.",
        price: "$90",
        duration: "60 min",
        category: "Skincare",
      },
      {
        name: "Gel Manicure",
        description: "Long-lasting gel polish with nail shaping and cuticle care.",
        price: "$50",
        duration: "45 min",
        category: "Nails",
      },
    ],
  },
  gallery: {
    heading: "Our Work",
    subheading: "A portfolio of transformations from our studio.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
        alt: "Hair styling session",
      },
      {
        src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80",
        alt: "Hair coloring balayage",
      },
      {
        src: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&q=80",
        alt: "Beautiful blowout styling",
      },
      {
        src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80",
        alt: "Skincare facial treatment",
      },
      {
        src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
        alt: "Nail art and manicure",
      },
      {
        src: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&q=80",
        alt: "Elegant salon interior",
      },
    ],
  },
  testimonials: {
    heading: "Client Love",
    subheading: "Don't just take our word for it.",
    testimonials: [
      {
        name: "Olivia S.",
        role: "Loyal Client",
        quote:
          "Natasha is a miracle worker. She completely transformed my hair with balayage and I've never felt more confident. I won't go anywhere else.",
        rating: 5,
      },
      {
        name: "Rachel M.",
        role: "First-Time Visitor",
        quote:
          "I was nervous trying a new salon but the entire team made me feel so welcome. Best haircut I've ever had — and the scalp massage? Heaven.",
        rating: 5,
      },
      {
        name: "Jessica T.",
        role: "Regular Client",
        quote:
          "The facial here is absolutely incredible. My skin has never looked better. I always leave feeling refreshed, beautiful, and completely pampered.",
        rating: 5,
      },
    ],
  },
  contact: {
    heading: "Book Your Appointment",
    subheading: "We'd love to welcome you. Book online or give us a call.",
    contact: {
      address: "210 Glamour Ave, Los Angeles, CA 90036",
      phone: "(323) 555-0321",
      email: "book@luxebeautystudio.com",
      mapUrl: "https://maps.google.com",
    },
    openingHours: [
      { day: "Tuesday – Friday", hours: "10:00 AM – 7:00 PM" },
      { day: "Saturday", hours: "9:00 AM – 6:00 PM" },
      { day: "Sunday", hours: "10:00 AM – 4:00 PM" },
      { day: "Monday", hours: "Closed" },
    ],
    showContactForm: true,
  },
  footerTagline: "Luxe Beauty Studio — Where beauty meets excellence.",
};
