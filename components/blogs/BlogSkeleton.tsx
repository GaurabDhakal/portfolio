import { Skeleton } from "../ui/skeleton";
export function BlogSkeleton() {
  return (
    <div className="flex flex-col gap-1.5 md:border-l-2 md:border-white/10 md:pl-4">
      <Skeleton className="h-4 w-48 rounded" />
      <Skeleton className="h-3 w-64 rounded" />
      <Skeleton className="h-3 w-24 rounded" />
    </div>
  );
}
