// blogs/[slug]/page.tsx

import { getAllBlogs, getBlogBySlug } from "@/lib/blogs";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { mdxComponents } from "@/app/mdx-components"; // 👈 ADD THIS
import rehypeShiki from "@shikijs/rehype";
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
];
let available = [...tagColors];

function getRandomTagColor() {
  if (available.length === 0) {
    available = [...tagColors];
  }

  const index = Math.floor(Math.random() * available.length);
  return available.splice(index, 1)[0];
}

export default async function SpecificBlog({
  params,
}: Readonly<{ params: Promise<{ slug: string }> }>) {
  const { slug } = await params;
  const data = await getBlogBySlug(slug);
  if (!data) notFound();

  return (
    <article className="md:max-w-200 overflow-hidden flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col gap-3 px-4">
        <p className="font-extrabold text-2xl md:text-3xl font-pp-neue-montreal antialiased">{data.frontmatter.title}</p>
        <div className="text-white/70 flex flex-col gap-2">
          <div className="flex items-center gap-1 leading-none text-sm font-mono">
            <p
              className={`m-0 border border-gray-500/50 px-2.5 py-1  bg-[#132221] rounded-full 
            text-[#d7ffdd] `}
            >
              <b>Published: </b>
              {data.frontmatter.date}
            </p>
          </div>
          <p className="text-sm">{data.frontmatter.description}</p>
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
      <hr className="w-[90%] sm:w-[97%]"/>
      <div className="px-4 ">
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
