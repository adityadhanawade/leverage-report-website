import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Every real page on the site — matches the Phase 3 sitemap exactly (see
 * Step 10's audit that closed the /tools and /about gaps). Static list is
 * fine here: the page set is fixed, nothing is per-user or database-driven.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/tools",
    "/tools/prompt",
    "/tools/subscriptions",
    "/tools/savings",
    "/tools/raise",
    "/library",
    "/templates",
    "/glossary",
    "/about",
  ];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
  }));
}
