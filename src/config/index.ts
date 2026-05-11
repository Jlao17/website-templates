import { bakeryConfig } from "@/templates/bakery";
import { restaurantConfig } from "@/templates/restaurant";
import { cafeConfig } from "@/templates/cafe";
import { salonConfig } from "@/templates/salon";
import { breweryConfig } from "@/templates/brewery";
import { dinerConfig } from "@/templates/diner";
import { asianRestaurantConfig } from "@/templates/asianRestaurant";
import { velvetConfig } from "@/templates/velvet";
import { ironcladConfig } from "@/templates/trade";
import type { SiteConfig } from "./types";

export type TemplateName = "bakery" | "restaurant" | "cafe" | "salon" | "brewery" | "diner" | "asian" | "velvet" | "trades";

const templates: Record<TemplateName, SiteConfig> = {
  bakery: bakeryConfig,
  restaurant: restaurantConfig,
  cafe: cafeConfig,
  salon: salonConfig,
  brewery: breweryConfig,
  diner: dinerConfig,
  asian: asianRestaurantConfig,
  velvet: velvetConfig,
  trades: ironcladConfig,
};

/**
 * Change this value to switch the active template.
 * Options: "bakery" | "restaurant" | "cafe" | "salon" | "brewery" | "diner" | "asian"
 */
export const ACTIVE_TEMPLATE: TemplateName = "trades";

export const siteConfig: SiteConfig = templates[ACTIVE_TEMPLATE];

export { bakeryConfig, restaurantConfig, cafeConfig, salonConfig, breweryConfig, dinerConfig, asianRestaurantConfig, velvetConfig, ironcladConfig };
export type { SiteConfig } from "./types";
