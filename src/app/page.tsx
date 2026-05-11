import React from "react";
import { siteConfig } from "@/config";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import MenuServices from "@/components/sections/MenuServices";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import RetroTemplate from "@/components/templates/RetroTemplate";
import DarkTemplate from "@/components/templates/DarkTemplate";
import AsianTemplate from "@/components/templates/AsianTemplate";
import AnimatedTemplate from "@/components/templates/AnimatedTemplate";
import TradesTemplate from "@/components/templates/TradeTemplate";

export default function Home() {
  const {
    businessName,
    logo,
    nav,
    socialLinks,
    hero,
    about,
    menuServices,
    gallery,
    testimonials,
    contact,
    footerTagline,
    style: layout,
  } = siteConfig;

  if (layout === "retro") return <RetroTemplate config={siteConfig} />;
  if (layout === "dark") return <DarkTemplate config={siteConfig} />;
  if (layout === "asian") return <AsianTemplate config={siteConfig} />;
  if (layout === "animated") return <AnimatedTemplate config={siteConfig} />;
  if (layout === "trades") return <TradesTemplate config={siteConfig} />;

  return (
    <>
      <Navbar
        businessName={businessName}
        logo={logo}
        navItems={nav}
      />
      <main>
        <Hero config={hero} />
        <About config={about} />
        <MenuServices config={menuServices} />
        {gallery && <Gallery config={gallery} />}
        {testimonials && <Testimonials config={testimonials} />}
        <Contact config={contact} />
      </main>
      <Footer
        businessName={businessName}
        tagline={footerTagline}
        navItems={nav}
        socialLinks={socialLinks}
        contact={contact.contact}
      />
    </>
  );
}
