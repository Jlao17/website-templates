"use client";

import { useState } from "react";
import type { SiteConfig, Service } from "@/config/types";

const BG   = "#111111";
const SURF = "#1c1c1c";
const BORD = "#2e2e2e";
const OR   = "#e36820";   // slightly muted orange — less neon
const TX   = "#ececec";
const TX2  = "#8a8a8a";

export default function TradesTemplate({ config }: { config: SiteConfig }) {
  const {
    businessName,
    nav,
    hero,
    about,
    menuServices,
    gallery,
    testimonials,
    contact,
    footerTagline,
  } = config;

  const cats = menuServices.categories ?? [];
  const allItems = menuServices.items as Service[];
  const [activeTab, setActiveTab] = useState(cats[0] ?? "");
  const [mobileOpen, setMobileOpen] = useState(false);

  const filtered = cats.length === 0
    ? allItems
    : allItems.filter((i) => i.category === activeTab);

  const hov = (onC: string, offC: string) => ({
    onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
      (e.currentTarget as HTMLElement).style.color = onC;
    },
    onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
      (e.currentTarget as HTMLElement).style.color = offC;
    },
  });

  return (
    <div style={{ background: BG, color: TX, fontFamily: "system-ui, -apple-system, sans-serif", minHeight: "100vh" }}>

      {/* ── NAVBAR ─────────────────────────────────────────────────── */}
      <header
        style={{
          background: BG,
          borderBottom: `1px solid ${BORD}`,
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 60,
          }}
        >
          <a href="#home" style={{ textDecoration: "none" }}>
            <span
              style={{
                fontWeight: 700,
                fontSize: "1rem",
                color: TX,
                letterSpacing: "0.02em",
              }}
            >
              {businessName}
            </span>
          </a>

          {/* Desktop nav */}
          <nav style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="trades-desk-nav">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={{ color: TX2, textDecoration: "none", fontSize: "0.85rem", transition: "color .2s" }}
                {...hov(TX, TX2)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={`tel:${contact.contact.phone}`}
              style={{
                color: OR,
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "0.9rem",
                borderLeft: `1px solid ${BORD}`,
                paddingLeft: "1.5rem",
                transition: "opacity .2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.7"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
            >
              {contact.contact.phone}
            </a>
          </nav>

          {/* Hamburger */}
          <button
            className="trades-hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: "none",
              background: "none",
              border: `1px solid ${BORD}`,
              color: TX2,
              padding: "6px 10px",
              cursor: "pointer",
              fontSize: "1rem",
              lineHeight: 1,
            }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>

        {mobileOpen && (
          <div style={{ borderTop: `1px solid ${BORD}`, padding: "1rem 1.5rem", background: BG }}>
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block",
                  padding: "0.65rem 0",
                  color: TX2,
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  borderBottom: `1px solid ${BORD}`,
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              href={`tel:${contact.contact.phone}`}
              style={{
                display: "block",
                marginTop: "1rem",
                color: OR,
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "0.9rem",
              }}
            >
              {contact.contact.phone}
            </a>
          </div>
        )}
      </header>

      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section
        id="home"
        style={{ position: "relative", minHeight: "78vh", display: "flex", alignItems: "center" }}
      >
        {hero.backgroundImage && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${hero.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.25) saturate(0.5)",
            }}
          />
        )}

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: 1100,
            margin: "0 auto",
            padding: "5rem 2rem",
            width: "100%",
          }}
        >
          {/* Small credential line above headline */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              marginBottom: "1.4rem",
              color: TX2,
              fontSize: "0.8rem",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: OR,
                flexShrink: 0,
              }}
            />
            Gas Safe Registered &nbsp;·&nbsp; Fully Insured &nbsp;·&nbsp; Free Estimates
          </div>

          <h1
            style={{
              fontWeight: 800,
              fontSize: "clamp(2.4rem, 5.5vw, 4.8rem)",
              color: TX,
              lineHeight: 1.05,
              margin: "0 0 1.2rem",
              maxWidth: 680,
              letterSpacing: "-0.02em",
            }}
          >
            {hero.headline}
          </h1>

          <p
            style={{
              color: TX2,
              fontSize: "1rem",
              lineHeight: 1.75,
              maxWidth: 520,
              margin: "0 0 2.5rem",
            }}
          >
            {hero.subheadline}
          </p>

          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a
              href={hero.ctaHref}
              style={{
                background: OR,
                color: "#fff",
                textDecoration: "none",
                padding: "13px 30px",
                fontWeight: 600,
                fontSize: "0.9rem",
                transition: "opacity .2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
            >
              {hero.ctaText}
            </a>
            {hero.secondaryCtaText && (
              <a
                href={hero.secondaryCtaHref}
                style={{
                  background: "transparent",
                  color: TX2,
                  textDecoration: "none",
                  padding: "13px 30px",
                  border: `1px solid ${BORD}`,
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  transition: "border-color .2s, color .2s",
                }}
                onMouseEnter={(e) => {
                  const t = e.currentTarget as HTMLAnchorElement;
                  t.style.borderColor = TX2;
                  t.style.color = TX;
                }}
                onMouseLeave={(e) => {
                  const t = e.currentTarget as HTMLAnchorElement;
                  t.style.borderColor = BORD;
                  t.style.color = TX2;
                }}
              >
                {hero.secondaryCtaText}
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ── SERVICES ───────────────────────────────────────────────── */}
      <section id="menu" style={{ background: SURF, padding: "72px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>

          <div style={{ marginBottom: "2.5rem" }}>
            <div style={{ width: 36, height: 3, background: OR, marginBottom: "1rem" }} />
            <h2 style={{ fontWeight: 700, fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", color: TX, margin: "0 0 0.3rem" }}>
              {menuServices.heading}
            </h2>
            {menuServices.subheading && (
              <p style={{ color: TX2, fontSize: "0.9rem", margin: 0 }}>{menuServices.subheading}</p>
            )}
          </div>

          {cats.length > 0 && (
            <div style={{ display: "flex", gap: 0, marginBottom: "2rem", flexWrap: "wrap", borderBottom: `1px solid ${BORD}` }}>
              {cats.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  style={{
                    background: "none",
                    border: "none",
                    color: activeTab === cat ? TX : TX2,
                    padding: "9px 20px",
                    fontSize: "0.82rem",
                    fontWeight: activeTab === cat ? 600 : 400,
                    cursor: "pointer",
                    marginBottom: -1,
                    borderBottom: activeTab === cat ? `2px solid ${OR}` : "2px solid transparent",
                    transition: "color .2s",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
              gap: "1px",
              background: BORD,
              border: `1px solid ${BORD}`,
            }}
          >
            {filtered.map((item) => (
              <div
                key={item.name}
                style={{
                  background: BG,
                  padding: "1.4rem",
                  transition: "background .2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = "#1f1f1f"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = BG; }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <div style={{ fontWeight: 600, color: TX, fontSize: "0.9rem", lineHeight: 1.3 }}>
                    {item.name}
                  </div>
                  {item.price && (
                    <div
                      style={{
                        color: OR,
                        fontWeight: 600,
                        fontSize: "0.85rem",
                        flexShrink: 0,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.price}
                    </div>
                  )}
                </div>
                <p style={{ color: TX2, fontSize: "0.82rem", lineHeight: 1.65, margin: 0 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ──────────────────────────────────────────────────── */}
      <section id="about" style={{ background: BG, padding: "72px 0" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 2rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="trades-about-grid"
        >
          {about.image && (
            <img
              src={about.image}
              alt={about.heading}
              style={{
                width: "100%",
                aspectRatio: "4/3",
                objectFit: "cover",
                display: "block",
                filter: "brightness(0.75)",
              }}
            />
          )}

          <div>
            <div style={{ width: 36, height: 3, background: OR, marginBottom: "1rem" }} />
            <h2
              style={{
                fontWeight: 700,
                fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                color: TX,
                margin: "0 0 1rem",
                lineHeight: 1.15,
              }}
            >
              {about.heading}
            </h2>
            <p style={{ color: TX2, lineHeight: 1.8, marginBottom: "2rem", fontSize: "0.93rem" }}>
              {about.description}
            </p>
            {about.highlights?.map((h) => (
              <div
                key={h.title}
                style={{
                  display: "flex",
                  gap: "0.9rem",
                  alignItems: "flex-start",
                  paddingBottom: "1rem",
                  marginBottom: "1rem",
                  borderBottom: `1px solid ${BORD}`,
                }}
              >
                <span style={{ fontSize: "1.2rem", flexShrink: 0, marginTop: "0.1rem" }}>{h.icon}</span>
                <div>
                  <div style={{ fontWeight: 600, color: TX, fontSize: "0.87rem", marginBottom: "0.2rem" }}>
                    {h.title}
                  </div>
                  <div style={{ color: TX2, fontSize: "0.82rem", lineHeight: 1.55 }}>
                    {h.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div
          style={{
            maxWidth: 1100,
            margin: "4rem auto 0",
            padding: "0 2rem",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            background: BORD,
          }}
          className="trades-stats-grid"
        >
          {[
            { value: "20+",    label: "Years trading" },
            { value: "5,000+", label: "Jobs completed" },
            { value: "4.9 ★",  label: "Average rating" },
            { value: "< 1 hr", label: "Emergency response" },
          ].map((stat) => (
            <div key={stat.label} style={{ background: SURF, padding: "1.8rem 1.5rem", textAlign: "center" }}>
              <div
                style={{
                  fontWeight: 800,
                  fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)",
                  color: TX,
                  lineHeight: 1,
                  marginBottom: "0.35rem",
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: "0.75rem", color: TX2 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── GALLERY ────────────────────────────────────────────────── */}
      {gallery && (
        <section id="gallery" style={{ background: SURF, padding: "72px 0" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
            <div style={{ marginBottom: "2.5rem" }}>
              <div style={{ width: 36, height: 3, background: OR, marginBottom: "1rem" }} />
              <h2 style={{ fontWeight: 700, fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", color: TX, margin: "0 0 0.3rem" }}>
                {gallery.heading}
              </h2>
              {gallery.subheading && (
                <p style={{ color: TX2, fontSize: "0.9rem", margin: 0 }}>{gallery.subheading}</p>
              )}
            </div>

            <div
              style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "3px" }}
              className="trades-gallery-grid"
            >
              {gallery.images.map((img) => (
                <div key={img.src} style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      filter: "brightness(0.6) saturate(0.7)",
                      transition: "filter .3s, transform .35s",
                    }}
                    onMouseEnter={(e) => {
                      const t = e.currentTarget as HTMLImageElement;
                      t.style.filter = "brightness(0.9) saturate(1)";
                      t.style.transform = "scale(1.04)";
                    }}
                    onMouseLeave={(e) => {
                      const t = e.currentTarget as HTMLImageElement;
                      t.style.filter = "brightness(0.6) saturate(0.7)";
                      t.style.transform = "scale(1)";
                    }}
                  />
                  {img.caption && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: "0.6rem 0.9rem",
                        background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)",
                        color: TX2,
                        fontSize: "0.75rem",
                      }}
                    >
                      {img.caption}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── TESTIMONIALS ───────────────────────────────────────────── */}
      {testimonials && (
        <section id="testimonials" style={{ background: BG, padding: "72px 0" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
            <div style={{ marginBottom: "2.5rem" }}>
              <div style={{ width: 36, height: 3, background: OR, marginBottom: "1rem" }} />
              <h2 style={{ fontWeight: 700, fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", color: TX, margin: "0 0 0.3rem" }}>
                {testimonials.heading}
              </h2>
              {testimonials.subheading && (
                <p style={{ color: TX2, fontSize: "0.9rem", margin: 0 }}>{testimonials.subheading}</p>
              )}
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
                gap: "1px",
                background: BORD,
                border: `1px solid ${BORD}`,
              }}
            >
              {testimonials.testimonials.map((t) => (
                <div key={t.name} style={{ background: SURF, padding: "1.5rem" }}>
                  {t.rating != null && (
                    <div style={{ color: OR, fontSize: "0.85rem", marginBottom: "0.75rem", letterSpacing: "0.06em" }}>
                      {"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}
                    </div>
                  )}
                  <p style={{ color: TX, fontSize: "0.88rem", lineHeight: 1.7, margin: "0 0 1.2rem", fontStyle: "italic" }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div style={{ borderTop: `1px solid ${BORD}`, paddingTop: "0.75rem" }}>
                    <div style={{ fontWeight: 600, color: TX, fontSize: "0.82rem" }}>{t.name}</div>
                    {t.role && <div style={{ color: TX2, fontSize: "0.75rem", marginTop: "0.15rem" }}>{t.role}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CONTACT ────────────────────────────────────────────────── */}
      <section id="contact" style={{ background: SURF, padding: "72px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ marginBottom: "3rem" }}>
            <div style={{ width: 36, height: 3, background: OR, marginBottom: "1rem" }} />
            <h2 style={{ fontWeight: 700, fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", color: TX, margin: "0 0 0.3rem" }}>
              {contact.heading}
            </h2>
            {contact.subheading && (
              <p style={{ color: TX2, fontSize: "0.9rem", margin: 0 }}>{contact.subheading}</p>
            )}
          </div>

          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}
            className="trades-contact-grid"
          >
            {/* Contact details */}
            <div>
              {[
                { label: "Address", value: contact.contact.address, href: contact.contact.mapUrl },
                { label: "Phone",   value: contact.contact.phone,   href: `tel:${contact.contact.phone}` },
                { label: "Email",   value: contact.contact.email,   href: `mailto:${contact.contact.email}` },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{ paddingBottom: "1.2rem", marginBottom: "1.2rem", borderBottom: `1px solid ${BORD}` }}
                >
                  <div style={{ fontSize: "0.7rem", color: TX2, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.25rem" }}>
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      style={{ color: TX, textDecoration: "none", fontSize: "0.92rem", transition: "color .2s", lineHeight: 1.5 }}
                      {...hov(OR, TX)}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span style={{ color: TX, fontSize: "0.92rem" }}>{item.value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Opening hours */}
            <div>
              <div style={{ fontSize: "0.7rem", color: TX2, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
                Opening Hours
              </div>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <tbody>
                  {contact.openingHours.map((row, idx) => (
                    <tr
                      key={row.day}
                      style={{ borderBottom: idx < contact.openingHours.length - 1 ? `1px solid ${BORD}` : "none" }}
                    >
                      <td style={{ padding: "0.8rem 0", color: TX2, fontSize: "0.85rem" }}>{row.day}</td>
                      <td
                        style={{
                          padding: "0.8rem 0",
                          textAlign: "right",
                          color: row.hours.toLowerCase() === "closed" ? TX2 : TX,
                          fontWeight: 500,
                          fontSize: "0.85rem",
                        }}
                      >
                        {row.hours}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────── */}
      <footer style={{ background: "#0a0a0a", borderTop: `1px solid ${BORD}`, padding: "2rem 2rem" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <div style={{ fontWeight: 700, fontSize: "0.9rem", color: TX, marginBottom: "0.25rem" }}>
              {businessName}
            </div>
            <div style={{ color: TX2, fontSize: "0.78rem" }}>{footerTagline}</div>
          </div>
          <nav style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={{ color: TX2, textDecoration: "none", fontSize: "0.78rem", transition: "color .2s" }}
                {...hov(TX, TX2)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div style={{ color: "#555", fontSize: "0.72rem" }}>
            © {new Date().getFullYear()} {businessName}
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        .trades-hamburger { display: none !important; }
        @media (max-width: 768px) {
          .trades-desk-nav { display: none !important; }
          .trades-hamburger { display: flex !important; }
          .trades-about-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .trades-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .trades-gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .trades-contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .trades-stats-grid { grid-template-columns: 1fr !important; }
          .trades-gallery-grid { grid-template-columns: 1fr !important; }
        }
      ` }} />
    </div>
  );
}
