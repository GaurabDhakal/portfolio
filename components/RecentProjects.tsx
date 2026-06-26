import { projects } from "@/constants/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export const RecentProjects = ({ limit = -1 }: { limit?: number }) => {
  const router = useRouter();
  const gotoProjects = () => {
    router.push("/projects");
  };
  const displayedProjects = limit === -1 ? projects : projects.slice(0, limit);

  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold">Explore Recent Projects</h1>
      </div>
      <div>
        <div className="grid sm:grid-cols-2 gap-2 md:gap-5">
          {displayedProjects.map(
            ({ demo_link, github_link, tech_stack, title, description, imageUrl, id }, index) => {
              const axisDirection = index % 2 === 0 ? -1 : 1;

              return (
                <ProjectCard
                  animationOptions={{
                    axis_direction: axisDirection,
                  }}
                  key={id}
                  tech_stack={tech_stack}
                  demo_link={demo_link}
                  github_link={github_link}
                  title={title}
                  description={description}
                  imageUrl={imageUrl}
                ></ProjectCard>
              );
            },
          )}
        </div>
        <div className="w-full flex justify-end">
          <Button
            className=" cursor-pointer w-full md:w-fit flex items-center text-sm justify-center rounded-2xl"
            variant={"outline"}
            onClick={gotoProjects}
            type="button"
          >
            Go to Projects Page
            <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};
