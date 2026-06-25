"use client";
import { usePathname, useRouter } from "next/navigation";
import { NavbarLinks } from "@/constants/Navbar";

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
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return (
    <div className="flex flex-col w-full bg-transparent rounded md:backdrop-blur-md">
      {/* Loading Bar */}
      {isPending && <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 animate-pulse" />}

      <div className="flex items-center justify-between w-full ">
        {/* Left Side */}
        <div className="flex-1 text-white hidden md:block text-center font-semibold">
          {timeZone}
        </div>

        {/* Center Navbar */}
        <div className="flex-1 flex justify-center w-full select-none ">
          <nav className="flex items-center font-semibold w-full justify-center p-2 md:p-1.5 bg-[#15151b82] md:bg-transparent md:backdrop-blur-none border md:border-gray-500/50 text-white my-3.5 mx-4 md:m-5 rounded-[20px] md:rounded-4xl backdrop-blur-lg">
            <ul className="w-full">
              <li className="flex items-center justify-around gap-2 sm:space-x-0.75">
                {NavbarLinks.map(({ icon, text, href, hasChildren }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(href);
                    }}
                    className={`
                      ${
                        (path === href || (path.startsWith(href) && hasChildren)) &&
                        "sm:bg-[#3e3e3e]  sm:border-gray-500/50 sm:text-white text-[#627a73]"
                      }
                       flex flex-col md:flex-row items-center justify-center md:gap-2 rounded-3xl border border-transparent active:text-white/50 p-0 sm:px-8 py-0 sm:py-1.5 transition-all duration-500 sm:hover:border-gray-500/50 sm:hover:bg-[#3e3e3e]`}
                  >
                    <span>{icon}</span>
                    <span className="text-xs sm:inline md:text-[15px]">{text}</span>
                  </a>
                ))}
              </li>
            </ul>
          </nav>
        </div>

        {/* Right Side */}
        <div className="flex-1 text-white hidden md:block text-center font-semibold">
          <p>{time}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
