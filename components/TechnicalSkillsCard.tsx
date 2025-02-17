import React from "react";
import Image from "next/image";
export const TechnicalSkillsCard = ({
    skill_name,
    level,
    short_summary,
    screenshots,
}: {
    skill_name: string;
    level: string;
    short_summary: string;
    screenshots: string[];
}) => {
    return (
        <div className="space-y-3">
            <div className="flex flex-col">
                <span className="font-[700] text-2xl">{skill_name}</span>
                <span className="text-[#75ba75]">{level}</span>
            </div>
            <div>
                <div className="max-w-150 ">
                    <span className="text-white/80">{short_summary}</span>
                </div>
                {screenshots?.map((src) => (
                    <Image
                        key={src}
                        src={src}
                        height={100}
                        alt="Image"
                        width={100}
                    />
                ))}
            </div>
        </div>
    );
};
