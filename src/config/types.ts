export interface NavItem {
  label: string;
  href: string;
}

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  category?: string;
  image?: string;
}

export interface Service {
  name: string;
  description: string;
  price?: string;
  duration?: string;
  icon?: string;
  category?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Testimonial {
  name: string;
  role?: string;
  quote: string;
  avatar?: string;
  rating?: number;
}

export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  tiktok?: string;
  youtube?: string;
  yelp?: string;
}

export interface OpeningHours {
  day: string;
  hours: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  mapUrl?: string;
}

export interface HeroConfig {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  backgroundImage?: string;
  overlayOpacity?: number;
}

export interface AboutConfig {
  heading: string;
  description: string;
  image?: string;
  highlights?: Array<{ icon: string; title: string; description: string }>;
}

export interface MenuServiceConfig {
  heading: string;
  subheading?: string;
  type: "menu" | "services";
  items: MenuItem[] | Service[];
  categories?: string[];
}

export interface GalleryConfig {
  heading: string;
  subheading?: string;
  images: GalleryImage[];
}

export interface TestimonialsConfig {
  heading: string;
  subheading?: string;
  testimonials: Testimonial[];
}

export interface ContactConfig {
  heading: string;
  subheading?: string;
  contact: ContactInfo;
  openingHours: OpeningHours[];
  showContactForm?: boolean;
}

export interface Theme {
  primaryColor: string;
  primaryDarkColor: string;
  secondaryColor: string;
  accentColor: string;
  mutedColor: string;
  mutedForegroundColor: string;
  cardBgColor: string;
  fontHeading: string;
  fontBody: string;
}

export interface SiteConfig {
  businessName: string;
  tagline: string;
  logo?: string;
  favicon?: string;
  seo: {
    title: string;
    description: string;
    keywords?: string[];
    ogImage?: string;
  };
  theme: Theme;
  nav: NavItem[];
  socialLinks: SocialLinks;
  hero: HeroConfig;
  about: AboutConfig;
  menuServices: MenuServiceConfig;
  gallery?: GalleryConfig;
  testimonials?: TestimonialsConfig;
  contact: ContactConfig;
  footerTagline?: string;
}
