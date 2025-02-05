"use client";
type TCard = {
    title: string;
    date: string;
    type: string;
    href: string;
    location:"blog"|"home"
};
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
export const Card = ({ title, date, type, href, location }: TCard) => {
    const router = useRouter();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ x: 10 }}
            className="flex select-none  flex-col space-y-1 cursor-pointer"
            onClick={() => {
                router.push(href);
            }}
        >
            <div className={`text-xl font-bold max-h-20 ${location=="home"?"line-clamp-2 max-w-60":"" }`}>
                <p>{title}</p>
            </div>
            <div>
                <p className="text-sm text-white/60">{date}</p>
            </div>
            <div className="text-sm font-semibold flex">
                <p className="border-1 border-white/60 bg-black text-white/80 rounded-3xl px-2 py-1">
                    {type}
                </p>
            </div>
        </motion.div>
    );
};
