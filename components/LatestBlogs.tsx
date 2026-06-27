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
      <div className="flex items-center flex-col md:flex-row h-37.5 md:gap-6">
        <div className="md:w-[45%] w-full flex md:items-center md:justify-center  ">
          <Skeleton className="h-8 w-[50%] rounded-xl" />
        </div>
        <div className="h-full flex items-center w-full md:w-[60%]">
          <BlogSkeleton />
        </div>
      </div>
    );
  }
  return (
    <section className="flex flex-col gap-3 md:gap-4 w-full">
      <div className="md:w-[45%] w-full flex ">
        <p className="text-2xl sm:text-3xl font-extrabold ">Latest Blog </p>
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
                />
              );
            })
          : Array.from({ length: limit }).map((_, i) => <BlogSkeleton key={i + limit} />)}
      </div>
    </section>
  );
};
