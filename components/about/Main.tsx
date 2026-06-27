"use client";
import Image from "next/image";
import { Tag } from "@/components/Tag";
import { TagWithIcons } from "@/components/TagWithIcons";
import { FooterIcons } from "@/constants/FooterIcons";
import { ABOUT, EDUCATION, FULL_NAME, TECH_STACK_N } from "@/constants/bio";

import { EducationCard } from "../EducationCard";
import { TechStackCardRevamped } from "../TechStack/TechStackNew";
import { Earth } from "lucide-react";

export const MainAbout = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full space-y-3 px-2 sm:space-y-0 md:gap-8">
      <div className="flex lg:sticky lg:top-22 flex-1 flex-col space-y-2  items-center lg:h-fit">
        <div className=" w-37.5 h-37.5 border border-white/60 rounded-full overflow-hidden">
          <Image
            alt="Photo"
            src="/photo.png"
            width={150}
            loading="eager"
            height={150}
            className=" object-cover object-top scale-100"
          />
        </div>
        <div className="flex items-center space-x-2">
          <div>
            <Earth className="h-5 w-5 text-green-200"/>
          </div>
          <p className="font-medium">Kathmandu, Nepal</p>
        </div>
        <div className="flex gap-1">
          <Tag tag_title="English" className="px-2" />
          <Tag tag_title="Nepali" className="px-2"/>
          <Tag tag_title="Hindi"className="px-2" />
        </div>
      </div>
      <div className="flex-2 space-y-4">
        <div className="flex flex-col items-center sm:items-start">
          <p className="text-3xl sm:text-6xl font-black font-pp-neue-montreal">{FULL_NAME}</p>
          <p className="text-2xl sm:text-3xl text-[#949595]">Student</p>
        </div>
        <div className="flex gap-3 justify-center sm:justify-start sm:space-y-0  items-center flex-wrap">
          {FooterIcons.map(({ svg, link, name }, index) => (
            <TagWithIcons key={index + name}>
              <a href={link} className="flex" target="_blank" aria-label={name}>
                {svg} <span className="ml-1">{name}</span>
              </a>
            </TagWithIcons>
          ))}
        </div>
        <div>
          <p className="sm:max-w-150">{ABOUT}</p>
        </div>

        {/* Tech Stack Section */}
        <div className="flex flex-col gap-1">
          <div>
            <span className="text-3xl font-extrabold font-pp-neue-montreal text-[#E8DDB5]">Tech Stack</span>
          </div>
          <div className="px-0.5 flex">
            <TechStackCardRevamped data={TECH_STACK_N} />
          </div>
        </div>
        {/* Studies section  */}
        <div className="space-y-2 mt-2">
          <div>
            <span className="text-3xl font-extrabold text-[#E8DDB5]">Educational History</span>
          </div>
          <div className="space-y-10 px-0.5">
            {EDUCATION.history.map(
              ({ gradeRange, yearsAttended, summary, location, institute }, key) => {
                return (
                  <EducationCard
                    key={key + gradeRange + yearsAttended}
                    gradeRange={gradeRange}
                    yearsAttended={yearsAttended}
                    location={location}
                    short_summary={summary}
                    institute_name={institute}
                  />
                );
              },
            )}
          </div>
          <div className="max-w-150 space-y-1 my-5">
            <div>
              <p className="text-3xl font-extrabold text-[#E8DDB5]">Summary</p>
            </div>
            <div className="p-0.5">
              <p>{EDUCATION.completeSummary}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
