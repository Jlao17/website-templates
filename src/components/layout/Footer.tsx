import React from "react";
import Link from "next/link";
import type { NavItem, SocialLinks, ContactInfo } from "@/config/types";

interface FooterProps {
  businessName: string;
  tagline?: string;
  navItems: NavItem[];
  socialLinks: SocialLinks;
  contact: ContactInfo;
}

const SocialIcon = ({ platform }: { platform: string }) => {
  const icons: Record<string, React.ReactNode> = {
    instagram: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    facebook: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    twitter: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    tiktok: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
    youtube: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    yelp: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.16 12.73l-4.703 1.14c-.103.025-.187.035-.268.032-.344-.016-.61-.244-.695-.583l-.031-.162c-.017-.116-.011-.218.021-.316.06-.186.217-.334.425-.393l4.628-1.399-.002-.003c.256-.076.462-.022.614.124.155.148.218.379.162.627l-.007.028c-.073.313-.03.528-.144.905zm-2.563 5.12l-3.95-2.674-.001-.001c-.195-.133-.314-.34-.314-.564 0-.093.02-.187.06-.272.109-.232.33-.387.59-.414l.157-.013c.129-.005.25.015.366.06l4.21 1.97c.25.118.418.365.418.636 0 .063-.01.127-.031.19-.138.407-.497.656-.889.621l-.018-.001c-.222-.019-.415-.113-.598-.538zm-5.017 1.54l-.02-4.911-.001-.001c-.001-.243.096-.467.263-.623.101-.094.222-.162.357-.194l.162-.03c.085-.012.168-.012.248.001.224.038.414.177.517.381.002.005.004.01.007.014l2.296 4.337c.109.208.122.453.029.671-.076.18-.22.322-.402.39-.028.01-.058.018-.088.024l-.006.001c-.444.077-.84-.103-1.094-.467l-.001-.001-.267-.593zM8.03 21.19l1.938-4.547.001-.002c.092-.218.268-.383.487-.455l.153-.04c.082-.016.165-.018.248-.006.228.038.415.194.49.407l.013.039.988 4.756c.059.281-.033.575-.24.779-.153.15-.358.234-.572.234-.04 0-.08-.003-.12-.01l-.008-.001c-.494-.082-.839-.491-.818-.993l-.001-.001-.559-4.16zm-3.98-3.23l4.104-2.406-.001-.001c.2-.117.44-.138.656-.056.14.053.26.147.345.27.002.003.003.006.005.009l2.024 4.056c.124.25.106.549-.048.782-.113.172-.289.287-.488.323l-.02.003c-.049.007-.098.01-.147.01-.362 0-.694-.188-.878-.494l-.003-.005-2.08-3.506-2.64 1.697c-.17.11-.372.147-.568.1-.296-.07-.529-.307-.594-.604l-.001-.006c-.119-.549.19-1.04.714-1.172l.62-.2zm-.66-7.7l4.72 1.243.002.001c.22.058.395.218.466.435l.043.163c.019.086.02.17.004.252-.045.227-.202.414-.411.496l-.155.053-4.706 1.028c-.04.01-.082.014-.123.014-.3 0-.576-.175-.705-.448-.015-.033-.028-.068-.037-.105l-.003-.01c-.117-.519.19-1.01.705-1.122z" />
      </svg>
    ),
  };
  return <>{icons[platform] || null}</>;
};

export default function Footer({
  businessName,
  tagline,
  navItems,
  socialLinks,
  contact,
}: FooterProps) {
  const currentYear = new Date().getFullYear();
  const socialEntries = Object.entries(socialLinks).filter(([, url]) => !!url) as [
    string,
    string,
  ][];

  return (
    <footer className="bg-foreground text-white/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-heading text-2xl font-bold text-white mb-3">{businessName}</h3>
            {tagline && <p className="text-white/60 text-sm leading-relaxed">{tagline}</p>}
            {socialEntries.length > 0 && (
              <div className="flex gap-3 mt-6">
                {socialEntries.map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${platform}`}
                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-white/70"
                  >
                    <SocialIcon platform={platform} />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-primary text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <address className="not-italic space-y-2">
              <p className="text-white/60 text-sm">{contact.address}</p>
              <p>
                <a href={`tel:${contact.phone}`} className="text-white/60 hover:text-primary text-sm transition-colors">
                  {contact.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${contact.email}`} className="text-white/60 hover:text-primary text-sm transition-colors">
                  {contact.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {currentYear} {businessName}. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
