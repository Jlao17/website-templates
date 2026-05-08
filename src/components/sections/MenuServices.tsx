"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import type { MenuServiceConfig, MenuItem, Service } from "@/config/types";

interface MenuServicesProps {
  config: MenuServiceConfig;
  id?: string;
}

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <Card hoverable className="flex flex-col gap-1">
      <div className="flex items-start justify-between gap-3 mb-1">
        <h3 className="font-heading font-semibold text-foreground text-lg leading-tight">
          {item.name}
        </h3>
        <span className="font-semibold text-primary text-base whitespace-nowrap shrink-0">
          {item.price}
        </span>
      </div>
      {item.category && (
        <span className="text-xs font-medium text-primary/70 uppercase tracking-wider mb-1">
          {item.category}
        </span>
      )}
      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
    </Card>
  );
}

function ServiceCard({ item }: { item: Service }) {
  return (
    <Card hoverable className="flex flex-col gap-1">
      <div className="flex items-start justify-between gap-3 mb-1">
        <h3 className="font-heading font-semibold text-foreground text-lg leading-tight">
          {item.name}
        </h3>
        {item.price && (
          <span className="font-semibold text-primary text-base whitespace-nowrap shrink-0">
            {item.price}
          </span>
        )}
      </div>
      {item.duration && (
        <span className="text-xs font-medium text-primary/70 uppercase tracking-wider mb-1">
          ⏱ {item.duration}
        </span>
      )}
      {item.category && (
        <span className="text-xs font-medium text-accent/70 uppercase tracking-wider">
          {item.category}
        </span>
      )}
      <p className="text-muted-foreground text-sm leading-relaxed mt-1">{item.description}</p>
    </Card>
  );
}

export default function MenuServices({ config, id = "menu" }: MenuServicesProps) {
  const { heading, subheading, type, items, categories } = config;
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const allCategories = ["All", ...(categories ?? [])];

  const filteredItems =
    activeCategory === "All"
      ? items
      : items.filter((item) => (item as MenuItem | Service).category === activeCategory);

  return (
    <section id={id} className="py-20 lg:py-28 bg-muted" aria-label="Menu/services section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading heading={heading} subheading={subheading} />

        {/* Category Filter */}
        {categories && categories.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-12 -mt-4">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-sm"
                    : "bg-white text-muted-foreground hover:bg-primary/10 hover:text-primary border border-secondary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) =>
            type === "menu" ? (
              <MenuCard key={idx} item={item as MenuItem} />
            ) : (
              <ServiceCard key={idx} item={item as Service} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
