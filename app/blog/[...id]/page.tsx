"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useDynamicTitle } from "@/hooks/useDynamicTitle";
const SpecificBlog = () => {
    useDynamicTitle()
    const { id } = useParams();
    
    return <div>{id}</div>;
};

export default SpecificBlog;
