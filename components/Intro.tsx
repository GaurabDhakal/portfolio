"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FULL_NAME, BASIC_EXPANDED_INTRO_TEXT } from "@/constants/bio";
import { ButtonWrapper } from "./ButtonWrapper";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

const Intro = () => {
  useGSAP(() => {
    let fullNameSplit = SplitText.create(".full-name-element", {
      type: "words, chars",
      mask: "lines",
      linesClass: "line++",
    });

    gsap.set(fullNameSplit.chars, {
      autoAlpha: 0,
      y: -10,
    });

    gsap.to(fullNameSplit.chars, {
      autoAlpha: 1,
      y: 0,
      stagger: 0.04,
      duration: 0.3,
      ease: "sine.out",
      scrollTrigger: ".intro-element",
    });
  }, []);
  return (
    <div className=" flex flex-col intro-element gap-5  ">
      <div className="space-y-5 ">
        <div className="sm:text-6xl flex text-4xl font-extrabold">
          <p className=" bg-linear-to-r from-gray-400 to-[#FEFCFF] bg-clip-text text-transparent">
            Hi, I am <br className="md:hidden" />
            <span className={`font-pp-neue-montreal text-white full-name-element`}>
              {FULL_NAME}.
            </span>
          </p>
        </div>
        <div className="md:max-w-210 text-neutral-300/75 intro-expanded-text font-medium md:px-0.5 overflow-hidden">
          <p className="overflow-hidden">{BASIC_EXPANDED_INTRO_TEXT}</p>
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
