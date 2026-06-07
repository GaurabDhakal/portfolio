import { TECH_STACK_T_REVAMPED } from "@/constants/bio";
import { Skills } from "./Skills";

export const TechStackCardRevamped = ({ data }: { data: Readonly<TECH_STACK_T_REVAMPED> }) => {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 ">
        <p className="text-2xl font-bold text-white/85">Programming Languages</p>
        <Skills skills={data.programming_languages} />
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-2xl font-bold text-white/85">Web Frontend</p>
        <Skills skills={data.frontend} />
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-2xl font-bold text-white/85">Backend</p>
        <Skills skills={data.backend} />
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-2xl font-bold text-white/85">Authentication</p>
        <Skills skills={data.authentication} />
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-2xl font-bold text-white/85">Styling</p>
        <Skills skills={data.styling} />
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-2xl font-bold text-white/85">State Management</p>
        <Skills skills={data.state_management} />
      </div>
    </section>
  );
};
