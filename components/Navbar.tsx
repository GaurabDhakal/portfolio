"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavbarLinks } from "@/constants/Navbar";

const Navbar = () => {
    const path = usePathname();

    return (
        <div className="flex flex-col w-full bg-transparent rounded md:backdrop-blur-md items-center  font-medium justify-center">
            <div className="flex justify-center w-full items-center">
                <div className="flex justify-center w-full select-none px-2">
                    <nav
                        className="flex font-semibold w-full justify-center p-2 md:p-1.5 
          bg-transparent md:backdrop-blur-none border md:border-gray-500/50 text-white my-3.5 mx-4 md:m-5 rounded-[20px] md:rounded-2xl backdrop-blur-lg md:w-[40%] items-center"
                    >
                        <ul className="flex items-center justify-around w-full sm:space-x-3">
                            <div className="w-full flex items-center justify-center">
                                {NavbarLinks.map(
                                    ({ icon, text, href, hasChildren }) => (
                                        <li key={href} className="w-full">
                                            <Link
                                                href={href}
                                                className={`
                                                ${
                                                    (path === href ||
                                                        (path.startsWith(
                                                            `${href}/`,
                                                        ) &&
                                                            hasChildren)) &&
                                                    "text-[#7dd3fc]"
                                                }
                                                flex flex-col md:flex-row items-center justify-center md:gap-1.5 rounded-2xl border border-transparent active:text-white/50 p-0 md:px-3 py-0 md:py-1.5 transition-all duration-500 md:hover:text-[#38bdf8] `}
                                            >
                                                <span className="text-lg md:text-base">
                                                    {icon}
                                                </span>
                                                <span className="text-sm md:text-base ">
                                                    {text}
                                                </span>
                                            </Link>
                                        </li>
                                    ),
                                )}
                            </div>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
