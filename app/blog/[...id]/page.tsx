"use client";
import React from "react";
import { useParams } from "next/navigation";

const SpecificBlog = () => {
    const { id } = useParams();
    return <div>{id}</div>;
};

export default SpecificBlog;
