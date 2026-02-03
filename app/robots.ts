import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.SITE_URL ?? "https://wrkks.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/", // Keep your API routes private
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
