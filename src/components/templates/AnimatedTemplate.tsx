"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import type { SiteConfig, MenuItem } from "@/config/types";

/* ─── Keyframes & utility classes ────────────────────────────────────────── */
const STYLES = `
@keyframes orbDrift{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(70px,-90px) scale(1.1)}66%{transform:translate(-55px,-50px) scale(0.92)}}
@keyframes orbDriftRev{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(-80px,100px) scale(1.15)}66%{transform:translate(60px,40px) scale(0.87)}}
@keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-22px)}}
@keyframes shimmer{0%{background-position:200% center}100%{background-position:-200% center}}
@keyframes pulseGlow{
  0%,100%{box-shadow:0 0 20px rgba(124,58,237,.55),0 0 60px rgba(124,58,237,.12)}
  50%{box-shadow:0 0 55px rgba(124,58,237,1),0 0 130px rgba(124,58,237,.45)}}
@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
@keyframes chevronBounce{0%,100%{transform:translateY(0);opacity:.9}50%{transform:translateY(10px);opacity:.2}}
@keyframes progressShrink{from{width:100%}to{width:0}}
@keyframes menuItemIn{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
@keyframes testimonialIn{from{opacity:0;transform:translateX(30px)}to{opacity:1;transform:translateX(0)}}

/* Scroll reveal */
.rv{opacity:0;transform:translateY(38px);transition:opacity .85s cubic-bezier(.16,1,.3,1),transform .85s cubic-bezier(.16,1,.3,1)}
.rv.rl{transform:translateX(-65px)}
.rv.rr{transform:translateX(65px)}
.rv.rs{transform:scale(.83)}
.rv.on{opacity:1!important;transform:none!important}
.rv.d1{transition-delay:.07s!important}
.rv.d2{transition-delay:.14s!important}
.rv.d3{transition-delay:.21s!important}
.rv.d4{transition-delay:.28s!important}
.rv.d5{transition-delay:.35s!important}
.rv.d6{transition-delay:.42s!important}
.rv.d7{transition-delay:.49s!important}
.rv.d8{transition-delay:.56s!important}

/* Nav underline */
.nl{position:relative;transition:color .3s}
.nl::after{content:'';position:absolute;bottom:-4px;left:0;width:0;height:1.5px;background:var(--primary);transition:width .35s cubic-bezier(.16,1,.3,1)}
.nl:hover::after,.nl.act::after{width:100%}

/* Gallery card */
.gc{overflow:hidden;transition:transform .45s cubic-bezier(.34,1.56,.64,1),box-shadow .45s}
.gc:hover{transform:scale(1.06) rotate(.5deg);box-shadow:0 32px 64px rgba(0,0,0,.65),0 0 40px rgba(124,58,237,.35)}
.gc .co{transform:translateY(103%);transition:transform .4s cubic-bezier(.16,1,.3,1)}
.gc:hover .co{transform:translateY(0)}

/* Menu card */
.mc{transition:transform .38s cubic-bezier(.34,1.56,.64,1),box-shadow .38s,border-color .38s}
.mc:hover{transform:translateY(-10px) scale(1.015);box-shadow:0 24px 50px rgba(0,0,0,.5),0 0 32px rgba(124,58,237,.22);border-color:rgba(124,58,237,.5)!important}

/* Highlight card */
.hc{transition:transform .35s cubic-bezier(.34,1.56,.64,1),box-shadow .35s}
.hc:hover{transform:translateY(-6px);box-shadow:0 16px 40px rgba(0,0,0,.4),0 0 24px rgba(124,58,237,.2)}

/* Shimmer button */
.bsh{background-size:300% auto;background-image:linear-gradient(90deg,var(--primary) 0%,#a855f7 25%,#d946ef 50%,#a855f7 75%,var(--primary) 100%);animation:shimmer 3.5s linear infinite;transition:transform .25s,box-shadow .25s}
.bsh:hover{transform:scale(1.07) translateY(-3px);box-shadow:0 14px 40px rgba(124,58,237,.8),0 0 70px rgba(168,85,247,.4)}

/* Shimmer text */
.tsh{background:linear-gradient(90deg,#fff 0%,#c4b5fd 35%,#d946ef 50%,#c4b5fd 65%,#fff 100%);background-size:280% auto;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:shimmer 4.5s linear infinite}

/* Glow pulse */
.glow{animation:pulseGlow 2.8s ease-in-out infinite}

/* Orbs */
.orb-a{animation:orbDrift 20s ease-in-out infinite}
.orb-b{animation:orbDriftRev 27s ease-in-out infinite}
.orb-c{animation:floatY 9s ease-in-out infinite}

/* Typewriter cursor */
.cur{display:inline-block;width:3px;height:.85em;background:var(--primary);margin-left:3px;vertical-align:middle;animation:blink .8s step-end infinite}

/* Scroll indicator */
.sci{animation:chevronBounce 1.6s ease-in-out infinite}

/* Social icons */
.soc{display:inline-block;transition:transform .45s cubic-bezier(.34,1.56,.64,1),opacity .3s}
.soc:hover{transform:rotate(360deg) scale(1.3);opacity:.65}

/* Tab indicator */
.tab-ind{transition:left .4s cubic-bezier(.34,1.56,.64,1),width .4s cubic-bezier(.34,1.56,.64,1)}

/* Menu item & testimonial enter animations */
.mi{animation:menuItemIn .45s cubic-bezier(.16,1,.3,1) both}
.ti{animation:testimonialIn .5s cubic-bezier(.16,1,.3,1) both}
`;

