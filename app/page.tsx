"use client";
import { Intro } from "@/components/Intro";
import { useDynamicTitle } from "@/hooks/useDynamicTitle";
import { LatestBlogs } from "@/components/LatestBlogs";
import { RecentProjects } from "@/components/RecentProjects";
export default function Home() {
  useDynamicTitle();
  return (
    <div
      className="text-white flex flex-col items-center
      mx-2
    justify-center py-3 gap-10 lg:max-w-[70%] xl:max-w-[52%]"
    >
      <div className="w-full bg-[url('/chalkboard.jpg')] bg-cover bg-no-repeat py-14 md:py-20 px-4 md:px-12 rounded-2xl">
        <Intro />
      </div>
      <div className="w-full px-1">
        <LatestBlogs limit={1} />
      </div>
      <div className="px-1">
        <RecentProjects limit={2} />
      </div>
    </div>
  );
}
