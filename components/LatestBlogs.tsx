"use client";
import { useQuery } from "@tanstack/react-query";
import { BlogList } from "./blogs/list";
import { TBlogsResponse } from "@/types";
import { getAllBlogs } from "@/lib/blogs";
import { BlogSkeleton } from "./blogs/BlogSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

export const LatestBlogs = ({ limit = 3 }: { limit?: number }) => {
  const { data } = useQuery<TBlogsResponse>({
    queryKey: ["latest-posts", limit],
    queryFn: async () => {
      return await getAllBlogs(limit);
    },
  });
  if (!data) {
    return (
      <div className="flex flex-col gap-1.5 items-center justify-center border h-30 rounded-4xl border-white/10 pl-4">
        <Skeleton className="h-6 w-[95%] rounded" />
        <Skeleton className="h-6 w-[95%] rounded" />
        <Skeleton className="h-6 w-[95%] rounded" />
      </div>
    );
  }
  return (
    <section className="flex flex-col md:flex-row gap-6 items-center justify-around w-full md:shadow-sm md:shadow-gray-800  md:border md:border-gray-500/40 md:ring-1 md:ring-gray-500/40 p-0 md:p-4  rounded-4xl">
      <div>
        <p className="text-3xl md:text-4xl font-extrabold max-w-sm text-center">Latest Blog</p>
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
