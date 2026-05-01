"use client";
import { useQuery } from "@tanstack/react-query";
import { BlogList } from "./blogs/list";
import { TBlogsResponse } from "@/types";
import { getAllBlogs } from "@/lib/blogs";
import { BlogSkeleton } from "./blogs/BlogSkeleton";

export const LatestBlogs = ({ limit = 3 }: { limit?: number }) => {
  const { data } = useQuery<TBlogsResponse>({
    queryKey: ["latest-posts", limit],
    queryFn: async () => {
      return await getAllBlogs(limit);
    },
  });

  return (
    <section className="flex flex-col md:flex-row gap-6 items-center justify-around w-full">
      <div>
        <p className="text-3xl md:text-4xl font-extrabold max-w-sm text-center">My Latest Blog</p>
      </div>
      <div className="flex flex-col gap-4 w-full md:w-fit">
        {data
          ? data.map((blog) => {
              const { slug, description, date, title } = blog;
              return (
                <BlogList
                  key={slug}
                  slug={slug}
                  title={title}
                  description={description}
                  date={date}
                  orientation="compact"
                />
              );
            })
          : Array.from({ length: limit }).map((_, i) => <BlogSkeleton key={i + limit} />)}
      </div>
    </section>
  );
};
