import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export const ProjectCard = ({
    imageUrl,
    title,
    description,
    github_link,
    demo_link,
}: {
    imageUrl: string;
    title: string;
    description: string;
    github_link: string;
    demo_link: string;
}) => {
    const handleGithubClick = () => {
        window.open(github_link, "_blank");
    };
    const handleDemoClick = () => {
        window.open(demo_link, "_blank");
    };
    return (
        <div className="w-30 flex flex-col items-center justify-center rounded-md min-w-50 transition-all duration-300 ease-in-out">
            <div>
                <Image
                    src={imageUrl}
                    alt="Project Image"
                    width={400}
                    onClick={handleDemoClick}
                    height={400}
                    className="h-50 w-100 cursor-pointer rounded-md"
                ></Image>
            </div>
            <div className="flex w-full flex-col">
                <div className="text-2xl font-bold">{title}</div>
                <div className="p-1">{description}</div>
            </div>
            <div>
                <FaGithub
                    className="h-5 w-5 cursor-pointer"
                    onClick={handleGithubClick}
                />
            </div>
        </div>
    );
};
