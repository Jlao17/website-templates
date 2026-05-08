import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import type { TestimonialsConfig } from "@/config/types";

interface TestimonialsProps {
  config: TestimonialsConfig;
  id?: string;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-primary" : "text-muted-foreground/30"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials({ config, id = "testimonials" }: TestimonialsProps) {
  const { heading, subheading, testimonials } = config;

  return (
    <section id={id} className="py-20 lg:py-28 bg-secondary/50" aria-label="Testimonials section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading heading={heading} subheading={subheading} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} hoverable className="relative">
              {/* Quote icon */}
              <div
                className="absolute top-4 right-5 text-5xl leading-none text-primary/10 font-serif select-none"
                aria-hidden="true"
              >
                &ldquo;
              </div>

              {/* Rating */}
              {testimonial.rating !== undefined && (
                <StarRating rating={testimonial.rating} />
              )}

              {/* Quote */}
              <blockquote className="mt-3 mb-4">
                <p className="text-foreground/80 text-sm md:text-base leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-secondary">
                {testimonial.avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-base">
                    {testimonial.name.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  {testimonial.role && (
                    <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
