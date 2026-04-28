// blogs/[slug]/page.tsx
import { getAllBlogs, getBlogBySlug } from "@/lib/blogs";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  return blogs.map((blog) => ({ slug: blog.slug }));
}

// dynamic metadata per blog
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
  if (!data) notFound(); // renders your not-found.tsx

  return (
    <article>
      <h1>{data.frontmatter.title}</h1>
      <p>{data.frontmatter.date}</p>
      <MDXRemote source={data.content} />
    </article>
  );
}
