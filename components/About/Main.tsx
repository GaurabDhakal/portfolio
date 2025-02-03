import React from "react";
import Image from "next/image";
import { Tag } from "@/components/Tag";
import { NAME } from "@/constants/bio";
import { TagWithIcons } from "@/components/TagWithIcons";
import { FooterIcons } from "@/constants/FooterIcons";
import { ABOUT } from "@/constants/bio";
import { motion } from "framer-motion";
export const MainAbout = () => {
    return (
        <div className="flex flex-col sm:flex-row items-center w-full space-y-3 sm:space-y-0">
            <div className="flex flex-1 flex-col space-y-2 items-center">
                <div className="w-[150px] h-[150px] border-1 border-white/60 rounded-full overflow-hidden">
                    <Image
                        alt="Photo"
                        src="/photo.png"
                        width={150}
                        height={150}
                        className=" object-cover object-top scale-85 "
                    />
                </div>
                <div className="flex items-center space-x-2">
                    <div className="text-red-500">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                            height="1.5em"
                            width="1.5em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-6.5 6.326a6.52 6.52 0 0 1-1.5.174 6.487 6.487 0 0 1-5.011-2.36l.49-.98a.423.423 0 0 1 .614-.164l.294.196a.992.992 0 0 0 1.491-1.139l-.197-.593a.252.252 0 0 1 .126-.304l1.973-.987a.938.938 0 0 0 .361-1.359.375.375 0 0 1 .239-.576l.125-.025A2.421 2.421 0 0 0 12.327 6.6l.05-.149a1 1 0 0 0-.242-1.023l-1.489-1.489a.5.5 0 0 1-.146-.353v-.067a6.5 6.5 0 0 1 5.392 9.23 1.398 1.398 0 0 0-.68-.244l-.566-.566a1.5 1.5 0 0 0-1.06-.439h-.172a1.5 1.5 0 0 0-1.06.44l-.593.592a.501.501 0 0 1-.13.093l-1.578.79a1 1 0 0 0-.553.894v.191a1 1 0 0 0 1 1h.5a.5.5 0 0 1 .5.5v.326Z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </div>
                    <span>Kathmandu/Nepal</span>
                </div>
                <div className="flex space-x-2">
                    <Tag tag_title="English" />
                    <Tag tag_title="Nepali" />
                    <Tag tag_title="Hindi" />
                </div>
            </div>
            <div className="flex-2 space-y-3">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center sm:items-start"
                >
                    <p className="text-3xl sm:text-6xl font-[900]">{NAME}</p>
                    <p className="text-2xl sm:text-3xl text-[#949595]">
                        Student
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex space-x-2 space-y-2 sm:space-y-0 items-center flex-wrap"
                >
                    {FooterIcons.map(({ svg, link, name }, index) => (
                        <TagWithIcons key={index}>
                            <a href={link} className="flex" target="_blank">
                                {svg} <span className="ml-1">{name}</span>
                            </a>
                        </TagWithIcons>
                    ))}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <p className="sm:max-w-150">{ABOUT}</p>
                </motion.div>
            </div>
        </div>
    );
};
