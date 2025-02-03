"use client";
import React from "react";
import { useDynamiceTitle } from "@/hooks/useDynamicTitle";
import { MainAbout } from "@/components/About/Main";
const About = () => {
    useDynamiceTitle();
    return (
        <div className="text-white flex">
            <MainAbout />
        </div>
    );
};

export default About;
