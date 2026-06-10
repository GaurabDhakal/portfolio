import { TSkill } from "@/constants/bio";
import Image from "next/image";

export const Skills = ({ skills }: { skills: TSkill[] }) => {
  return (
    <div className="flex gap-10 ">
      {skills.map((skill) => (
        <div
          key={skill.skill_name}
          className="flex flex-col items-center justify-center gap-1
        hover:scale-[1.1] hover:rotate-4 ease-in-out transition-all duration-300
        "
        >
          {skill.icon ? (
            <Image
              src={skill.icon}
              alt={skill.icon}
              height={50}
              width={50}
              className="stroke-white aspect-square"
              loading="eager"
            ></Image>
          ) : (
            ""
          )}
          <p className="text-sm font-bold">{skill.skill_name}</p>{" "}
        </div>
      ))}
    </div>
  );
};
