import { cn } from "@/lib/utils";

export const BlogTag = ({ tagName, className }: { tagName: string; className: string }) => {
  return (
    <div className={cn("p-1 border border-gray-400/40 rounded capitalize", className)}>
      {tagName}
    </div>
  );
};
