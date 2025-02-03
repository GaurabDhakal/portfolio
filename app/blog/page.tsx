"use client";
import React from "react";
import { useDynamiceTitle } from "@/hooks/useDynamicTitle";
const Blog = () => {
    useDynamiceTitle();
    return (
        <>
            <div className="text-white">Blog</div>
        </>
    );
};

export default Blog;
