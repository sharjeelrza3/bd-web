import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },

    sitemap: "https://beingdigitals.com/sitemap.xml",
    host: "https://beingdigitals.com",
  };
}