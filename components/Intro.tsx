"use client";

import { HERO_MAIN, BASIC_EXPANDED_INTRO_TEXT } from "@/constants/bio";
import { ButtonWrapper } from "./ButtonWrapper";

const Intro = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="space-y-5">
        <div className="md:text-5xl flex text-3xl font-extrabold lg:max-w-220">
          <p>{HERO_MAIN}</p>
        </div>
        <div className="border-t-2 border-gray-500 rounded-lg my-4 max-w-205" />
        <div className="max-w-210  text-neutral-300/75 font-medium">
          <p>{BASIC_EXPANDED_INTRO_TEXT}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <ButtonWrapper text="About me" href="/about" />
        <ButtonWrapper text="Blog" href="/blog" />
        <ButtonWrapper text="Work" href="/work" />
      </div>
    </div>
  );
};

export { Intro };
