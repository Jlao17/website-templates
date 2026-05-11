"use client";

import React, { useState } from "react";
import type { SiteConfig, MenuItem, Service } from "@/config/types";

const BG = "#111110";
const SURFACE = "#1c1c1b";
const SURFACE2 = "#161615";
const BORDER = "#2e2d2c";
const TEXT_MUTED = "#7a7975";
const TEXT_DIM = "#4a4845";

export default function DarkTemplate({ config }: { config: SiteConfig }) {
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

  const [activeCategory, setActiveCategory] = useState<string>(
    menuServices.categories?.[0] ?? "All"
  );
  const [menuOpen, setMenuOpen] = useState(false);

  const allCats = menuServices.categories ? ["All", ...menuServices.categories] : ["All"];
  const filteredItems =
    activeCategory === "All"
      ? menuServices.items
      : menuServices.items.filter((item) => item.category === activeCategory);

  return (
    <div style={{ background: BG, color: "#e5e5e4", fontFamily: "var(--font-body)", minHeight: "100vh" }}>

      {/* ===================== NAVBAR ===================== */}
      <header
        style={{ background: SURFACE, borderBottom: `1px solid ${BORDER}` }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
          <a
            href="#home"
            style={{ fontFamily: "var(--font-heading)", color: "var(--primary)" }}
            className="text-lg font-black uppercase tracking-widest no-underline hover:opacity-80 transition-opacity"
          >
            {businessName}
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  style={{ color: TEXT_MUTED }}
                  className="text-xs uppercase tracking-[0.18em] font-semibold hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-1"
            style={{ color: "white" }}
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
        </nav>

        {menuOpen && (
          <div
            style={{ background: SURFACE, borderTop: `1px solid ${BORDER}` }}
            className="md:hidden px-6 pb-4 pt-2"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{ color: TEXT_MUTED }}
                className="block py-2 text-xs uppercase tracking-[0.18em] font-semibold hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ===================== HERO ===================== */}
      <section
        id="home"
        className="relative flex items-center"
        style={{ minHeight: "100vh", paddingTop: "56px" }}
      >
        {hero.backgroundImage && (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${hero.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            role="presentation"
          />
        )}
        <div
          className="absolute inset-0"
          style={{ background: `rgba(0,0,0,${hero.overlayOpacity ?? 0.78})` }}
          role="presentation"
        />

        {/* Left-aligned content block */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32 w-full">
          <div className="max-w-2xl">
            {/* Amber accent rule */}
            <div
              style={{ width: "3rem", height: "3px", background: "var(--primary)" }}
              className="mb-6"
            />
            <h1
              style={{
                fontFamily: "var(--font-heading)",
                color: "white",
                lineHeight: "0.92",
                letterSpacing: "-0.02em",
              }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase mb-6"
            >
              {hero.headline}
            </h1>
            <p style={{ color: TEXT_MUTED }} className="text-base md:text-lg leading-relaxed mb-10 max-w-lg">
              {hero.subheadline}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={hero.ctaHref}
                style={{ background: "var(--primary)", color: "#111" }}
                className="inline-block px-8 py-3 font-black uppercase text-xs tracking-[0.18em] hover:opacity-90 transition-opacity"
              >
                {hero.ctaText}
              </a>
              {hero.secondaryCtaText && hero.secondaryCtaHref && (
                <a
                  href={hero.secondaryCtaHref}
                  style={{ border: `1px solid ${BORDER}`, color: TEXT_MUTED }}
                  className="inline-block px-8 py-3 font-semibold uppercase text-xs tracking-[0.18em] hover:border-white hover:text-white transition-colors"
                >
                  {hero.secondaryCtaText}
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Tagline — bottom right, subtle */}
        <div className="absolute bottom-8 right-8 hidden lg:block">
          <p
            style={{ color: TEXT_DIM, fontFamily: "var(--font-heading)" }}
            className="text-xs uppercase tracking-[0.3em]"
          >
            {tagline}
          </p>
        </div>
      </section>

      {/* ===================== ABOUT ===================== */}
      <section id="about" style={{ background: SURFACE }} className="py-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5">

            {/* Image panel */}
            {about.image && (
              <div className="md:col-span-2 relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={about.image}
                  alt={about.heading}
                  className="w-full h-full object-cover"
                  style={{ minHeight: "420px" }}
                  loading="lazy"
                />
                {/* Amber corner accent */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "4px",
                    height: "60px",
                    background: "var(--primary)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "60px",
                    height: "4px",
                    background: "var(--primary)",
                  }}
                />
              </div>
            )}

            {/* Text panel */}
            <div
              className={`${about.image ? "md:col-span-3" : "md:col-span-5"} p-8 md:p-14 flex flex-col justify-center`}
              style={{ background: SURFACE2 }}
            >
              <div
                style={{ width: "2rem", height: "2px", background: "var(--primary)" }}
                className="mb-6"
              />
              <h2
                style={{ fontFamily: "var(--font-heading)", color: "white" }}
                className="text-3xl md:text-4xl font-black uppercase mb-6 leading-tight"
              >
                {about.heading}
              </h2>
              <p style={{ color: TEXT_MUTED }} className="leading-relaxed text-base mb-8">
                {about.description}
              </p>
              {about.highlights && (
                <div className="grid sm:grid-cols-3 gap-6 border-t pt-6" style={{ borderColor: BORDER }}>
                  {about.highlights.map((h, i) => (
                    <div key={i}>
                      <div style={{ color: "var(--primary)" }} className="text-2xl mb-2">
                        {h.icon}
                      </div>
                      <h3
                        style={{ color: "white", fontFamily: "var(--font-heading)" }}
                        className="font-black uppercase text-xs tracking-wide mb-1"
                      >
                        {h.title}
                      </h3>
                      <p style={{ color: TEXT_DIM }} className="text-sm leading-relaxed">
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

      {/* ===================== MENU / TAP LIST ===================== */}
      <section id="menu" style={{ background: BG }} className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">

          <div className="mb-12">
            <div
              style={{ width: "2rem", height: "2px", background: "var(--primary)" }}
              className="mb-5"
            />
            <h2
              style={{ fontFamily: "var(--font-heading)", color: "white" }}
              className="text-3xl md:text-4xl font-black uppercase mb-2"
            >
              {menuServices.heading}
            </h2>
            {menuServices.subheading && (
              <p style={{ color: TEXT_DIM }} className="text-sm">
                {menuServices.subheading}
              </p>
            )}
          </div>

          {/* Category filter */}
          {allCats.length > 1 && (
            <div className="flex flex-wrap gap-2 mb-10">
              {allCats.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={
                    activeCategory === cat
                      ? { background: "var(--primary)", color: "#111" }
                      : { background: "transparent", color: TEXT_MUTED, border: `1px solid ${BORDER}` }
                  }
                  className="px-4 py-1.5 text-xs font-black uppercase tracking-widest transition-colors cursor-pointer hover:opacity-80"
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          {/* Tap-board list: name left, price right, ruled separators */}
          <div>
            {filteredItems.map((item, idx) => (
              <div
                key={idx}
                style={{ borderBottom: `1px solid ${BORDER}` }}
                className="py-5 grid grid-cols-[1fr_auto] gap-6 items-baseline"
              >
                <div>
                  <h3
                    style={{ color: "white", fontFamily: "var(--font-heading)" }}
                    className="font-black uppercase text-base tracking-wide leading-tight mb-1"
                  >
                    {item.name}
                  </h3>
                  <p style={{ color: TEXT_DIM }} className="text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {"price" in item && (item as MenuItem | Service).price && (
                  <span
                    style={{ color: "var(--primary)", fontFamily: "var(--font-heading)" }}
                    className="font-black text-lg whitespace-nowrap"
                  >
                    {(item as MenuItem).price}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== GALLERY ===================== */}
      {gallery && (
        <section id="gallery" style={{ background: SURFACE }}>
          {/* Header row */}
          <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <div
                  style={{ width: "2rem", height: "2px", background: "var(--primary)" }}
                  className="mb-4"
                />
                <h2
                  style={{ fontFamily: "var(--font-heading)", color: "white" }}
                  className="text-3xl font-black uppercase"
                >
                  {gallery.heading}
                </h2>
              </div>
              {gallery.subheading && (
                <p style={{ color: TEXT_DIM }} className="text-sm max-w-xs md:text-right">
                  {gallery.subheading}
                </p>
              )}
            </div>
          </div>

          {/* Edge-to-edge grayscale-to-color grid */}
          <div
            className="grid grid-cols-3 md:grid-cols-6"
            style={{ gap: "1px", background: BORDER }}
          >
            {gallery.images.map((img, idx) => (
              <div
                key={idx}
                className="relative aspect-square overflow-hidden group"
                style={{ background: BG }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
          <div className="pb-16" />
        </section>
      )}

      {/* ===================== TESTIMONIALS ===================== */}
      {testimonials && (
        <section id="testimonials" style={{ background: BG }} className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <div
                style={{ width: "2rem", height: "2px", background: "var(--primary)" }}
                className="mb-5"
              />
              <h2
                style={{ fontFamily: "var(--font-heading)", color: "white" }}
                className="text-3xl md:text-4xl font-black uppercase"
              >
                {testimonials.heading}
              </h2>
            </div>

            {/* Cards in a gapless grid */}
            <div
              className="grid md:grid-cols-3"
              style={{ gap: "1px", background: BORDER }}
            >
              {testimonials.testimonials.map((t, i) => (
                <div
                  key={i}
                  style={{ background: SURFACE }}
                  className="p-8 md:p-10 relative overflow-hidden"
                >
                  {/* Large decorative quote */}
                  <div
                    style={{
                      color: "var(--primary)",
                      fontFamily: "Georgia, serif",
                      lineHeight: 0.8,
                      opacity: 0.07,
                    }}
                    className="text-[9rem] font-black absolute -top-2 right-2 select-none pointer-events-none leading-none"
                    aria-hidden
                  >
                    &ldquo;
                  </div>

                  {t.rating && (
                    <div className="flex gap-0.5 mb-5">
                      {Array.from({ length: t.rating }).map((_, si) => (
                        <span key={si} style={{ color: "var(--primary)" }} className="text-sm">
                          ★
                        </span>
                      ))}
                    </div>
                  )}

                  <p
                    style={{ color: TEXT_MUTED }}
                    className="text-sm leading-relaxed mb-6 relative z-10"
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div style={{ borderTop: `1px solid ${BORDER}` }} className="pt-4">
                    <div
                      style={{ color: "white", fontFamily: "var(--font-heading)" }}
                      className="font-black uppercase text-sm tracking-wide"
                    >
                      {t.name}
                    </div>
                    {t.role && (
                      <div style={{ color: TEXT_DIM }} className="text-xs mt-0.5">
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
      <section
        id="contact"
        style={{ background: SURFACE, borderTop: `1px solid ${BORDER}` }}
        className="py-20 md:py-28"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <div
              style={{ width: "2rem", height: "2px", background: "var(--primary)" }}
              className="mb-5"
            />
            <h2
              style={{ fontFamily: "var(--font-heading)", color: "white" }}
              className="text-3xl md:text-4xl font-black uppercase mb-2"
            >
              {contact.heading}
            </h2>
            {contact.subheading && (
              <p style={{ color: TEXT_DIM }} className="text-sm">
                {contact.subheading}
              </p>
            )}
          </div>

          {/* Three-column horizontal layout */}
          <div
            className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x"
            style={{ borderColor: BORDER }}
          >
            <div className="pb-8 md:pb-0 md:pr-10">
              <h3
                style={{ color: "var(--primary)", fontFamily: "var(--font-heading)" }}
                className="font-black uppercase text-xs tracking-[0.2em] mb-4"
              >
                Location
              </h3>
              <p style={{ color: "white" }} className="font-semibold mb-2 leading-snug">
                {contact.contact.address}
              </p>
              <a
                href={`tel:${contact.contact.phone}`}
                style={{ color: TEXT_MUTED }}
                className="text-sm hover:text-white transition-colors block"
              >
                {contact.contact.phone}
              </a>
              <a
                href={`mailto:${contact.contact.email}`}
                style={{ color: TEXT_MUTED }}
                className="text-sm hover:text-white transition-colors block mt-0.5"
              >
                {contact.contact.email}
              </a>
              {contact.contact.mapUrl && (
                <a
                  href={contact.contact.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--primary)" }}
                  className="text-xs font-bold uppercase tracking-wider hover:opacity-80 mt-3 inline-block"
                >
                  Open in Maps →
                </a>
              )}
            </div>

            <div className="py-8 md:py-0 md:px-10">
              <h3
                style={{ color: "var(--primary)", fontFamily: "var(--font-heading)" }}
                className="font-black uppercase text-xs tracking-[0.2em] mb-4"
              >
                Hours
              </h3>
              <div className="space-y-2">
                {contact.openingHours.map((h, i) => (
                  <div key={i} className="flex justify-between text-sm gap-4">
                    <span style={{ color: TEXT_DIM }}>{h.day}</span>
                    <span
                      style={{ color: h.hours === "Closed" ? TEXT_DIM : "white" }}
                      className="font-semibold text-right"
                    >
                      {h.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 md:pt-0 md:pl-10">
              <h3
                style={{ color: "var(--primary)", fontFamily: "var(--font-heading)" }}
                className="font-black uppercase text-xs tracking-[0.2em] mb-4"
              >
                Follow Us
              </h3>
              <div className="space-y-2">
                {socialLinks.instagram && (
                  <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" style={{ color: TEXT_MUTED }} className="block text-sm hover:text-white transition-colors">
                    Instagram
                  </a>
                )}
                {socialLinks.facebook && (
                  <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" style={{ color: TEXT_MUTED }} className="block text-sm hover:text-white transition-colors">
                    Facebook
                  </a>
                )}
                {socialLinks.twitter && (
                  <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" style={{ color: TEXT_MUTED }} className="block text-sm hover:text-white transition-colors">
                    Twitter / X
                  </a>
                )}
                {socialLinks.tiktok && (
                  <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" style={{ color: TEXT_MUTED }} className="block text-sm hover:text-white transition-colors">
                    TikTok
                  </a>
                )}
                {socialLinks.yelp && (
                  <a href={socialLinks.yelp} target="_blank" rel="noopener noreferrer" style={{ color: TEXT_MUTED }} className="block text-sm hover:text-white transition-colors">
                    Yelp
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer
        style={{ background: "#0a0a09", borderTop: `1px solid ${BORDER}` }}
        className="py-6"
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <span
            style={{ fontFamily: "var(--font-heading)", color: "var(--primary)" }}
            className="font-black uppercase text-sm tracking-widest"
          >
            {businessName}
          </span>
          {footerTagline && (
            <span style={{ color: TEXT_DIM }} className="text-xs text-center">
              {footerTagline}
            </span>
          )}
          <span style={{ color: TEXT_DIM }} className="text-xs">
            © {new Date().getFullYear()} {businessName}
          </span>
        </div>
      </footer>

    </div>
  );
}
