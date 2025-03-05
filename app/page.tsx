"use client";
import { Intro } from "@/components/Intro";
import { useDynamicTitle } from "@/hooks/useDynamicTitle";
import { Card } from "@/components/Card";
import { motion } from "framer-motion";
import { fetchNotionPosts } from "@/actions/blogActions";
import LoadingBar from "@/components/LoadingSpinner";
import { ISO_To_Normal } from "@/utils/dateFormatter";
import { useQuery } from "@tanstack/react-query";
import { usePostsCache } from "@/hooks/usePostsCache";
import { useEffect } from "react";
export default function Home() {
    const setPostsCache = usePostsCache((state) => state.setPostsCache);
    const { data, isLoading } = useQuery({
        queryKey: ["all-posts"],
        queryFn: () => fetchNotionPosts(2),
        staleTime: 5 * 60 * 1000,
    });

    useEffect(() => {
        if (data?.cache) {
            setPostsCache(data?.cache);
        }
    }, [data, setPostsCache]);
    useDynamicTitle();
    return (
        <div className="text-white flex flex-col items-center justify-center space-y-2 sm:space-y-15 lg:my-12 ">
            <div className="p-5">
                <Intro />
            </div>
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-col sm:flex-row sm:max-w-200 space-x-18 lg:space-y-0 space-y-10"
            >
                <div className="space-y-8 space-x-6 flex flex-col sm:flex-row">
                    {data?.allPosts && !isLoading ? (
                        <>
                            <motion.div className="lg:max-w-50 flex-1">
                                <p className="font-[900] text-3xl">
                                    Latest Blog Post
                                </p>
                            </motion.div>
                            {Array.isArray(data?.allPosts) ? (
                                data?.allPosts.map((post, key) => {
                                    if (
                                        "title" in post &&
                                        "createdOn" in post &&
                                        "tags" in post &&
                                        "id" in post
                                    ) {
                                        const { title, createdOn, tags, id } =
                                            post;
                                        return (
                                            <Card
                                                key={key + 43}
                                                title={title}
                                                date={ISO_To_Normal(createdOn)}
                                                types={
                                                    tags?.[0]
                                                        ? [tags?.[0]]
                                                        : ["No tags"]
                                                }
                                                href={"/blog/" + id}
                                                location="home"
                                            />
                                        );
                                    } else {
                                        return (
                                            <div
                                                className="text-red-500"
                                                key={key + 3}
                                            >
                                                {"An error occurred"}
                                            </div>
                                        );
                                    }
                                })
                            ) : (
                                <div className="text-red-500">
                                    {!data || "An error occurred"}
                                </div>
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
