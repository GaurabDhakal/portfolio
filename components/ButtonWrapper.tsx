import { Button } from "./ui/button";
import Link from "next/link";

export const ButtonWrapper = ({ href, text }: { href: string; text: string }) => {
  return (
    <Link href={href} aria-label={text}>
      <Button
        className="cursor-pointer p-3 rounded-xl border border-gray-500/30 bg-[#27323859] hover:bg-[#1c222559]  font-heading text-[#f1f8f0] text-md"
        variant={"secondary"}
        asChild
      >
        <span>
          <span>{text}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-0 h-5 transition-all duration-300"
          >
            <path
              fillRule="evenodd"
              d="M4.5 12a.75.75 0 0 1 .75-.75h12.69l-4.72-4.72a.75.75 0 1 1 1.06-1.06l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H5.25A.75.75 0 0 1 4.5 12Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </Button>
    </Link>
  );
};
