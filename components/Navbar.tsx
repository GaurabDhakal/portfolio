"use client";
import { usePathname, useRouter } from "next/navigation";
import { NavbarLinks } from "@/constants/Navbar";
import { motion } from "framer-motion";
import { useEffect, useState, useTransition } from "react";

type TimeDisplayProps = {
    locale?: string;
};

const Navbar = ({ locale = "en-US" }: TimeDisplayProps) => {
    const router = useRouter();
    const path = usePathname();
    const [timeZone, setTimeZone] = useState<string>("");
    const [time, setTime] = useState<string>("");
    const [isPending, startTransition] = useTransition(); // 👈 Track route changes

    const handleClick = (href: string) => {
        startTransition(() => {
            router.push(href);
        });
    };

    useEffect(() => {
        let tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (tz === "Asia/Katmandu") {
            tz = "Asia/Kathmandu";
        }
        setTimeZone(tz);
    }, []);

    useEffect(() => {
        if (!timeZone) return;
        const updateTime = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {
                timeZone,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
            };
            const timeString = new Intl.DateTimeFormat(locale, options).format(
                now
            );
            setTime(timeString);
        };

        updateTime();
        const intervalId = setInterval(updateTime, 1000);
        return () => clearInterval(intervalId);
    }, [timeZone, locale]);

    return (
        <div className="flex flex-col w-full">
            {/* Loading Bar */}
            {isPending && (
                <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 animate-pulse" />
            )}

            <div className="flex items-center justify-between w-full">
                {/* Left Side */}
                <div className="flex-1 text-white hidden lg:block text-center font-semibold">
                    {timeZone}
                </div>

                {/* Center Navbar */}
                <div className="flex-1 flex justify-center select-none">
                    <nav className="flex items-center font-semibold justify-center h-14 sm:h-12 bg-[#0a0d0c] border border-white/50 text-white m-5 rounded-2xl px-10 sm:px-2">
                        <ul>
                            <li className="flex items-center space-x-10 sm:space-x-[3px]">
                                {NavbarLinks.map(
                                    (
                                        { icon, text, href, hasChildren },
                                    ) => (
                                        <motion.a
                                            whileTap={{ scale: 0.95 }}
                                            key={href}
                                            href={href}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleClick(href);
                                            }}
                                            className={`${
                                                (path === href ||
                                                    (path.startsWith(href) &&
                                                        hasChildren)) &&
                                                "sm:bg-[#3e3e3e] sm:border-white/50 sm:text-white text-[#6dff29]"
                                            } flex items-center justify-center space-x-3 rounded-xl border border-transparent active:text-[#6dff29] p-0 sm:px-8 py-0 sm:py-1.5 transition-all duration-500 sm:hover:border-white/50 sm:hover:bg-[#3e3e3e]`}
                                        >
                                            {icon}
                                            <span className="hidden sm:inline">
                                                {text}
                                            </span>
                                        </motion.a>
                                    )
                                )}
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Right Side */}
                <div className="flex-1 text-white hidden lg:block text-center font-semibold">
                    <p>{time}</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
