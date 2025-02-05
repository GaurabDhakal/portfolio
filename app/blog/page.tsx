"use client";
import React, {  useEffect } from "react";
import { useDynamicTitle } from "@/hooks/useDynamicTitle";
import { fetchNotionPosts } from "@/actions/blogActions";
const Blog = () => {
    useEffect(() => {
        const loadPosts = async () => {
            try {
                const posts = await fetchNotionPosts();
                console.log(posts);
                // console.log(`Res: ${res}`);
            } catch (error) {
                console.error("Failed to fetch posts", error);
            }
        };
        loadPosts();
    }, []);
    useDynamicTitle();
    return (
        <>
            <div className="text-white">Blog</div>
        </>
    );
};

export default Blog;
