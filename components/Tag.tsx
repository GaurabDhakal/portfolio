import { cn } from "@/lib/utils";

export const Tag = ({ tag_title, className }: { tag_title: string; className?: string }) => {
  return (
    <div className="text-sm font-semibold flex">
      <p
        className={cn(
          "border border-gray-400/40 bg-[#17222458] text-white/80 rounded-2xl px-3 antialiased mr-1 p-1",
          className,
        )}
      >
        {tag_title}
      </p>
    </div>
  );
};
