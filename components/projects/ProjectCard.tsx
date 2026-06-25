import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import { Tag } from "../Tag";
import { Fragment } from "react";

export const ProjectCard = ({
  imageUrl,
  title,
  description,
  github_link,
  demo_link,
  tech_stack,
  animationOptions,
}: {
  imageUrl: string;
  title: string;
  description: string;
  github_link: string;
  demo_link: string;
  tech_stack: string[];
  animationOptions?: { axis_direction: number };
}) => {
  const handleGithubClick = () => {
    window.open(github_link, "_blank");
  };
  const handleDemoClick = () => {
    window.open(demo_link, "_blank");
  };

  return (
    <div className="flex flex-col items-center rounded-4xl min-w-80 p-4 transition-all duration-300 ease-in-out bg-[#1d2121] hover:bg-[#373F51] gap-3">
      <div>
        <div className="text-2xl font-bold">{title}</div>
      </div>
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
      <div className="flex flex-col items-center justify-between py-2 h-full gap-3">
        <div className="flex w-full flex-col cursor-default text-center">
          <div className="px-0.5 font-sm">{description}</div>
        </div>
        <div className="flex gap-1">
          {tech_stack.map((tech) => (
            <Fragment key={tech}>
              <Tag tag_title={tech} className="px-4"/>
            </Fragment>
          ))}
        </div>
        <div className="flex items-center gap-5">
          <FaGithub className="h-6 w-6 cursor-pointer" onClick={handleGithubClick} />
          <ExternalLink onClick={handleDemoClick} className="h-6 w-6 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
