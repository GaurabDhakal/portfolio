import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

export const mdxComponents = {
  h1: ({ children }) => (
    <h1 className="text-2xl  sm:text-3xl lg:text-4xl font-bold text-gray-50 mb-6 wrap-break-word">
      {children}
    </h1>
  ),

  pre: ({ children }) => (
    <pre className="bg-zinc-900 text-zinc-100 p-4 rounded-xl overflow-x-auto max-w-[calc(100vw-2rem)] border border-zinc-800 shadow-lg text-sm sm:text-base my-3">
      {children}
    </pre>
  ),

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
