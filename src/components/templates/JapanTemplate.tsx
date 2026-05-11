"use client";

import { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import type { SiteConfig, Service } from "@/config/types";

// ── Constants ────────────────────────────────────────────────────────────────
const BG = "#0c0f18";
const SURFACE = "#141824";
const SURFACE2 = "#1b2030";
const BORDER = "#252c3d";
const TEXT_MUTED = "#8892a4";
const PRIMARY = "#c0392b";
const GOLD = "#f0a500";

// ── Japan Region Data ────────────────────────────────────────────────────────
interface JapanRegion {
  id: string;
  name: string;
  japaneseName: string;
  /** Base fill color */
  color: string;
  /** Highlighted fill color */
  hoverColor: string;
  description: string;
  highlights: string[];
  bestSeason: string;
  mustSee: string[];
  image: string;
}

const REGIONS: JapanRegion[] = [
  {
    id: "hokkaido",
    name: "Hokkaido",
    japaneseName: "北海道",
    color: "#0d2b1e",
    hoverColor: "#1a6b44",
    description:
      "Japan's northernmost frontier — a land of vast wilderness, world-famous powder snow, and extraordinary seafood. Hokkaido feels like a different country: wide open spaces, dramatic volcanic landscapes, and an unhurried pace of life.",
    highlights: [
      "World-class powder skiing at Niseko",
      "Lavender fields in Furano & Biei",
      "Sapporo Snow Festival (February)",
      "Fresh king crab & sea urchin",
      "Shiretoko UNESCO World Heritage wilderness",
    ],
    bestSeason: "Winter (Dec–Mar) · Summer (Jun–Aug)",
    mustSee: ["Niseko", "Furano", "Sapporo", "Shiretoko", "Noboribetsu Onsen"],
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=900&q=80",
  },
  {
    id: "tohoku",
    name: "Tohoku",
    japaneseName: "東北",
    color: "#0d1e2b",
    hoverColor: "#1a5080",
    description:
      "A region of rugged mountains, ancient pilgrimage routes, passionate summer festivals, and some of Japan's finest sake breweries. Tohoku rewards travelers who venture off the beaten track with deep authenticity.",
    highlights: [
      "Sendai Tanabata & Aomori Nebuta festivals",
      "Matsushima Bay — one of Japan's top views",
      "Dewa Sanzan mountain pilgrimage",
      "Scenic Towada-Hachimantai National Park",
      "Historic Hiraizumi temples (UNESCO)",
    ],
    bestSeason: "Summer (Jul–Aug) · Autumn (Oct–Nov)",
    mustSee: ["Matsushima", "Sendai", "Hiraizumi", "Yamadera", "Aomori"],
    image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=900&q=80",
  },
  {
    id: "kanto",
    name: "Kanto",
    japaneseName: "関東",
    color: "#2b0d0d",
    hoverColor: "#8b2020",
    description:
      "Home to the world's most dynamic metropolis, Tokyo, alongside timeless shrines at Nikko, the giant Buddha of Kamakura, and views of Mount Fuji from Hakone. Kanto is where ancient Japan meets the ultra-modern future.",
    highlights: [
      "Tokyo's endless neighborhoods & culture",
      "teamLab digital art immersive experiences",
      "Nikko's ornate Toshogu mausoleum",
      "Kamakura Great Buddha & coastal trails",
      "Hakone onsen with Fuji views",
    ],
    bestSeason: "Spring (Mar–May) · Autumn (Oct–Nov)",
    mustSee: ["Tokyo", "Nikko", "Kamakura", "Hakone", "Yokohama Chinatown"],
    image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=900&q=80",
  },
  {
    id: "chubu",
    name: "Chubu",
    japaneseName: "中部",
    color: "#1c0d2b",
    hoverColor: "#5a2080",
    description:
      "The rooftop of Japan — soaring Alpine peaks, the iconic silhouette of Mount Fuji, beautifully preserved mountain villages, and the cultural city of Nagoya. Chubu offers Japan's most dramatic highland scenery.",
    highlights: [
      "Climbing Mount Fuji (Jul–Aug season)",
      "Japanese Alps trekking at Kamikochi",
      "Shirakawa-go World Heritage gassho village",
      "Matsumoto's imposing black castle",
      "Takayama's Edo-era merchant town",
    ],
    bestSeason: "Spring · Autumn · Winter (mountain snow)",
    mustSee: ["Mount Fuji", "Kamikochi", "Shirakawa-go", "Takayama", "Matsumoto"],
    image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=900&q=80",
  },
  {
    id: "kansai",
    name: "Kansai",
    japaneseName: "関西",
    color: "#2b1e0d",
    hoverColor: "#8b5a10",
    description:
      "The cultural soul of Japan — Kyoto's thousand temples, Osaka's irresistible street food, sacred Nara deer freely roaming ancient parkland, legendary Kobe beef, and the grand fortress of Himeji. Kansai is Japan at its most iconic.",
    highlights: [
      "1,000+ temples & shrines in Kyoto",
      "Fushimi Inari's 10,000 torii gates",
      "Osaka's Dotonbori food street",
      "Nara's freely roaming sika deer",
      "Himeji — Japan's finest castle",
    ],
    bestSeason: "Spring (sakura) · Autumn (momiji foliage)",
    mustSee: ["Kyoto", "Osaka", "Nara", "Kobe", "Himeji Castle"],
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=900&q=80",
  },
  {
    id: "chugoku",
    name: "Chugoku",
    japaneseName: "中国",
    color: "#0d2424",
    hoverColor: "#0f6060",
    description:
      "A region of profound history and striking beauty. From Hiroshima's powerful message of peace to the otherworldly floating torii gate at Miyajima, the ancient grand shrine at Izumo, and the surreal sand dunes of Tottori.",
    highlights: [
      "Hiroshima Peace Memorial & Museum",
      "Miyajima Island floating torii gate",
      "Izumo Taisha — Japan's oldest grand shrine",
      "Tottori Sand Dunes (Japan's only desert)",
      "Kurashiki's preserved canal district",
    ],
    bestSeason: "Spring · Autumn",
    mustSee: ["Hiroshima", "Miyajima", "Izumo Taisha", "Kurashiki", "Onomichi"],
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=900&q=80",
  },
  {
    id: "shikoku",
    name: "Shikoku",
    japaneseName: "四国",
    color: "#2b1a0d",
    hoverColor: "#8b4a10",
    description:
      "Japan's smallest main island is home to the legendary 88-temple pilgrimage, dramatic river gorges, vine suspension bridges, and an authentic way of life largely unchanged for centuries. Off the beaten path and deeply rewarding.",
    highlights: [
      "88 Temple Pilgrimage (Ohenro) walk or drive",
      "Iya Valley's ancient vine bridges",
      "Dramatic Naruto whirlpools",
      "Kochi's lively Yosakoi Dance Festival",
      "Oboke Gorge boat rides",
    ],
    bestSeason: "Spring (Apr–May) · Autumn (Oct–Nov)",
    mustSee: ["Matsuyama Castle & Dogo Onsen", "Kochi", "Iya Valley", "Cape Ashizuri"],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80",
  },
  {
    id: "kyushu",
    name: "Kyushu",
    japaneseName: "九州",
    color: "#240d0d",
    hoverColor: "#7a1818",
    description:
      "A volcanic island of outdoor drama, world-class hot springs, unique regional cuisines, and a fascinating history of East-West cultural exchange. Kyushu is wilder and warmer than Honshu — perfect for adventurous travelers.",
    highlights: [
      "Mount Aso — world's largest active caldera",
      "Beppu's 'hells' & Kirishima onsen",
      "Fukuoka's legendary hakata ramen",
      "Nagasaki's Dutch-Portuguese history",
      "Yakushima ancient cedar forest (UNESCO)",
    ],
    bestSeason: "Spring · Autumn",
    mustSee: ["Fukuoka", "Beppu", "Mount Aso", "Nagasaki", "Yakushima"],
    image: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=900&q=80",
  },
  {
    id: "okinawa",
    name: "Okinawa",
    japaneseName: "沖縄",
    color: "#0d2418",
    hoverColor: "#107058",
    description:
      "Japan's tropical paradise — dazzling coral reefs, a proud Ryukyuan kingdom culture distinct from mainland Japan, longevity cuisine, colorful festivals, and the clearest turquoise waters in East Asia.",
    highlights: [
      "Kerama Islands snorkeling & diving",
      "Shuri Castle — heart of the Ryukyu Kingdom",
      "Unique Ryukyuan music, dance & cuisine",
      "Okinawa Churaumi Aquarium",
      "Ishigaki & Miyako Island beach paradise",
    ],
    bestSeason: "May–October (beach & diving)",
    mustSee: ["Naha", "Shuri Castle", "Kerama Islands", "Ishigaki", "Miyakojima"],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
  },
];

// ── Prefecture → Region mapping (JIS codes 1–47) ─────────────────────────────
const PREFECTURE_TO_REGION: Record<number, string> = {
  1: "hokkaido",
  2: "tohoku", 3: "tohoku", 4: "tohoku", 5: "tohoku", 6: "tohoku", 7: "tohoku",
  8: "kanto", 9: "kanto", 10: "kanto", 11: "kanto", 12: "kanto", 13: "kanto", 14: "kanto",
  15: "chubu", 16: "chubu", 17: "chubu", 18: "chubu", 19: "chubu", 20: "chubu",
  21: "chubu", 22: "chubu", 23: "chubu",
  24: "kansai", 25: "kansai", 26: "kansai", 27: "kansai", 28: "kansai", 29: "kansai", 30: "kansai",
  31: "chugoku", 32: "chugoku", 33: "chugoku", 34: "chugoku", 35: "chugoku",
  36: "shikoku", 37: "shikoku", 38: "shikoku", 39: "shikoku",
  40: "kyushu", 41: "kyushu", 42: "kyushu", 43: "kyushu", 44: "kyushu", 45: "kyushu", 46: "kyushu",
  47: "okinawa",
};

// ── Inline Styles ────────────────────────────────────────────────────────────
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&display=swap');

  .jp-fade-in { animation: jpFade .6s ease both; }
  @keyframes jpFade { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }


  .jp-nav-link { position: relative; transition: color .25s; }
  .jp-nav-link::after { content: ''; position: absolute; bottom: -3px; left: 0; width: 0; height: 1.5px; background: ${PRIMARY}; transition: width .3s; }
  .jp-nav-link:hover::after { width: 100%; }

  .jp-card { transition: transform .35s cubic-bezier(.34,1.56,.64,1), box-shadow .35s; }
  .jp-card:hover { transform: translateY(-6px); box-shadow: 0 24px 48px rgba(0,0,0,.6), 0 0 30px rgba(192,57,43,.18); }

  .jp-tour-card { transition: transform .35s cubic-bezier(.34,1.56,.64,1), box-shadow .35s, border-color .3s; }
  .jp-tour-card:hover { transform: translateY(-8px); box-shadow: 0 24px 48px rgba(0,0,0,.6); border-color: ${PRIMARY} !important; }

  .jp-gallery-item { overflow: hidden; }
  .jp-gallery-item img { transition: transform .5s ease; }
  .jp-gallery-item:hover img { transform: scale(1.08); }

  .jp-tab { position: relative; transition: color .25s; }
  .jp-tab::after { content: ''; position: absolute; bottom: -1px; left: 0; width: 0; height: 2px; background: ${PRIMARY}; transition: width .3s; }
  .jp-tab.active::after { width: 100%; }

  .jp-highlight-dot { width: 6px; height: 6px; border-radius: 50%; background: ${GOLD}; flex-shrink: 0; margin-top: 6px; }

  .jp-hero-bg { background-size: cover; background-position: center; }
  .jp-scroll-hint { animation: jpBounce 1.8s ease-in-out infinite; }
  @keyframes jpBounce { 0%,100%{transform:translateY(0);opacity:.8} 50%{transform:translateY(8px);opacity:.3} }

  .jp-star { color: ${GOLD}; }
`;

// ── Helpers ──────────────────────────────────────────────────────────────────
function StarRating({ count }: { count: number }) {
  return (
    <span aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="jp-star">★</span>
      ))}
    </span>
  );
}

// ── Component ────────────────────────────────────────────────────────────────
export default function JapanTemplate({ config }: { config: SiteConfig }) {
  const {
    businessName,
    nav,
    hero,
    about,
    menuServices,
    gallery,
    testimonials,
    contact,
    socialLinks,
    footerTagline,
  } = config;

  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<JapanRegion>(REGIONS[4]); // Kansai default
  const [activeTab, setActiveTab] = useState("All");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });

  const displayRegion =
    (hoveredRegion ? REGIONS.find((r) => r.id === hoveredRegion) : null) ?? selectedRegion;

  const services = menuServices.items as Service[];
  const categories = ["All", ...(menuServices.categories ?? [])];
  const filteredServices =
    activeTab === "All" ? services : services.filter((s) => s.category === activeTab);

  return (
    <div style={{ background: BG, color: "#e8e6e1", fontFamily: "system-ui, sans-serif", minHeight: "100vh" }}>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />

      {/* ══════════════════════════════ NAVBAR ══════════════════════════════ */}
      <header
        style={{ background: "rgba(12,15,24,.92)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${BORDER}`, position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}
      >
        <nav style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <a href="#home" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 28, height: 28, borderRadius: "50%", background: PRIMARY, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>
              ⛩
            </span>
            <span style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: 18, color: "#fff", letterSpacing: "0.04em" }}>
              {businessName}
            </span>
          </a>

          {/* Desktop nav */}
          <ul style={{ display: "flex", gap: 28, listStyle: "none", margin: 0, padding: 0 }} className="hidden-mobile">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="jp-nav-link"
                  style={{ color: TEXT_MUTED, textDecoration: "none", fontSize: 13, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", padding: 4 }}
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </nav>

        {mobileMenuOpen && (
          <div style={{ background: SURFACE, borderTop: `1px solid ${BORDER}`, padding: "12px 24px 16px" }}>
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{ display: "block", padding: "8px 0", color: TEXT_MUTED, textDecoration: "none", fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase" }}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ══════════════════════════════ HERO ═══════════════════════════════ */}
      <section
        id="home"
        className="jp-hero-bg"
        style={{
          backgroundImage: `url(${hero.backgroundImage})`,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Overlay */}
        <div style={{ position: "absolute", inset: 0, background: `rgba(12,15,24,${hero.overlayOpacity ?? 0.6})` }} />

        {/* Decorative vertical Japanese text */}
        <div style={{ position: "absolute", right: 48, top: "50%", transform: "translateY(-50%)", writingMode: "vertical-rl", fontSize: 13, letterSpacing: "0.3em", color: "rgba(255,255,255,.14)", fontFamily: "Georgia, serif", userSelect: "none", pointerEvents: "none" }}>
          日本への旅　〜　Nihon Journeys
        </div>

        <div style={{ position: "relative", textAlign: "center", maxWidth: 760, padding: "0 24px" }} className="jp-fade-in">
          <p style={{ fontSize: 12, letterSpacing: "0.35em", textTransform: "uppercase", color: GOLD, marginBottom: 20, fontWeight: 500 }}>
            ✦ Japan Travel Specialists ✦
          </p>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2.4rem, 6vw, 4.5rem)", fontWeight: 700, lineHeight: 1.15, marginBottom: 24, color: "#fff" }}>
            {hero.headline}
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", lineHeight: 1.75, color: "rgba(232,230,225,.8)", marginBottom: 40, maxWidth: 600, margin: "0 auto 40px" }}>
            {hero.subheadline}
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={hero.ctaHref}
              style={{ background: PRIMARY, color: "#fff", padding: "14px 32px", borderRadius: 4, textDecoration: "none", fontWeight: 600, fontSize: 14, letterSpacing: "0.06em", transition: "background .25s, transform .25s", display: "inline-block" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#96281b"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = PRIMARY; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              {hero.ctaText}
            </a>
            <a
              href={hero.secondaryCtaHref ?? "#tours"}
              style={{ background: "transparent", color: "#fff", padding: "14px 32px", borderRadius: 4, textDecoration: "none", fontWeight: 600, fontSize: 14, letterSpacing: "0.06em", border: "1.5px solid rgba(255,255,255,.4)", transition: "border-color .25s, transform .25s", display: "inline-block" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#fff"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,.4)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              {hero.secondaryCtaText ?? "View Tours"}
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="jp-scroll-hint" style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, color: "rgba(255,255,255,.4)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>
          <span>Scroll</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════ REGION MAP ══════════════════════════════ */}
      <section id="regions" style={{ padding: "100px 0", background: BG }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          {/* Section header */}
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontSize: 12, letterSpacing: "0.35em", textTransform: "uppercase", color: PRIMARY, marginBottom: 12, fontWeight: 500 }}>
              EXPLORE BY REGION
            </p>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: 16, color: "#fff" }}>
              Discover Japan's Nine Regions
            </h2>
            <p style={{ color: TEXT_MUTED, maxWidth: 560, margin: "0 auto", lineHeight: 1.7, fontSize: 15 }}>
              Each region of Japan has a distinct personality, cuisine, and landscape. Hover or tap any region on the map to learn what makes it unique.
            </p>
          </div>

          {/* Map + Info panel */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>

            {/* ── Real Map (react-simple-maps + dataofjapan GeoJSON) ── */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ position: "relative", background: "#0a1520", borderRadius: 16, overflow: "hidden", border: `1px solid ${BORDER}`, boxShadow: "0 24px 60px rgba(0,0,0,.5)", width: "100%" }}>
                <ComposableMap
                  projection="geoMercator"
                  projectionConfig={{ center: [136, 37], scale: 700 }}
                  width={300}
                  height={400}
                  style={{ width: "100%", height: "auto", display: "block" }}
                >
                  <Geographies geography="/japan.geojson">
                    {({ geographies }: { geographies: any[] }) =>
                      geographies.map((geo: any) => {
                        const prefId: number = geo.properties.id;
                        const regionId = PREFECTURE_TO_REGION[prefId];
                        const region = REGIONS.find((r) => r.id === regionId);
                        const isActive = displayRegion.id === regionId;
                        const isHovered = hoveredRegion === regionId;
                        return (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill={isActive || isHovered ? (region?.hoverColor ?? "#2a3a50") : (region?.color ?? "#111825")}
                            stroke={isActive ? GOLD : "rgba(255,255,255,.18)"}
                            strokeWidth={isActive ? 0.8 : 0.4}
                            onMouseEnter={() => regionId && setHoveredRegion(regionId)}
                            onMouseLeave={() => setHoveredRegion(null)}
                            onClick={() => region && setSelectedRegion(region)}
                            style={{
                              default: { outline: "none", cursor: "pointer", transition: "fill .2s" },
                              hover: { outline: "none", cursor: "pointer", fill: region?.hoverColor ?? "#2a3a50" },
                              pressed: { outline: "none" },
                            }}
                          />
                        );
                      })
                    }
                  </Geographies>
                </ComposableMap>
                {/* Compass */}
                <div style={{ position: "absolute", top: 10, right: 12, color: "rgba(255,255,255,.35)", fontSize: 10, textAlign: "center", lineHeight: 1.3, pointerEvents: "none", userSelect: "none" }}>
                  N<br />↑
                </div>
              </div>

              {/* Region pills legend */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 20, justifyContent: "center", maxWidth: 340 }}>
                {REGIONS.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setSelectedRegion(r)}
                    style={{
                      background: selectedRegion.id === r.id ? r.hoverColor : "rgba(255,255,255,.05)",
                      border: `1px solid ${selectedRegion.id === r.id ? r.hoverColor : BORDER}`,
                      color: selectedRegion.id === r.id ? "#fff" : TEXT_MUTED,
                      borderRadius: 20,
                      padding: "4px 10px",
                      fontSize: 11,
                      cursor: "pointer",
                      transition: "all .2s",
                      fontFamily: "system-ui, sans-serif",
                    }}
                  >
                    {r.name}
                  </button>
                ))}
              </div>
            </div>

            {/* ── Region Info Panel ── */}
            <div key={displayRegion.id} className="jp-fade-in" style={{ background: SURFACE, borderRadius: 16, border: `1px solid ${BORDER}`, overflow: "hidden" }}>
              {/* Region image */}
              <div style={{ height: 220, overflow: "hidden", position: "relative" }}>
                <img
                  src={displayRegion.image}
                  alt={displayRegion.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  loading="lazy"
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(12,15,24,.95))" }} />
                <div style={{ position: "absolute", bottom: 20, left: 24, right: 24 }}>
                  <p style={{ fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: GOLD, marginBottom: 4 }}>
                    Region
                  </p>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                    <h3 style={{ fontFamily: "Georgia, serif", fontSize: "2rem", fontWeight: 700, color: "#fff", margin: 0 }}>
                      {displayRegion.name}
                    </h3>
                    <span style={{ fontSize: "1.3rem", color: "rgba(255,255,255,.5)", fontFamily: "Noto Sans JP, system-ui" }}>
                      {displayRegion.japaneseName}
                    </span>
                  </div>
                </div>
              </div>

              {/* Region details */}
              <div style={{ padding: 28 }}>
                <p style={{ color: "rgba(232,230,225,.75)", lineHeight: 1.75, fontSize: 14, marginBottom: 24 }}>
                  {displayRegion.description}
                </p>

                {/* Highlights */}
                <div style={{ marginBottom: 24 }}>
                  <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: PRIMARY, marginBottom: 12, fontWeight: 600 }}>
                    Highlights
                  </p>
                  <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                    {displayRegion.highlights.map((h, i) => (
                      <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <div className="jp-highlight-dot" />
                        <span style={{ fontSize: 13, color: "rgba(232,230,225,.8)", lineHeight: 1.5 }}>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Season & Must-see */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div style={{ background: SURFACE2, borderRadius: 10, padding: "14px 16px", border: `1px solid ${BORDER}` }}>
                    <p style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: GOLD, marginBottom: 8, fontWeight: 600 }}>
                      Best Season
                    </p>
                    <p style={{ fontSize: 12, color: "rgba(232,230,225,.7)", lineHeight: 1.5 }}>
                      {displayRegion.bestSeason}
                    </p>
                  </div>
                  <div style={{ background: SURFACE2, borderRadius: 10, padding: "14px 16px", border: `1px solid ${BORDER}` }}>
                    <p style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: GOLD, marginBottom: 8, fontWeight: 600 }}>
                      Must See
                    </p>
                    <p style={{ fontSize: 12, color: "rgba(232,230,225,.7)", lineHeight: 1.5 }}>
                      {displayRegion.mustSee.slice(0, 3).join(" · ")}
                    </p>
                  </div>
                </div>

                <a
                  href="#contact"
                  style={{ display: "block", marginTop: 20, background: PRIMARY, color: "#fff", padding: "12px 24px", borderRadius: 6, textDecoration: "none", textAlign: "center", fontWeight: 600, fontSize: 13, letterSpacing: "0.06em", transition: "background .25s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#96281b")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = PRIMARY)}
                >
                  Plan a Trip to {displayRegion.name}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════ ABOUT ═══════════════════════════════ */}
      <section id="about" style={{ padding: "100px 0", background: SURFACE }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            {/* Image */}
            <div style={{ borderRadius: 16, overflow: "hidden", position: "relative", aspectRatio: "4/3" }}>
              <img
                src={about.image}
                alt="Japan travel experience"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                loading="lazy"
              />
              {/* Decorative frame */}
              <div style={{ position: "absolute", top: -12, left: -12, right: 12, bottom: 12, border: `1px solid ${PRIMARY}`, borderRadius: 16, pointerEvents: "none", opacity: 0.4 }} />
            </div>

            {/* Text */}
            <div>
              <p style={{ fontSize: 12, letterSpacing: "0.35em", textTransform: "uppercase", color: PRIMARY, marginBottom: 16, fontWeight: 500 }}>
                ABOUT US
              </p>
              <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: 24, color: "#fff", lineHeight: 1.25 }}>
                {about.heading}
              </h2>
              <p style={{ color: "rgba(232,230,225,.72)", lineHeight: 1.8, fontSize: 15, marginBottom: 36 }}>
                {about.description}
              </p>

              {about.highlights && (
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {about.highlights.map((h, i) => (
                    <div key={i} className="jp-card" style={{ display: "flex", gap: 16, background: SURFACE2, borderRadius: 12, padding: "16px 20px", border: `1px solid ${BORDER}` }}>
                      <span style={{ fontSize: 28, flexShrink: 0 }}>{h.icon}</span>
                      <div>
                        <p style={{ fontWeight: 700, fontSize: 14, color: "#fff", marginBottom: 4 }}>{h.title}</p>
                        <p style={{ fontSize: 13, color: TEXT_MUTED, lineHeight: 1.6 }}>{h.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════ TOURS ═══════════════════════════════ */}
      <section id="tours" style={{ padding: "100px 0", background: BG }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ fontSize: 12, letterSpacing: "0.35em", textTransform: "uppercase", color: PRIMARY, marginBottom: 12, fontWeight: 500 }}>
              TOUR PACKAGES
            </p>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: 16, color: "#fff" }}>
              {menuServices.heading}
            </h2>
            {menuServices.subheading && (
              <p style={{ color: TEXT_MUTED, maxWidth: 500, margin: "0 auto", lineHeight: 1.7, fontSize: 15 }}>
                {menuServices.subheading}
              </p>
            )}
          </div>

          {/* Category tabs */}
          <div style={{ display: "flex", gap: 4, justifyContent: "center", marginBottom: 40, flexWrap: "wrap" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`jp-tab ${activeTab === cat ? "active" : ""}`}
                style={{
                  background: activeTab === cat ? "rgba(192,57,43,.15)" : "transparent",
                  color: activeTab === cat ? PRIMARY : TEXT_MUTED,
                  border: `1px solid ${activeTab === cat ? "rgba(192,57,43,.4)" : BORDER}`,
                  borderRadius: 20,
                  padding: "7px 18px",
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all .25s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Tour cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
            {filteredServices.map((s, i) => {
              const service = s as Service;
              return (
                <div
                  key={i}
                  className="jp-tour-card"
                  style={{ background: SURFACE, borderRadius: 14, padding: 28, border: `1px solid ${BORDER}`, display: "flex", flexDirection: "column", gap: 14 }}
                >
                  {/* Icon + category */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 32 }}>{service.icon ?? "🗾"}</span>
                    {service.category && (
                      <span style={{ background: "rgba(192,57,43,.12)", color: PRIMARY, border: `1px solid rgba(192,57,43,.3)`, borderRadius: 20, padding: "3px 10px", fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                        {service.category}
                      </span>
                    )}
                  </div>

                  {/* Name */}
                  <h3 style={{ fontFamily: "Georgia, serif", fontSize: "1.15rem", fontWeight: 700, color: "#fff", lineHeight: 1.3 }}>
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p style={{ fontSize: 13, color: TEXT_MUTED, lineHeight: 1.7, flexGrow: 1 }}>
                    {service.description}
                  </p>

                  {/* Price + duration */}
                  <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      {service.duration && (
                        <p style={{ fontSize: 11, color: TEXT_MUTED, marginBottom: 2, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                          {service.duration}
                        </p>
                      )}
                      <p style={{ fontSize: "1.1rem", fontWeight: 700, color: GOLD }}>
                        {service.price}
                      </p>
                    </div>
                    <a
                      href="#contact"
                      style={{ background: PRIMARY, color: "#fff", padding: "8px 16px", borderRadius: 6, textDecoration: "none", fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", transition: "background .25s" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#96281b")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = PRIMARY)}
                    >
                      Book
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════ GALLERY ══════════════════════════════ */}
      {gallery && (
        <section id="gallery" style={{ padding: "100px 0", background: SURFACE }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <p style={{ fontSize: 12, letterSpacing: "0.35em", textTransform: "uppercase", color: PRIMARY, marginBottom: 12, fontWeight: 500 }}>
                GALLERY
              </p>
              <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, color: "#fff", marginBottom: 16 }}>
                {gallery.heading}
              </h2>
              {gallery.subheading && (
                <p style={{ color: TEXT_MUTED, maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
                  {gallery.subheading}
                </p>
              )}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
              {gallery.images.map((img, i) => (
                <div
                  key={i}
                  className="jp-gallery-item"
                  style={{
                    borderRadius: 12,
                    aspectRatio: i === 0 || i === 5 ? "16/10" : "4/3",
                    gridColumn: i === 0 || i === 5 ? "span 2" : "span 1",
                    overflow: "hidden",
                    position: "relative",
                    background: SURFACE2,
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    loading="lazy"
                  />
                  {img.caption && (
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 16px 14px", background: "linear-gradient(transparent, rgba(0,0,0,.7))", color: "rgba(255,255,255,.8)", fontSize: 12, letterSpacing: "0.08em" }}>
                      {img.caption}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════ TESTIMONIALS ════════════════════════════ */}
      {testimonials && (
        <section id="testimonials" style={{ padding: "100px 0", background: BG }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <p style={{ fontSize: 12, letterSpacing: "0.35em", textTransform: "uppercase", color: PRIMARY, marginBottom: 12, fontWeight: 500 }}>
                TESTIMONIALS
              </p>
              <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, color: "#fff", marginBottom: 16 }}>
                {testimonials.heading}
              </h2>
              {testimonials.subheading && (
                <p style={{ color: TEXT_MUTED, maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
                  {testimonials.subheading}
                </p>
              )}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
              {testimonials.testimonials.map((t, i) => (
                <div
                  key={i}
                  className="jp-card"
                  style={{ background: SURFACE, borderRadius: 16, padding: 32, border: `1px solid ${BORDER}`, position: "relative" }}
                >
                  {/* Decorative quote mark */}
                  <span style={{ position: "absolute", top: 20, right: 24, fontSize: 64, color: "rgba(192,57,43,.08)", fontFamily: "Georgia, serif", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>
                    "
                  </span>

                  {t.rating && (
                    <div style={{ marginBottom: 16 }}>
                      <StarRating count={t.rating} />
                    </div>
                  )}

                  <p style={{ fontSize: 14, color: "rgba(232,230,225,.78)", lineHeight: 1.8, marginBottom: 24, fontStyle: "italic" }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div>
                    <p style={{ fontWeight: 700, fontSize: 14, color: "#fff", marginBottom: 2 }}>{t.name}</p>
                    {t.role && <p style={{ fontSize: 12, color: TEXT_MUTED }}>{t.role}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════ CONTACT ══════════════════════════════ */}
      <section id="contact" style={{ padding: "100px 0", background: SURFACE }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ fontSize: 12, letterSpacing: "0.35em", textTransform: "uppercase", color: PRIMARY, marginBottom: 12, fontWeight: 500 }}>
              CONTACT
            </p>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, color: "#fff", marginBottom: 16 }}>
              {contact.heading}
            </h2>
            {contact.subheading && (
              <p style={{ color: TEXT_MUTED, maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
                {contact.subheading}
              </p>
            )}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 48 }}>
            {/* Info column */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {/* Contact card */}
              <div style={{ background: BG, borderRadius: 16, padding: 28, border: `1px solid ${BORDER}` }}>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "1.1rem", color: "#fff", marginBottom: 20, fontWeight: 700 }}>
                  Contact Details
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {[
                    { icon: "📍", label: contact.contact.address },
                    { icon: "📞", label: contact.contact.phone },
                    { icon: "✉️", label: contact.contact.email },
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <span style={{ fontSize: 18, flexShrink: 0 }}>{item.icon}</span>
                      <span style={{ fontSize: 14, color: TEXT_MUTED, lineHeight: 1.5 }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Opening hours */}
              <div style={{ background: BG, borderRadius: 16, padding: 28, border: `1px solid ${BORDER}` }}>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "1.1rem", color: "#fff", marginBottom: 20, fontWeight: 700 }}>
                  Office Hours
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {contact.openingHours.map((h, i) => (
                    <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                      <span style={{ color: TEXT_MUTED }}>{h.day}</span>
                      <span style={{ color: "#fff", fontWeight: 500 }}>{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact form */}
            {contact.showContactForm && (
              <form
                onSubmit={(e) => { e.preventDefault(); alert("Thank you! We will be in touch soon."); }}
                style={{ background: BG, borderRadius: 16, padding: 36, border: `1px solid ${BORDER}`, display: "flex", flexDirection: "column", gap: 20 }}
              >
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "1.2rem", color: "#fff", marginBottom: 4, fontWeight: 700 }}>
                  Request Your Japan Itinerary
                </h3>
                {[
                  { id: "name", label: "Full Name", type: "text", placeholder: "Your full name", field: "name" as const },
                  { id: "email", label: "Email Address", type: "email", placeholder: "you@example.com", field: "email" as const },
                ].map((f) => (
                  <div key={f.id} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <label htmlFor={f.id} style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: TEXT_MUTED }}>
                      {f.label}
                    </label>
                    <input
                      id={f.id}
                      type={f.type}
                      placeholder={f.placeholder}
                      value={contactForm[f.field]}
                      onChange={(e) => setContactForm(prev => ({ ...prev, [f.field]: e.target.value }))}
                      required
                      style={{ background: SURFACE2, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "12px 16px", color: "#fff", fontSize: 14, outline: "none", transition: "border-color .2s" }}
                      onFocus={(e) => ((e.currentTarget as HTMLElement).style.borderColor = PRIMARY)}
                      onBlur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = BORDER)}
                    />
                  </div>
                ))}
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <label htmlFor="message" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: TEXT_MUTED }}>
                    Tell us about your dream Japan trip
                  </label>
                  <textarea
                    id="message"
                    placeholder="Which regions interest you? Travel dates, group size, interests..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                    rows={5}
                    required
                    style={{ background: SURFACE2, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "12px 16px", color: "#fff", fontSize: 14, resize: "vertical", outline: "none", transition: "border-color .2s", fontFamily: "inherit" }}
                    onFocus={(e) => ((e.currentTarget as HTMLElement).style.borderColor = PRIMARY)}
                    onBlur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = BORDER)}
                  />
                </div>
                <button
                  type="submit"
                  style={{ background: PRIMARY, color: "#fff", padding: "14px 32px", borderRadius: 8, border: "none", fontWeight: 700, fontSize: 14, letterSpacing: "0.06em", cursor: "pointer", transition: "background .25s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#96281b")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = PRIMARY)}
                >
                  Send Enquiry →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════ FOOTER ═══════════════════════════════ */}
      <footer style={{ background: "#080b12", borderTop: `1px solid ${BORDER}`, padding: "48px 0 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48, marginBottom: 40 }}>
            {/* Brand */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <span style={{ width: 28, height: 28, borderRadius: "50%", background: PRIMARY, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>⛩</span>
                <span style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: 18, color: "#fff" }}>{businessName}</span>
              </div>
              <p style={{ fontSize: 13, color: TEXT_MUTED, lineHeight: 1.7, maxWidth: 280, marginBottom: 20 }}>
                {footerTagline ?? "Bridging the world to Japan, one journey at a time."}
              </p>
              <div style={{ display: "flex", gap: 12 }}>
                {socialLinks.instagram && (
                  <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" style={{ width: 36, height: 36, borderRadius: "50%", background: SURFACE2, border: `1px solid ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "center", color: TEXT_MUTED, textDecoration: "none", fontSize: 15, transition: "color .2s, border-color .2s" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#fff"; (e.currentTarget as HTMLElement).style.borderColor = PRIMARY; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = TEXT_MUTED; (e.currentTarget as HTMLElement).style.borderColor = BORDER; }}
                    aria-label="Instagram">
                    IG
                  </a>
                )}
                {socialLinks.facebook && (
                  <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" style={{ width: 36, height: 36, borderRadius: "50%", background: SURFACE2, border: `1px solid ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "center", color: TEXT_MUTED, textDecoration: "none", fontSize: 13, transition: "color .2s, border-color .2s" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#fff"; (e.currentTarget as HTMLElement).style.borderColor = PRIMARY; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = TEXT_MUTED; (e.currentTarget as HTMLElement).style.borderColor = BORDER; }}
                    aria-label="Facebook">
                    FB
                  </a>
                )}
                {socialLinks.youtube && (
                  <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" style={{ width: 36, height: 36, borderRadius: "50%", background: SURFACE2, border: `1px solid ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "center", color: TEXT_MUTED, textDecoration: "none", fontSize: 13, transition: "color .2s, border-color .2s" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#fff"; (e.currentTarget as HTMLElement).style.borderColor = PRIMARY; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = TEXT_MUTED; (e.currentTarget as HTMLElement).style.borderColor = BORDER; }}
                    aria-label="YouTube">
                    YT
                  </a>
                )}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff", marginBottom: 16, fontWeight: 600 }}>
                Navigation
              </p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {nav.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} style={{ color: TEXT_MUTED, textDecoration: "none", fontSize: 13, transition: "color .2s" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#fff")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = TEXT_MUTED)}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Regions */}
            <div>
              <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff", marginBottom: 16, fontWeight: 600 }}>
                Regions
              </p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {REGIONS.slice(0, 6).map((r) => (
                  <li key={r.id}>
                    <button
                      onClick={() => { setSelectedRegion(r); document.getElementById("regions")?.scrollIntoView({ behavior: "smooth" }); }}
                      style={{ background: "none", border: "none", color: TEXT_MUTED, fontSize: 13, cursor: "pointer", padding: 0, transition: "color .2s", fontFamily: "inherit" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#fff")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = TEXT_MUTED)}
                    >
                      {r.name} <span style={{ opacity: 0.4, fontFamily: "Noto Sans JP, system-ui" }}>{r.japaneseName}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <p style={{ fontSize: 12, color: TEXT_MUTED }}>
              © {new Date().getFullYear()} {businessName}. All rights reserved.
            </p>
            <p style={{ fontSize: 12, color: "rgba(136,146,164,.4)", letterSpacing: "0.15em" }}>
              日本への旅
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
