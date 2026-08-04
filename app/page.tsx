"use client";
import { Intro } from "@/components/Intro";
import { useDynamicTitle } from "@/hooks/useDynamicTitle";
import { LatestBlogs } from "@/components/LatestBlogs";
import { RecentProjects } from "@/components/RecentProjects";
import Image from "next/image";
export default function Home() {
    useDynamicTitle();
    return (
        <div
            className="text-white flex flex-col items-center
                        mx-2
                        justify-center py-3 gap-10 lg:mt-2   
                        lg:max-w-[70%] xl:max-w-[54%]"
        >
            <div className=" overflow-hidden py-6  ">
                <div className=" rounded-2xl">
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
