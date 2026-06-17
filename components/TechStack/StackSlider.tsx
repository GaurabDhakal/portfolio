import { TECH_STACK_T_REVAMPED } from "@/constants/bio";
import { convertSkillsToFlattenedArray } from "@/lib/utils";
import Image from "next/image";

export const StackSlider = ({ skills }: { skills: TECH_STACK_T_REVAMPED }) => {
  const flattend = convertSkillsToFlattenedArray(skills, 5);
  console.log(flattend);
  return (
    <div className="flex gap-2 cursor-grab ">
      {flattend.map((skill) => {
        console.log(skill.skill_name);
        return skill.icon ? (
          <Image
            key={skill.skill_name}
            src={skill.icon}
            alt={skill.skill_name}
            height={50}
            className="aspect-square"
            width={50}
          />
        ) : (
          ""
        );
      })}
    </div>
  );
};
