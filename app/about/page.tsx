"use client";
import React from "react";
import { useDynamicTitle } from "@/hooks/useDynamicTitle";
import { MainAbout } from "@/components/about/Main";
const About = () => {
  useDynamicTitle();
  return (
    <div className="text-white flex mt-4 sm:mt-0">
      <MainAbout />
    </div>
  );
};

export default About;
