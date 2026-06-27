import Link from "next/link";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP, SplitText);
type TBlogList = {
  slug: string;
  title: string;
  description: string;
  date: string;
  orientation?: "compact" | "free";
};
export const BlogList = (props: TBlogList) => {
  const { slug, title, description, date, orientation } = props;
  const titleRef = useRef(null);
  useGSAP(() => {
    const titleChars = SplitText.create(titleRef.current, {
      type: "words, chars",
      mask: "words",
    });
    gsap.from(titleChars.chars, {
      opacity: 0,
      filter: "blur(10px)",
      y: 35,
      scale: 0.95,
      stagger: {
        each: 0.0058,
      },
      duration: 0.9,
      ease: "expo.out",
    });
  }, [titleRef.current]);
  return (
    <Link
      href={`/blog/${slug}`}
      aria-label={title}
      className={`group flex flex-col gap-1.5 md:border-l-2 md:border-white/10 md:pl-4 
                 transition-all duration-200 hover:border-[#97ffc1] ${orientation == "compact" ? "md:max-w-100" : ""}`}
    >
      <p
        className="font-semibold text-white/90 transition-colors home-page-blog-title duration-200 
                   group-hover:text-[#97ffc1]"
        ref={titleRef}
      >
        {title}
      </p>
      <p className="line-clamp-2 text-sm text-white/50">{description}</p>
      <p className="text-xs text-white/30">Last Updated: {date}</p>
    </Link>
  );
};
