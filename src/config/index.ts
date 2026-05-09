import { bakeryConfig } from "@/templates/bakery";
import { restaurantConfig } from "@/templates/restaurant";
import { cafeConfig } from "@/templates/cafe";
import { salonConfig } from "@/templates/salon";
import type { SiteConfig } from "./types";

export type TemplateName = "bakery" | "restaurant" | "cafe" | "salon";

const templates: Record<TemplateName, SiteConfig> = {
  bakery: bakeryConfig,
  restaurant: restaurantConfig,
  cafe: cafeConfig,
  salon: salonConfig,
};

/**
 * Change this value to switch the active template.
 * Options: "bakery" | "restaurant" | "cafe" | "salon"
 */
export const ACTIVE_TEMPLATE: TemplateName = "cafe";

export const siteConfig: SiteConfig = templates[ACTIVE_TEMPLATE];

export { bakeryConfig, restaurantConfig, cafeConfig, salonConfig };
export type { SiteConfig } from "./types";
