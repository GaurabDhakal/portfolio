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
    justify-center py-3 gap-10 lg:mt-2   lg:max-w-[70%] xl:max-w-[54%]"
    >
      <div className="relative overflow-hidden rounded-2xl py-14 md:py-22 px-4 md:px-10">
        {/* Background */}
        <div
          className="absolute inset-0 bg-[url('/cover.jpeg')] bg-cover bg-no-repeat scale-105"
        />

        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content */}
        <div className="relative z-10">
          <Intro />
        </div>
      </div>
      <div className="w-full px-1">
        <LatestBlogs limit={2} />
      </div>
      <div className="px-1">
        <RecentProjects limit={2} />
      </div>
    </div>
  );
}
