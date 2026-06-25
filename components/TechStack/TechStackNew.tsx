import { TECH_STACK_T_REVAMPED } from "@/constants/bio";
import { Skills } from "./Skills";

const CATEGORY_LABELS: Record<keyof TECH_STACK_T_REVAMPED, string> = {
  programming_languages: "Programming Languages",
  frontend: "Frontend",
  backend: "Backend",
  full_stack: "Full Stack",
  authentication: "Authentication",
  styling: "Styling",
  state_management: "State Management",
  runtimes: "Runtimes",
};

export const TechStackCardRevamped = ({ data }: { data: Readonly<TECH_STACK_T_REVAMPED> }) => {
  return (
    <section className="flex flex-col gap-6">
      {(Object.keys(CATEGORY_LABELS) as Array<keyof TECH_STACK_T_REVAMPED>).map((category) => (
        <div key={category} className="flex flex-col gap-3">
          <p className="text-xl font-bold text-white/90">{CATEGORY_LABELS[category]}</p>
          <Skills skills={data[category]} />
        </div>
      ))}
    </section>
  );
};
