"use client";
import React from "react";
import { useDynamicTitle } from "@/hooks/useDynamicTitle";
import { fetchNotionPosts } from "@/actions/blogActions";
import { useQuery } from "@tanstack/react-query";
import { ISO_To_Normal } from "@/utils/dateFormatter";
import { Card } from "@/components/Card";
import Spinner from "@/components/LoadingSpinner";
const Blog = () => {
    const { data: allPosts, isLoading } = useQuery({
        queryKey: ["recent-posts", 2],
        queryFn: () => fetchNotionPosts(),
        staleTime: 5 * 60 * 1000, // 5 minutes cache
    });
    useDynamicTitle();
    return (
        <div className="flex items-center justify-center space-y-3 sm:space-y-0 sm:my-10">
            <div className="flex flex-col space-y-5">
                <div className="text-white">
                    <p className="text-[30px] font-[800]">
                        Writing About Web Development & AI...
                    </p>
                </div>
                <div className="p-3 select-none space-y-5">
                    {isLoading && <Spinner></Spinner>}
                    {Array.isArray(allPosts) &&
                        allPosts.map((post, key) => {
                            if (
                                "title" in post &&
                                "createdOn" in post &&
                                "tags" in post &&
                                "id" in post
                            ) {
                                const { title, createdOn, tags, id } = post;
                                return (
                                    <Card
                                        key={key}
                                        title={title}
                                        date={ISO_To_Normal(createdOn)}
                                        type={tags?.[0] ? tags?.[0] : "No tags"}
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
