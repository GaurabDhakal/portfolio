"use client";
import { motion } from "framer-motion";
import React from "react";
import {
    BASIC_SHORT_INTRO_TEXT,
    BASIC_EXPANDED_INTRO_TEXT,
} from "@/constants/bio";
import { ButtonWrapper } from "./ButtonWrapper";

const fadeInUpAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

const Intro = () => {
    return (
        <motion.div
            {...fadeInUpAnimation}
            className="space-y-4"
        >
            <motion.div
                {...fadeInUpAnimation}
                className="space-y-5"
            >
                <div className="md:text-5xl text-2xl !font-bold lg:max-w-220">
                    <p>{BASIC_SHORT_INTRO_TEXT}</p>
                </div>
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.7 }}
                    className="border-t-2 border-gray-500 rounded-lg my-4 max-w-205"
                />
                <div className="max-w-210 text-xl text-neutral-300/75 font-[500]">
                    <p>{BASIC_EXPANDED_INTRO_TEXT}</p>
                </div>
            </motion.div>
            <div className="flex space-x-5">
                <ButtonWrapper text="About me" href="/about" />
                <ButtonWrapper text="Blog" href="/blog" />
                <ButtonWrapper text="Work" href="/work" />
            </div>
        </motion.div>
    );
};

export { Intro };
