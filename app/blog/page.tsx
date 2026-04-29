"use client";
import { useDynamicTitle } from "@/hooks/useDynamicTitle";
import { getAllBlogs } from "@/lib/blogs";
import { useQuery } from "@tanstack/react-query";
import { BlogList } from "@/components/blogs/list";
import { BlogSkeleton } from "@/components/blogs/BlogSkeleton";

const Blog = () => {
  const { data } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => await getAllBlogs(),
  });
  useDynamicTitle();
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col gap-5">
        <div className="text-white">
          <p className="text-3xl md:text-4xl font-bold text-center">
            Writing About Web Development & AI
          </p>
        </div>
        <div className="px-5 flex flex-col gap-5">
          {data
            ? data.map((blog) => (
                <BlogList
                  key={blog.slug + blog.title}
                  slug={blog.slug}
                  title={blog.title}
                  description={blog.description}
                  date={blog.date}
                />
              ))
            : Array.from({ length: 4 }).map((_, i) => <BlogSkeleton key={i + "id"} />)}
        </div>
      </div>
    </div>
  );
};

export default Blog;
