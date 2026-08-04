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
        <div className=" flex intro-element w-full flex-col md:flex-row gap-5">
            <div className="space-y-5 flex-2">
                <div className=" font-extrabold">
                    <h1 className="flex text-white flex-col">
                        <span className="  text-white sm:text-4xl lg:text-5xl text-3xl">
                            Hi, I am
                        </span>
                        <div
                            className={`font-pp-neue-montreal full-name-element animated-text relative flex`}
                        >
                            <span
                                className="
                            sm:text-5xl lg:text-6xl text-4xl
                            text-cyan-600 italic font-instrumental-serif"
                            >
                                {FULL_NAME}.
                            </span>
                        </div>
                    </h1>
                </div>
                <div className="md:max-w-210 text-neutral-300/75 intro-expanded-text font-medium md:px-0.5 overflow-hidden">
                    <p className="overflow-hidden max-w-[60%] text-white backdrop-blur-xs  rounded-2xl px-0.5">
                        {BASIC_EXPANDED_INTRO_TEXT}
                    </p>
                </div>
            </div>

        </div>
    );
};

export { Intro };
