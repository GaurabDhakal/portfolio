"use client";
import React from "react";
import { useDynamicTitle } from "@/hooks/useDynamicTitle";
const Work = () => {
    useDynamicTitle();
    return <div className="text-white sm:my-10">Work</div>;
};

export default Work;
