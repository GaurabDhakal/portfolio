import { TSkill } from "@/constants/bio";
import Image from "next/image";
export const Skills = ({ skills }: { skills: TSkill[] }) => {
  return (
    <div className="flex gap-10">
      {skills.map((skill) => (
        <div key={skill.skill_name} className="flex flex-col items-center justify-center gap-1">
          {skill.icon ? (
            <Image src={skill.icon} alt={skill.icon} height={56} width={56} className="aspect-square"></Image>
          ) : (
            ""
          )}
          <p className="text-sm font-bold">{skill.skill_name}</p>
        </div>
      ))}
    </div>
  );
};
