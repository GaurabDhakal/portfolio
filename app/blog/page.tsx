"use client";
import React, { useEffect } from "react";
import { useDynamicTitle } from "@/hooks/useDynamicTitle";
import { fetchNotionPosts } from "@/actions/blogActions";
import { useQuery } from "@tanstack/react-query";
import { ISO_To_Normal } from "@/utils/dateFormatter";
import { Card } from "@/components/Card";
import Spinner from "@/components/LoadingSpinner";
import { usePostsCache } from "@/hooks/usePostsCache";
const Blog = () => {
    const setPostsCache = usePostsCache((state) => state.setPostsCache);
    const { data, isLoading } = useQuery({
        queryKey: ["recent-posts", 2],
        queryFn: () => fetchNotionPosts(),
        staleTime: 5 * 60 * 1000, // 5 minutes cache
    });
    useEffect(() => {
        if (data?.cache) {
            setPostsCache(data?.cache);
        }
    }, [data?.cache, setPostsCache]);
    useDynamicTitle();
    if (isLoading) {
        return (
            <div className="h-100 flex items-center justify-center">
                <Spinner></Spinner>
            </div>
        );
    }
    return (
        <div className="flex items-center justify-center space-y-3 sm:space-y-0 sm:my-10">
            <div className="flex flex-col space-y-5">
                <div className="text-white">
                    <p className="text-[30px] font-[800]">
                        Writing About Web Development & AI...
                    </p>
                </div>
                <div className="p-3 select-none ">
                    {Array.isArray(data?.allPosts) &&
                        data?.allPosts.map((post, key) => {
                            if (
                                "title" in post &&
                                "createdOn" in post &&
                                "tags" in post &&
                                "id" in post
                            ) {
                                const { title, createdOn, tags, id } = post;
                                return (
                                    <Card
                                        key={key + 39}
                                        title={title}
                                        date={ISO_To_Normal(createdOn)}
                                        types={tags || ["No Tags"]}
                                        href={"/blog/" + id}
                                        location="blog"
                                    />
                                );
                            }
                        })}
                </div>
            </div>
        </div>
    );
};

export default Blog;
