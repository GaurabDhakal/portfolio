"use client";
import { useQuery } from "@tanstack/react-query";
import { BlogList } from "./blogs/BlogList";
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
      <div className="flex items-center flex-col md:flex-row h-37.5 md:gap-10">
        <div className="flex w-[50%] flex-col gap-1.5 items-center justify-center  ">
          <Skeleton className="h-8 w-full md:w-[50%] rounded-xl" />
        </div>
        <div className="h-full flex items-center w-full md:w-[60%]">
          <BlogSkeleton />
        </div>
      </div>
    );
  }
  return (
    <section className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-around w-full md:ring md:ring-gray-600/50 p-0 md:px-4 py-3 rounded-3xl">
      <div className="md:w-[45%] w-full flex md:items-center md:justify-center">
        <p className="text-2xl sm:text-3xl font-extrabold ">Latest Blog</p>
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
