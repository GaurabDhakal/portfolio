"use client";
type TCard = {
    title: string;
    date: string;
    types: string[];
    href: string;
    location: "blog" | "home";
};
import { Tag } from "./Tag";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
export const Card = ({ title, date, types, href, location }: TCard) => {
    const router = useRouter();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ x: 10 }}
            className="flex select-none flex-col cursor-pointer justify-between h-full"
            onClick={() => {
                router.push(href);
            }}
        >
            <div
                className={`text-xl font-bold max-h-20 ${location == "home" ? "line-clamp-2 max-w-60" : ""}`}
            >
                <p>{title}</p>
            </div>
            <div className="space-y-1">
                <div>
                    <p className="text-sm text-white/60">{date}</p>
                </div>
                <div className="flex">
                    {types.map((type, id) => (
                        <div key={id + 22}>
                            <Tag tag_title={type} />
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};
