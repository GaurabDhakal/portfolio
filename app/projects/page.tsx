"use client";
import { useDynamicTitle } from "@/hooks/useDynamicTitle";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/constants/projects";
const Projects = () => {
  useDynamicTitle();
  return (
    <div className="text-white sm:max-w-190">
      <div>
        <h1 className="p-2 sm:py-1 text-4xl font-extrabold font-pp-neue-montreal text-center">Projects</h1>
        <div className="px-2 py-1">
          <p>
            I {`haven't`} worked on any large-scale projects yet, and currently focusing on simpler
            projects.
          </p>
          <p className="text-white/60">Simple Projects that I built back in 2023: </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center">
        {projects.map(
          ({ demo_link, github_link, tech_stack, title, description, imageUrl, id }) => {
            return (
              <ProjectCard
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
    </div>
  );
};

export default Projects;
