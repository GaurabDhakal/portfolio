"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Tag } from "./Tag";
import Link from "next/link";
type TCard = {
    title: string;
    date: string;
    types: string[];
    href: string;
    location: "blog" | "home";
};

export const Card = ({ title, date, types, href, location }: TCard) => {
    const router = useRouter();

    // Prefetch the route when the component mounts
    useEffect(() => {
        router.prefetch(href);
    }, [href, router]); 

    return (
        <Link href={href} passHref>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ x: 10 }}
            className={`flex select-none flex-col cursor-pointer  ${location=="home"?"space-y-10":"space-y-2 mb-7"} h-full`}
        >
            <div
                className={`text-xl font-bold max-h-20 ${
                    location === "home" ? "line-clamp-2 max-w-60" : ""
                }`}
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
        </motion.div></Link>
    );
};
