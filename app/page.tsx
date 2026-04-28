"use client";
import { Intro } from "@/components/Intro";
import { useDynamicTitle } from "@/hooks/useDynamicTitle";
export default function Home() {
  useDynamicTitle();
  return (
    <div className="text-white flex flex-col items-center justify-center mt-22 md:mt-26">
      <div className="p-5">
        <Intro />
      </div>
    </div>
  );
}
