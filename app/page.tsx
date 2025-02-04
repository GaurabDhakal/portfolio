"use client";
import { Intro } from "@/components/Intro";
import { useDynamiceTitle } from "@/hooks/useDynamicTitle";
import { Card } from "@/components/Card";
import { motion } from "framer-motion";
import { fetchNotionPosts } from "@/actions/blogActions";
import LoadingBar from "@/components/LoadingBar";
import { ISO_To_Normal } from "@/utils/dateFormatter";
import { useQuery } from "@tanstack/react-query";
export default function Home() {
    const { data: recentPosts, isLoading } = useQuery({
        queryKey: ["recent-posts"],
        queryFn: () => fetchNotionPosts(2),
        staleTime: 5 * 60 * 1000, // 5 minutes cache
    });
    useDynamiceTitle();
    return (
        <div className="text-white flex flex-col items-center justify-center space-y-2 sm:space-y-15 lg:my-12 ">
            <div className="p-5">
                <Intro></Intro>
            </div>
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-col sm:flex-row sm:max-w-200 space-x-18 lg:space-y-0 space-y-10"
            >
                <div className="space-y-8 space-x-6 flex flex-col sm:flex-row">
                    {recentPosts && !isLoading ? (
                        <>
                            <motion.div className="lg:max-w-50 flex-1">
                                <p className="font-[900] text-3xl">
                                    Latest Blog Post
                                </p>
                            </motion.div>
                            {recentPosts.map(
                                ({ title, createdOn, tags, id }, key) => {
                                    console.log(tags);
                                    return (
                                        <Card
                                            key={key}
                                            title={title}
                                            date={ISO_To_Normal(createdOn)}
                                            type={
                                                tags?.[0]
                                                    ? tags?.[0]
                                                    : "No tags"
                                            }
                                            href={"/blog/" + id}
                                        />
                                    );
                                }
                            )}
                        </>
                    ) : (
                        <div className=" flex flex-1">
                            <LoadingBar />
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
}
