"use client";
import { Intro } from "@/components/Intro";
import { useDynamicTitle } from "@/hooks/useDynamicTitle";
import { LatestBlogs } from "@/components/LatestBlogs";
import { RecentProjects } from "@/components/RecentProjects";
export default function Home() {
  useDynamicTitle();
  return (
    <div className="text-white flex flex-col items-center justify-center py-5 px-3.5 gap-10 lg:max-w-[70%] xl:max-w-[52%]">
      <div className="w-full">
        <Intro />
      </div>
      <div className="w-full px-0.5">
        <LatestBlogs limit={1} />
      </div>
      <div className="px-0.5">
        <RecentProjects limit={2} />
      </div>
    </div>
  );
}
