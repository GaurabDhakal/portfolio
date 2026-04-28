"use client";
import { useDynamicTitle } from "@/hooks/useDynamicTitle";
import { getAllBlogs } from "@/lib/blogs";
import { useQuery } from "@tanstack/react-query";
import { BlogList } from "@/components/blogs/list";

const Blog = () => {
  const { data } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => await getAllBlogs(),
  });
  useDynamicTitle();
  if (!data) return null;
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col space-y-5">
        <div className="text-white">
          <p className="text-3xl md:text-4xl font-bold text-center">
            Writing About Web Development & AI
          </p>
        </div>
        <div className="px-5 flex flex-col gap-5">
          {data.map((blog) => (
            <BlogList
              key={blog.slug + blog.title}
              slug={blog.slug}
              title={blog.title}
              description={blog.description}
              date={blog.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
