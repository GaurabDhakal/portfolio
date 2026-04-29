import Link from "next/link";
type TBlogList = {
  slug: string;
  title: string;
  description: string;
  date: string;
};
export const BlogList = (data: TBlogList) => {
  const { slug, title, description, date } = data;

  return (
    <Link
      href={`/blog/${slug}`}
      className="group flex flex-col gap-1.5 border-l-2 border-white/10 pl-4 
                 transition-all duration-200 hover:border-[#97ffc1]"
    >
      <p
        className="font-semibold text-white/90 transition-colors duration-200 
                   group-hover:text-[#97ffc1]"
      >
        {title}
      </p>
      <p className="line-clamp-2 text-sm text-white/50">{description}</p>
      <p className="text-xs text-white/30">Last Updated: {date}</p>
    </Link>
  );
};
