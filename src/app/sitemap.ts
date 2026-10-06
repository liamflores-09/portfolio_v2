import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const ROUTES = ["/", "/projects", "/projects/ats", "/projects/budget-tracker", "/tech-stack", "/testimonials"];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
  }));
}
