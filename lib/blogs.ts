// lib/blogs.ts
"use server";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const blogsDir = path.join(process.cwd(), "components/content");

type TEnv = "dev" | "prod";

const env: TEnv = process.env.INSTANCE as TEnv;
export type BlogMeta = {
    slug: string;
    title: string;
    date: string;
    description: string;
    tags: string[];
    readingTime: string;
};

export async function getAllBlogs(limit = -1): Promise<BlogMeta[]> {
    const files = fs.readdirSync(blogsDir);

    const sorted = files
        .filter((f) => {
            let shouldReturn = f.endsWith(".mdx");
            if (env != "dev") {
                shouldReturn = !f.endsWith(".test.mdx");
                console.log(shouldReturn);
            }
            return shouldReturn;
        })
        .map((filename) => {
            const slug = filename.replace(".mdx", "");
            const raw = fs.readFileSync(path.join(blogsDir, filename), "utf-8");
            const { data } = matter(raw);

            return {
                slug,
                title: data.title,
                date: data.date,
                description: data.description,
                tags: data.tags ?? [],
                readingTime: data.readingTime ?? "",
            };
        })
        .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        );

    return limit === -1 ? sorted : sorted.slice(0, limit);
}

export async function getBlogBySlug(slug: string) {
    const filepath = path.join(blogsDir, `${slug}.mdx`);

    // return null if file doesn't exist
    if (!fs.existsSync(filepath)) return null;

    const raw = fs.readFileSync(filepath, "utf-8");
    const { data, content } = matter(raw);

    return {
        frontmatter: data as BlogMeta,
        content,
    };
}
