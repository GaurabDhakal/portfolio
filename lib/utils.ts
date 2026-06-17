import { TECH_STACK_T_REVAMPED, TSkill, TECH_STACK_N } from "@/constants/bio";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function convertSkillsToFlattenedArray(
    skills: TECH_STACK_T_REVAMPED = TECH_STACK_N,
    limit = 0,
) {
    let result: TSkill[] = [];
    let counter = 0;
    Object.values(skills).forEach((value) => {
        if (limit > counter) {
            value.forEach((value) => {
                result.push(value);
                counter++;
            });
        }
    });
    console.log(result);
    return result;
}
