"use client";
import React from "react";
import { useDynamicTitle } from "@/hooks/useDynamicTitle";
import { MainAbout } from "@/components/About/Main";
const About = () => {
    useDynamicTitle();
    return (
        <div className="text-white flex">
            <MainAbout />
        </div>
    );
};

export default About;
