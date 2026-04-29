// app/sitemap.ts
import { getAllBlogs } from "@/lib/blogs";
import { MetadataRoute } from "next";

const BASE_URL = "https://gaurabdhakal.com.np";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const blogs = await getAllBlogs();

    const blogRoutes = blogs.map((blog) => ({
        url: `${BASE_URL}/blog/${blog.slug}`,
        lastModified: new Date(blog.date),
        changeFrequency: "monthly" as const,
        priority: 0.6,
    }));

    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${BASE_URL}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/work`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        ...blogRoutes,
    ];
}
