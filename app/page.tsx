"use client";
import { Intro } from "@/components/Intro";
import { useDynamicTitle } from "@/hooks/useDynamicTitle";
import { LatestBlogs } from "@/components/LatestBlogs";
export default function Home() {
  useDynamicTitle();
  return (
    <div className="text-white flex flex-col items-center justify-center p-5 gap-10 mt-1">
      <div>
        <Intro />
      </div>
      <div className="w-full px-0.5">
        <LatestBlogs limit={1} />
      </div>
    </div>
  );
}
