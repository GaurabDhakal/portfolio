import React from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";

export const ProjectCard = ({
  imageUrl,
  title,
  description,
  github_link,
  demo_link,
  animationOptions,
}: {
  imageUrl: string;
  title: string;
  description: string;
  github_link: string;
  demo_link: string;
  animationOptions?: { axis_direction: number };
}) => {
  console.log(animationOptions);
  const handleGithubClick = () => {
    window.open(github_link, "_blank");
  };
  const handleDemoClick = () => {
    window.open(demo_link, "_blank");
  };

  return (
    <div className="max-w-30 flex flex-col items-center rounded-2xl min-w-80 p-3 h-100 transition-all duration-300 ease-in-out bg-[#18181a] hover:bg-[#373F51]  ">
      <div>
        <Image
          src={imageUrl}
          alt="Project Image"
          width={400}
          onClick={handleDemoClick}
          height={400}
          className="h-50 object-cover cursor-pointer rounded-md"
        ></Image>
      </div>
      <div className="flex flex-col items-center justify-between p-2 h-full">
        <div className="flex w-full flex-col cursor-default">
          <div className="text-2xl font-bold">{title}</div>
          <div className="p-1">{description}</div>
        </div>
        <div className="flex items-center gap-4 ">
          <FaGithub className="h-5 w-5 cursor-pointer" onClick={handleGithubClick} />
          <FaExternalLinkSquareAlt onClick={handleDemoClick} className="h-5 cursor-pointer w-5" />
        </div>
      </div>
    </div>
  );
};
