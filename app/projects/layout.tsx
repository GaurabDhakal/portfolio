import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore projects I made.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="flex flex-col text-white items-center min-h-screen px-2 py-1 sm:py-0">{children}</div>;
}