/* ─── Component ─────────────────────────────────────────────────────────── */
export default function AnimatedTemplate({ config }: { config: SiteConfig }) {
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
    socialLinks,
  } = config;

  const categories = menuServices.categories ?? [];
  const allItems = menuServices.items as MenuItem[];
  const tList = testimonials?.testimonials ?? [];

  /* ── State ─────────────────────────────────────────────────────────────── */
  const [displayText, setDisplayText] = useState("");
  const [typewriterDone, setTypewriterDone] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [activeTab, setActiveTab] = useState(categories[0] ?? "");
  const [tabIndStyle, setTabIndStyle] = useState({ left: 0, width: 0 });
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const [counters, setCounters] = useState([0, 0, 0]);

  /* ── Refs ──────────────────────────────────────────────────────────────── */
  const tabListRef = useRef<HTMLDivElement>(null);
  const tabBtnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const statsRef = useRef<HTMLDivElement>(null);
  const statsAnimated = useRef(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const counterTimers = useRef<ReturnType<typeof setInterval>[]>([]);

  /* ── Typewriter ────────────────────────────────────────────────────────── */
  useEffect(() => {
    const text = hero.headline;
    let i = 0;
    setDisplayText("");
    setTypewriterDone(false);
    const id = setInterval(() => {
      i += 1;
      setDisplayText(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        setTypewriterDone(true);
      }
    }, 55);
    return () => clearInterval(id);
  }, [hero.headline]);

  /* ── Scroll: navbar + section spy ─────────────────────────────────────── */
  useEffect(() => {
    const ids = ["home", "about", "menu", "gallery", "testimonials", "contact"];
    const handler = () => {
      setScrolled(window.scrollY > 60);
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 150) {
          setActiveSection(ids[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* ── Scroll reveal (IntersectionObserver) ─────────────────────────────── */
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("on");
        }),
      { threshold: 0.08, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".rv").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [activeTab]);

  /* ── Stats counter ─────────────────────────────────────────────────────── */
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const targets = [allItems.length, 140, 3];
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !statsAnimated.current) {
          statsAnimated.current = true;
          counterTimers.current = targets.map((target, idx) => {
            let cur = 0;
            return setInterval(() => {
              cur = Math.min(cur + target / 60, target);
              setCounters((prev) => {
                const n = [...prev];
                n[idx] = Math.round(cur);
                return n;
              });
              if (cur >= target) clearInterval(counterTimers.current[idx]);
            }, 20);
          });
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      counterTimers.current.forEach(clearInterval);
    };
  }, [allItems.length]);

  /* ── Tab indicator position ────────────────────────────────────────────── */
  useEffect(() => {
    const idx = categories.indexOf(activeTab);
    const btn = tabBtnRefs.current[idx];
    if (btn && tabListRef.current) {
      const lr = tabListRef.current.getBoundingClientRect();
      const br = btn.getBoundingClientRect();
      setTabIndStyle({ left: br.left - lr.left, width: br.width });
    }
  }, [activeTab, categories]);

  /* ── Testimonial auto-advance ──────────────────────────────────────────── */
  const advance = useCallback(() => {
    if (tList.length === 0) return;
    setTestimonialIdx((p) => (p + 1) % tList.length);
    setProgressKey((k) => k + 1);
  }, [tList.length]);

  useEffect(() => {
    timerRef.current = setInterval(advance, 5500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [advance]);

  const goTo = (idx: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setTestimonialIdx(idx);
    setProgressKey((k) => k + 1);
    timerRef.current = setInterval(advance, 5500);
  };

  /* ── Derived ───────────────────────────────────────────────────────────── */
  const filteredItems = allItems.filter((item) => item.category === activeTab);
  const BG = "#08080d";
  const CARD = "#11111c";
  const BORDER = "rgba(124,58,237,0.18)";
  const MUTED = "#8b8ba8";

  const navSectionMap: Record<string, string> = {
    "#about": "about",
    "#menu": "menu",
    "#gallery": "gallery",
    "#testimonials": "testimonials",
    "#contact": "contact",
  };

  const stars = (n: number) => "★".repeat(n) + "☆".repeat(5 - n);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      {/* ═══════════════════════════════════════════════ NAVBAR ══════════ */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? "12px 48px" : "22px 48px",
          background: scrolled ? "rgba(8,8,13,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? `1px solid ${BORDER}` : "none",
          transition:
            "padding .5s cubic-bezier(.16,1,.3,1), background .5s, backdrop-filter .5s, border-color .5s",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "var(--font-body)",
        }}
      >
        <a href="#home" style={{ textDecoration: "none" }}>
          <span
            className="tsh"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.35rem",
              fontWeight: 700,
              letterSpacing: "0.3em",
            }}
          >
            {businessName}
          </span>
        </a>

        <div style={{ display: "flex", gap: "2.2rem", alignItems: "center" }}>
          {nav.map((item) => {
            const isActive = activeSection === (navSectionMap[item.href] ?? "");
            return (
              <a
                key={item.href}
                href={item.href}
                className={`nl ${isActive ? "act" : ""}`}
                style={{
                  color: isActive ? "#fff" : MUTED,
                  textDecoration: "none",
                  fontSize: "0.78rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  fontFamily: "var(--font-body)",
                }}
              >
                {item.label}
              </a>
            );
          })}
          <a
            href="#contact"
            className="bsh"
            style={{
              color: "#fff",
              textDecoration: "none",
              padding: "9px 22px",
              borderRadius: "1px",
              fontSize: "0.72rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 700,
              fontFamily: "var(--font-body)",
            }}
          >
            Reserve
          </a>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════ HERO ════════════ */}
      <section
        id="home"
        style={{
          position: "relative",
          minHeight: "100vh",
          background: BG,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {hero.backgroundImage && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${hero.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.18,
            }}
          />
        )}

        {/* Floating gradient orbs */}
        <div
          className="orb-a"
          style={{
            position: "absolute",
            top: "10%",
            left: "5%",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(124,58,237,0.35) 0%, transparent 70%)",
            filter: "blur(50px)",
            pointerEvents: "none",
          }}
        />
        <div
          className="orb-b"
          style={{
            position: "absolute",
            bottom: "5%",
            right: "3%",
            width: 700,
            height: 700,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(217,70,239,0.22) 0%, transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />
        <div
          className="orb-c"
          style={{
            position: "absolute",
            top: "45%",
            right: "22%",
            width: 220,
            height: 220,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(168,85,247,0.22) 0%, transparent 70%)",
            filter: "blur(20px)",
            pointerEvents: "none",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            maxWidth: 900,
            padding: "0 2rem",
          }}
        >
          {/* Eyebrow — fades in after typewriter finishes */}
          <div
            style={{
              fontSize: "0.72rem",
              letterSpacing: "0.5em",
              textTransform: "uppercase",
              color: "var(--primary)",
              marginBottom: "1.5rem",
              fontFamily: "var(--font-body)",
              opacity: typewriterDone ? 1 : 0,
              transform: typewriterDone ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 0.6s 0.2s, transform 0.6s 0.2s",
            }}
          >
            {businessName}
          </div>

          {/* Typewriter headline */}
          <h1
            suppressHydrationWarning
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.4rem, 5.5vw, 5rem)",
              lineHeight: 1.1,
              color: "#fff",
              fontWeight: 400,
              margin: "0 0 2rem",
              letterSpacing: "-0.01em",
            }}
          >
            {displayText}
            {!typewriterDone && <span className="cur" />}
          </h1>

          {/* Subheadline — staggered fade-in */}
          <p
            style={{
              fontSize: "clamp(1rem, 1.6vw, 1.2rem)",
              color: MUTED,
              maxWidth: 580,
              margin: "0 auto 3rem",
              lineHeight: 1.75,
              fontFamily: "var(--font-body)",
              opacity: typewriterDone ? 1 : 0,
              transform: typewriterDone ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s 0.4s, transform 0.7s 0.4s",
            }}
          >
            {hero.subheadline}
          </p>

          {/* CTAs — staggered fade-in */}
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              justifyContent: "center",
              flexWrap: "wrap",
              opacity: typewriterDone ? 1 : 0,
              transform: typewriterDone ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s 0.65s, transform 0.7s 0.65s",
            }}
          >
            <a
              href={hero.ctaHref}
              className="bsh glow"
              style={{
                color: "#fff",
                textDecoration: "none",
                padding: "16px 44px",
                borderRadius: "1px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontSize: "0.85rem",
                fontFamily: "var(--font-body)",
              }}
            >
              {hero.ctaText}
            </a>
            {hero.secondaryCtaText && (
              <a
                href={hero.secondaryCtaHref}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  padding: "16px 44px",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "1px",
                  fontWeight: 500,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontSize: "0.85rem",
                  fontFamily: "var(--font-body)",
                  transition: "border-color .3s, background .3s",
                }}
                onMouseEnter={(e) => {
                  const t = e.currentTarget;
                  t.style.borderColor = "var(--primary)";
                  t.style.background = "rgba(124,58,237,0.1)";
                }}
                onMouseLeave={(e) => {
                  const t = e.currentTarget;
                  t.style.borderColor = "rgba(255,255,255,0.2)";
                  t.style.background = "transparent";
                }}
              >
                {hero.secondaryCtaText}
              </a>
            )}
          </div>

          {/* Scroll indicator */}
          <div
            className="sci"
            style={{
              position: "absolute",
              bottom: "-10rem",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              color: MUTED,
              fontSize: "0.65rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              opacity: typewriterDone ? 0.55 : 0,
              transition: "opacity 0.7s 0.9s",
              fontFamily: "var(--font-body)",
            }}
          >
            <span>Scroll</span>
            <svg width="14" height="22" viewBox="0 0 14 22" fill="none">
              <path
                d="M7 0v14M1 8l6 6 6-6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ ABOUT ═══════════ */}
      <section
        id="about"
        style={{ background: BG, padding: "120px 0", overflow: "hidden" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
          {/* Animated stats row */}
          <div
            ref={statsRef}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1px",
              background: BORDER,
              border: `1px solid ${BORDER}`,
              marginBottom: "6rem",
            }}
          >
            {[
              { value: counters[0], label: "Menu Items", suffix: "" },
              { value: counters[1], label: "Spirits Curated", suffix: "+" },
              { value: counters[2], label: "Industry Awards", suffix: "" },
            ].map((stat, idx) => (
              <div
                key={stat.label}
                className={`rv d${idx + 1}`}
                style={{
                  background: CARD,
                  padding: "3rem 2rem",
                  textAlign: "center",
                  fontFamily: "var(--font-body)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(3rem, 5vw, 4.5rem)",
                    color: "#fff",
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                  }}
                >
                  <span style={{ color: "var(--primary)" }}>{stat.value}</span>
                  {stat.suffix}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: MUTED,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Split panel: text left, image right */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "5rem",
              alignItems: "center",
            }}
          >
            {/* Text */}
            <div>
              <div
                className="rv"
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "var(--primary)",
                  marginBottom: "1rem",
                  fontFamily: "var(--font-body)",
                }}
              >
                Our Story
              </div>
              <h2
                className="rv d1"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  color: "#fff",
                  fontWeight: 400,
                  margin: "0 0 1.5rem",
                  lineHeight: 1.2,
                }}
              >
                {about.heading}
              </h2>
              <p
                className="rv d2"
                style={{
                  color: MUTED,
                  lineHeight: 1.8,
                  marginBottom: "2.5rem",
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                }}
              >
                {about.description}
              </p>
              {about.highlights?.map((h, idx) => (
                <div
                  key={h.title}
                  className={`hc rv d${idx + 3}`}
                  style={{
                    display: "flex",
                    gap: "1.2rem",
                    alignItems: "flex-start",
                    padding: "1rem 1.2rem",
                    border: `1px solid ${BORDER}`,
                    borderRadius: "2px",
                    marginBottom: "0.75rem",
                    background: CARD,
                    cursor: "default",
                  }}
                >
                  <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>
                    {h.icon}
                  </span>
                  <div>
                    <div
                      style={{
                        color: "#fff",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        marginBottom: "0.25rem",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {h.title}
                    </div>
                    <div
                      style={{
                        color: MUTED,
                        fontSize: "0.85rem",
                        lineHeight: 1.6,
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {h.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Image */}
            {about.image && (
              <div className="rv rr" style={{ position: "relative" }}>
                <img
                  src={about.image}
                  alt={about.heading}
                  style={{
                    width: "100%",
                    aspectRatio: "4/5",
                    objectFit: "cover",
                    display: "block",
                    filter: "brightness(0.85) saturate(1.1)",
                  }}
                />
                {/* Purple gradient overlay at bottom of image */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "40%",
                    background:
                      "linear-gradient(to top, rgba(124,58,237,0.4) 0%, transparent 100%)",
                    pointerEvents: "none",
                  }}
                />
                {/* Decorative offset border */}
                <div
                  style={{
                    position: "absolute",
                    top: "20px",
                    left: "20px",
                    right: "-20px",
                    bottom: "-20px",
                    border: `1px solid ${BORDER}`,
                    pointerEvents: "none",
                    zIndex: -1,
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ MENU ════════════ */}
      <section
        id="menu"
        style={{
          background: `linear-gradient(180deg, ${BG} 0%, #0d0d18 100%)`,
          padding: "120px 0",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
          {/* Heading */}
          <div className="rv" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "var(--primary)",
                marginBottom: "0.75rem",
                fontFamily: "var(--font-body)",
              }}
            >
              Drinks &amp; Food
            </div>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                color: "#fff",
                fontWeight: 400,
                margin: "0 0 0.5rem",
              }}
            >
              {menuServices.heading}
            </h2>
            {menuServices.subheading && (
              <p
                style={{
                  color: MUTED,
                  fontFamily: "var(--font-body)",
                  fontSize: "0.95rem",
                }}
              >
                {menuServices.subheading}
              </p>
            )}
          </div>

          {/* Tab bar with animated sliding indicator */}
          <div
            ref={tabListRef}
            className="rv d1"
            style={{
              position: "relative",
              display: "flex",
              borderBottom: `1px solid ${BORDER}`,
              marginBottom: "3rem",
              justifyContent: "center",
            }}
          >
            {categories.map((cat, idx) => (
              <button
                key={cat}
                ref={(el) => {
                  tabBtnRefs.current[idx] = el;
                }}
                onClick={() => setActiveTab(cat)}
                style={{
                  background: "none",
                  border: "none",
                  color: activeTab === cat ? "#fff" : MUTED,
                  padding: "0.8rem 1.8rem",
                  cursor: "pointer",
                  fontSize: "0.8rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-body)",
                  fontWeight: activeTab === cat ? 600 : 400,
                  transition: "color .3s",
                }}
              >
                {cat}
              </button>
            ))}
            {/* Animated sliding tab underline */}
            <div
              className="tab-ind"
              style={{
                position: "absolute",
                bottom: -1,
                left: tabIndStyle.left,
                width: tabIndStyle.width,
                height: 2,
                background: "var(--primary)",
                boxShadow: "0 0 12px var(--primary)",
              }}
            />
          </div>

          {/* Menu grid — keyed to activeTab so items re-animate on switch */}
          <div
            key={activeTab}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1px",
              background: BORDER,
              border: `1px solid ${BORDER}`,
            }}
          >
            {filteredItems.map((item, idx) => (
              <div
                key={item.name}
                className="mc mi"
                style={{
                  background: CARD,
                  padding: "1.8rem",
                  animationDelay: `${idx * 0.06}s`,
                  border: "1px solid transparent",
                  cursor: "default",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "0.6rem",
                    gap: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 600,
                      color: "#fff",
                      fontSize: "0.95rem",
                      fontFamily: "var(--font-body)",
                      lineHeight: 1.3,
                    }}
                  >
                    {item.name}
                  </div>
                  <div
                    style={{
                      color: "var(--primary)",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      fontFamily: "var(--font-body)",
                      flexShrink: 0,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.price}
                  </div>
                </div>
                <div
                  style={{
                    color: MUTED,
                    fontSize: "0.83rem",
                    lineHeight: 1.65,
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ GALLERY ═════════ */}
      {gallery && (
        <section id="gallery" style={{ background: BG, padding: "120px 0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
            <div className="rv" style={{ textAlign: "center", marginBottom: "4rem" }}>
              <div
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "var(--primary)",
                  marginBottom: "0.75rem",
                  fontFamily: "var(--font-body)",
                }}
              >
                The Space
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  color: "#fff",
                  fontWeight: 400,
                  margin: 0,
                }}
              >
                {gallery.heading}
              </h2>
            </div>

            {/* 3-column gallery grid — each card scales + reveals caption on hover */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "8px",
              }}
            >
              {gallery.images.map((img, idx) => (
                <div
                  key={img.src}
                  className={`gc rv d${Math.min(idx + 1, 8)}`}
                  style={{ position: "relative", aspectRatio: "4/3" }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      filter: "brightness(0.7) saturate(0.85)",
                      transition: "filter .45s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLImageElement).style.filter =
                        "brightness(0.9) saturate(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLImageElement).style.filter =
                        "brightness(0.7) saturate(0.85)";
                    }}
                  />
                  {img.caption && (
                    <div
                      className="co"
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: "1rem 1.2rem",
                        background:
                          "linear-gradient(to top, rgba(8,8,13,0.9) 0%, rgba(124,58,237,0.3) 100%)",
                        color: "#fff",
                        fontSize: "0.8rem",
                        letterSpacing: "0.1em",
                        fontFamily: "var(--font-body)",
                        textTransform: "uppercase",
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

      {/* ═══════════════════════════════════════════ TESTIMONIALS ════════ */}
      {testimonials && tList.length > 0 && (
        <section
          id="testimonials"
          style={{ background: "#0d0d18", padding: "120px 0" }}
        >
          <div
            style={{
              maxWidth: 800,
              margin: "0 auto",
              padding: "0 2rem",
              textAlign: "center",
            }}
          >
            <div className="rv" style={{ marginBottom: "4rem" }}>
              <div
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "var(--primary)",
                  marginBottom: "0.75rem",
                  fontFamily: "var(--font-body)",
                }}
              >
                Recognition
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  color: "#fff",
                  fontWeight: 400,
                  margin: 0,
                }}
              >
                {testimonials.heading}
              </h2>
            </div>

            {/* Active testimonial — keyed so it re-mounts and re-animates on change */}
            <div style={{ minHeight: 240 }}>
              <div key={testimonialIdx} className="ti">
                {tList[testimonialIdx]?.rating != null && (
                  <div
                    style={{
                      color: "var(--primary)",
                      fontSize: "1.1rem",
                      marginBottom: "1.5rem",
                      letterSpacing: "0.2em",
                    }}
                  >
                    {stars(tList[testimonialIdx].rating!)}
                  </div>
                )}
                <blockquote
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.15rem, 2vw, 1.5rem)",
                    color: "#fff",
                    fontWeight: 400,
                    fontStyle: "italic",
                    lineHeight: 1.65,
                    margin: "0 0 2rem",
                  }}
                >
                  &ldquo;{tList[testimonialIdx]?.quote}&rdquo;
                </blockquote>
                <div style={{ fontFamily: "var(--font-body)" }}>
                  <div
                    style={{
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {tList[testimonialIdx]?.name}
                  </div>
                  {tList[testimonialIdx]?.role && (
                    <div
                      style={{
                        color: "var(--primary)",
                        fontSize: "0.78rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        marginTop: "0.3rem",
                      }}
                    >
                      {tList[testimonialIdx].role}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Auto-shrinking progress bar */}
            <div
              style={{
                margin: "2.5rem auto 2rem",
                height: 2,
                background: BORDER,
                maxWidth: 300,
                borderRadius: 1,
                overflow: "hidden",
              }}
            >
              <div
                key={progressKey}
                style={{
                  height: "100%",
                  background: "var(--primary)",
                  boxShadow: "0 0 8px var(--primary)",
                  animation: "progressShrink 5.5s linear both",
                  width: "100%",
                }}
              />
            </div>

            {/* Dot navigation — dots expand when active */}
            <div style={{ display: "flex", gap: "0.7rem", justifyContent: "center" }}>
              {tList.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  style={{
                    width: testimonialIdx === idx ? 24 : 8,
                    height: 8,
                    border: "none",
                    borderRadius: 4,
                    background:
                      testimonialIdx === idx ? "var(--primary)" : BORDER,
                    cursor: "pointer",
                    transition:
                      "width .4s cubic-bezier(.34,1.56,.64,1), background .3s",
                    padding: 0,
                    boxShadow:
                      testimonialIdx === idx ? "0 0 10px var(--primary)" : "none",
                  }}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════ CONTACT ═════════ */}
      <section id="contact" style={{ background: BG, padding: "120px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
          <div className="rv" style={{ textAlign: "center", marginBottom: "5rem" }}>
            <div
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "var(--primary)",
                marginBottom: "0.75rem",
                fontFamily: "var(--font-body)",
              }}
            >
              Come Visit
            </div>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                color: "#fff",
                fontWeight: 400,
                margin: "0 0 0.75rem",
              }}
            >
              {contact.heading}
            </h2>
            {contact.subheading && (
              <p
                style={{
                  color: MUTED,
                  fontFamily: "var(--font-body)",
                  fontSize: "0.95rem",
                }}
              >
                {contact.subheading}
              </p>
            )}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
            }}
          >
            {/* Left: contact details */}
            <div className="rv rl">
              <div
                style={{
                  padding: "2.5rem",
                  border: `1px solid ${BORDER}`,
                  background: CARD,
                }}
              >
                {/* Floating address pin */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                    marginBottom: "2rem",
                    paddingBottom: "2rem",
                    borderBottom: `1px solid ${BORDER}`,
                  }}
                >
                  <span
                    className="orb-c"
                    style={{ fontSize: "1.5rem", flexShrink: 0 }}
                  >
                    📍
                  </span>
                  <div>
                    <div
                      style={{
                        fontSize: "0.7rem",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--primary)",
                        marginBottom: "0.3rem",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      Address
                    </div>
                    <div
                      style={{
                        color: "#fff",
                        fontFamily: "var(--font-body)",
                        lineHeight: 1.5,
                      }}
                    >
                      {contact.contact.address}
                    </div>
                    {contact.contact.mapUrl && (
                      <a
                        href={contact.contact.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-block",
                          marginTop: "0.5rem",
                          fontSize: "0.75rem",
                          color: "var(--primary)",
                          textDecoration: "none",
                          letterSpacing: "0.1em",
                          transition: "opacity .3s",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.opacity = "0.7";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
                        }}
                      >
                        View on Map →
                      </a>
                    )}
                  </div>
                </div>

                {[
                  {
                    icon: "📞",
                    label: "Phone",
                    value: contact.contact.phone,
                    href: `tel:${contact.contact.phone}`,
                  },
                  {
                    icon: "✉️",
                    label: "Email",
                    value: contact.contact.email,
                    href: `mailto:${contact.contact.email}`,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <span style={{ fontSize: "1.2rem", flexShrink: 0 }}>
                      {item.icon}
                    </span>
                    <div>
                      <div
                        style={{
                          fontSize: "0.7rem",
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          color: MUTED,
                          marginBottom: "0.2rem",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        {item.label}
                      </div>
                      <a
                        href={item.href}
                        style={{
                          color: "#fff",
                          textDecoration: "none",
                          fontFamily: "var(--font-body)",
                          fontSize: "0.95rem",
                          transition: "color .3s",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.color =
                            "var(--primary)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                        }}
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}

                {(socialLinks?.instagram || socialLinks?.facebook || socialLinks?.twitter) && (
                  <div
                    style={{
                      borderTop: `1px solid ${BORDER}`,
                      paddingTop: "1.5rem",
                      display: "flex",
                      gap: "1.5rem",
                    }}
                  >
                    {socialLinks?.instagram && (
                      <a
                        href={socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="soc"
                        style={{
                          color: MUTED,
                          textDecoration: "none",
                          fontSize: "0.8rem",
                          letterSpacing: "0.1em",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        Instagram
                      </a>
                    )}
                    {socialLinks?.facebook && (
                      <a
                        href={socialLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="soc"
                        style={{
                          color: MUTED,
                          textDecoration: "none",
                          fontSize: "0.8rem",
                          letterSpacing: "0.1em",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        Facebook
                      </a>
                    )}
                    {socialLinks?.twitter && (
                      <a
                        href={socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="soc"
                        style={{
                          color: MUTED,
                          textDecoration: "none",
                          fontSize: "0.8rem",
                          letterSpacing: "0.1em",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        Twitter
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Right: opening hours */}
            <div className="rv rr">
              <div
                style={{
                  padding: "2.5rem",
                  border: `1px solid ${BORDER}`,
                  background: CARD,
                }}
              >
                <div
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "var(--primary)",
                    marginBottom: "1.5rem",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Opening Hours
                </div>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <tbody>
                    {contact.openingHours.map((row, idx) => (
                      <tr
                        key={row.day}
                        style={{
                          borderBottom:
                            idx < contact.openingHours.length - 1
                              ? `1px solid ${BORDER}`
                              : "none",
                        }}
                      >
                        <td
                          style={{
                            padding: "0.9rem 0",
                            color: MUTED,
                            fontSize: "0.85rem",
                            fontFamily: "var(--font-body)",
                          }}
                        >
                          {row.day}
                        </td>
                        <td
                          style={{
                            padding: "0.9rem 0",
                            textAlign: "right",
                            color:
                              row.hours === "Closed"
                                ? "rgba(217,70,239,0.6)"
                                : "#fff",
                            fontWeight: row.hours === "Closed" ? 400 : 500,
                            fontSize: "0.85rem",
                            fontFamily: "var(--font-body)",
                          }}
                        >
                          {row.hours}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div style={{ marginTop: "2rem" }}>
                  <a
                    href={`mailto:${contact.contact.email}`}
                    className="bsh"
                    style={{
                      display: "block",
                      textAlign: "center",
                      color: "#fff",
                      textDecoration: "none",
                      padding: "14px 0",
                      borderRadius: "1px",
                      fontWeight: 700,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      fontSize: "0.78rem",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    Make a Reservation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ FOOTER ══════════ */}
      <footer
        style={{
          background: "#05050a",
          borderTop: `1px solid ${BORDER}`,
          padding: "4rem 2rem 2rem",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "3rem",
              paddingBottom: "3rem",
              borderBottom: `1px solid ${BORDER}`,
              flexWrap: "wrap",
              gap: "2rem",
            }}
          >
            <div>
              <span
                className="tsh"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  letterSpacing: "0.35em",
                  display: "block",
                  marginBottom: "0.4rem",
                }}
              >
                {businessName}
              </span>
              <div
                style={{
                  color: MUTED,
                  fontSize: "0.8rem",
                  letterSpacing: "0.15em",
                  fontFamily: "var(--font-body)",
                }}
              >
                {footerTagline}
              </div>
            </div>

            <nav style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="nl"
                  style={{
                    color: MUTED,
                    textDecoration: "none",
                    fontSize: "0.78rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-body)",
                    transition: "color .3s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = MUTED;
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div
              style={{
                color: "rgba(139,139,168,0.45)",
                fontSize: "0.72rem",
                fontFamily: "var(--font-body)",
                letterSpacing: "0.1em",
              }}
            >
              © {new Date().getFullYear()} {businessName}. All rights reserved.
            </div>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              {socialLinks?.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="soc"
                  style={{
                    color: MUTED,
                    textDecoration: "none",
                    fontSize: "0.78rem",
                    letterSpacing: "0.1em",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Instagram
                </a>
              )}
              {socialLinks?.facebook && (
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="soc"
                  style={{
                    color: MUTED,
                    textDecoration: "none",
                    fontSize: "0.78rem",
                    letterSpacing: "0.1em",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Facebook
                </a>
              )}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
