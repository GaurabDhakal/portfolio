import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import React from "react";

const ButtonWrapper = ({ href, text }: { href: string; text: string }) => {
    const router = useRouter();
    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            className="border group border-white/50 sm:hover:bg-[#3e3e3e] cursor-pointer p-[10px] rounded-2xl font-semibold flex items-center overflow-hidden transition-all duration-300 hover:pr-3"
            onClick={(e) => {
                e.preventDefault();
                router.push(href);
            }}
        >
            <span>{text}</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-0 h-5 group-hover:w-5 transition-all duration-300"
            >
                <path
                    fillRule="evenodd"
                    d="M4.5 12a.75.75 0 0 1 .75-.75h12.69l-4.72-4.72a.75.75 0 1 1 1.06-1.06l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H5.25A.75.75 0 0 1 4.5 12Z"
                    clipRule="evenodd"
                />
            </svg>
        </motion.button>
    );
};

export { ButtonWrapper };
