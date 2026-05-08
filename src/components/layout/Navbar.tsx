"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import type { NavItem, SocialLinks } from "@/config/types";

interface NavbarProps {
  businessName: string;
  logo?: string;
  navItems: NavItem[];
  socialLinks?: SocialLinks;
  ctaText?: string;
  ctaHref?: string;
}

export default function Navbar({
  businessName,
  logo,
  navItems,
  ctaText,
  ctaHref,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Business Name */}
          <Link href="#home" className="flex items-center gap-2 group" onClick={closeMenu}>
            {logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={logo} alt={businessName} className="h-10 w-auto" />
            ) : (
              <span className="font-heading text-xl md:text-2xl font-bold text-primary group-hover:text-primary-dark transition-colors">
                {businessName}
              </span>
            )}
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {ctaText && ctaHref && (
              <li className="ml-2">
                <Link
                  href={ctaHref}
                  className="ml-2 px-5 py-2 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary-dark transition-colors"
                >
                  {ctaText}
                </Link>
              </li>
            )}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/5 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white rounded-2xl shadow-lg mb-4 overflow-hidden">
            <ul className="flex flex-col py-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block px-6 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {ctaText && ctaHref && (
                <li className="px-6 py-3">
                  <Link
                    href={ctaHref}
                    className="block text-center px-5 py-2 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary-dark transition-colors"
                    onClick={closeMenu}
                  >
                    {ctaText}
                  </Link>
                </li>
              )}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
