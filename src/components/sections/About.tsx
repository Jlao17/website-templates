import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import type { AboutConfig } from "@/config/types";

interface AboutProps {
  config: AboutConfig;
  id?: string;
}

export default function About({ config, id = "about" }: AboutProps) {
  const { heading, description, image, highlights } = config;

  return (
    <section id={id} className="py-20 lg:py-28 bg-background" aria-label="About section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          {image && (
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image}
                  alt={heading}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-primary/20 -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-xl bg-secondary -z-10" />
            </div>
          )}

          {/* Content */}
          <div className={image ? "order-1 lg:order-2" : ""}>
            <SectionHeading heading={heading} centered={false} />
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">{description}</p>

            {highlights && highlights.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-start gap-2">
                    <div className="text-3xl" role="img" aria-label={item.title}>
                      {item.icon}
                    </div>
                    <h3 className="font-heading font-semibold text-foreground text-base">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
