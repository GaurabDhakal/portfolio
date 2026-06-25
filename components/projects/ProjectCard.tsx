import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

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
  const handleGithubClick = () => {
    window.open(github_link, "_blank");
  };
  const handleDemoClick = () => {
    window.open(demo_link, "_blank");
  };

  return (
    <div className="flex flex-col items-center rounded-3xl min-w-80 p-4 h-100 transition-all duration-300 ease-in-out bg-[#18181a] hover:bg-[#373F51]  ">
      <div>
        <Image
          src={imageUrl}
          alt="Project Image"
          width={400}
          onClick={handleDemoClick}
          height={400}
          className="h-50 object-cover cursor-pointer rounded-4xl overflow-hidden"
          loading="eager"
        />
      </div>
      <div className="flex flex-col items-center justify-between py-3 h-full">
        <div className="flex w-full flex-col cursor-default text-center">
          <div className="text-2xl font-bold">{title}</div>
          <div className="px-0.5 font-sm">{description}</div>
        </div>
        <div className="flex items-center gap-2">
          <FaGithub className="h-5 w-5 cursor-pointer" onClick={handleGithubClick} />
          <ExternalLink onClick={handleDemoClick} className="h-5 w-5 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
