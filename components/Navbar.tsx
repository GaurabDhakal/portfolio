"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavbarLinks } from "@/constants/Navbar";
import { Button } from "./ui/button";
import { FULL_NAME } from "@/constants/bio";

const Navbar = () => {
  const path = usePathname();

  return (
    <div className="flex flex-col w-full bg-transparent rounded md:backdrop-blur-md items-center  font-medium font-space-grotesk!">
      <div className="flex justify-center items-center w-full lg:px-10">
        <div className=" flex-1 hidden lg:block  ">
          <p
            className={` text-white tracking-wide text-lg text-center font-medium`}
          >
            {FULL_NAME}
          </p>
        </div>

        <div className="flex flex-1 justify-center w-full md:w-fit select-none">
          <nav className="flex items-center font-semibold w-full justify-center p-2 md:p-1.5 
          bg-transparent md:backdrop-blur-none border md:border-gray-500/50 text-white my-3.5 mx-4 md:m-5 rounded-[20px] md:rounded-4xl backdrop-blur-lg">
            <ul className="w-full">
              <li className="flex items-center justify-around gap-2 sm:space-x-3">
                {NavbarLinks.map(({ icon, text, href, hasChildren }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`
                      ${
                        (path === href || (path.startsWith(`${href}/`) && hasChildren)) &&
                        "text-[#7dd3fc]"
                      }
                       flex flex-col md:flex-row items-center justify-center md:gap-1.5 rounded-2xl border border-transparent active:text-white/50 p-0 md:px-3 py-0 md:py-1.5 transition-all duration-500 md:hover:text-[#38bdf8] `}
                  >
                    <span className="text-lg md:text-base">{icon}</span>
                    <span className="text-sm md:text-base ">{text}</span>
                  </Link>
                ))}
              </li>
            </ul>
          </nav>
        </div>

        <div className="text-white hidden lg:block text-center font-semibold flex-1">
          <Button className="font-sans cursor-pointer" variant={"outline"}>
            Download Resume
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
