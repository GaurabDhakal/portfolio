import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read blogs I wrote, I write about my programming experiences & new Web/AI tech.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="text-white">{children}</div>;
}
