"use client";
import React from "react";
import { useDynamicTitle } from "@/hooks/useDynamicTitle";
import { ProjectCard } from "@/components/Work/ProjectCard";
import { projects } from "@/constants/projects";
const Work = () => {
    useDynamicTitle();
    return (
        <div className="text-white sm:my-10 space-y-3 sm:max-w-190">
            <div>
                <h1 className="p-2 text-4xl font-bold text-center">Projects</h1>
                <div className="px-2 py-1">
                    <p>
                        I {`haven't`} worked on any large-scale projects yet,
                        and {`I'm`} currently focusing more on simpler projects
                        rather than complex ones that involve multiple packages
                    </p>
                    <p className="text-white/60">
                        Some of my projects are listed below
                    </p>
                </div>
            </div>
            <div className="flex gap-6 flex-wrap items-center justify-center">
                {projects.map(
                    (
                        {
                            demo_link,
                            github_link,
                            title,
                            description,
                            imageUrl,
                            id,
                        },
                        index
                    ) => {
                        const axisDirection = index % 2 === 0 ? -1 : 1;
                        return (
                            <ProjectCard
                                animationOptions={{
                                    axis_direction: axisDirection,
                                }}
                                key={id}
                                demo_link={demo_link}
                                github_link={github_link}
                                title={title}
                                description={description}
                                imageUrl={imageUrl}
                            ></ProjectCard>
                        );
                    }
                )}
            </div>
        </div>
    );
};

export default Work;
