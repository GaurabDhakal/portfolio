"use client";
import React, { useState, useEffect } from "react";
import { useDynamiceTitle } from "@/hooks/useDynamicTitle";
import { fetchNotionPosts } from "@/actions/blogActions";
const Blog = () => {
    const [posts, setPosts] = useState();
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
    useDynamiceTitle();
    return (
        <>
            <div className="text-white">Blog</div>
        </>
    );
};

export default Blog;
