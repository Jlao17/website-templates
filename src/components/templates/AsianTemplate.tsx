"use client";

import React, { useState } from "react";
import type { SiteConfig, MenuItem, Service } from "@/config/types";

/* ─── design tokens ──────────────────────────────────────────── */
const INK = "#111111";
const PAPER = "#f8f4ed";
const PAPER2 = "#f0ebe0";
const RED = "var(--primary)";       // filled from config
const GOLD = "var(--accent)";
const MUTED = "var(--muted-foreground)";
const BORDER = "#e0d9ce";

/* thin ornamental horizontal rule */
function Rule({ color = RED, wide = false }: { color?: string; wide?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${wide ? "w-full" : "w-40"}`}>
      <div style={{ flex: 1, height: "1px", background: color, opacity: 0.4 }} />
      <div style={{ width: "5px", height: "5px", background: color, transform: "rotate(45deg)", opacity: 0.7 }} />
      <div style={{ flex: 1, height: "1px", background: color, opacity: 0.4 }} />
    </div>
  );
}

export default function AsianTemplate({ config }: { config: SiteConfig }) {
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

  const allCats = menuServices.categories
    ? ["All", ...menuServices.categories]
    : ["All"];

  const filteredItems =
    activeCategory === "All"
      ? menuServices.items
      : menuServices.items.filter((item) => item.category === activeCategory);

  /* ── bento grid slot assignments: 6 images → 3 wide + 3 tall ── */
  const bentoSpans = [
    "col-span-2 row-span-2",   // feature
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-2",   // tall
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
  ];

  return (
    <div style={{ background: PAPER, color: INK, fontFamily: "var(--font-body)" }}>

      {/* ══════════════════════ NAVBAR ══════════════════════ */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: "rgba(248,244,237,0.94)",
          backdropFilter: "blur(8px)",
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        {/* Thin red accent line at very top */}
        <div style={{ height: "3px", background: RED }} />

        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
          {/* Business name — centered on desktop with nav flanking it */}
          <ul className="hidden md:flex items-center gap-6 flex-1">
            {nav.slice(0, Math.ceil(nav.length / 2)).map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  style={{ color: INK, fontFamily: "var(--font-body)" }}
                  className="text-xs uppercase tracking-[0.16em] hover:opacity-50 transition-opacity"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#home"
            style={{ fontFamily: "var(--font-heading)", color: INK }}
            className="text-xl md:text-2xl font-bold tracking-tight text-center flex-shrink-0 md:flex-1 md:text-center"
          >
            {businessName}
          </a>

          <ul className="hidden md:flex items-center gap-6 flex-1 justify-end">
            {nav.slice(Math.ceil(nav.length / 2)).map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  style={{ color: INK }}
                  className="text-xs uppercase tracking-[0.16em] hover:opacity-50 transition-opacity"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-1 ml-auto"
            style={{ color: INK }}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {menuOpen && (
          <div
            style={{ background: PAPER, borderTop: `1px solid ${BORDER}` }}
            className="md:hidden px-6 pb-5 pt-3 space-y-3"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{ color: INK }}
                className="block text-sm uppercase tracking-[0.16em] hover:opacity-50 transition-opacity"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ══════════════════════ HERO ══════════════════════ */}
      <section
        id="home"
        className="relative flex items-center justify-center"
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
          style={{ background: `rgba(10,8,6,${hero.overlayOpacity ?? 0.62})` }}
          role="presentation"
        />

        {/* Decorative vertical red lines */}
        <div
          className="absolute inset-y-0 hidden lg:block"
          style={{ left: "6%", width: "1px", background: RED, opacity: 0.4 }}
        />
        <div
          className="absolute inset-y-0 hidden lg:block"
          style={{ right: "6%", width: "1px", background: RED, opacity: 0.4 }}
        />

        {/* Content — centred */}
        <div className="relative z-10 text-center px-6 py-24 max-w-3xl mx-auto">
          {/* Small ornamental label */}
          <p
            style={{ color: GOLD, letterSpacing: "0.3em" }}
            className="text-xs uppercase mb-6 font-light"
          >
            {tagline}
          </p>

          <Rule color={GOLD} />

          <h1
            style={{
              fontFamily: "var(--font-heading)",
              color: "white",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
            }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mt-5 mb-5"
          >
            {hero.headline}
          </h1>

          <div className="flex justify-center mb-7">
            <Rule color={GOLD} />
          </div>

          <p
            style={{ color: "rgba(255,255,255,0.72)", letterSpacing: "0.02em" }}
            className="text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto"
          >
            {hero.subheadline}
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={hero.ctaHref}
              style={{
                background: RED,
                color: "white",
                letterSpacing: "0.12em",
              }}
              className="inline-block px-10 py-3 text-xs uppercase font-semibold hover:opacity-85 transition-opacity"
            >
              {hero.ctaText}
            </a>
            {hero.secondaryCtaText && hero.secondaryCtaHref && (
              <a
                href={hero.secondaryCtaHref}
                style={{
                  border: "1px solid rgba(255,255,255,0.45)",
                  color: "rgba(255,255,255,0.85)",
                  letterSpacing: "0.12em",
                }}
                className="inline-block px-10 py-3 text-xs uppercase font-semibold hover:border-white hover:text-white transition-colors"
              >
                {hero.secondaryCtaText}
              </a>
            )}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
          <div style={{ width: "1px", height: "36px", background: "rgba(255,255,255,0.3)" }} />
          <div style={{ width: "1px", height: "12px", background: RED, opacity: 0.8 }} />
        </div>
      </section>

      {/* ══════════════════════ ABOUT ══════════════════════ */}
      <section id="about" style={{ background: PAPER }}>
        <div className="max-w-7xl mx-auto">
          {/* Two-panel: image left clips diagonally, text right */}
          <div className="grid md:grid-cols-2 min-h-[560px]">

            {/* Image panel */}
            {about.image && (
              <div className="relative overflow-hidden" style={{ minHeight: "420px" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={about.image}
                  alt={about.heading}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Diagonal clip on the right edge */}
                <div
                  className="absolute inset-y-0 right-0 hidden md:block"
                  style={{
                    width: "80px",
                    background: PAPER,
                    clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
                  }}
                />
              </div>
            )}

            {/* Text panel */}
            <div
              className="flex flex-col justify-center px-10 md:px-14 lg:px-20 py-16"
              style={{ background: PAPER }}
            >
              {/* Red vertical accent bar */}
              <div
                style={{
                  width: "3px",
                  height: "48px",
                  background: RED,
                  marginBottom: "1.5rem",
                }}
              />
              <h2
                style={{ fontFamily: "var(--font-heading)", color: INK }}
                className="text-3xl md:text-4xl font-bold leading-tight mb-5"
              >
                {about.heading}
              </h2>
              <p style={{ color: MUTED }} className="text-base leading-relaxed mb-8">
                {about.description}
              </p>

              {about.highlights && (
                <div className="space-y-5">
                  {about.highlights.map((h, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <span style={{ color: RED }} className="text-2xl mt-0.5">{h.icon}</span>
                      <div>
                        <h3
                          style={{ color: INK, fontFamily: "var(--font-heading)" }}
                          className="font-semibold text-sm uppercase tracking-wider mb-0.5"
                        >
                          {h.title}
                        </h3>
                        <p style={{ color: MUTED }} className="text-sm leading-relaxed">
                          {h.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ MENU ══════════════════════ */}
      <section id="menu" style={{ background: PAPER2 }} className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">

          {/* Section header */}
          <div className="text-center mb-12">
            <p
              style={{ color: RED, letterSpacing: "0.3em" }}
              className="text-xs uppercase mb-4 font-light"
            >
              {menuServices.subheading ?? "— Our Selection —"}
            </p>
            <h2
              style={{ fontFamily: "var(--font-heading)", color: INK }}
              className="text-3xl md:text-5xl font-bold"
            >
              {menuServices.heading}
            </h2>
            <div className="flex justify-center mt-5">
              <Rule color={RED} />
            </div>
          </div>

          {/* Category tabs — pill-free, underline style */}
          {allCats.length > 1 && (
            <div
              className="flex flex-wrap justify-center mb-12"
              style={{ borderBottom: `1px solid ${BORDER}` }}
            >
              {allCats.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={
                    activeCategory === cat
                      ? {
                          color: RED,
                          borderBottom: `2px solid ${RED}`,
                          background: "transparent",
                          marginBottom: "-1px",
                        }
                      : {
                          color: MUTED,
                          borderBottom: "2px solid transparent",
                          background: "transparent",
                          marginBottom: "-1px",
                        }
                  }
                  className="px-5 py-3 text-xs uppercase tracking-[0.18em] font-semibold transition-colors hover:opacity-75 cursor-pointer"
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          {/* Menu items — two column, airy spacing */}
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-0">
            {filteredItems.map((item, idx) => (
              <div
                key={idx}
                style={{ borderBottom: `1px solid ${BORDER}` }}
                className="py-5"
              >
                <div className="flex items-baseline justify-between gap-4 mb-1">
                  <h3
                    style={{ fontFamily: "var(--font-heading)", color: INK }}
                    className="font-semibold text-base leading-tight"
                  >
                    {item.name}
                  </h3>
                  {"price" in item && (item as MenuItem | Service).price && (
                    <span
                      style={{ color: RED, fontFamily: "var(--font-heading)" }}
                      className="font-semibold text-sm whitespace-nowrap"
                    >
                      {(item as MenuItem).price}
                    </span>
                  )}
                </div>
                <p style={{ color: MUTED }} className="text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ GALLERY — bento grid ══════════════════════ */}
      {gallery && (
        <section id="gallery" style={{ background: INK }} className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-4">
              <h2
                style={{ fontFamily: "var(--font-heading)", color: "white" }}
                className="text-3xl font-bold"
              >
                {gallery.heading}
              </h2>
              {gallery.subheading && (
                <p style={{ color: "rgba(255,255,255,0.4)" }} className="text-sm md:text-right max-w-xs">
                  {gallery.subheading}
                </p>
              )}
            </div>

            {/* Bento grid */}
            <div
              className="grid gap-1"
              style={{
                gridTemplateColumns: "repeat(4, 1fr)",
                gridTemplateRows: "repeat(3, 200px)",
              }}
            >
              {gallery.images.slice(0, 6).map((img, idx) => (
                <div
                  key={idx}
                  className={`relative overflow-hidden group ${bentoSpans[idx] ?? ""}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)" }}
                  >
                    {img.caption && (
                      <span className="text-white text-xs uppercase tracking-[0.12em]">
                        {img.caption}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════ TESTIMONIALS ══════════════════════ */}
      {testimonials && (
        <section id="testimonials" style={{ background: PAPER }} className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">

            <div className="text-center mb-14">
              <p
                style={{ color: RED, letterSpacing: "0.3em" }}
                className="text-xs uppercase mb-4 font-light"
              >
                Guest Experiences
              </p>
              <h2
                style={{ fontFamily: "var(--font-heading)", color: INK }}
                className="text-3xl md:text-4xl font-bold"
              >
                {testimonials.heading}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-px" style={{ background: BORDER }}>
              {testimonials.testimonials.map((t, i) => (
                <div
                  key={i}
                  style={{ background: PAPER }}
                  className="p-8 md:p-10 flex flex-col"
                >
                  {/* Stars */}
                  {t.rating && (
                    <div className="flex gap-1 mb-5">
                      {Array.from({ length: t.rating }).map((_, si) => (
                        <span key={si} style={{ color: GOLD }} className="text-sm">★</span>
                      ))}
                    </div>
                  )}

                  {/* Large open-quote glyph */}
                  <div
                    style={{
                      fontFamily: "Georgia, serif",
                      color: RED,
                      fontSize: "4rem",
                      lineHeight: 0.8,
                      opacity: 0.18,
                      marginBottom: "0.25rem",
                    }}
                    aria-hidden
                  >
                    &ldquo;
                  </div>

                  <p style={{ color: INK }} className="text-base leading-relaxed italic flex-1 mb-6">
                    {t.quote}
                  </p>

                  <div style={{ borderTop: `1px solid ${BORDER}` }} className="pt-4">
                    <p style={{ color: INK, fontFamily: "var(--font-heading)" }} className="font-semibold text-sm">
                      {t.name}
                    </p>
                    {t.role && (
                      <p style={{ color: MUTED }} className="text-xs mt-0.5">{t.role}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════ CONTACT ══════════════════════ */}
      <section id="contact" style={{ background: INK }} className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">

          {/* Two-column: info left, hours right */}
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              {/* Red vertical accent */}
              <div style={{ width: "3px", height: "36px", background: RED }} className="mb-6" />
              <h2
                style={{ fontFamily: "var(--font-heading)", color: "white" }}
                className="text-3xl md:text-4xl font-bold mb-3"
              >
                {contact.heading}
              </h2>
              {contact.subheading && (
                <p style={{ color: "rgba(255,255,255,0.45)" }} className="text-sm mb-8">
                  {contact.subheading}
                </p>
              )}

              <div className="space-y-4">
                <div>
                  <p
                    style={{ color: RED, letterSpacing: "0.2em" }}
                    className="text-xs uppercase mb-1 font-semibold"
                  >
                    Address
                  </p>
                  <p className="text-white text-sm leading-relaxed">{contact.contact.address}</p>
                  {contact.contact.mapUrl && (
                    <a
                      href={contact.contact.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: GOLD }}
                      className="text-xs uppercase tracking-wider hover:opacity-75 transition-opacity mt-1 inline-block"
                    >
                      Directions →
                    </a>
                  )}
                </div>

                <div>
                  <p
                    style={{ color: RED, letterSpacing: "0.2em" }}
                    className="text-xs uppercase mb-1 font-semibold"
                  >
                    Reservations
                  </p>
                  <a href={`tel:${contact.contact.phone}`} className="text-white text-sm hover:opacity-75 transition-opacity block">
                    {contact.contact.phone}
                  </a>
                  <a href={`mailto:${contact.contact.email}`} className="text-white/50 text-xs hover:text-white/80 transition-colors block mt-0.5">
                    {contact.contact.email}
                  </a>
                </div>

                {/* Social */}
                {Object.values(socialLinks).some(Boolean) && (
                  <div className="flex gap-5 pt-2">
                    {socialLinks.instagram && (
                      <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" style={{ color: GOLD }} className="text-xs uppercase tracking-wider hover:opacity-75">Instagram</a>
                    )}
                    {socialLinks.facebook && (
                      <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" style={{ color: GOLD }} className="text-xs uppercase tracking-wider hover:opacity-75">Facebook</a>
                    )}
                    {socialLinks.yelp && (
                      <a href={socialLinks.yelp} target="_blank" rel="noopener noreferrer" style={{ color: GOLD }} className="text-xs uppercase tracking-wider hover:opacity-75">Yelp</a>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Hours */}
            <div>
              <p
                style={{ color: RED, letterSpacing: "0.2em" }}
                className="text-xs uppercase mb-6 font-semibold"
              >
                Opening Hours
              </p>
              <div className="space-y-3">
                {contact.openingHours.map((h, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-baseline pb-3"
                    style={{ borderBottom: `1px solid rgba(255,255,255,0.07)` }}
                  >
                    <span style={{ color: "rgba(255,255,255,0.5)" }} className="text-sm">{h.day}</span>
                    <span
                      style={{ color: h.hours === "Closed" ? "rgba(255,255,255,0.2)" : "white" }}
                      className="text-sm font-medium"
                    >
                      {h.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ FOOTER ══════════════════════ */}
      <footer
        style={{ background: "#0a0908", borderTop: `1px solid rgba(255,255,255,0.06)` }}
        className="py-8"
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <a
            href="#home"
            style={{ fontFamily: "var(--font-heading)", color: "white" }}
            className="text-lg font-bold tracking-tight hover:opacity-70 transition-opacity"
          >
            {businessName}
          </a>
          {footerTagline && (
            <p style={{ color: "rgba(255,255,255,0.25)" }} className="text-xs text-center">
              {footerTagline}
            </p>
          )}
          <p style={{ color: "rgba(255,255,255,0.2)" }} className="text-xs">
            © {new Date().getFullYear()} {businessName}
          </p>
        </div>
      </footer>

    </div>
  );
}
