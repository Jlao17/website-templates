"use client";

import React, { useState } from "react";
import type { SiteConfig, MenuItem, Service } from "@/config/types";

export default function RetroTemplate({ config }: { config: SiteConfig }) {
  const {
    businessName,
    tagline,
    nav,
    socialLinks,
    hero,
    about,
    menuServices,
    gallery,
    testimonials,
    contact,
    footerTagline,
  } = config;

  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [menuOpen, setMenuOpen] = useState(false);

  const allCats = menuServices.categories ? ["All", ...menuServices.categories] : [];
  const filteredItems =
    activeCategory === "All"
      ? menuServices.items
      : menuServices.items.filter((item) => item.category === activeCategory);

  const polaroidRotations = [-2, 1.5, -1, 2.5, -1.5, 1];

  return (
    <div style={{ fontFamily: "var(--font-body)", background: "var(--secondary)" }}>

      {/* ===================== HEADER ===================== */}
      <header className="sticky top-0 z-50">
        {/* Thin tagline strip */}
        <div
          style={{ background: "var(--accent)", color: "white" }}
          className="text-center py-1 text-xs tracking-[0.25em] uppercase font-bold hidden md:block"
        >
          {tagline}
        </div>

        {/* Brand band */}
        <div
          style={{ background: "var(--secondary)", borderBottom: "5px solid var(--primary)" }}
          className="py-3 md:py-5 text-center"
        >
          <a href="#home" className="no-underline">
            <h1
              style={{ fontFamily: "var(--font-heading)", color: "var(--accent)" }}
              className="text-2xl md:text-4xl font-black uppercase tracking-tight leading-none"
            >
              {businessName}
            </h1>
          </a>
        </div>

        {/* Nav band */}
        <nav style={{ background: "var(--primary)" }}>
          <div className="max-w-6xl mx-auto px-4">
            {/* Desktop */}
            <ul className="hidden md:flex items-center justify-center">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    style={{ color: "white" }}
                    className="block px-5 py-3 font-bold uppercase text-sm tracking-wider hover:bg-black/10 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile */}
            <div className="md:hidden flex items-center justify-between py-2">
              <span className="text-white font-black uppercase text-xs tracking-widest">{businessName}</span>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white p-1"
                aria-label="Toggle navigation"
                aria-expanded={menuOpen}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {menuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
            {menuOpen && (
              <div className="md:hidden pb-2">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2 text-white font-bold uppercase text-sm tracking-wider hover:bg-black/10"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>
      </header>

      {/* ===================== HERO ===================== */}
      <section id="home" className="relative" style={{ height: "88vh", minHeight: "500px" }}>
        {hero.backgroundImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={hero.backgroundImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            role="presentation"
          />
        )}
        <div
          className="absolute inset-0"
          style={{ background: `rgba(0,0,0,${hero.overlayOpacity ?? 0.3})` }}
          role="presentation"
        />

        {/* Text block overlapping the bottom */}
        <div className="absolute bottom-0 left-0 right-0" style={{ background: "var(--accent)" }}>
          <div className="max-w-6xl mx-auto px-6 py-6 md:py-10">
            <h2
              style={{ fontFamily: "var(--font-heading)", color: "white" }}
              className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-tight mb-3"
            >
              {hero.headline}
            </h2>
            <p style={{ color: "rgba(255,255,255,0.85)" }} className="text-base md:text-lg mb-5 max-w-2xl">
              {hero.subheadline}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={hero.ctaHref}
                style={{ background: "var(--primary)", color: "white" }}
                className="inline-block px-7 py-3 font-black uppercase text-sm tracking-wider border-2 border-white hover:opacity-90 transition-opacity"
              >
                {hero.ctaText}
              </a>
              {hero.secondaryCtaText && hero.secondaryCtaHref && (
                <a
                  href={hero.secondaryCtaHref}
                  style={{ borderColor: "white", color: "white" }}
                  className="inline-block px-7 py-3 font-black uppercase text-sm tracking-wider border-2 hover:bg-white hover:text-[var(--accent)] transition-colors"
                >
                  {hero.secondaryCtaText}
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== ABOUT ===================== */}
      <section id="about" style={{ background: "var(--secondary)" }} className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">

          {/* Ornamental heading */}
          <div className="text-center mb-12">
            <div
              style={{ color: "var(--muted-foreground)" }}
              className="text-xs tracking-[0.3em] uppercase mb-3 font-bold"
            >
              ✦ Our Story ✦
            </div>
            <h2
              style={{ fontFamily: "var(--font-heading)", color: "var(--accent)" }}
              className="text-3xl md:text-5xl font-black uppercase"
            >
              {about.heading}
            </h2>
            <div style={{ background: "var(--primary)" }} className="w-20 h-1.5 mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image with decorative double-border frame */}
            {about.image && (
              <div className="order-2 md:order-1">
                <div
                  style={{
                    border: "6px solid var(--primary)",
                    outline: "4px solid var(--secondary)",
                    outlineOffset: "6px",
                    boxShadow: "8px 8px 0 var(--accent)",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={about.image}
                    alt={about.heading}
                    className="w-full aspect-[4/3] object-cover block"
                    loading="lazy"
                  />
                </div>
              </div>
            )}

            {/* Text */}
            <div className={about.image ? "order-1 md:order-2" : ""}>
              <p
                style={{ color: "var(--foreground)" }}
                className="text-base md:text-lg leading-relaxed mb-8"
              >
                {about.description}
              </p>
              {about.highlights && (
                <div className="space-y-5">
                  {about.highlights.map((h, i) => (
                    <div
                      key={i}
                      style={{ borderLeft: "4px solid var(--primary)", paddingLeft: "1rem" }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xl">{h.icon}</span>
                        <h3
                          style={{ fontFamily: "var(--font-heading)", color: "var(--accent)" }}
                          className="font-black uppercase tracking-wide text-sm"
                        >
                          {h.title}
                        </h3>
                      </div>
                      <p style={{ color: "var(--muted-foreground)" }} className="text-sm leading-relaxed">
                        {h.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== MENU / SERVICES ===================== */}
      <section id="menu" style={{ background: "var(--muted)" }} className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-10">
            <div
              style={{ color: "var(--muted-foreground)" }}
              className="text-xs tracking-[0.3em] uppercase mb-3 font-bold"
            >
              ✦ Freshly Made ✦
            </div>
            <h2
              style={{ fontFamily: "var(--font-heading)", color: "var(--accent)" }}
              className="text-3xl md:text-5xl font-black uppercase"
            >
              {menuServices.heading}
            </h2>
            {menuServices.subheading && (
              <p style={{ color: "var(--muted-foreground)" }} className="mt-3 text-base max-w-xl mx-auto">
                {menuServices.subheading}
              </p>
            )}
            <div style={{ background: "var(--primary)" }} className="w-20 h-1.5 mx-auto mt-4" />
          </div>

          {/* Category tabs — joined pill buttons */}
          {allCats.length > 1 && (
            <div
              className="flex flex-wrap justify-center mb-10"
              style={{ border: "2px solid var(--primary)", width: "fit-content", margin: "0 auto 2.5rem" }}
            >
              {allCats.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={
                    activeCategory === cat
                      ? { background: "var(--primary)", color: "white" }
                      : { background: "white", color: "var(--accent)" }
                  }
                  className="px-5 py-2 font-black uppercase text-xs tracking-wider transition-colors hover:opacity-90 cursor-pointer"
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          {/* Diner-style menu rows — 2 columns, dashed separators */}
          <div className="grid md:grid-cols-2 gap-x-10 max-w-4xl mx-auto">
            {filteredItems.map((item, idx) => (
              <div
                key={idx}
                style={{ borderBottom: "1px dashed var(--primary)" }}
                className="py-4"
              >
                <div className="flex justify-between items-baseline gap-3">
                  <h3
                    style={{ fontFamily: "var(--font-heading)", color: "var(--accent)" }}
                    className="font-black uppercase text-base tracking-wide leading-tight"
                  >
                    {item.name}
                  </h3>
                  {"price" in item && (item as MenuItem | Service).price && (
                    <span
                      style={{ color: "var(--primary)", fontFamily: "var(--font-heading)" }}
                      className="font-black text-lg whitespace-nowrap"
                    >
                      {(item as MenuItem).price}
                    </span>
                  )}
                </div>
                <p style={{ color: "var(--muted-foreground)" }} className="text-sm leading-relaxed mt-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== GALLERY ===================== */}
      {gallery && (
        <section id="gallery" style={{ background: "var(--secondary)" }} className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">

            <div className="text-center mb-12">
              <h2
                style={{ fontFamily: "var(--font-heading)", color: "var(--accent)" }}
                className="text-3xl md:text-5xl font-black uppercase"
              >
                {gallery.heading}
              </h2>
              {gallery.subheading && (
                <p style={{ color: "var(--muted-foreground)" }} className="mt-3 text-base">
                  {gallery.subheading}
                </p>
              )}
              <div style={{ background: "var(--primary)" }} className="w-20 h-1.5 mx-auto mt-4" />
            </div>

            {/* Polaroid grid with slight random rotations */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
              {gallery.images.map((img, idx) => {
                const rot = polaroidRotations[idx % polaroidRotations.length];
                return (
                  <div
                    key={idx}
                    style={{
                      background: "white",
                      transform: `rotate(${rot}deg)`,
                      boxShadow: "4px 4px 14px rgba(0,0,0,0.18)",
                      padding: "8px 8px 32px 8px",
                    }}
                    className="hover:scale-105 hover:rotate-0 transition-all duration-300"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full aspect-square object-cover block"
                      loading="lazy"
                    />
                    {img.caption && (
                      <p
                        style={{ color: "var(--muted-foreground)", fontFamily: "cursive" }}
                        className="text-xs text-center pt-2 mt-2"
                      >
                        {img.caption}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ===================== TESTIMONIALS ===================== */}
      {testimonials && (
        <section id="testimonials" style={{ background: "var(--primary)" }} className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">

            <div className="text-center mb-12">
              <h2
                style={{ fontFamily: "var(--font-heading)", color: "white" }}
                className="text-3xl md:text-5xl font-black uppercase"
              >
                {testimonials.heading}
              </h2>
              {testimonials.subheading && (
                <p className="mt-3 text-base text-white/80">{testimonials.subheading}</p>
              )}
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.testimonials.map((t, i) => (
                <div key={i} style={{ background: "white" }} className="p-6 relative overflow-hidden">
                  {/* Decorative oversized quote mark */}
                  <div
                    style={{
                      color: "var(--primary)",
                      fontFamily: "Georgia, serif",
                      lineHeight: 0.9,
                      opacity: 0.12,
                    }}
                    className="text-8xl font-black absolute top-2 left-3 select-none pointer-events-none"
                    aria-hidden
                  >
                    &ldquo;
                  </div>

                  {t.rating && (
                    <div className="flex gap-0.5 mb-3">
                      {Array.from({ length: t.rating }).map((_, si) => (
                        <span key={si} style={{ color: "var(--accent)" }} className="text-lg">
                          ★
                        </span>
                      ))}
                    </div>
                  )}

                  <p
                    style={{ color: "var(--foreground)" }}
                    className="text-sm leading-relaxed italic mb-5 relative z-10"
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div style={{ borderTop: "2px solid var(--primary)" }} className="pt-3">
                    <div
                      style={{ fontFamily: "var(--font-heading)", color: "var(--accent)" }}
                      className="font-black uppercase text-sm tracking-wide"
                    >
                      {t.name}
                    </div>
                    {t.role && (
                      <div style={{ color: "var(--muted-foreground)" }} className="text-xs mt-0.5">
                        {t.role}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===================== CONTACT ===================== */}
      <section id="contact" style={{ background: "var(--muted)" }} className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-12">
            <div
              style={{ color: "var(--muted-foreground)" }}
              className="text-xs tracking-[0.3em] uppercase mb-3 font-bold"
            >
              ✦ Come See Us ✦
            </div>
            <h2
              style={{ fontFamily: "var(--font-heading)", color: "var(--accent)" }}
              className="text-3xl md:text-5xl font-black uppercase"
            >
              {contact.heading}
            </h2>
            {contact.subheading && (
              <p style={{ color: "var(--muted-foreground)" }} className="mt-3 text-base">
                {contact.subheading}
              </p>
            )}
            <div style={{ background: "var(--primary)" }} className="w-20 h-1.5 mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Address */}
            <div style={{ borderTop: "4px solid var(--primary)" }} className="pt-6">
              <div style={{ color: "var(--primary)" }} className="text-4xl mb-3">📍</div>
              <h3
                style={{ fontFamily: "var(--font-heading)", color: "var(--accent)" }}
                className="font-black uppercase mb-2 text-xs tracking-widest"
              >
                Address
              </h3>
              <p style={{ color: "var(--foreground)" }} className="text-sm leading-relaxed">
                {contact.contact.address}
              </p>
              {contact.contact.mapUrl && (
                <a
                  href={contact.contact.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--primary)" }}
                  className="text-xs font-bold uppercase tracking-wider hover:opacity-80 mt-2 inline-block"
                >
                  Get Directions →
                </a>
              )}
            </div>

            {/* Phone + Email */}
            <div style={{ borderTop: "4px solid var(--primary)" }} className="pt-6">
              <div style={{ color: "var(--primary)" }} className="text-4xl mb-3">📞</div>
              <h3
                style={{ fontFamily: "var(--font-heading)", color: "var(--accent)" }}
                className="font-black uppercase mb-2 text-xs tracking-widest"
              >
                Contact
              </h3>
              <a
                href={`tel:${contact.contact.phone}`}
                style={{ color: "var(--primary)" }}
                className="block font-black text-lg hover:opacity-80"
              >
                {contact.contact.phone}
              </a>
              <a
                href={`mailto:${contact.contact.email}`}
                style={{ color: "var(--muted-foreground)" }}
                className="text-xs hover:opacity-80 mt-1 block"
              >
                {contact.contact.email}
              </a>
            </div>

            {/* Hours */}
            <div style={{ borderTop: "4px solid var(--primary)" }} className="pt-6">
              <div style={{ color: "var(--primary)" }} className="text-4xl mb-3">🕐</div>
              <h3
                style={{ fontFamily: "var(--font-heading)", color: "var(--accent)" }}
                className="font-black uppercase mb-2 text-xs tracking-widest"
              >
                Hours
              </h3>
              <div className="space-y-1">
                {contact.openingHours.map((h, i) => (
                  <div key={i} style={{ color: "var(--foreground)" }} className="text-sm">
                    <span className="font-semibold">{h.day}:</span> {h.hours}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer style={{ background: "var(--accent)", color: "white" }} className="py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3
            style={{ fontFamily: "var(--font-heading)" }}
            className="text-2xl font-black uppercase mb-1"
          >
            {businessName}
          </h3>
          {footerTagline && (
            <p className="text-white/80 text-sm mb-4">{footerTagline}</p>
          )}

          {/* Social links */}
          {Object.values(socialLinks).some(Boolean) && (
            <div className="flex justify-center gap-6 mb-4 flex-wrap">
              {socialLinks.facebook && (
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white uppercase text-xs tracking-wider font-bold">
                  Facebook
                </a>
              )}
              {socialLinks.instagram && (
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white uppercase text-xs tracking-wider font-bold">
                  Instagram
                </a>
              )}
              {socialLinks.twitter && (
                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white uppercase text-xs tracking-wider font-bold">
                  Twitter
                </a>
              )}
              {socialLinks.yelp && (
                <a href={socialLinks.yelp} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white uppercase text-xs tracking-wider font-bold">
                  Yelp
                </a>
              )}
            </div>
          )}

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }} className="pt-4 text-white/50 text-xs">
            © {new Date().getFullYear()} {businessName}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
