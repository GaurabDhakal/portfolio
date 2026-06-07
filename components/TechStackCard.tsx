import React from "react";
import Image from "next/image";

export const TechStackCard = ({
  skill_name,
  level,
  screenshots,
  icon_slug,
}: {
  skill_name: string;
  level: string;
  icon_slug?: string;
  screenshots?: string[];
}) => {
  console.log(icon_slug);
  return (
    <div className="space-y-3">
      <div className="flex flex-col ">
        <span className="font-bold text-sm">{skill_name}</span>
        <span className="text-[#7aff7a] text-sm">{level}</span>
      </div>
      <div>
        {screenshots
          ? screenshots?.map((src) => (
              <Image key={src} src={src} height={100} alt="Image" width={100} />
            ))
          : ""}
      </div>
    </div>
  );
};
