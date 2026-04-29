import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description: "Explore projects I made.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="flex flex-col text-white items-center min-h-screen">{children}</div>;
}
