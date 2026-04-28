import Link from "next/link";

type TBlogList = {
  slug: string;
  title: string;
  description: string;
  date: string;
};
export const BlogList = ({ slug, title, description, date }: TBlogList) => {
  return (
    <Link href={`/blog/${slug}`} className="gap-3">
      <p className="text-2xl font-semibold">{title}-(TEST Only)</p>
      <p className="text-ellipsis text-white/50">{description}</p>
    </Link>
  );
};
