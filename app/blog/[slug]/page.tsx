// blogs/[slug]/page.tsx

import { getAllBlogs, getBlogBySlug } from "@/lib/blogs";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { mdxComponents } from "@/app/mdx-components"; // 👈 ADD THIS
import rehypeShiki from "@shikijs/rehype";
import { Clock } from "lucide-react";
import { BlogTag } from "@/components/blogs/Tag";

export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) return {};

  return {
    title: blog.frontmatter.title,
    description: blog.frontmatter.description,
  };
}
export const tagColors = [
  "bg-slate-800 text-slate-200 border border-slate-700",
  "bg-zinc-800 text-zinc-200 border border-zinc-700",
  "bg-gray-800 text-gray-200 border border-gray-700",

  "bg-blue-900/40 text-blue-200 border border-blue-800",
  "bg-sky-900/40 text-sky-200 border border-sky-800",
  "bg-indigo-900/40 text-indigo-200 border border-indigo-800",

  "bg-green-900/40 text-green-200 border border-green-800",
  "bg-emerald-900/40 text-emerald-200 border border-emerald-800",

  "bg-yellow-900/40 text-yellow-200 border border-yellow-800",
  "bg-amber-900/40 text-amber-200 border border-amber-800",

  "bg-purple-900/40 text-purple-200 border border-purple-800",
  "bg-fuchsia-900/40 text-fuchsia-200 border border-fuchsia-800",

  "bg-rose-900/40 text-rose-200 border border-rose-800",
];
export function getRandomTagColor() {
  return tagColors[Math.floor(Math.random() * tagColors.length)];
}
export default async function SpecificBlog({
  params,
}: Readonly<{ params: Promise<{ slug: string }> }>) {
  const { slug } = await params;
  const data = await getBlogBySlug(slug);
  if (!data) notFound();

  return (
    <article className="prose prose-invert md:max-w-200 overflow-hidden flex flex-col gap-4 px-1">
      <div className="flex flex-col gap-3">
        <p className="font-extrabold text-3xl md:text-4xl ">{data.frontmatter.title}</p>
        <div className="text-sm text-white/70 flex flex-col gap-2">
          <div className="flex items-center gap-1 leading-none">
            <Clock className="w-5 h-5" />
            <p className="m-0">{data.frontmatter.date}</p>
          </div>
          <p>{data.frontmatter.description}</p>
          <div className="flex gap-2">
            {data.frontmatter.tags.map((tag) => {
              const randomColor = getRandomTagColor();
              return (
                <div key={tag}>
                  <BlogTag tagName={tag} className={randomColor} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="px-1">
        <MDXRemote
          source={data.content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              rehypePlugins: [[rehypeShiki, { theme: "tokyo-night" }]],
            },
          }}
        />
      </div>
    </article>
  );
}
