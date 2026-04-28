"use client";
import React from "react";
import { useDynamicTitle } from "@/hooks/useDynamicTitle";
import { MainAbout } from "@/components/about/Main";
const About = () => {
  useDynamicTitle();
  return (
    <div className="text-white flex mt-25">
      <MainAbout />
    </div>
  );
};

export default About;
