"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FULL_NAME, BASIC_EXPANDED_INTRO_TEXT } from "@/constants/bio";
import { ButtonWrapper } from "./ButtonWrapper";
import localFont from "next/font/local";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

const PP_Neue_Montreal = localFont({
  src: "../public/fonts/PPNeueMontreal/PPNeueMontreal-Extrabold.otf",
});

const Intro = () => {
  useGSAP(() => {
    let fullNameSplit = SplitText.create(".full-name-element", {
      type: "words, chars",
      mask: "lines",
      linesClass: "line++",
    });

    gsap.from(fullNameSplit.chars, {
      scrollTrigger: ".intro-element",
      y: -10,
      opacity: 0,
      stagger: 0.04,
      duration: 0.3,
      ease: "sine.out",
    });
  }, []);
  return (
    <div className=" flex flex-col intro-element gap-5  ">
      <div className="space-y-5 ">
        <div className="md:text-6xl flex text-4xl font-extrabold">
          <p className="text-gray-300/90 ">
            Hi, I am <br className="md:hidden" />{" "}
            <span className={`${PP_Neue_Montreal.className} text-white full-name-element`}>
              {FULL_NAME}.
            </span>
          </p>
        </div>
        <div className="md:max-w-210 text-neutral-300/75 font-medium md:px-0.5">
          <p>{BASIC_EXPANDED_INTRO_TEXT}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <ButtonWrapper text="About me" href="/about" />
        <ButtonWrapper text="Blog" href="/blog" />
        <ButtonWrapper text="Projects" href="/projects" />
      </div>
    </div>
  );
};

export { Intro };
