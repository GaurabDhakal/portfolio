// blogs/[slug]/page.tsx

import { getAllBlogs, getBlogBySlug } from "@/lib/blogs";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { mdxComponents } from "@/app/mdx-components"; // 👈 ADD THIS
import rehypeShiki from "@shikijs/rehype";

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

export default async function SpecificBlog({
  params,
}: Readonly<{ params: Promise<{ slug: string }> }>) {
  const { slug } = await params;
  const data = await getBlogBySlug(slug);
  console.log(data);
  if (!data) notFound();

  return (
    <article className="prose prose-invert md:max-w-200 overflow-hidden flex flex-col gap-4">
      <div>
        <p className="font-extrabold text-3xl md:text-4xl ">{data.frontmatter.title}</p>
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
