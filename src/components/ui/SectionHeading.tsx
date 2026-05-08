import React from "react";

interface SectionHeadingProps {
  heading: string;
  subheading?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  heading,
  subheading,
  centered = true,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? "text-center" : ""} mb-12 ${className}`}>
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
        {heading}
      </h2>
      {subheading && (
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">{subheading}</p>
      )}
      <div className={`mt-4 h-1 w-16 bg-primary rounded-full ${centered ? "mx-auto" : ""}`} />
    </div>
  );
}
