import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: { allow: "/", userAgent: "*" },
        sitemap: "https://gaurabdhakal.com.np/sitemap.xml",
    };
}
