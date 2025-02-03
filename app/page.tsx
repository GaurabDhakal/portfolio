"use client";
import { Intro } from "@/components/Intro";
import { useDynamiceTitle } from "@/hooks/useDynamicTitle";
import { Card } from "@/components/Card";
import { motion } from "framer-motion";
export default function Home() {
    useDynamiceTitle();
    return (
        <div className="text-white flex flex-col items-center justify-center space-y-2 sm:space-y-15 lg:my-12 ">
            <div className="p-5">
                <Intro></Intro>
            </div>
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-col sm:flex-row sm:max-w-200 space-x-18 lg:space-y-0 space-y-10"
            >
                <motion.div className="lg:max-w-50">
                    <p className="font-[900] text-3xl">Latest Blog Post</p>
                </motion.div>
                <Card
                    title="Arriving to a new milestone in my career"
                    date="1 Feb, 2024"
                    type="Journal"
                    href="#"
                />
                <Card
                    title="The 99% that remains in the drawer"
                    href="#"
                    date="19 January, 2025"
                    type="Journal"
                />
            </motion.div>

        </div>
    );
}
