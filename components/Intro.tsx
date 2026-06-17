"use client";

import { FULL_NAME, BASIC_EXPANDED_INTRO_TEXT } from "@/constants/bio";
import { ButtonWrapper } from "./ButtonWrapper";

const Intro = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="space-y-5">
        <div className="md:text-6xl flex text-4xl font-extrabold  ">
          <p className="text-gray-400">
            Hi, I am <br className="md:hidden" /> <span className="text-white">{FULL_NAME}</span>.
          </p>
        </div>
        <div className="md:max-w-210 text-neutral-300/75 font-medium md:px-0.5">
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
