import type { MetadataRoute } from "next";

const BASE_URL = "https://liamflores.onrender.com";

const ROUTES = ["/", "/projects", "/projects/ats", "/projects/budget-tracker", "/tech-stack", "/testimonials"];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${BASE_URL}${route}`,
  }));
}
