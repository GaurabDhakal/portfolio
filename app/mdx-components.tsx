import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

export const mdxComponents = {
  h1: ({ children }) => (
    <h1 className="text-lg sm:text-xl lg:text-2xl font-extrabold font-pp-neue-montreal text-gray-50 mb-6 wrap-break-word">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold font-pp-neue-montreal text-gray-50 my-4  wrap-break-word">
      {children}
    </h2>
  ),
  ul: ({ children }) => (
    <ul className=" text-gray-50 flex flex-col *:p-1 my-2 font-sans wrap-break-word">{children}</ul>
  ),

  pre: ({ children }) => (
    <pre className="bg-zinc-900 text-zinc-100 p-4 rounded-xl overflow-x-auto max-w-[calc(100vw-2rem)] border border-zinc-800 shadow-lg text-sm sm:text-base my-3">
      {children}
    </pre>
  ),
  code: ({ children }) => <code className="font-zed-mono text-lg">{children}</code>,
  img: (props) => (
    <Image
      sizes="100vw"
      className="rounded-lg my-4 w-full h-auto"
      style={{ width: "100%", height: "auto" }}
      {...(props as ImageProps)}
    />
  ),
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return mdxComponents;
}
