"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useDynamicTitle } from "@/hooks/useDynamicTitle";
import { useQuery } from "@tanstack/react-query";
import { fetchNotionPostById } from "@/actions/blogActions";
import Spinner from "@/components/LoadingSpinner";
import { TBlog } from "@/types";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { ISO_To_Normal } from "@/utils/dateFormatter";
import { useRouter } from "next/navigation";
const SpecificBlog = () => {
    const { id } = useParams();
    useDynamicTitle();
    const router = useRouter();
    const handleClick = (href: string) => {
        router.push(href);
    };
    const {
        data: postData,
        isLoading,
        isError,
    } = useQuery({
        queryKey: [`post-individual-${id}`],
        queryFn: () => fetchNotionPostById(id as string),
    });
    if (postData && (postData as { error: string })["error"]) {
        return (
            <div className="sm:my-10 flex items-center justify-center">
                Invalid ID!
            </div>
        );
    }
    if (!id) {
        return <div className="sm:my-10">No id found</div>;
    }
    if (isError) {
        <div className="sm:my-10">Something went wrong</div>;
    }
    return (
        <div className="sm:my-10 flex flex-col justify-center items-center">
            {isLoading && <Spinner />}
            <div className="max-w-100 sm:max-w-150">
                {(postData as TBlog) && (
                    <div className=" ">
                        <div>
                            <a
                                className=" flex select-none items-center justify-between space-x-3 btnSelector cursor-pointer border-1 border-transparent p-2 hover:border-cyan-100 w-fit transition-all duration-300 rounded-xl"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleClick("/blog");
                                }}
                            >
                                <div>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        height="1.2em"
                                        width="1.2em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                                <div>
                                    <p>Back</p>
                                </div>
                            </a>
                        </div>
                        <div>
                            <p className="text-[40px] font-[800]">
                                {(postData as TBlog).title}
                            </p>
                        </div>
                        <div className="p-3">
                            <div>
                                <p className="text-sm  text-white/80">
                                    {ISO_To_Normal(
                                        (postData as TBlog).createdOn
                                    )}
                                </p>
                            </div>
                            <MarkdownRenderer
                                markdown={(postData as TBlog).content["parent"]}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SpecificBlog;
