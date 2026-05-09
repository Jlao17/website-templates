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
  } = siteConfig;

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
