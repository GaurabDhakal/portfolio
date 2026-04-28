"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

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

  useEffect(() => {
    router.prefetch(href);
  }, [href, router]);

  return (
    <Link href={href} passHref>
      <div
        className={`flex select-none flex-col cursor-pointer  ${location == "home" ? "space-y-10" : "space-y-2 mb-7"} h-full`}
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
      </div>
    </Link>
  );
};
