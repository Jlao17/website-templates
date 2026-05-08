import React from "react";
import Button from "@/components/ui/Button";
import type { HeroConfig } from "@/config/types";

interface HeroProps {
  config: HeroConfig;
  id?: string;
}

export default function Hero({ config, id = "home" }: HeroProps) {
  const {
    headline,
    subheadline,
    ctaText,
    ctaHref,
    secondaryCtaText,
    secondaryCtaHref,
    backgroundImage,
    overlayOpacity = 0.5,
  } = config;

  return (
    <section
      id={id}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
          role="presentation"
        />
      )}

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
        role="presentation"
      />

      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-32">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 drop-shadow-lg">
          {headline}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow">
          {subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href={ctaHref} size="lg" variant="primary">
            {ctaText}
          </Button>
          {secondaryCtaText && secondaryCtaHref && (
            <Button href={secondaryCtaHref} size="lg" variant="outline">
              {secondaryCtaText}
            </Button>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
