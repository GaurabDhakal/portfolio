"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FULL_NAME, BASIC_EXPANDED_INTRO_TEXT } from "@/constants/bio";
import { ButtonWrapper } from "./ButtonWrapper";
import { ScrollTrigger, SplitText } from "gsap/all";
import { blurredIn } from "@/constants/gsap_animations";
import { HandwrittenUnderline } from "./ui/handwritten_underline";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

const Intro = () => {
  useGSAP(() => {
    let fullNameSplit = SplitText.create(".full-name-element", {
      type: "words, chars",
      mask: "lines",
      linesClass: "line++",
    });

    gsap.set(fullNameSplit.chars, {
      willChange: "transform, opacity",
    });
    gsap.from(fullNameSplit.chars, {
      ...blurredIn(),
      y: 5,
      filter: "blur(12px)",
      scrollTrigger: ".intro-element",
    });
  }, []);
  return (
    <div className=" flex flex-col intro-element gap-5">
      <div className="space-y-5 ">
        <div className="sm:text-6xl flex text-4xl font-extrabold">
          <p className="text-white">
            Hi, I am <br className="md:hidden" />
            <em
              className={`font-pp-neue-montreal not-italic full-name-element animated-text relative inline-block `}
            >
              {FULL_NAME}.
              <HandwrittenUnderline />
            </em>
          </p>
        </div>
        <div className="md:max-w-210 text-neutral-300/75 intro-expanded-text font-medium md:px-0.5 overflow-hidden">
          <p className="overflow-hidden text-white bg-gray-700/20 backdrop-blur-md rounded-2xl px-2">
            {BASIC_EXPANDED_INTRO_TEXT}
          </p>
        </div>
      </div>
      <div className="flex gap-2 ">
        <ButtonWrapper text="About me" href="/about" />
        <ButtonWrapper text="Blog" href="/blog" />
        <ButtonWrapper text="Projects" href="/projects" />
      </div>
    </div>
  );
};

export { Intro };
