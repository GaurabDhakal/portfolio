"use client";
import { useQuery } from "@tanstack/react-query";
import { BlogList } from "./blogs/list";
import { TBlogsResponse } from "@/types";
import { getAllBlogs } from "@/lib/blogs";

export const LatestBlogs = ({ limit = 3 }: { limit?: number }) => {
  const { data } = useQuery<TBlogsResponse>({
    queryKey: ["latest-posts", limit],
    queryFn: async () => await getAllBlogs(limit),
  });
  if (!data) {
    return <>Loading...</>;
  }
  return (
    <section className="flex flex-col md:flex-row gap-6 items-center justify-around w-full">
      <div>
        <p className="text-4xl font-extrabold max-w-sm text-center">My Latest Blogs</p>
      </div>
      <div className="flex flex-col gap-4">
        {data.map((blog) => {
          const { slug, description, date, title } = blog;
          return (
            <BlogList key={slug} slug={slug} title={title} description={description} date={date} />
          );
        })}
      </div>
    </section>
  );
};
