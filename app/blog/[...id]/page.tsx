"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchNotionPostById } from "@/actions/blogActions";

const SpecificBlog = () => {
    const { id } = useParams();
    return <div>{id}</div>;
};

export default SpecificBlog;
