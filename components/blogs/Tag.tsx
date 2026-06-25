import { cn } from "@/lib/utils";

export const BlogTag = ({ tagName, className }: { tagName: string; className: string }) => {
  return (
    <div
      className={cn(
        "px-4 py-0.5 border border-gray-500/70 shadow-xs text-sm font-sans font-medium antialiased rounded-full capitalize",
        className,
      )}
    >
      {tagName}
    </div>
  );
};
